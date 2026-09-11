import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../components/alerts/Banner";
import axios from "axios";
import { FORM_URL, WEB3FORMS_KEY } from "../../constants/api";
import Spinner from "../../components/common/Spinner";
import FormField from "../../components/common/FormField";
import { useLocale } from "../../i18n/useLocale";

function createSchema(validation) {
  return yup.object().shape({
    name: yup
      .string()
      .required(validation.nameRequired)
      .min(3, validation.nameMin)
      .max(20, validation.nameMax),

    email: yup
      .string()
      .required(validation.emailRequired)
      .email(validation.emailInvalid),

    subject: yup
      .string()
      .required(validation.subjectRequired)
      .min(4, validation.subjectMin)
      .max(20, validation.subjectMax),

    message: yup
      .string()
      .required(validation.messageRequired)
      .min(10, validation.messageMin)
      .max(400, validation.messageMax),

    // Honeypot, declared so yup passes it through to Web3Forms
    botcheck: yup.boolean(),
  });
}

export default function ContactForm() {
  const { locale, copy } = useLocale();
  const formCopy = copy.form;
  const schema = useMemo(
    () => createSchema(formCopy.validation),
    [formCopy.validation],
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      botcheck: false,
    },
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    const { botcheck, ...fields } = data;

    try {
      const response = await axios.post(
        FORM_URL,
        {
          ...fields,
          access_key: WEB3FORMS_KEY,
          from_name: fields.name,
          replyto: fields.email,
          // Sent only when tripped, mirroring an unchecked native checkbox
          ...(botcheck && { botcheck }),
        },
        { headers: { Accept: "application/json" } },
      );

      // Web3Forms reports rejections with a 200 and success: false
      if (!response.data?.success) {
        throw new Error(response.data?.message ?? "Submission rejected");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      // Rejections arrive as a 400 body, which axios turns into a status-only message
      setServerError(error.response?.data?.message ?? error.message);
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    clearErrors();
  }, [clearErrors, locale]);

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  function handleResize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  const fields = [
    { name: "name", autoComplete: "name" },
    { name: "email", type: "email", autoComplete: "email" },
    { name: "subject", autoComplete: "off" },
    {
      name: "message",
      as: "textarea",
      autoComplete: "off",
      onInput: handleResize,
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <input
        type="checkbox"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("botcheck")}
      />
      <fieldset disabled={submitting} className="contact__fieldset">
        {fields.map((field) => (
          <FormField
            key={field.name}
            name={field.name}
            label={formCopy.fields[field.name]}
            register={register}
            error={errors[field.name]}
            onClear={() => resetField(field.name)}
            clearLabel={formCopy.clearField}
            type={field.type}
            as={field.as}
            autoComplete={field.autoComplete}
            onInput={field.onInput}
          />
        ))}
      </fieldset>
      {submitted && (
        <Banner heading={formCopy.successHeading} status="success">
          {formCopy.successBody}
        </Banner>
      )}
      {serverError && (
        <Banner heading={formCopy.errorHeading} status="error">
          {formCopy.errorBody}
        </Banner>
      )}
      <button type="submit" className="button contact__button">
        {submitting ? (
          <>
            <Spinner />
            {formCopy.submitting}
          </>
        ) : (
          formCopy.send
        )}
      </button>
    </form>
  );
}

import { useState, useEffect, useMemo } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../components/alerts/Banner";
import axios from "axios";
import { FORM_URL, WEB3FORMS_KEY } from "../../constants/api";
import Spinner from "../../components/common/Spinner";
import { MdClose } from "react-icons/md";
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
      // Hide success message after 4 seconds
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleClearName = () => resetField("name");
  const handleClearEmail = () => resetField("email");
  const handleClearSubject = () => resetField("subject");
  const handleClearMessage = () => resetField("message");

  function handleResize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

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
        <div>
          <div className="contact__input-container">
            <input
              className="contact__input"
              type="text"
              placeholder={formCopy.fields.name}
              id="name"
              autoComplete="off"
              aria-invalid={!!errors["name"]}
              aria-describedby={errors["name"] ? "name-error" : undefined}
              {...register("name")}
            />
            <label
              htmlFor="name"
              className={classnames("contact__label", {
                "contact__label--error": errors["name"],
              })}
            >
              {formCopy.fields.name}
            </label>
            <button
              type="button"
              onClick={handleClearName}
              className="contact__clear"
              aria-label={`${formCopy.clearField}: ${formCopy.fields.name}`}
            >
              <MdClose aria-hidden="true" />
            </button>
          </div>
          {errors["name"] && (
            <span className="input-error" id="name-error">
              {errors["name"].message}
            </span>
          )}
        </div>
        <div>
          <div className="contact__input-container">
            <input
              className="contact__input"
              type="text"
              placeholder={formCopy.fields.email}
              id="email"
              autoComplete="off"
              aria-invalid={!!errors["email"]}
              aria-describedby={errors["email"] ? "email-error" : undefined}
              {...register("email")}
            />
            <label
              htmlFor="email"
              className={classnames("contact__label", {
                "contact__label--error": errors["email"],
              })}
            >
              {formCopy.fields.email}
            </label>
            <button
              type="button"
              onClick={handleClearEmail}
              className="contact__clear"
              aria-label={`${formCopy.clearField}: ${formCopy.fields.email}`}
            >
              <MdClose aria-hidden="true" />
            </button>
          </div>
          {errors["email"] && (
            <span className="input-error" id="email-error">
              {errors["email"].message}
            </span>
          )}
        </div>
        <div>
          <div className="contact__input-container">
            <input
              className="contact__input"
              type="text"
              placeholder={formCopy.fields.subject}
              id="subject"
              autoComplete="off"
              aria-invalid={!!errors["subject"]}
              aria-describedby={errors["subject"] ? "subject-error" : undefined}
              {...register("subject")}
            />
            <label
              htmlFor="subject"
              className={classnames("contact__label", {
                "contact__label--error": errors["subject"],
              })}
            >
              {formCopy.fields.subject}
            </label>
            <button
              type="button"
              onClick={handleClearSubject}
              className="contact__clear"
              aria-label={`${formCopy.clearField}: ${formCopy.fields.subject}`}
            >
              <MdClose aria-hidden="true" />
            </button>
          </div>
          {errors["subject"] && (
            <span className="input-error" id="subject-error">
              {errors["subject"].message}
            </span>
          )}
        </div>
        <div>
          <div className="contact__input-container">
            <div className="hider"></div>
            <textarea
              className="contact__textarea"
              placeholder={formCopy.fields.message}
              id="message"
              autoComplete="off"
              onInput={handleResize}
              aria-invalid={!!errors["message"]}
              aria-describedby={errors["message"] ? "textarea-error" : undefined}
              {...register("message")}
            />
            <label
              htmlFor="message"
              className={classnames("contact__label", {
                "contact__label--error": errors["message"],
              })}
            >
              {formCopy.fields.message}
            </label>
            <button
              type="button"
              onClick={handleClearMessage}
              className="contact__clear"
              id="clear-msg"
              aria-label={`${formCopy.clearField}: ${formCopy.fields.message}`}
            >
              <MdClose aria-hidden="true" />
            </button>
          </div>
          {errors["message"] && (
            <span className="input-error" id="textarea-error">
              {errors["message"].message}
            </span>
          )}
        </div>
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

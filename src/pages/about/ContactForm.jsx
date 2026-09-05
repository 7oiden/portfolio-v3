import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../components/alerts/Banner";
import axios from "axios";
import { FORM_URL } from "../../constants/api";
import Spinner from "../../components/common/Spinner";
import { MdClose } from "react-icons/md";
import { useLocale } from "../../i18n/useLocale";

function createSchema(validation) {
  return yup.object().shape({
    "your-name": yup
      .string()
      .required(validation.nameRequired)
      .min(3, validation.nameMin)
      .max(20, validation.nameMax),

    "your-email": yup
      .string()
      .required(validation.emailRequired)
      .email(validation.emailInvalid),

    "your-subject": yup
      .string()
      .required(validation.subjectRequired)
      .min(4, validation.subjectMin)
      .max(20, validation.subjectMax),

    "your-message": yup
      .string()
      .required(validation.messageRequired)
      .min(10, validation.messageMin)
      .max(400, validation.messageMax),
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

  const url = FORM_URL;

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    clearErrors,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      "your-name": "",
      "your-email": "",
      "your-subject": "",
      "your-message": "",
    },
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    // console.log(data);

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response", response.request);
      setSubmitting(true);
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState, reset]);

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

  const handleClearName = () => resetField("your-name");
  const handleClearEmail = () => resetField("your-email");
  const handleClearSubject = () => resetField("your-subject");
  const handleClearMessage = () => resetField("your-message");

  function handleClearKeyDown(event, clearField) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      clearField();
    }
  }

  function handleResize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <fieldset disabled={submitting} className="contact__fieldset">
        <div>
          <div className="contact__input-container">
            <input
              className="contact__input"
              type="text"
              placeholder={formCopy.fields.name}
              id="name"
              autoComplete="off"
              {...register("your-name")}
            />
            <label
              htmlFor="name"
              className="contact__label"
              style={{ color: errors["your-name"] ? "#f47777" : null }}
            >
              {formCopy.fields.name}
            </label>
            <MdClose
              onClick={handleClearName}
              onKeyDown={(event) => handleClearKeyDown(event, handleClearName)}
              className="contact__clear"
              role="button"
              tabIndex={0}
              aria-label={`${formCopy.clearField}: ${formCopy.fields.name}`}
            />
          </div>
          {errors["your-name"] && (
            <span className="input-error">{errors["your-name"].message}</span>
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
              {...register("your-email")}
            />
            <label
              htmlFor="email"
              className="contact__label"
              style={{ color: errors["your-email"] ? "#f47777" : null }}
            >
              {formCopy.fields.email}
            </label>
            <MdClose
              onClick={handleClearEmail}
              onKeyDown={(event) => handleClearKeyDown(event, handleClearEmail)}
              className="contact__clear"
              role="button"
              tabIndex={0}
              aria-label={`${formCopy.clearField}: ${formCopy.fields.email}`}
            />
          </div>
          {errors["your-email"] && (
            <span className="input-error">{errors["your-email"].message}</span>
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
              {...register("your-subject")}
            />
            <label
              htmlFor="subject"
              className="contact__label"
              style={{ color: errors["your-subject"] ? "#f47777" : null }}
            >
              {formCopy.fields.subject}
            </label>
            <MdClose
              onClick={handleClearSubject}
              onKeyDown={(event) =>
                handleClearKeyDown(event, handleClearSubject)
              }
              className="contact__clear"
              role="button"
              tabIndex={0}
              aria-label={`${formCopy.clearField}: ${formCopy.fields.subject}`}
            />
          </div>
          {errors["your-subject"] && (
            <span className="input-error">
              {errors["your-subject"].message}
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
              {...register("your-message")}
            />
            <label
              htmlFor="message"
              className="contact__label"
              style={{ color: errors["your-message"] ? "#f47777" : null }}
            >
              {formCopy.fields.message}
            </label>
            <MdClose
              onClick={handleClearMessage}
              onKeyDown={(event) =>
                handleClearKeyDown(event, handleClearMessage)
              }
              className="contact__clear"
              id="clear-msg"
              role="button"
              tabIndex={0}
              aria-label={`${formCopy.clearField}: ${formCopy.fields.message}`}
            />
          </div>
          {errors["your-message"] && (
            <span className="input-error" id="textarea-error">
              {errors["your-message"].message}
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

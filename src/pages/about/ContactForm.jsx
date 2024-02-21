import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../components/alerts/Banner";
import axios from "axios";
import { FORM_URL } from "../../constants/api";
import Spinner from "../../components/common/Spinner";
import { MdClose } from "react-icons/md";

const schema = yup.object().shape({
  "your-name": yup
    .string()
    .required("* Please enter your name")
    .min(3, "* Your name must be at least 3 characters")
    .max(20, "* Name can't be more than 20 characters"),

  "your-email": yup
    .string()
    .required("* Please enter your email address")
    .email("* Please enter a valid email address"),

  "your-subject": yup
    .string()
    .required("* Please enter a subject")
    .min(4, "* Subject must be at least 4 characters")
    .max(20, "* Subject can't be more than 20 characters"),

  "your-message": yup
    .string()
    .required("* Please enter your message")
    .min(10, "* Your message must be at least 10 characters")
    .max(400, "* Message can't be more than 400 characters"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const url = FORM_URL;

  const {
    register,
    handleSubmit,
    reset,
    resetField,
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
              placeholder="Name"
              id="name"
              autoComplete="off"
              {...register("your-name")}
            />
            <label
              htmlFor="name"
              className="contact__label"
              style={{ color: errors["your-name"] ? "#f47777" : null }}
            >
              Name
            </label>
            <MdClose onClick={handleClearName} className="contact__clear" />
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
              placeholder="Email"
              id="email"
              autoComplete="off"
              {...register("your-email")}
            />
            <label
              htmlFor="email"
              className="contact__label"
              style={{ color: errors["your-email"] ? "#f47777" : null }}
            >
              Email
            </label>
            <MdClose onClick={handleClearEmail} className="contact__clear" />
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
              placeholder="Subject"
              id="subject"
              autoComplete="off"
              {...register("your-subject")}
            />
            <label
              htmlFor="subject"
              className="contact__label"
              style={{ color: errors["your-subject"] ? "#f47777" : null }}
            >
              Subject
            </label>
            <MdClose onClick={handleClearSubject} className="contact__clear" />
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
              placeholder="Message"
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
              Message
            </label>
            <MdClose
              onClick={handleClearMessage}
              className="contact__clear"
              id="clear-msg"
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
        <Banner heading="Thank you for your message!" status="success">
          I will get back to you shortly.
        </Banner>
      )}
      {serverError && (
        <Banner heading="Something went wrong!" status="error">
          {serverError}
        </Banner>
      )}
      <button className="button contact__button">
        {submitting ? (
          <>
            <Spinner />
            Submitting...
          </>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
}

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../components/alerts/Banner";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import Spinner from "../../components/common/Spinner";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Your name must be at least 3 characters")
    .max(20, "Name can't be more than 20 characters"),

  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),

  subject: yup
    .string()
    .required("Please enter a subject")
    .min(4, "Subject must be at least 4 characters")
    .max(20, "Subject can't be more than 20 characters"),

  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must be at least 10 characters")
    .max(400, "Message can't be more than 400 characters"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [showInfoMessage, setShowInfoMessage] = useState(false);

  const url = BASE_URL + "contacts";

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log(data);

    const jsonData = {
      data,
    };

    try {
      const response = await axios.post(url, jsonData);
      console.log("response", response.data);
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
    let infoMessageTimer;
    if (submitting) {
      // Show info message after 3 seconds
      infoMessageTimer = setTimeout(() => {
        setShowInfoMessage(true);
      }, 3000);
    }

    return () => {
      clearTimeout(infoMessageTimer);
    };
  }, [submitting]);

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <fieldset disabled={submitting} className="contact__fieldset">
        <div className="contact__input-container">
          <label htmlFor="name">Name</label>
          <input
            className="contact__input"
            type="text"
            placeholder="Name"
            id="name"
            autoComplete="name"
            {...register("first_name")}
          />
          {errors.first_name && (
            <span className="input-error">{errors.first_name.message}</span>
          )}
        </div>
        <div className="contact__input-container">
          <label htmlFor="email">Email</label>
          <input
            className="contact__input"
            type="text"
            placeholder="Email"
            id="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="input-error">{errors.email.message}</span>
          )}
        </div>
        <div className="contact__input-container">
          <label htmlFor="subject">Subject</label>
          <input
            className="contact__input"
            type="text"
            placeholder="Subject"
            id="subject"
            autoComplete="off"
            {...register("subject")}
          />
          {errors.subject && (
            <span className="input-error">{errors.subject.message}</span>
          )}
        </div>
        <div className="contact__input-container">
          <label htmlFor="message">Message</label>
          <textarea
            className="contact__textarea"
            placeholder="Message"
            id="message"
            autoComplete="off"
            {...register("message")}
          />
          {errors.message && (
            <span className="input-error">{errors.message.message}</span>
          )}
        </div>
      </fieldset>
      {submitting && showInfoMessage && (
        <Banner heading="Please hold!" status="info">
          ...while the Heroku API is waking up.
        </Banner>
      )}
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
      <button className="contact__btn">
        {submitting ? (
          <>
            <Spinner />
            Submitting
          </>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
}

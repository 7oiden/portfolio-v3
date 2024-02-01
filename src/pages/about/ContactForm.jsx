import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../components/alerts/Banner";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

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

  const url = BASE_URL + "contacts";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    console.log(data);
    reset();

    const jsonData = {
      data: {
        first_name: data.first_name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
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
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [submitted]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <div className="contact__input-container">
        <label htmlFor="name">Name</label>
        <input
          className="contact__input"
          type="text"
          placeholder="Name"
          id="name"
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
          {...register("email")}
        />
        {errors.email && (
          <span className="input-error">{errors.email.message}</span>
        )}
      </div>
      <div className="contact__input-container">
        <label htmlFor="name">Subject</label>
        <input
          className="contact__input"
          type="text"
          placeholder="Subject"
          id="subject"
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
          {...register("message")}
        />
        {errors.message && (
          <span className="input-error">{errors.message.message}</span>
        )}
      </div>
      {submitting && (
        <Banner heading="Please hold..." status="info">
          While the Heroku API is waking up...
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
        {submitting ? "Submitting..." : "Send"}
      </button>
    </form>
  );
}

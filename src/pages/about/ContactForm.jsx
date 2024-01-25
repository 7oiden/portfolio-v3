import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Banner from "../../components/alerts/Banner";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "Your first name must be at least 3 characters")
    .max(20, "First name can't be more than 20 characters"),

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
  const [show, setShow] = useState(false);

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
    setSubmitted(true);
    setShow(true);
    console.log(data);
    reset();

    const jsonData = {
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <div className="contact__input">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Name" id="name" {...register("name")} />
        {errors.name && (
          <span className="input-error">{errors.name.message}</span>
        )}
      </div>
      <div className="contact__input">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="input-error">{errors.email.message}</span>
        )}
      </div>
      <div className="contact__input">
        <label htmlFor="name">Subject</label>
        <input
          type="text"
          placeholder="Last name"
          id="name"
          {...register("subject")}
        />
        {errors.subject && (
          <span className="input-error">{errors.subject.message}</span>
        )}
      </div>
      <div className="contact__input">
        <label htmlFor="message">Message</label>
        <textarea placeholder="Message" id="message" {...register("message")} />
        {errors.message && (
          <span className="input-error">{errors.message.message}</span>
        )}
      </div>
      {submitted && (
        <Banner
          heading="Thank you for your message!"
          status="success"
          show={show}
        >
          I will get back to you shortly.
        </Banner>
      )}
      {serverError && (
        <Banner
          heading="Something went wrong!"
          status="error"
          message={serverError}
        />
      )}
      <button className="contact__button">Send</button>
    </form>
  );
}

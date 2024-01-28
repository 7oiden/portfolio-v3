import Heading from "../../components/Heading";
import LinkBtn from "../../components/LinkBtn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <Heading size="2" cssClass="section-heading">
        Contact
      </Heading>
      <div className="form__header">
        <p>
          Send me a message or get in touch directly on email or on my LinkedIn
          profile:
        </p>
        <LinkBtn url="mailto: tommy.johnsen@live.com">
          tommy.johnsen@live.com
        </LinkBtn>
        <LinkBtn url="tel:92014618">LinkedIn</LinkBtn>
      </div>
      <ContactForm />
    </section>
  );
}

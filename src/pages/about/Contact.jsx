import Heading from "../../components/common/Heading";
import LinkBtn from "../../components/common/LinkBtn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="contact__container">
        <Heading size="2" cssClass="section-heading">
          Contact
        </Heading>
        <div className="paragraph-container mt mb">
          <p>Send me a message or get in touch directly on email:</p>
          <LinkBtn url="mailto: tommy.johnsen@live.com" size="md">
            tommy.johnsen@live.com
          </LinkBtn>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

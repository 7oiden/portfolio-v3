import Heading from "../../components/Heading";
import LinkBtn from "../../components/LinkBtn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <Heading size="2" cssClass="section-heading">
        Contact
      </Heading>
      <div>
        <p>Get in touch or shoot me an email directly on:</p>
        <LinkBtn url="mailto: tommy.johnsen@live.com">
          tommy.johnsen@live.com
        </LinkBtn>
      </div>
      <ContactForm />
    </section>
  );
}

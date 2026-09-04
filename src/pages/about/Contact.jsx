import Heading from "../../components/common/Heading";
import LinkBtn from "../../components/common/LinkBtn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="contact section-wrapper">
      <div className="contact__heading-group">
        <p className="contact__kicker">Contact</p>
        <Heading size="2" cssClass="contact__heading">
          Send a message.
        </Heading>
      </div>
      <div className="contact__lead">
        <p className="contact__intro">Use the form, or email me directly.</p>
        <LinkBtn url="mailto:tommy.johnsen@live.com" size="md">
          tommy.johnsen@live.com
        </LinkBtn>
      </div>
      <ContactForm />
    </section>
  );
}

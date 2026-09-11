import Heading from "../../components/common/Heading";
import LinkBtn from "../../components/common/LinkBtn";
import ContactForm from "./ContactForm";
import { useLocale } from "../../i18n/useLocale";
import { site } from "../../config/site";

export default function Contact() {
  const { copy } = useLocale();

  return (
    <section id="contact" className="contact section-wrapper">
      <div className="contact__heading-group">
        <p className="contact__kicker">{copy.about.contact.kicker}</p>
        <Heading size="2" cssClass="contact__heading">
          {copy.about.contact.heading}
        </Heading>
      </div>
      <div className="contact__lead">
        <p className="contact__intro">{copy.about.contact.intro}</p>
        <LinkBtn url={`mailto:${site.email}`} size="md">
          {site.email}
        </LinkBtn>
      </div>
      <ContactForm />
    </section>
  );
}

import Heading from "../../components/Heading";
import LinkBtn from "../../components/LinkBtn";


export default function Contact() {
  return (
    <section id="contact" className="section-wrapper">
      <Heading size="2" cssClass="section-heading">
        Contact
      </Heading>
      <p>
        Get in touch or shoot me an email directly on:
        <LinkBtn url="mailto: tommy.johnsen@live.com">
          tommy.johnsen@live.com
        </LinkBtn>
      </p>
      <form className="contact__form">
        <div className="contact__input">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" id="name" />
        </div>
        <div className="contact__input">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" />
        </div>
        <div className="contact__input">
          <label htmlFor="message">Message</label>
          <textarea placeholder="Message" id="message" />
        </div>
        <button className="contact__button">Send</button>
      </form>
    </section>
  );
}

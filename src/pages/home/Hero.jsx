import Heading from "../../components/Heading";
import { HashLink } from "react-router-hash-link";
import MediaLinks from "../../components/MediaLinks";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <Heading size="1" cssClass="hero__heading">
            Hi, I am Tommy Frontend Developer
          </Heading>
          <HashLink smooth to="/about#contact" className="button hero__button">
            Get in touch
          </HashLink>
          <MediaLinks />
        </div>
      </div>
    </section>
  );
}

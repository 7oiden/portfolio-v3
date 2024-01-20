import Heading from "../../components/Heading";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <Heading size="1" cssClass="hero__heading">
            Hi, I am Tommy Frontend Developer
          </Heading>
          <Link to="/about" className="button-link">
            Get in touch
          </Link>
          <div className="footer__icons">
            <Link to="https://github.com/7oiden">
              <FaGithub className="brand-icon" />
            </Link>
            <Link to="https://www.instagram.com/7oiden/">
              <FaInstagramSquare className="brand-icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/tommy-j-16b56678/">
              <FaLinkedin className="brand-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

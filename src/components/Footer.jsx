import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <Heading size="5" cssClass="footer__heading">
            Tommy Johnsen
          </Heading>
          <p>Frontend Developer</p>
        </div>
        <div className="footer__item">
          <Heading size="5" cssClass="footer__heading">
            Phone
          </Heading>
          <Link to="mailto:" className="footer__link">
            +47 920 14 618
          </Link>
        </div>
        <div className="footer__item">
          <Heading size="5" cssClass="footer__heading">
            Email
          </Heading>
          <Link to="mailto:" className="footer__link">
            tommy.johnsen@live.com
          </Link>
        </div>
      </div>
    </footer>
  );
}

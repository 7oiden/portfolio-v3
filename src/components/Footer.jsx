import Heading from "./Heading";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

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
          <Link to="tel:92014618" className="link-container">
            +47 920 14 618 <MdArrowForward className="link-icon" />
          </Link>
        </div>
        <div className="footer__item">
          <Heading size="5" cssClass="footer__heading">
            Email
          </Heading>
          <Link to="mailto: tommy.johnsen@live.com" className="link-container">
            tommy.johnsen@live.com <MdArrowForward className="link-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

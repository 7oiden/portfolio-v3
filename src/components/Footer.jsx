import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <p className="footer__heading">Tommy Johnsen</p>
          <p>Frontend Developer</p>
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
        <div className="footer__item">
          <p className="footer__heading">Phone</p>
          <Link to="tel:92014618" className="link-container">
            +47 920 14 618 <MdArrowForward className="link-icon" />
          </Link>
        </div>
        <div className="footer__item">
          <p className="footer__heading">Email</p>
          <Link to="mailto: tommy.johnsen@live.com" className="link-container">
            tommy.johnsen@live.com <MdArrowForward className="link-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

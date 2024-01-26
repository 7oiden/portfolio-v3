import LinkBtn from "./LinkBtn";
import MediaLinks from "./MediaLinks";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          {/* <p className="footer__heading">Tommy Johnsen</p> */}
          <p>Designed and developed by:</p>
          <div className="footer__heading">
            <p>Tommy Johnsen </p>
            <FaCopyright />
            <span>2024</span>
          </div>
          <LinkBtn url="mailto: tommy.johnsen@live.com" size="sm">
            tommy.johnsen@live.com
          </LinkBtn>
          <MediaLinks />
        </div>
        {/* <div className="footer__item">
          <p className="footer__heading">Phone</p>
          <LinkBtn url="tel:92014618" size="sm">
            +47 920 14 618
          </LinkBtn>
        </div>
        <div className="footer__item">
          <p className="footer__heading">Email</p>
          <LinkBtn url="mailto: tommy.johnsen@live.com" size="sm">
            tommy.johnsen@live.com
          </LinkBtn>
        </div> */}
      </div>
    </footer>
  );
}

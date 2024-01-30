import LinkBtn from "../components/common/LinkBtn";
import MediaLinks from "../components/common/MediaLinks";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
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
      </div>
    </footer>
  );
}

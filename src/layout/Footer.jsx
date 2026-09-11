import LinkBtn from "../components/common/LinkBtn";
import MediaLinks from "../components/common/MediaLinks";
import { FaCopyright } from "react-icons/fa";
import { site } from "../config/site";

function currentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <div className="footer__heading">
            <p>{site.name} </p>
            <FaCopyright />
            <span>{currentYear()}</span>
          </div>
          <LinkBtn url={`mailto:${site.email}`} size="sm">
            {site.email}
          </LinkBtn>
          <MediaLinks cssClass="footer__media-links" />
        </div>
      </div>
    </footer>
  );
}

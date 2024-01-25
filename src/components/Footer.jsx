import LinkBtn from "./LinkBtn";
import MediaLinks from "./MediaLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <p className="footer__heading">Tommy Johnsen</p>
          <p>Frontend Developer</p>
          <MediaLinks />
        </div>
        <div className="footer__item">
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
        </div>
      </div>
    </footer>
  );
}

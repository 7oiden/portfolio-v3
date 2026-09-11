import Heading from "../../components/common/Heading";
import avatar from "../../assets/images/avatar.png";
import LinkBtn from "../../components/common/LinkBtn";
import { useLocale } from "../../i18n/useLocale";

export default function Intro() {
  const { copy } = useLocale();
  const intro = copy.home.intro;

  return (
    <section className="intro section-wrapper" id="intro">
      <div className="intro__container">
        <figure className="intro__portrait">
          <img src={avatar} alt={intro.portraitAlt} />
          <figcaption className="intro__portrait-meta">
            <span className="intro__portrait-label">{intro.basedIn}</span>
            <span className="intro__portrait-name">Tommy Johnsen</span>
          </figcaption>
        </figure>
        <div className="intro__body">
          <div className="intro__heading-group">
            <p className="intro__kicker">{intro.kicker}</p>
            <Heading size="3" cssClass="intro__heading">
              {intro.heading}
            </Heading>
          </div>
          <div className="intro__copy paragraph-container">
            <p>{intro.firstParagraph}</p>
            <p>
              {intro.secondBeforeReact}
              <em>React</em>
              {intro.secondBetween}
              <em>AI Engineering</em>
              {intro.secondAfter}
            </p>
          </div>
          <ul className="intro__facts">
            {intro.facts.map((fact) => (
              <li key={fact.label} className="intro__fact">
                <span className="intro__fact-label">{fact.label}</span>
                <span className="intro__fact-value">{fact.value}</span>
              </li>
            ))}
          </ul>
          <LinkBtn url="/about" size="md">
            {intro.learnMore}
          </LinkBtn>
        </div>
      </div>
    </section>
  );
}

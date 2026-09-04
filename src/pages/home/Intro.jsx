import Heading from "../../components/common/Heading";
import avatar from "../../assets/images/avatar.png";
import LinkBtn from "../../components/common/LinkBtn";
import { ScrollToTop } from "../../utils/ScrollToTop";

const facts = [
  { label: "Background", value: "Structural engineering" },
  { label: "Working with", value: "Local businesses" },
  { label: "Building with", value: "React & AI" },
];

export default function Intro() {
  return (
    <section className="intro section-wrapper" id="intro">
      <div className="intro__container">
        <figure className="intro__portrait">
          <img src={avatar} alt="Portrait of Tommy Johnsen" />
          <figcaption className="intro__portrait-meta">
            <span className="intro__portrait-label">Based in Bergen</span>
            <span className="intro__portrait-name">Tommy Johnsen</span>
          </figcaption>
        </figure>
        <div className="intro__body">
          <div className="intro__heading-group">
            <p className="intro__kicker">About me</p>
            <Heading size="3" cssClass="intro__heading">
              From structural engineering to frontend.
            </Heading>
          </div>
          <div className="intro__copy paragraph-container">
            <p>
              I&apos;m Tommy. I spent over a decade as a structural engineer,
              running large construction projects. In 2020 I switched to
              frontend — the same kind of problem-solving, plus the visual craft
              I never quite got to use in engineering.
            </p>
            <p>
              I now build websites and apps for local businesses. Right now
              that&apos;s a new site for an entrepreneur, in{" "}
              <em>React</em>, while I take an <em>AI Engineering</em> course at
              Scrimba.
            </p>
          </div>
          <ul className="intro__facts">
            {facts.map((fact) => (
              <li key={fact.label} className="intro__fact">
                <span className="intro__fact-label">{fact.label}</span>
                <span className="intro__fact-value">{fact.value}</span>
              </li>
            ))}
          </ul>
          <ScrollToTop>
            <LinkBtn url="about" size="md">
              Learn more
            </LinkBtn>
          </ScrollToTop>
        </div>
      </div>
    </section>
  );
}

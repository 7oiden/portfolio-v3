import Heading from "../../components/common/Heading";
import avatar from "../../assets/images/avatar.png";
import LinkBtn from "../../components/common/LinkBtn";
import { ScrollToTop } from "../../utils/ScrollToTop";

export default function Intro() {
  return (
    <section className="intro section-wrapper">
      <div className="intro__container">
        <figure className="intro__avatar">
          <img
            src={avatar}
            alt="A 3D graphics avatar head shot of myself wearing a Discord t-shirt"
          />
        </figure>
        <div className="intro__body">
          <Heading size="2" cssClass="section-heading">
            Introduction
          </Heading>
          <div className="paragraph-container mb">
            <p>
              My name is <em>Tommy Johnsen</em>, and I am a former construction
              engineer looking for a new career as a frontend developer.
            </p>
            <p>
              In 2022 I graduated as a frontend developer from{" "}
              <em>Noroff School of Technology and Digital Media</em>, and just
              recently I have completed the Frontend Career Path, an estimated 6
              months course, at <em>Scrimba</em>.
            </p>
          </div>
          <ScrollToTop>
            <LinkBtn url="about" size="md" rotation="0deg">
              Learn more about me
            </LinkBtn>
          </ScrollToTop>
        </div>
      </div>
    </section>
  );
}

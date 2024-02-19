import Heading from "../../components/common/Heading";
import avatar from "../../assets/images/avatar.png";
import LinkBtn from "../../components/common/LinkBtn";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { RxCornerTopLeft } from "react-icons/rx";
import { RxCornerTopRight } from "react-icons/rx";

export default function Intro() {
  return (
    <section className="intro section-wrapper" id="intro">
      <RxCornerTopLeft className="corner-icon--top-left" />
      <RxCornerTopRight className="corner-icon--top-right" />
      <div className="intro__container">
        <figure className="intro__avatar">
          <img
            src={avatar}
            alt="A 3D graphics avatar head shot of myself wearing a Discord t-shirt"
          />
        </figure>
        <div className="intro__body">
          <Heading size="3" cssClass="section-heading">
            Introduction
          </Heading>
          <div className="paragraph-container mb mw">
            <p>
              I&apos;m <em>Tommy</em>, a seasoned structural engineer looking
              for a new career as a frontend developer.
            </p>
            <p>
              In the transformative year of 2022 I graduated as a frontend
              developer from{" "}
              <em>Noroff School of Technology and Digital Media</em>, and has
              since also completed the Frontend Career Path, a comprehensive
              6-month online course at <em>Scrimba</em>.
            </p>
            <p>
              I thrive on the dual excitement of designing and creating great{" "}
              <em>user experiences</em>, and bringing them to life through code.
            </p>
          </div>
          <ScrollToTop>
            <LinkBtn url="about" size="md" rotation="0deg">
              Learn more
            </LinkBtn>
          </ScrollToTop>
        </div>
      </div>
    </section>
  );
}

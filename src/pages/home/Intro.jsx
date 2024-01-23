import Heading from "../../components/Heading";
import avatar from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

export default function Intro() {
  return (
    <section className="intro section-wrapper">
      <div className="intro__container">
        <figure className="intro__avatar">
          <img src={avatar} />
        </figure>
        <div className="intro__body">
          <Heading size="2" cssClass="section-heading">
            Introduction
          </Heading>
          <div className="paragraph-container">
            <p>
              My name is <em>Tommy Johnsen</em>, and I am a former construction
              engineer looking for a new career as a frontend developer.
            </p>
            <p>
              In 2022 I graduated as a frontend developer from{" "}
              <em>Noroff School of Technology and Digital Media</em>.
            </p>
            <p>
              Recently I completed the Frontend Career Path, an estimated 6
              months course, at <em>Scrimba</em>
            </p>
          </div>
          <Link to="/about" className="link-container">
            Learn more about me <MdArrowForward className="link-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

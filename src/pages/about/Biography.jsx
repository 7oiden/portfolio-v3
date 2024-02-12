import Heading from "../../components/common/Heading";
import mapPng from "../../assets/images/norway2.png";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function Biography() {
  return (
    <section className="section-wrapper biography">
      <div className="biography__wrapper">
        <Heading size="2" cssClass="section-heading">
          Biography
        </Heading>
        <div className="paragraph-container">
          <p>
            I am originally from Sunnmøre, but moved to <em>Bergen</em> in 2004
            to study, and has been living in the Bergen area more or less since.
          </p>
          <p>
            Previously i have more than
            <em> 10 years of experience as an engineer</em> in the construction
            industry, where i in the later years was in charge of several large
            and complex projects.
          </p>
          <p>
            In 2020 i decided to pursue a new career as a frontend-developer by
            enrolling in <em>Noroff's</em> frontend-programme as an full-time
            online student.
          </p>
          <p>
            I love that as <em>frontend-developer</em> i get to use my former
            conditioning in logics, analytical thinking and problem solving as
            well as being able to express my more creative and esthetic sides;
            the latter something i always missed in my previous line of work.
          </p>
          <p>
            As a person i am open-minded, self-reflected and curios, and i am
            always thirsting for knowledge and <em>eager to learn</em> new
            things to expand my horizon; both as a person and as a professional.
          </p>
        </div>
      </div>
      <div className="map-image">
        <img src={mapPng} />
        <Link
          to="https://maps.app.goo.gl/GPHnNxc53yVv1Uv5A"
          className="location-marker"
        >
          <span className="test">Where I live</span>
        </Link>
      </div>
    </section>
  );
}

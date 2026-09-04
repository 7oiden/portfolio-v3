import Heading from "../../components/common/Heading";
import mapPng from "../../assets/images/norway.png";
import { MdArrowForward } from "react-icons/md";

const BERGEN_MAPS_URL = "https://maps.app.goo.gl/GPHnNxc53yVv1Uv5A";

export default function Biography() {
  return (
    <section className="biography section-wrapper">
      <div className="biography__heading-group">
        <p className="biography__kicker">Biography</p>
        <Heading size="2" cssClass="biography__heading">
          How I got here.
        </Heading>
      </div>
      <div className="biography__wrapper">
        <div className="paragraph-container">
          <p>
            I&apos;m originally from Sunnmøre. I moved to <em>Bergen</em> in
            2004 to study, and I&apos;ve been in the area — more or less — ever
            since.
          </p>
          <p>
            Before this I spent over a decade as a structural engineer, mostly
            on large construction projects. In 2020 I enrolled in{" "}
            <em>Noroff&apos;s</em> frontend program as a full-time online
            student. I wanted the analytical side of engineering, plus the
            visual work I never quite got to do there.
          </p>
          <p>
            That mix is still what holds my attention: logic on one side,
            making something you can see on the other.
          </p>
          <a
            href={BERGEN_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="biography__place"
          >
            Based in the Bergen area
            <MdArrowForward className="biography__place-icon" />
          </a>
        </div>
        <div className="map">
          <img src={mapPng} alt="" width="500" height="594" />
          <a
            href={BERGEN_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="location-marker"
          >
            <span className="location-marker__circle">
              <span className="location-marker__dot"></span>
            </span>
            <span className="location-marker__text">
              Bergen
              <MdArrowForward className="location-marker__icon" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

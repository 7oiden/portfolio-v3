import Heading from "../../components/common/Heading";
import mapPng from "../../assets/images/norway.png";
import { MdArrowForward } from "react-icons/md";
import { useLocale } from "../../i18n/useLocale";

const BERGEN_MAPS_URL = "https://maps.app.goo.gl/GPHnNxc53yVv1Uv5A";

export default function Biography() {
  const { copy } = useLocale();
  const biography = copy.about.biography;

  return (
    <section className="biography section-wrapper">
      <div className="biography__heading-group">
        <p className="biography__kicker">{biography.kicker}</p>
        <Heading size="2" cssClass="biography__heading">
          {biography.heading}
        </Heading>
      </div>
      <div className="biography__wrapper">
        <div className="paragraph-container">
          <p>
            {biography.originBefore}
            <em>Bergen</em>
            {biography.originAfter}
          </p>
          <p>
            {biography.careerBefore}
            <em>Noroff</em>
            {biography.careerAfter}
          </p>
          <p>{biography.finalParagraph}</p>
          <a
            href={BERGEN_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="biography__place"
          >
            {biography.place}
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

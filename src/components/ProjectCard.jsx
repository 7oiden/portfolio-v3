import PropTypes from "prop-types";
import Heading from "./Heading";

export default function ProjectCard({ image, title, type, date, description }) {
  return (
    <div className="card">
      <div>
        <img src={image} />
      </div>
      <hgroup>
        <Heading size="3" cssClass="card__heading">
          {title}
        </Heading>
        <Heading size="4" cssClass="card__sub-heading">
          {type} - {date}
        </Heading>
      </hgroup>
      <div className="paragraph-container">
        <p>{description[0]}</p>
        <p>{description[1]}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};

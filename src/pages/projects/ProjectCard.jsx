import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import ProjectBadge from "./ProjectBadge";

export default function ProjectCard({
  image,
  title,
  type,
  date,
  description,
  tools,
}) {
  return (
    <div className="card">
      <div className="card__image">
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
      <div className="badge__grid">
        {tools.map((tool) => (
          <ProjectBadge key={tool} tool={tool} />
        ))}
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
  tools: PropTypes.array.isRequired,
};

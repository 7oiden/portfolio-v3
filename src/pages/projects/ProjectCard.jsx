import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import TextBadge from "../../components/TextBadge";
import ProjectBtn from "../../components/ProjectBtn";
import { Link } from "react-router-dom";
import { SiNetlify } from "react-icons/si";

export default function ProjectCard({
  image,
  title,
  type,
  date,
  description,
  tools,
  siteUrl,
  codeUrl,
}) {
  return (
    <div className="card">
      <Link to={siteUrl} className="card__link">
        <div className="card__image">
          <img src={image} />
        </div>
        <div className="card__overlay">
          <div>
            <span>Take me to live site at Netlify</span>
            <SiNetlify size="2rem" />
          </div>
        </div>
      </Link>
      <hgroup>
        <Heading size="3" cssClass="card__heading">
          {title}
        </Heading>
        <Heading size="4" cssClass="card__sub-heading">
          {type} - {date}
        </Heading>
      </hgroup>
      {/* <hr className="divider" /> */}
      <div className="button-container">
        <ProjectBtn icon="github" url={codeUrl}>
          GitHub
        </ProjectBtn>
        <ProjectBtn icon="netlify" url={siteUrl}>
          Live site
        </ProjectBtn>
      </div>
      <div className="paragraph-container">
        <p>{description[0]}</p>
        <p>{description[1]}</p>
      </div>
      <div className="badge__grid">
        {tools.map((tool) => (
          <TextBadge key={tool}>{tool}</TextBadge>
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
  siteUrl: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
};

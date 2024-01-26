import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import TextBadge from "../../components/TextBadge";
import ProjectBtn from "../../components/ProjectBtn";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
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
    <>
      <div className="project">
        <div className="project__col">
          <div className="project__date">
            <p>{date}</p>
            <MdOutlineKeyboardDoubleArrowRight className="project__date-icon" />
          </div>
          <Link to={siteUrl} className="project__link">
            <div className="project__image">
              <img src={image} className="project__image" />
            </div>
            <div className="project__overlay">
              <div>
                <span>Take me to live site at Netlify</span>
                <SiNetlify size="2rem" />
              </div>
            </div>
          </Link>
        </div>
        <div className="card">
          <div className="card__header">
            <hgroup>
              <Heading size="3" cssClass="card__heading">
                {title}
              </Heading>
              <Heading size="4" cssClass="card__sub-heading">
                {type}
              </Heading>
            </hgroup>
            <div className="button-container">
              <ProjectBtn icon="github" url={codeUrl}>
                GitHub
              </ProjectBtn>
            </div>
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
      </div>
      <hr className="hr" />
    </>
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

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { SiNetlify, SiGithub } from "react-icons/si";

export default function ProjectBtn({ url, icon, children }) {
  return (
    <Link to={url} className="button project-btn">
      {icon === "github" ? (
        <SiGithub className="project-btn__icon" />
      ) : (
        <SiNetlify className="project-btn__icon" />
      )}
      <span className="project-btn__text">{children} </span>
    </Link>
  );
}

ProjectBtn.propTypes = {
  children: PropTypes.string,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

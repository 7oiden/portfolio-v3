import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { SiNetlify, SiGithub } from "react-icons/si";

export default function ProjectBtn({ icon, url, children }) {
  let buttonIcon = null;

  if (icon === "netlify") {
    buttonIcon = <SiNetlify />;
  } else if (icon === "github") {
    buttonIcon = <SiGithub />;
  }

  return (
    <Link to={url} className="button project-button">
      {buttonIcon}
      {children}
    </Link>
  );
}

ProjectBtn.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
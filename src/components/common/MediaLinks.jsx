import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function MediaLinks({ cssClass }) {
  return (
    <div className={cssClass}>
      <Link to="https://github.com/7oiden" aria-label="Visit my GitHub page">
        <FaGithub className="media-icon" />
      </Link>
      <Link
        to="https://www.instagram.com/7oiden/"
        aria-label="Visit my Instagram account"
      >
        <FaInstagram className="media-icon" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/tommy-j-16b56678/"
        aria-label="Visit my LinkedIn profile"
      >
        <FaLinkedinIn className="media-icon" />
      </Link>
    </div>
  );
}

MediaLinks.propTypes = {
  cssClass: PropTypes.string,
};

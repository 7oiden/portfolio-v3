import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function GithubLink({ codeUrl }) {
  return (
    <Link to={codeUrl} className="link-container">
      <FaGithub className="brand-icon brand-icon--small" />
      GitHub <MdArrowForward className="link-icon" />
    </Link>
  );
}

GithubLink.propTypes = {
  codeUrl: PropTypes.string.isRequired,
};

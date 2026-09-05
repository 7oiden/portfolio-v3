import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocale } from "../../i18n/useLocale";

export default function MediaLinks({ cssClass }) {
  const { copy } = useLocale();

  return (
    <div className={cssClass}>
      <Link to="https://github.com/7oiden" aria-label={copy.common.githubLabel}>
        <FaGithub className="media-icon" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/tommy-j-16b56678/"
        aria-label={copy.common.linkedinLabel}
      >
        <FaLinkedinIn className="media-icon" />
      </Link>
    </div>
  );
}

MediaLinks.propTypes = {
  cssClass: PropTypes.string,
};

import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocale } from "../../i18n/useLocale";
import AppLink from "./AppLink";

export default function MediaLinks({ cssClass }) {
  const { copy } = useLocale();

  return (
    <div className={cssClass}>
      <AppLink
        href="https://github.com/7oiden"
        aria-label={copy.common.githubLabel}
      >
        <FaGithub className="media-icon" />
      </AppLink>
      <AppLink
        href="https://www.linkedin.com/in/tommy-j-16b56678/"
        aria-label={copy.common.linkedinLabel}
      >
        <FaLinkedinIn className="media-icon" />
      </AppLink>
    </div>
  );
}

MediaLinks.propTypes = {
  cssClass: PropTypes.string,
};

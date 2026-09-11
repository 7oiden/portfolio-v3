import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocale } from "../../i18n/useLocale";
import AppLink from "./AppLink";
import { site } from "../../config/site";

export default function MediaLinks({ cssClass }) {
  const { copy } = useLocale();

  return (
    <div className={cssClass}>
      <AppLink href={site.githubUrl} aria-label={copy.common.githubLabel}>
        <FaGithub className="media-icon" />
      </AppLink>
      <AppLink href={site.linkedinUrl} aria-label={copy.common.linkedinLabel}>
        <FaLinkedinIn className="media-icon" />
      </AppLink>
    </div>
  );
}

MediaLinks.propTypes = {
  cssClass: PropTypes.string,
};

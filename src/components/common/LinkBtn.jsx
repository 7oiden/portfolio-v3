import PropTypes from "prop-types";
import { MdArrowForward } from "react-icons/md";
import classNames from "classnames";
import { SiGithub } from "react-icons/si";
import AppLink from "./AppLink";

export default function LinkBtn({
  children,
  url,
  icon,
  size = "sm",
  position = "left",
  horizontalArrow = false,
}) {
  let linkClass = `link-btn--${size}`;
  let disabledClass = "";

  if (!url) {
    disabledClass = "link-btn--disabled";
  }

  const allLinkClasses = classNames(
    "link-container",
    `link-container--${position}`,
    { "link-container--horizontal": horizontalArrow },
    linkClass,
    disabledClass
  );

  let iconClass = `link-icon--${size}`;
  const allIconClasses = classNames("link-arrow-icon", iconClass);

  return (
    <AppLink href={url} className={allLinkClasses}>
      {icon ? <SiGithub className="project-btn__icon" /> : null}
      <span>{children}</span>
      <div className={allIconClasses}>
        <MdArrowForward />
      </div>
    </AppLink>
  );
}

LinkBtn.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string,
  icon: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.string,
  horizontalArrow: PropTypes.bool,
};

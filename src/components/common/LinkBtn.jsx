import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";
import { SiGithub } from "react-icons/si";

export default function LinkBtn({
  children,
  url,
  icon,
  size = "sm",
  position = "left",
}) {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, y: 0, transform: "rotate(-45deg)" },
  }));

  const handleHover = () => {
    api.start({
      x: 6,
      y: -6,
    });
  };

  const handleHoverExit = () => {
    api.start({
      x: 0,
      y: 0,
    });
  };

  let linkClass = `link-btn--${size}`;
  let disabledClass = "";

  if (!url) {
    disabledClass = "link-btn--disabled";
  }

  const allLinkClasses = classNames(
    "link-container",
    `link-container--${position}`,
    linkClass,
    disabledClass
  );

  let iconClass = `link-icon--${size}`;
  const allIconClasses = classNames("link-arrow-icon", iconClass);

  return (
    <Link
      to={url}
      onMouseEnter={url ? handleHover : null}
      onMouseLeave={url ? handleHoverExit : null}
      className={allLinkClasses}
    >
      {icon ? <SiGithub className="project-btn__icon" /> : null}
      <span>{children}</span>
      <animated.div style={{ ...springs }} className={allIconClasses}>
        <MdArrowForward />
      </animated.div>
    </Link>
  );
}

LinkBtn.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string,
  icon: PropTypes.bool,
  size: PropTypes.string,
  position: PropTypes.string,
};

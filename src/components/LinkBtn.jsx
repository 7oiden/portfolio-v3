import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";

export default function LinkBtn({ children, url, size = "sm" }) {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleHover = (e) => {
    e.stopPropagation();

    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 8,
      },
    });
  };

  const handleHoverExit = () => {
    api.start({
      from: {
        x: 8,
      },
      to: {
        x: 0,
      },
    });
  };

  let linkClass = `link-btn--${size}`;
  const allLinkClasses = classNames("link-container", linkClass);

  let iconClass = `link-icon--${size}`;
  const allIconClasses = classNames("link-icon", iconClass);

  return (
    <Link
      to={url}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      className={allLinkClasses}
    >
      {children}
      <animated.div style={{ ...springs }} className={allIconClasses}>
        <MdArrowForward />
      </animated.div>
    </Link>
  );
}

LinkBtn.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  size: PropTypes.string,
};

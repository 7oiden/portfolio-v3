import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";

export default function LinkBtn({ children, url }) {
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

  return (
    <Link
      to={url}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      className="link-container"
    >
      {children}
      <animated.div style={{ ...springs }}>
        <MdArrowForward className="link-icon" />
      </animated.div>
    </Link>
  );
}

LinkBtn.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

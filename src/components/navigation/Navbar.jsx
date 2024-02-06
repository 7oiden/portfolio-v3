import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import { FaHashtag } from "react-icons/fa";

export default function Navbar({ handleToggle, isMenuOpen }) {
  const location = useLocation().pathname;

  const { opacity, transform } = useSpring({
    transform: isMenuOpen ? `rotate(90deg)` : `rotate(0deg)`,
  });

  return (
    <nav
      className="nav">
      
      {location === "/" ? (
        <div></div>
      ) : (
        <Link to="/" className="nav__logo" aria-label="Return to homepage">
          <FaHashtag />
        </Link>
      )}
      <ul className="nav__link-list">
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="background"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            Background
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className="nav__toggle-btn" onClick={handleToggle}>
        <animated.div
          className="nav__toggle-btn"
          style={{ opacity, transform }}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </animated.div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

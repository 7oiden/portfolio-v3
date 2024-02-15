import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useSprings, animated } from "react-spring";

export default function Navbar({ handleToggle, isMenuOpen }) {
  const iconSprings = useSprings(
    2,
    isMenuOpen
      ? [
          { transform: "scale(0)", display: "none", config: { duration: 200 } },
          {
            transform: "scale(1)",
            display: "block",
            config: { duration: 200 },
          },
        ]
      : [
          {
            transform: "scale(1)",
            display: "block",
            config: { duration: 200 },
          },
          { transform: "scale(0)", display: "none", config: { duration: 200 } },
        ]
  );

  const AnimatedMenu = animated(MdMenu);
  const AnimatedClose = animated(MdClose);

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo" aria-label="Return to homepage">
        #TJ.
      </Link>
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
        <AnimatedMenu style={iconSprings[0]} />
        <AnimatedClose style={iconSprings[1]} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

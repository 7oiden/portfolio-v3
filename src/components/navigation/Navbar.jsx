import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useSprings, animated } from "react-spring";

export default function Navbar({ handleToggle, isMenuOpen }) {
  const location = useLocation();

  const style = {
    color: location.pathname === "/" ? "#38bdf8" : "#94a3b8",
  };

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
      <Link
        to="/"
        style={style}
        className="nav__logo"
        aria-label="Return to homepage"
      >
        <span className="nav__logo-inner">01</span>
      </Link>
      <ul className="nav__link-list">
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            <div className="nav__prefix">02</div>
            <div>Projects</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="background"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            <div className="nav__prefix">03</div>
            <div>Background</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            <div className="nav__prefix">04</div>
            <div>About</div>
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

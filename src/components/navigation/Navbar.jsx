import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar({ handleToggle, isMenuOpen }) {
  return (
    <nav className="nav">
      <ul className="nav__link-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            Home
          </NavLink>
        </li>
      </ul>

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
      <button
        type="button"
        className="nav__toggle-btn"
        onClick={handleToggle}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
      >
        {isMenuOpen ? "Lukk" : "Meny"}
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

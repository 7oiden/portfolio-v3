import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function NavDropdown({ isMenuOpen }) {
  return (
    <nav className={isMenuOpen ? "dropdown dropdown--open" : "dropdown"}>
      <ul className="dropdown__links">
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/background">Background</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

NavDropdown.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

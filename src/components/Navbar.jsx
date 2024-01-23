import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar({ handleToggle, isMenuOpen }) {
  const menuIcon = isMenuOpen ? <MdClose /> : <MdMenu />;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">#</Link>
      </div>
      <ul className="nav__links">
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/background"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            Background
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav__link active-link" : "nav__link"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className="toggle-btn" onClick={handleToggle}>
        {menuIcon}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

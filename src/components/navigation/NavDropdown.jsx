import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    // Adds a resize event listener to the window
    const handleResize = () => {
      // Closes the dropdown when the window is resized
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: removes the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={isMenuOpen ? "nav__dropdown nav__dropdown--open" : "nav__dropdown"}>
      <ul className="nav-dropdown__links-list">
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="background"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Background
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

NavDropdown.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

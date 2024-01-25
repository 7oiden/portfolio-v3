import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Add a resize event listener to the window
    const handleResize = () => {
      // Close the dropdown when the window is resized
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={isMenuOpen ? "dropdown dropdown--open" : "dropdown"}>
      <ul className="dropdown__links">
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/background"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Background
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
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

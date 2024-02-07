import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  const dropdown = useSpring({
    maxHeight: isMenuOpen ? "215px" : "0px",
    config: { duration: 200 },
  });

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
    <animated.nav className="nav__dropdown" style={{ ...dropdown }}>
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
    </animated.nav>
  );
}

NavDropdown.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

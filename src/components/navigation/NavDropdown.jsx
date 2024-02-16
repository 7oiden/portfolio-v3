import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import MediaLinks from "../common/MediaLinks";

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  const dropdown = useSpring({
    maxHeight: isMenuOpen ? "275px" : "0px",
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
            {/* <span className="nav__prefix">02. </span> */}
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="background"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {/* <span className="nav__prefix">03. </span> */}
            <span>Background</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {/* <span className="nav__prefix">04. </span> */}
            <span>About</span>
          </NavLink>
        </li>
        <MediaLinks cssClass="nav-dropdown__media-links" />
      </ul>
    </animated.nav>
  );
}

NavDropdown.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

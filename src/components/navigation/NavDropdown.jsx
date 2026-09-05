import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import MediaLinks from "../common/MediaLinks";
import { useLocale } from "../../i18n/useLocale";

const navItems = [
  { path: "/", key: "home" },
  { path: "projects", key: "projects" },
  { path: "background", key: "background" },
  { path: "about", key: "about" },
];

export default function NavDropdown({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const { copy } = useLocale();

  const dropdown = useSpring({
    maxHeight: isMenuOpen ? "340px" : "0px",
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
    <animated.nav
      id="mobile-nav"
      className="nav__dropdown"
      style={{ ...dropdown }}
      aria-hidden={!isMenuOpen}
      inert={isMenuOpen ? undefined : ""}
    >
      <ul className="nav-dropdown__links-list">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <span>{copy.nav[item.key]}</span>
            </NavLink>
          </li>
        ))}
        <MediaLinks cssClass="nav-dropdown__media-links" />
      </ul>
    </animated.nav>
  );
}

NavDropdown.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

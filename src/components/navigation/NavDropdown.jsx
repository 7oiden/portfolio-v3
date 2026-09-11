import PropTypes from "prop-types";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import MediaLinks from "../common/MediaLinks";
import { useLocale } from "../../i18n/useLocale";
import { routes } from "../../constants/routes";

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
    const handleResize = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

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
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              end={route.path === "/"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <span>{copy.nav[route.key]}</span>
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

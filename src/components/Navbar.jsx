import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";

export default function Navbar({ handleToggle, isMenuOpen }) {
  // const menuIcon = isMenuOpen ? <MdClose /> : <MdMenu />;

  const { opacity, transform } = useSpring({
    // opacity: isMenuOpen ? 0 : 1,
    transform: isMenuOpen ? `rotate(90deg)` : `rotate(0deg)`,
  });

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo">#</Link>
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
        <animated.div className="toggle-btn" style={{ opacity, transform }}>
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </animated.div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

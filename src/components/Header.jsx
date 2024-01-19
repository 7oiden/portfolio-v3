import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <nav>
          <Link to="/">#</Link>
          <div className="nav__link-container">
            <NavLink
              to="projects"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Projects
            </NavLink>
            <NavLink
              to="background"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Background
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              About
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

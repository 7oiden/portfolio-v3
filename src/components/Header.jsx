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
              className={({ isActive }) =>
                isActive ? "nav__link active-link" : "nav__link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="background"
              className={({ isActive }) =>
                isActive ? "nav__link active-link" : "nav__link"
              }
            >
              Background
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "nav__link active-link" : "nav__link"
              }
            >
              About
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

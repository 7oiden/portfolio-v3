import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  const menuIcon = isMenuOpen ? <MdClose /> : <MdMenu />;

  return (
    <header className="header">
      <div className="header__container">
        <nav className="desktop">
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
        <nav className={isMenuOpen ? "mobile" : null}>
          <div>
            <div className="menu-icon" onClick={handleToggle}>
              {menuIcon}
            </div>
            {isMenuOpen && (
              <div className="mobile__link-container">
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="background">Background</NavLink>
                <NavLink to="about">About</NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

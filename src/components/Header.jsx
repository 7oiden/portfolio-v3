import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <nav>
          <Link to="/">#</Link>
          <div className="nav__link-container">
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/background">Background</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

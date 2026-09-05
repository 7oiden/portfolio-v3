import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useLocale } from "../../i18n/useLocale";

export default function Navbar({ handleToggle, isMenuOpen }) {
  const { locale, setLocale, copy } = useLocale();

  return (
    <nav className="nav">
      <div
        className="language-selector"
        role="group"
        aria-label={copy.nav.languageLabel}
      >
        <button
          type="button"
          className="language-selector__option"
          aria-pressed={locale === "nb"}
          aria-label="Norsk"
          onClick={() => setLocale("nb")}
        >
          NO
        </button>
        <button
          type="button"
          className="language-selector__option"
          aria-pressed={locale === "en"}
          aria-label="English"
          onClick={() => setLocale("en")}
        >
          EN
        </button>
      </div>
      <div className="nav__controls">
        <ul className="nav__link-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__link active-link" : "nav__link"
              }
            >
              {copy.nav.home}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? "nav__link active-link" : "nav__link"
              }
            >
              {copy.nav.projects}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="background"
              className={({ isActive }) =>
                isActive ? "nav__link active-link" : "nav__link"
              }
            >
              {copy.nav.background}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "nav__link active-link" : "nav__link"
              }
            >
              {copy.nav.about}
            </NavLink>
          </li>
        </ul>
        <button
          type="button"
          className="nav__toggle-btn"
          onClick={handleToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? copy.nav.close : copy.nav.menu}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

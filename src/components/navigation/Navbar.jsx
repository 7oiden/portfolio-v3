import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useLocale } from "../../i18n/useLocale";
import { routes } from "../../constants/routes";

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
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                end={route.path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav__link active-link" : "nav__link"
                }
              >
                {copy.nav[route.key]}
              </NavLink>
            </li>
          ))}
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

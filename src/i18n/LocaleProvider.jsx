import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "./LocaleContext";
import { translations } from "./translations";

const STORAGE_KEY = "portfolio-locale";
const VALID_LOCALES = ["nb", "en"];

function getInitialLocale() {
  try {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    return VALID_LOCALES.includes(savedLocale) ? savedLocale : "nb";
  } catch {
    return "nb";
  }
}

export default function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale);

  const setLocale = (nextLocale) => {
    if (VALID_LOCALES.includes(nextLocale)) {
      setLocaleState(nextLocale);
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;

    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // The selected locale still works for this session when storage is blocked.
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: translations[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

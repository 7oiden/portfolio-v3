import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { useLocale } from "../../i18n/useLocale";

export default function PageScrollBtn() {
  const { copy } = useLocale();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only offered while scrolling back up, and never near the top
      setShowButton(currentScrollY < prevScrollY && currentScrollY > 100);
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className={`page-scroll ${showButton ? "" : "page-scroll--hidden"}`}
      aria-hidden={!showButton}
      tabIndex={showButton ? undefined : -1}
      aria-label={copy.common.toTop}
    >
      <FiChevronUp className="page-scroll__icon" aria-hidden="true" />
    </button>
  );
}

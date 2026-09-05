import { useLocation } from "react-router-dom";
import { useLocale } from "../i18n/useLocale";

export default function StyledBg() {
  const locationPath = useLocation().pathname;
  const { copy } = useLocale();
  const pageKey = locationPath === "/" ? "home" : locationPath.slice(1);
  const bgText = copy.backgroundText[pageKey] ?? copy.backgroundText.home;

  return (
    <div className="bg-text">
      <span>{bgText}</span>
    </div>
  );
}

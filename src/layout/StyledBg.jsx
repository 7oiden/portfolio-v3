import { useLocation } from "react-router-dom";
import { useLocale } from "../i18n/useLocale";
import { getPageKey } from "../constants/routes";

export default function StyledBg() {
  const locationPath = useLocation().pathname;
  const { copy } = useLocale();
  const pageKey = getPageKey(locationPath);
  const bgText = copy.backgroundText[pageKey] ?? copy.backgroundText.home;

  return (
    <div className="bg-text">
      <span>{bgText}</span>
    </div>
  );
}

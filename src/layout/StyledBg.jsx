import { useLocation } from "react-router-dom";

export default function StyledBg() {
  const locationPath = useLocation().pathname;

  let bgText

  if (locationPath === "/") {
    bgText = "Home."
  } else {
    bgText = locationPath.slice(1).charAt(0).toUpperCase() + locationPath.slice(2) + "."
  }

  return (
    <div className="bg-text">
      <span>{bgText}</span>
    </div>
  );
}

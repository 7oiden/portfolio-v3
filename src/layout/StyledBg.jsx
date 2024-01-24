import { useLocation } from "react-router-dom";

export default function StyledBg() {
//   const [scrollY, setScrollY] = useState(0);

  const locationPath = useLocation().pathname;

  const bgText = locationPath.slice(1).charAt(0).toUpperCase() + locationPath.slice(2) + ".";

  return (
    <div className="bg-container">
      <div className="bg-text">{bgText}</div>
    </div>
  );
}

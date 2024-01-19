import PropTypes from "prop-types";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiAdobexd, SiAdobephotoshop } from "react-icons/si";

export default function SkillBadge({ title }) {
  let icon;
  let iconTitle = title.toLowerCase();

  switch (iconTitle) {
    case "html5":
      icon = <FaHtml5 className="badge__icon" />;
      break;
    case "css3":
      icon = <FaCss3Alt className="badge__icon" />;
      break;
    case "jse6":
      icon = <FaJs className="badge__icon" />;
      break;
    case "react":
      icon = <FaReact className="badge__icon" />;
      break;
    case "wordpress":
      icon = <FaWordpress className="badge__icon" />;
      break;
    case "next.js":
      icon = <SiNextdotjs className="badge__icon" />;
      break;
    case "adobe xd":
      icon = <SiAdobexd className="badge__icon" />;
      break;
    case "figma":
      icon = <FaFigma className="badge__icon" />;
      break;
    case "photoshop":
      icon = <SiAdobephotoshop className="badge__icon" />;
      break;
    default:
      icon = null;
  }

  return (
    <div className="badge__item">
      <div className="badge__icon-container">{icon}</div>
      <span className="badge__label">{title}</span>
    </div>
  );
}

SkillBadge.propTypes = {
  title: PropTypes.string.isRequired,
};

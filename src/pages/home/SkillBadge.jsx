import PropTypes from "prop-types";
import { cloneElement } from "react";

export default function SkillBadge({ title, icon }) {
  return (
    <div className="skill-badge__item">
      <div className="skill-badge__icon-container">
        {cloneElement(icon, { className: "skill-badge__icon" })}
      </div>
      <span className="skill-badge__label">{title}</span>
    </div>
  );
}

SkillBadge.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

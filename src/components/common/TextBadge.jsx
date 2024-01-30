import PropTypes from "prop-types";

export default function TextBadge({ children }) {
  const badgeText = children.charAt(0).toUpperCase() + children.slice(1);

  return (
    <div className="text-badge">
      <span className="text-badge__text">{badgeText}</span>
    </div>
  );
}

TextBadge.propTypes = {
  children: PropTypes.string.isRequired,
};


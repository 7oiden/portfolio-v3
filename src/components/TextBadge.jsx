import PropTypes from "prop-types";

export default function TextBadge({ tool }) {
  const badgeText = tool.charAt(0).toUpperCase() + tool.slice(1);

  return (
    <div className="badge">
      <span className="badge__text">{badgeText}</span>
    </div>
  );
}

TextBadge.propTypes = {
  tool: PropTypes.string.isRequired,
};


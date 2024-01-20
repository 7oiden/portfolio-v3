import PropTypes from "prop-types";

export default function ProjectBadge({ tool }) {
  const badgeText = tool.charAt(0).toUpperCase() + tool.slice(1);

  return (
    <div className="badge">
      <span className="badge__text">{badgeText}</span>
    </div>
  );
}

ProjectBadge.propTypes = {
  tool: PropTypes.string.isRequired,
};


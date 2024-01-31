import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

export default function InfoListItem({ skill }) {
  return (
    <li>
      <FaCheck className="check-mark-icon" />
      {skill}
    </li>
  );
}

InfoListItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

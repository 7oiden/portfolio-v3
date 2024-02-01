import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

export default function InfoListItem({ skill }) {
  return (
    <li>
      <div className="list-check">
        <FaCheck className="list-check__icon" />
      </div>
      {skill}
    </li>
  );
}

InfoListItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

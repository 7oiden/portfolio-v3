import PropTypes from "prop-types";
import { MdCheck } from "react-icons/md";

export default function InfoListItem({ skill }) {
  return (
    <li>
      <MdCheck className="check-icon"/>
      {skill}
    </li>
  );
}

InfoListItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

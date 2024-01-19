import PropTypes from "prop-types";
import { MdCheck } from "react-icons/md";

export default function SkillListItem({ skill }) {
  return (
    <li>
      <MdCheck className="check-icon"/>
      {skill}
    </li>
  );
}

SkillListItem.propTypes = {
  skill: PropTypes.string.isRequired,
};

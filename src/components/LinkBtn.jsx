import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

export default function LinkBtn({ children, url }) {
  return (
    <Link to={url} className="link-container">
      {children} <MdArrowForward className="link-icon" />
    </Link>
  );
}

LinkBtn.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

import PropType from "prop-types";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function PathToggleBtn({ setNumToShow, educationData }) {
  const [showMore, setShowMore] = useState(false);

  function toggleShow() {
    setShowMore((prevShowMore) => !prevShowMore);
    setNumToShow(showMore ? 3 : educationData.length);
  }
  return (
    <div className="show-button" onClick={toggleShow}>
      <FaChevronDown
        className={
          showMore ? "show-icon show-icon--up" : "show-icon show-icon--down"
        }
      />
      {showMore ? "Show Less" : "Show All"}
    </div>
  );
}

PathToggleBtn.propTypes = {
  setNumToShow: PropType.func.isRequired,
  educationData: PropType.array.isRequired,
};

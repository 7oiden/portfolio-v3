import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";

export default function PathToggleBtn({ setNumToShow, dataArr }) {
  const [showMore, setShowMore] = useState(false);

  function toggleShow() {
    setShowMore((prevShowMore) => !prevShowMore);
    setNumToShow(showMore ? 3 : dataArr.length);
  }

  const AnimatedArrow = animated(FaChevronDown);

  const rotateIcon = useSpring({
    transform: showMore ? `rotate(180deg)` : `rotate(0deg)`,
  });

  return (
    <div className="show-button" onClick={toggleShow}>
      <AnimatedArrow
        style={{ ...rotateIcon }}
        className="arrow-icon arrow-icon-path"
      />
      <span>{showMore ? "Show Less" : "Show All"}</span>
    </div>
  );
}

PathToggleBtn.propTypes = {
  setNumToShow: PropTypes.func.isRequired,
  dataArr: PropTypes.array.isRequired,
};

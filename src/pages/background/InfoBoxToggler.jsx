import PropTypes from "prop-types";
import { useSpring, animated } from "@react-spring/web";
import { FaChevronDown } from "react-icons/fa6";

export default function InfoBoxToggler({
  id,
  isSelected,
  setIsSelected,
  children,
  position = "left",
}) {
  function handleSelection(getCurrentId) {
    setIsSelected(getCurrentId === isSelected ? null : getCurrentId);
  }

  const AnimatedArrow = animated(FaChevronDown);

  const styles = {
    marginRight: position === "left" ? "auto" : "0",
    marginLeft: position === "right" ? "auto" : "0",
  };

  const rotateIcon = useSpring({
    transform: isSelected === id ? `rotate(180deg)` : `rotate(0deg)`,
  });

  return (
    <div
      className="info-toggler"
      onClick={() => handleSelection(id)}
      style={styles}
    >
      <span>{children}</span>
      <AnimatedArrow style={{ ...rotateIcon }} className="arrow-icon" />
    </div>
  );
}

InfoBoxToggler.propTypes = {
  setIsSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.number,
  children: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.number.isRequired,
};

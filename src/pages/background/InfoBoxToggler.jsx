import PropTypes from "prop-types";
import { useSpring, animated } from "@react-spring/web";
import { FaChevronDown } from "react-icons/fa6";

export default function InfoBoxToggler({
  id,
  isSelected,
  setIsSelected,
  children,
}) {
  function handleSelection(getCurrentId) {
    setIsSelected(getCurrentId === isSelected ? null : getCurrentId);
  }

  const AnimatedArrow = animated(FaChevronDown);

  const rotateIcon = useSpring({
    transform: isSelected === id ? `rotate(180deg)` : `rotate(0deg)`,
  });

  return (
    <div onClick={() => handleSelection(id)}>
      <span>{children}</span>
      <AnimatedArrow style={{ ...rotateIcon }} className="arrow-icon" />
    </div>
  );
}

InfoBoxToggler.propTypes = {
  setIsSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.number,
  children: PropTypes.string,
  id: PropTypes.number.isRequired,
};

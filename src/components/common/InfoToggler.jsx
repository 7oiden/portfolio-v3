import PropTypes from "prop-types";
import { useSpring, animated } from "@react-spring/web";
import { FaChevronDown } from "react-icons/fa6";

export default function InfoToggler({
  isOpen,
  setIsOpen,
  children,
  position = "left",
}) {
  
  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  const AnimatedArrow = animated(FaChevronDown);

  const styles = {
    marginRight: position === "left" ? "auto" : "0",
    marginLeft: position === "right" ? "auto" : "0",
  };

  const rotateIcon = useSpring({
    transform: isOpen ? `rotate(180deg)` : `rotate(0deg)`,
  });

  return (
    <div className="info-toggler" onClick={handleToggle} style={styles}>
      <span>{children}</span>
      <AnimatedArrow style={{ ...rotateIcon }} className="arrow-icon" />
    </div>
  );
}

InfoToggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.string,
  position: PropTypes.string,
};

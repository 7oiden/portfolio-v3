import PropType from "prop-types";

import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function InfoToggler({ isOpen, setIsOpen, children }) {
  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="info-toggler" onClick={handleToggle}>
      <span>{children}</span>
      <MdOutlineArrowForwardIos
        className={
          isOpen ? "arrow-icon arrow-icon--up" : "arrow-icon arrow-icon--down"
        }
      />
    </div>
  );
}

InfoToggler.propTypes = {
  isOpen: PropType.bool.isRequired,
  setIsOpen: PropType.func.isRequired,
  children: PropType.string,
};

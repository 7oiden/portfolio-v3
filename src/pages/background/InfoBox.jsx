import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function InfoBox({
  title,
  date,
  institution,
  description,
  url,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="path__info">
      <div className="triangle-left"></div>
      {isOpen && <div className="path__date">{date}</div>}
      <Heading size="3" cssClass="path-heading">
        {title}
      </Heading>
      <div className="path-sub-heading-container">
        <Heading size="4" cssClass="path-sub-heading">
          {institution}
        </Heading>
        <MdOutlineArrowForwardIos
          className={
            isOpen ? "arrow-icon arrow-icon--up" : "arrow-icon arrow-icon--down"
          }
          onClick={handleToggle}
        />
      </div>
      {isOpen && (
        <div className="paragraph-container">
          <p>{description}</p>
          <Link to={url} className="path__link">
            Link
          </Link>
        </div>
      )}
    </div>
  );
}

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  url: PropTypes.string,
};

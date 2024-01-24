import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function InfoBox({
  id,
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

  const cssClass = id % 2 === 0 ? "path__info--even" : "path__info--odd";

  const triangleEl =
    id % 2 === 0 ? (
      <div className="triangle-left"></div>
    ) : (
      <div className="triangle-right"></div>
    );

  return (
    <div className={`path__info ${cssClass}`}>
      {triangleEl}
      <div className="triangle-default"></div>
      {isOpen && <div className="path__date--mobile">{date}</div>}
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
          <p className="path__body-text">{description}</p>
          {url && (
            <Link to={url} className="path__link">
              Link
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

InfoBox.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  url: PropTypes.string,
};

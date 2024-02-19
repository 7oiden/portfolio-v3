import PropTypes from "prop-types";
import InfoBox from "./InfoBox";
import { cloneElement } from "react";

export default function PathSegment({
  id,
  title,
  date,
  institution,
  description,
  url,
  icon,
  isSelected,
  setIsSelected,
}) {
  const dateEl =
    id % 2 === 0 ? (
      <div className="path__date path__date--left">{date}</div>
    ) : (
      <div className="path__date path__date--right">{date}</div>
    );

  return (
    <>
      <div className="path__vert-line"></div>
      <div className="path__icon-container">
        {cloneElement(icon, { className: "path__icon" })}
      </div>
      {dateEl}
      <InfoBox
        key={id}
        id={id}
        title={title}
        date={date}
        institution={institution}
        description={description}
        url={url}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    </>
  );
}

PathSegment.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  url: PropTypes.string,
  cssClass: PropTypes.string,
  icon: PropTypes.element,
  isSelected: PropTypes.number,
  setIsSelected: PropTypes.func,
};

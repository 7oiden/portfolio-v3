import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import InfoToggler from "../../components/InfoToggler";
import { useState } from "react";
import LinkBtn from "../../components/LinkBtn";
import { useSpring, animated } from "@react-spring/web";

export default function InfoBox({
  id,
  title,
  date,
  institution,
  description,
  url,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const textAppear = useSpring({
    maxHeight: isOpen ? "500px" : "0px",
    opacity: isOpen ? 1 : 0,
  });

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
      {isOpen && (
        <animated.div className="path__date--mobile" style={{ ...textAppear }}>
          {date}
        </animated.div>
      )}
      <Heading size="3" cssClass="path-heading">
        {title}
      </Heading>
      <div className="path-sub-heading-container">
        <Heading size="4" cssClass="path-sub-heading">
          {institution}
        </Heading>
        <InfoToggler isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen ? (
        <animated.div
          className="paragraph-container path-info-body"
          style={{ ...textAppear }}
        >
          {description.map((paragraph, index) => (
            <animated.p className="path__body-text" key={index}>
              {paragraph}
            </animated.p>
          ))}
          {url && (
            <LinkBtn url={url} className="path__link" size="sm">
              More info
            </LinkBtn>
          )}
        </animated.div>
      ) : null}
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

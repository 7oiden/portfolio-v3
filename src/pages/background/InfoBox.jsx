import PropTypes from "prop-types";
import Heading from "../../components/common/Heading";
import InfoToggler from "../../components/common/InfoToggler";
import { useState } from "react";
import LinkBtn from "../../components/common/LinkBtn";
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

  const cssClass = id % 2 === 0 ? null : "info-box--odd";

  const triangleEl =
    id % 2 === 0 ? (
      <div className="info-box__marker info-box__marker--left"></div>
    ) : (
      <div className="info-box__marker info-box__marker--right"></div>
    );

  return (
    <div className={`info-box ${cssClass}`}>
      {triangleEl}
      <div className="info-box__marker info-box__marker--default"></div>
      {isOpen && (
        <animated.div className="path__date--mobile" style={{ ...textAppear }}>
          {date}
        </animated.div>
      )}
      <Heading size="3" cssClass="info-box__heading">
        {title}
      </Heading>
      <div className="info-box__header">
        <Heading size="4" cssClass="info-box__sub-heading">
          {institution}
        </Heading>
        <InfoToggler isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen ? (
        <animated.div
          className="paragraph-container info-box__body"
          style={{ ...textAppear }}
        >
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {url && (
            <LinkBtn url={url} size="sm">
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

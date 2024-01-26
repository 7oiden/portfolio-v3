import PropTypes from "prop-types";
import Heading from "../../components/Heading";
import { MdOutlineArrowForwardIos } from "react-icons/md";
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

  const dateSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    config: { duration: 1000 },
  });

  const springs2 = useSpring({
    from: { height: 0 },
    to: { height: "auto" },
    reset: true,
  });

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
      {isOpen && (
        <animated.div className="path__date--mobile" style={{ ...dateSpring }}>
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
        <MdOutlineArrowForwardIos
          className={
            isOpen ? "arrow-icon arrow-icon--up" : "arrow-icon arrow-icon--down"
          }
          onClick={handleToggle}
        />
      </div>
      {isOpen && (
        <animated.div className="paragraph-container" style={{ ...springs2 }}>
          {description.map((paragraph, index) => (
            <p className="path__body-text" key={index}>
              {paragraph}
            </p>
          ))}
          {url && (
            <LinkBtn url={url} className="path__link" size="sm">
              More info
            </LinkBtn>
          )}
        </animated.div>
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

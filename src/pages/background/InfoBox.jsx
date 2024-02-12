import PropTypes from "prop-types";
import Heading from "../../components/common/Heading";
import InfoBoxToggler from "./InfoBoxToggler";
import LinkBtn from "../../components/common/LinkBtn";
import { useSpring, animated } from "@react-spring/web";

export default function InfoBox({
  id,
  title,
  date,
  institution,
  description,
  url,
  isSelected,
  setIsSelected,
}) {
  const expandInfo = useSpring({
    maxHeight: isSelected === id ? "500px" : "0px",
    opacity: isSelected === id ? "1" : "0",
    config: { duration: 250 },
  });

  const showDate = useSpring({
    opacity: isSelected === id ? "1" : "0",
    config: { duration: 250 },
  });

  const cssClass = id % 2 === 0 ? "" : "info-box--odd";

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
      {isSelected === id && (
        <animated.div className="path__date--mobile" style={{ ...showDate }}>
          {date}
        </animated.div>
      )}
      <div className="info-box__header">
        <Heading size="3" cssClass="info-box__heading">
          {title}
        </Heading>
        <div className="info-box__expander">
          <Heading size="4" cssClass="info-box__sub-heading">
            {institution}
          </Heading>
          <InfoBoxToggler
            id={id}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            position="right"
            aria-expanded={isSelected}
            aria-controls="content-to-toggle"
          />
        </div>
      </div>
      <animated.div
        className="paragraph-container"
        style={{ ...expandInfo }}
        id="content-to-toggle"
      >
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {url && (
          <LinkBtn url={url} size="sm">
            More info
          </LinkBtn>
        )}
        <div className="info-box__bottom"></div>
      </animated.div>
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
  isSelected: PropTypes.number,
  setIsSelected: PropTypes.func,
};

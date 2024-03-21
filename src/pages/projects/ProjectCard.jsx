import PropTypes from "prop-types";
import { useState } from "react";
import Heading from "../../components/common/Heading";
import TextBadge from "../../components/common/TextBadge";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SiNetlify } from "react-icons/si";
import InfoToggler from "../../components/common/InfoToggler";
import { useSpring, animated } from "@react-spring/web";
import LinkBtn from "../../components/common/LinkBtn";
import { MdArrowForward } from "react-icons/md";

export default function ProjectCard({
  image,
  imageAlt,
  title,
  type,
  date,
  description,
  tools,
  siteUrl,
  codeUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const AnimatedIcon = animated(MdArrowForward);

  const [springs, api] = useSpring(() => ({
    from: { x: 0, y: 0, transform: "rotate(-45deg)" },
  }));

  const handleHover = () => {
    api.start({
      x: 6,
      y: -6,
      delay: 250,
    });
  };

  const handleHoverExit = () => {
    api.start({
      x: 0,
      y: 0,
      loop: false,
    });
  };

  const textAppear = useSpring({
    maxHeight: isOpen ? "180px" : "0",
    opacity: isOpen ? "1" : "0",
    config: { duration: 250 },
  });

  return (
    <div className="project">
      <div className="project__col">
        <div className="project__date">
          <p>{date}</p>
          <MdOutlineKeyboardDoubleArrowRight className="project__date-icon" />
        </div>
        <Link
          to={siteUrl}
          className={
            siteUrl ? "project__link" : "project__link project__link--disabled"
          }
          onMouseEnter={siteUrl ? handleHover : null}
          onMouseLeave={siteUrl ? handleHoverExit : null}
        >
          <div className="project__image">
            <img src={image} alt={imageAlt} className="project__image" />
          </div>
          <div className="mobile__icon">
            <MdArrowForward
              size="1.5rem"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>
          {siteUrl && (
            <div className="project__overlay">
              <span>Go to live site at:</span>
              <div className="overlay__body">
                <SiNetlify size="1.5rem" />
                <span className="overlay__text">Netlify</span>
                <AnimatedIcon size="1.5rem" style={{ ...springs }} />
              </div>
            </div>
          )}
        </Link>
      </div>
      <div className="card">
        <div className="card__header">
          <hgroup>
            <Heading size="3" cssClass="card__heading">
              {title}
            </Heading>
            <Heading size="4" cssClass="card__sub-heading">
              {type}
            </Heading>
          </hgroup>
          <LinkBtn url={codeUrl} icon size="md" position="right">
            GitHub
          </LinkBtn>
        </div>
        <div className="card__body">
          <p>{description[0]}</p>
          {description.length > 1 && (
            <animated.div style={{ ...textAppear }}>
              <p id="content-to-toggle" className="card__hidden mb">
                {description[1]}
              </p>
            </animated.div>
          )}
        </div>
        {description.length > 1 && (
          <InfoToggler
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            position="left"
            aria-expanded={isOpen}
            aria-controls="content-to-toggle"
          >
            {isOpen ? "Show less" : "Read more"}
          </InfoToggler>
        )}
        <div className="badge-grid">
          {tools.map((tool) => (
            <TextBadge key={tool}>{tool}</TextBadge>
          ))}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  siteUrl: PropTypes.string,
  codeUrl: PropTypes.string,
  tools: PropTypes.array.isRequired,
};

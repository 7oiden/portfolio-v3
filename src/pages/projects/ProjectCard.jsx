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

  const textAppear = useSpring({
    maxHeight: isOpen ? "500px" : "0px",
    opacity: isOpen ? 1 : 0,
  });

  return (
    <div className="project">
      <div className="project__col">
        <div className="project__date">
          <p>{date}</p>
          <MdOutlineKeyboardDoubleArrowRight className="project__date-icon" />
        </div>
        <Link to={siteUrl} className="project__link">
          <div className="project__image">
            <img src={image} alt={imageAlt} className="project__image" />
          </div>
          <div className="mobile__icon">
            <MdArrowForward
              size="1.5rem"
              style={{ transform: "rotate(-45deg)" }}
            />
          </div>
          <div className="project__overlay">
            <span>Go to live site at:</span>
            <div className="overlay__body">
              <SiNetlify size="1.5rem" />
              <span className="overlay__text">Netlify</span>
              <MdArrowForward
                size="1.5rem"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>
          </div>
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
        <div className="paragraph-container">
          <p>{description[0]}</p>
          {isOpen && (
            <animated.p style={{ ...textAppear }}>{description[1]}</animated.p>
          )}
          <InfoToggler isOpen={isOpen} setIsOpen={setIsOpen} position="left">
            {isOpen ? "Show less" : "Read more"}
          </InfoToggler>
        </div>
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
  siteUrl: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
};

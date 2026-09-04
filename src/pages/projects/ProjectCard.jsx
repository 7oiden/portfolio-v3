import PropTypes from "prop-types";
import classNames from "classnames";
import Heading from "../../components/common/Heading";
import TextBadge from "../../components/common/TextBadge";
import { Link } from "react-router-dom";
import {
  MdArrowForward,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import LinkBtn from "../../components/common/LinkBtn";

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
  featured = false,
  compact = false,
}) {
  const hasRepo = Boolean(codeUrl && String(codeUrl).trim());
  const paragraphs = compact ? description.slice(0, 1) : description;

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

  return (
    <div
      className={classNames("project", {
        "project--featured": featured,
        "project--archive": compact,
      })}
    >
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
            <img src={image} alt={imageAlt} />
          </div>
          {siteUrl && (
            <div className="mobile__icon">
              <span>Go to the live site</span>
              <MdArrowForward
                size="1.25rem"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>
          )}
          {siteUrl && (
            <div className="project__overlay">
              <div className="overlay__body">
                <span>Visit live site</span>
                <AnimatedIcon size="1.5rem" style={{ ...springs }} />
              </div>
            </div>
          )}
        </Link>
      </div>
      <div className="card">
        <div className="card__header">
          <hgroup>
            <Heading size="4" cssClass="card__sub-heading">
              {type}
            </Heading>
            <Heading size="3" cssClass="card__heading">
              {title}
            </Heading>
          </hgroup>
          {hasRepo && (
            <LinkBtn
              url={codeUrl}
              icon
              size={compact ? "sm" : "md"}
              position="right"
            >
              GitHub
            </LinkBtn>
          )}
        </div>
        <div className="card__text">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
  siteUrl: PropTypes.string,
  codeUrl: PropTypes.string,
  tools: PropTypes.array.isRequired,
  featured: PropTypes.bool,
  compact: PropTypes.bool,
};

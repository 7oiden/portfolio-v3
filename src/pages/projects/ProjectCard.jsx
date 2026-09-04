import PropTypes from "prop-types";
import classNames from "classnames";
import Heading from "../../components/common/Heading";
import TextBadge from "../../components/common/TextBadge";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
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
        <div className="project__image">
          <img src={image} alt={imageAlt} />
        </div>
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
          {!compact && siteUrl && (
            <LinkBtn url={siteUrl} size="md" position="right">
              Live site
            </LinkBtn>
          )}
          {compact && hasRepo && (
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

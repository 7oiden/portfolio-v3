import PropTypes from "prop-types";

export default function BannerText({ status, children }) {
  let textClass = `banner__text banner__text--${status.toLowerCase()}`;

  return children ? <p className={textClass}>{children}</p> : null;
}

BannerText.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.string,
};

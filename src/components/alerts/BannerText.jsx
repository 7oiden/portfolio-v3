import PropTypes from "prop-types";

export default function BannerHeading({ status, children }) {
  let textClass = `banner__text banner__text--${status.toLowerCase()}`;

  return children ? <p className={textClass}>{children}</p> : null;
}

BannerHeading.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.string,
};

import PropTypes from "prop-types";

export default function BannerHeading({ status, heading }) {
  let headingClass = `banner__heading banner__heading--${status.toLowerCase()}`;

  return <p className={headingClass}>{heading}</p>;
}

BannerHeading.propTypes = {
  status: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

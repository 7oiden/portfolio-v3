import classnames from "classnames";
import PropTypes from "prop-types";
import BannerIcon from "./BannerIcon";
import BannerHeading from "./BannerHeading";
import BannerText from "./BannerText";

export default function Banner({ children, status, heading }) {
  let statusClass = `banner--${status.toLowerCase()}`;
  const allClasses = classnames("banner", statusClass);

  return (
    <div className={allClasses}>
      <BannerIcon status={status} />
      <BannerHeading status={status} heading={heading} />
      <BannerText status={status}>{children}</BannerText>
    </div>
  );
}

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.string,
  status: PropTypes.oneOf(["info", "warning", "success", "error"]),
};

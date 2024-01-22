import PropTypes from "prop-types";
import InfoBox from "./InfoBox";
import { SiScrimba } from "react-icons/si";

export default function PathSegment({
  title,
  date,
  institution,
  description,
  url,
}) {
  return (
    <div className="path">
      <div className="path__icon-container path-1">
        <SiScrimba className="path-icon" />
      </div>
      <div className="path__date">{date}</div>
      <InfoBox
        title={title}
        institution={institution}
        description={description}
        url={url}
      />
    </div>
  );
}

PathSegment.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  url: PropTypes.string,
};

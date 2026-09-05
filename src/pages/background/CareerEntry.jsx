import PropTypes from "prop-types";
import { MdArrowForward } from "react-icons/md";
import { useLocale } from "../../i18n/useLocale";

export default function CareerEntry({ title, org, date, summary, url }) {
  const { copy } = useLocale();

  return (
    <li className="career__item">
      <p className="career__date">{date}</p>
      <div className="career__body">
        <h3 className="career__title">{title}</h3>
        <p className="career__org">{org}</p>
        <p className="career__summary">{summary}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="career__link"
          >
            {copy.common.moreInfo}
            <MdArrowForward className="career__link-icon" />
          </a>
        )}
      </div>
    </li>
  );
}

CareerEntry.propTypes = {
  title: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  url: PropTypes.string,
};

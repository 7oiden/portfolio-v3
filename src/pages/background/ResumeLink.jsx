import { FaFileDownload } from "react-icons/fa";
import { useLocale } from "../../i18n/useLocale";
import { site } from "../../config/site";

export default function ResumeLink() {
  const { copy } = useLocale();

  return (
    <a
      href={site.resumeUrl}
      target="_blank"
      rel="noreferrer"
      className="button career__resume"
      aria-label={copy.career.downloadLabel}
    >
      {copy.career.download}
      <FaFileDownload className="download-file-icon" />
    </a>
  );
}

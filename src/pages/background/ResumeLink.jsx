import { FaFileDownload } from "react-icons/fa";
import { useLocale } from "../../i18n/useLocale";

const RESUME_URL =
  "https://res.cloudinary.com/dhd2paq70/raw/upload/v1707309298/CV_Tommy_Johnsen_2024_ynhshb.docx";

export default function ResumeLink() {
  const { copy } = useLocale();

  return (
    <a
      href={RESUME_URL}
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

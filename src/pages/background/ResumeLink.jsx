import { FaFileDownload } from "react-icons/fa";

const RESUME_URL =
  "https://res.cloudinary.com/dhd2paq70/raw/upload/v1707309298/CV_Tommy_Johnsen_2024_ynhshb.docx";

export default function ResumeLink() {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noreferrer"
      className="button career__resume"
      aria-label="Download my résumé"
    >
      Download résumé
      <FaFileDownload className="download-file-icon" />
    </a>
  );
}

import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";

export default function ResumeLink() {
  return (
    <div className="resume">
      <Link
        to="https://res.cloudinary.com/dhd2paq70/raw/upload/v1706536450/CV_Tommy_Johnsen_-_2024_jrq8no.docx"
        className="resume__link"
      >
        Download my full résumé <FaFilePdf />
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

export default function ResumeLink() {
  const [springs, api] = useSpring(() => ({
    from: { y: 0 },
  }));

  const handleHover = () => {
    api.start({
      y: 6,
    });
  };

  const handleHoverExit = () => {
    api.start({
      y: 0,
    });
  };

  const AnimatedIcon = animated(FaFileDownload);

  return (
    <div className="resume">
      <Link
        to="https://res.cloudinary.com/dhd2paq70/raw/upload/v1707309298/CV_Tommy_Johnsen_2024_ynhshb.docx"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        className="resume__link"
        aria-label="Download my full résumé"
      >
        Download my full résumé{" "}
        <AnimatedIcon style={{ ...springs }} className="download-file-icon" />
      </Link>
    </div>
  );
}

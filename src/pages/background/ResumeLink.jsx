import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

export default function ResumeLink() {
  const [springs, api] = useSpring(() => ({
    from: { y: 0 },
  }));

  const handleHover = () => {
    api.start({
      y: -6,
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
        to="https://res.cloudinary.com/dhd2paq70/raw/upload/v1706536450/CV_Tommy_Johnsen_-_2024_jrq8no.docx"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        className="resume__link"
      >
        Download my full résumé{" "}
        <AnimatedIcon style={{ ...springs }} className="file-icon" />
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function MediaLinks() {
  return (
    <div className="media-links">
      <Link to="https://github.com/7oiden">
        <FaGithub className="brand-icon" />
      </Link>
      <Link to="https://www.instagram.com/7oiden/">
        <FaInstagram className="brand-icon" />
      </Link>
      <Link to="https://www.linkedin.com/in/tommy-j-16b56678/">
        <FaLinkedinIn className="brand-icon" />
      </Link>
    </div>
  );
}

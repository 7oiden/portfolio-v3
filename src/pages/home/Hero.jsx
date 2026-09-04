import { useEffect, useState } from "react";
import Heading from "../../components/common/Heading";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import MediaLinks from "../../components/common/MediaLinks";
import LinkBtn from "../../components/common/LinkBtn";
import { MdArrowForward } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { realProjectData } from "../../constants/projectData";

export default function Hero() {
  const featuredProject = realProjectData[0];
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollCue(window.scrollY <= 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <MediaLinks cssClass="hero__media-links" />
          <hgroup className="hero__hgroup">
            <Heading size="1" cssClass="hero__heading--main">
              Tommy Johnsen<span className="hero__heading--dot">.</span>
            </Heading>
            <Heading size="2" cssClass="hero__heading--sub">
              Frontend developer building websites and apps for local
              businesses.
            </Heading>
          </hgroup>
          <div className="hero__actions">
            <HashLink
              smooth
              to="/about#contact"
              className="button hero__button"
            >
              Get in touch
            </HashLink>
            <LinkBtn url="projects" size="md">
              View work
            </LinkBtn>
          </div>
        </div>
        <Link to="projects" className="hero__feature">
          <img
            src={featuredProject.image}
            alt={`${featuredProject.title} website`}
            className="hero__feature-image"
          />
          <div className="hero__feature-meta">
            <span className="hero__feature-label">Latest work</span>
            <span className="hero__feature-title">
              {featuredProject.title}
              <MdArrowForward className="hero__feature-icon" />
            </span>
          </div>
        </Link>
      </div>
      <HashLink
        smooth
        to="/#intro"
        className={`hero__scroll-down ${
          showScrollCue ? "" : "hero__scroll-down--hidden"
        }`}
        aria-hidden={!showScrollCue}
        tabIndex={showScrollCue ? undefined : -1}
      >
        <span>Scroll down</span>
        <FaArrowRightLong className="hero__scroll-down-icon" />
      </HashLink>
    </section>
  );
}

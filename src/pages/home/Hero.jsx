import { useEffect, useState } from "react";
import Heading from "../../components/common/Heading";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import MediaLinks from "../../components/common/MediaLinks";
import LinkBtn from "../../components/common/LinkBtn";
import { MdArrowForward } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { getRealProjectData } from "../../constants/projectData";
import { useLocale } from "../../i18n/useLocale";

export default function Hero() {
  const { locale, copy } = useLocale();
  const featuredProject = getRealProjectData(locale)[0];
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
              {copy.home.hero.subtitle}
            </Heading>
          </hgroup>
          <div className="hero__actions">
            <HashLink
              smooth
              to="/about#contact"
              className="button hero__button"
            >
              {copy.home.hero.getInTouch}
            </HashLink>
            <LinkBtn url="/projects" size="md" horizontalArrow>
              {copy.home.hero.viewWork}
            </LinkBtn>
          </div>
        </div>
        <Link to="/projects" className="hero__feature">
          <img
            src={featuredProject.image}
            alt={`${featuredProject.title} ${copy.home.hero.imageSuffix}`}
            className="hero__feature-image"
          />
          <div className="hero__feature-meta">
            <span className="hero__feature-label">
              {copy.home.hero.latestWork}
            </span>
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
        aria-label={copy.home.hero.scrollDown}
      >
        <FiChevronDown className="hero__scroll-down-icon" aria-hidden="true" />
      </HashLink>
    </section>
  );
}

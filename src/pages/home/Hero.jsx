import { useEffect, useRef } from "react";
import Heading from "../../components/common/Heading";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import MediaLinks from "../../components/common/MediaLinks";
import LinkBtn from "../../components/common/LinkBtn";
import { useSpring, animated } from "@react-spring/web";
import {
  MdArrowForward,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { realProjectData } from "../../constants/projectData";

export default function Hero() {
  const featuredProject = realProjectData[0];

  const arrow = useSpring({
    from: { x: 0 },
    to: { x: 15 },
    config: { duration: 900 },
    loop: { reverse: true },
  });

  const AnimatedIcon = animated(MdOutlineKeyboardDoubleArrowRight);

  const prevScrollY = useRef(0);

  const [scroll, api] = useSpring(() => ({
    from: {
      display: "block",
    },
  }));

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 10) {
      api.start({
        to: { display: "none" },
        config: { duration: 100 },
      });
    } else {
      api.start({
        to: { display: "block" },
        config: { duration: 100 },
      });
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__container">
          <div className="hero__content">
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
        <MediaLinks cssClass="hero__media-links" />
      </div>
      <HashLink smooth to="/#intro" className="hero__scroll-down">
        <AnimatedIcon style={{ ...scroll, ...arrow }} />
      </HashLink>
    </section>
  );
}

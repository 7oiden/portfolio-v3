import { useEffect, useRef } from "react";
import Heading from "../../components/common/Heading";
import { HashLink } from "react-router-hash-link";
import MediaLinks from "../../components/common/MediaLinks";
import { ReactTyped } from "react-typed";
import { useSpring, animated } from "@react-spring/web";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Hero() {
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
      // Scrolling down
      api.start({
        to: { display: "none" },
        config: { duration: 100 },
      });
    } else {
      // At top of page
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
              <ReactTyped
                strings={["Hello, my name is"]}
                typeSpeed={75}
                showCursor={true}
                className="hero__heading--top"
              />
              {/* <div className="hero__heading--top">Hello, my name is</div> */}
              <Heading size="1" cssClass="hero__heading--main">
                Tommy Johnsen<span className="hero__heading--dot">.</span>
              </Heading>
              <Heading size="2" cssClass="hero__heading--sub">
                Frontend Developer, with a passion for creating great user
                experiences.
              </Heading>
            </hgroup>
            <HashLink smooth to="/about#contact" className="hero__button">
              Get in touch
            </HashLink>
          </div>
        </div>
        <MediaLinks cssClass="hero__media-links" />
      </div>
      <HashLink smooth to="/#intro" className="hero__scroll-down">
        <AnimatedIcon style={{ ...scroll, ...arrow }} />
      </HashLink>
    </section>
  );
}

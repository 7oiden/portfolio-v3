import Heading from "../../components/common/Heading";
import { HashLink } from "react-router-hash-link";
import MediaLinks from "../../components/common/MediaLinks";
import { MdArrowForward } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";

export default function Hero() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleHover = () => {
    api.start({
      x: 8,
    });
  };

  const handleHoverExit = () => {
    api.start({
      x: 0,
    });
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <hgroup className="hero__hgroup">
            {/* <div className="hero__heading--thin">Hi, my name is</div> */}
            <Heading size="1" cssClass="hero__heading--main">
              Tommy Johnsen<span className="hero__heading--dot">.</span>
            </Heading>
            <Heading size="2" cssClass="hero__heading--sub">
              Frontend Developer
            </Heading>
          </hgroup>
          <HashLink
            smooth
            to="/about#contact"
            className="hero__button"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            Get in touch
            <animated.div style={{ ...springs }}>
              <MdArrowForward className="hero__arrow-icon" />
            </animated.div>
          </HashLink>
        </div>
      </div>
      <MediaLinks cssClass="hero__media-links" />
    </section>
  );
}

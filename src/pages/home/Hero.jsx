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
          <Heading size="1" cssClass="hero__heading">
            Hi, I am <span>Tommy</span> frontend developer
          </Heading>
          <HashLink
            smooth
            to="/about#contact"
            className="hero__button"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            <span>Get in touch</span>
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

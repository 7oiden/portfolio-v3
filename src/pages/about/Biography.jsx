import Heading from "../../components/common/Heading";
import mapPng from "../../assets/images/norway2.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { MdArrowForward } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
export default function Biography() {
  const [springMap, apiMap] = useSpring(() => ({
    from: { opacity: 0.15 },
  }));

  const [springLink, apiLink] = useSpring(() => ({
    from: { color: "#66b0d8" },
  }));

  const [springCircle, apiCircle] = useSpring(() => ({
    from: { scale: 1, border: "2px solid #66b0d8" },
  }));

  const [springDot, apiDot] = useSpring(() => ({
    from: { backgroundColor: "#66b0d8" },
  }));

  const [springText, apiText] = useSpring(() => ({
    from: { opacity: 0 },
  }));

  const handleHover = () => {
    apiMap.start({
      opacity: 0.25,
    });
    apiLink.start({
      color: "#38bdf8",
    });
    apiCircle.start({
      scale: 1.25,
      border: "2px solid #38bdf8",
    });
    apiDot.start({
      backgroundColor: "#38bdf8",
    });
    apiText.start({
      opacity: 1,
    });
  };

  const handleHoverExit = () => {
    apiMap.start({
      opacity: 0.15,
    });
    apiLink.start({
      color: "#66b0d8",
    });
    apiCircle.start({
      scale: 1,
      border: "2px solid #66b0d8",
    });
    apiDot.start({
      backgroundColor: "#66b0d8",
    });
    apiText.start({
      opacity: 0,
    });
  };

  const AnimatedLink = animated(Link);

  return (
    <section className="section-wrapper biography">
      <Heading size="2" cssClass="section-heading">
        Biography
      </Heading>
      <div className="biography__wrapper">
        <div className="paragraph-container">
          <p>
            I am originally from Sunnmøre, but moved to <em>Bergen</em> in 2004
            to study, and has been living in the Bergen area more or less since.
          </p>
          <p>
            Previously i have more than
            <em> 10 years of experience as an engineer</em> in the construction
            industry, where i in the later years was in charge of several large
            and complex projects.
          </p>
          <p>
            In 2020 i decided to pursue a new career as a frontend-developer by
            enrolling in <em>Noroff's</em> frontend-programme as an full-time
            online student.
          </p>
          <p>
            I love that as <em>frontend-developer</em> i get to use my former
            conditioning in logics, analytical thinking and problem solving as
            well as being able to express my more creative and esthetic sides;
            the latter something i always missed in my previous line of work.
          </p>
          <p>
            As a person i am open-minded, self-reflected and curios, and i am
            always thirsting for knowledge and <em>eager to learn</em> new
            things to expand my horizon; both as a person and as a professional.
          </p>
        </div>
        <div className="map-image">
          <animated.img src={mapPng} style={{ ...springMap }} />
          <AnimatedLink
            to="https://maps.app.goo.gl/GPHnNxc53yVv1Uv5A"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            className="location-marker"
            style={{ ...springLink }}
          >
            <div className="location-marker__container">
              <animated.div
                className="location-marker__circle"
                style={{
                  ...springCircle,
                  // border: springCircle.border.to((border) => border),
                }}
              >
                <animated.div
                  className="location-marker__dot"
                  style={{ ...springDot }}
                ></animated.div>
              </animated.div>
              <animated.div
                className="location-marker__text"
                style={{ ...springText }}
              >
                Where I live
                <MdArrowForward className="location-marker__icon" />
              </animated.div>
            </div>
          </AnimatedLink>
        </div>
      </div>
    </section>
  );
}

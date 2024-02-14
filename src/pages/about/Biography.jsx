import Heading from "../../components/common/Heading";
import mapPng from "../../assets/images/norway2.png";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { MdArrowForward } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

/* eslint-disable react/no-unescaped-entities */
export default function Biography() {
  const [springMap, apiMap] = useSpring(() => ({
    from: { opacity: 0.2 },
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
      opacity: 0.3,
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
      opacity: 0.2,
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
            Originally from the picturesque landscapes of Sunnmøre, I embarked
            on a journey to <em>Bergen</em> in 2004 to pursue higher education,
            and has been living in the Bergen area (more or less) ever since.
          </p>
          <p>
            I have over a decade of <em>experience as an engineer </em>in the
            dynamic realm of construction, where I was conducting large and
            intricate projects especially in the latter part of my career.
          </p>
          <p>
            The year 2020 marked a <em>pivotal moment</em> as I decided to chart
            a new course, transitioning into the exciting world of frontend
            development. Enrolling in <em>Noroff's</em> comprehensive frontend
            program as a full-time online student, I embraced the challenge and
            opportunity for growth.
          </p>
          <p>
            What captivates me most about being a <em>frontend developer</em> is
            the perfect blend of logical reasoning, analytical thinking, and
            creative expression. It's a space where I can leverage my
            problem-solving skills while giving life to my artistic inclinations
            — a facet I yearned for in my previous professional endeavors.
          </p>
          <p>
            Beyond my technical prowess, I embody an open-minded,
            self-reflective, and curious spirit. I harbor an innate thirst for
            knowledge and remain perpetually <em>eager to learn</em>,
            consistently expanding my horizons—both as an individual and as a
            dedicated professional.
          </p>
        </div>
        <div className="map-image">
          <div className="test">
            <div>Home</div>
            <MdOutlineKeyboardDoubleArrowRight className="location-marker__arrow" />
          </div>
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
                Google Maps
                <MdArrowForward className="location-marker__icon" />
              </animated.div>
            </div>
          </AnimatedLink>
        </div>
      </div>
    </section>
  );
}

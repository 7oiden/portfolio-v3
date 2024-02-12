import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";

export default function PageScrollBtn() {
  const [springs, api] = useSpring(() => ({
    from: { width: "0", transform: "translate(50%, 50%)" },
  }));

  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      // Scrolling down
      api.start({
        to: { width: "0" },
        config: { duration: 100 },
      });
    } else if (currentScrollY < 100) {
      // At top of page
      api.start({
        to: { width: "0" },
        config: { duration: 100 },
      });
    } else {
      // Scrolling up
      api.start({
        to: { width: "100px" },
        config: { duration: 100 },
      });
    }

    prevScrollY.current = currentScrollY;
  };

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <animated.div
      className="page-scroll"
      onClick={handleScrollToTop}
      style={{ ...springs }}
    >
      <div className="page-scroll__container">
        <span className="page-scroll__text">To top</span>
        <FaArrowRightLong className="page-scroll__icon" size={20} />
      </div>
    </animated.div>
  );
}

import { useEffect, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";

export default function PageScroll() {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translate(50%, 50%)" },
  }));

  const prevScrollY = useRef(0);

  console.log(prevScrollY);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      // Scrolling down
      api.start({
        to: { opacity: 0 },
        config: { duration: 200 },
      });
    } else if (currentScrollY < 100) {
      // At top of page
      api.start({
        to: { opacity: 0 },
        config: { duration: 200 },
      });
    } else {
      // Scrolling up
      api.start({
        to: { opacity: 1 },
        config: { duration: 200 },
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
      <FaArrowUpLong className="page-scroll__icon" />
    </animated.div>
  );
}

import { useEffect } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";

export default function PageScroll() {
  const AnimatedIcon = animated(FaCircleArrowDown);

  const [springs, api] = useSpring(() => ({
    from: { transform: "rotate(0deg)" },
  }));

  const handleScroll = () => {
    if (window.scrollY > 100) {
      api.start({
        to: { transform: "rotate(180deg)" },
      });
    } else {
      api.start({
        to: { transform: "rotate(0deg)" },
      });
    }
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
    <div className="page-scroll" onClick={handleScrollToTop}>
      <AnimatedIcon className="page-scroll__icon" style={{ ...springs }} />
    </div>
  );
}

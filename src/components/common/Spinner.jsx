import { useSpring, animated } from "@react-spring/web";

export default function Spinner() {

  const spin = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    loop: true,
    config: { duration: 1000 },
  });

  return (
    <div className="spinner__container">
      <animated.div className="spinner" style={spin}></animated.div>
    </div>
  );
}

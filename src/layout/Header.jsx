import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import NavDropdown from "../components/navigation/NavDropdown";
import { useSpring, animated } from "@react-spring/web";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeBg = useSpring({
    backgroundColor: isMenuOpen ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)",
    backdropFilter: isMenuOpen ? "blur(10px)" : "blur(0px)",
    display: isMenuOpen ? "block" : "none",
    config: { duration: 200 },
  });

  function handleToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <>
      <animated.div className="fade-bg" style={fadeBg}></animated.div>
      <header className="header">
        <Navbar handleToggle={handleToggle} isMenuOpen={isMenuOpen} />
        <NavDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </>
  );
}

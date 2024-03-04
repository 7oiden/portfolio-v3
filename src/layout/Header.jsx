import { useState, useRef } from "react";
import Navbar from "../components/navigation/Navbar";
import NavDropdown from "../components/navigation/NavDropdown";
import useOutsideClick from "../hooks/useOutsideClick";
import { useSpring, animated } from "@react-spring/web";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const fadeBg = useSpring({
    backgroundColor: isMenuOpen ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)",
    backdropFilter: isMenuOpen ? "blur(10px)" : "blur(0px)",
    display: isMenuOpen ? "block" : "none",
    config: { duration: 200 },
  });

  useOutsideClick(containerRef, () => {
    setIsMenuOpen(false);
  });

  function handleToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <>
      <animated.div className="fade-bg" style={fadeBg}></animated.div>
      <header className="header" ref={containerRef}>
        <Navbar handleToggle={handleToggle} isMenuOpen={isMenuOpen} />
        <NavDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </>
  );
}

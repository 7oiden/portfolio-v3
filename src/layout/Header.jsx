import { useState, useRef } from "react";
import Navbar from "../components/navigation/Navbar";
import NavDropdown from "../components/navigation/NavDropdown";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useOutsideClick(containerRef, () => {
    setIsMenuOpen(false);
  });

  function handleToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <>
      <div
        className={isMenuOpen ? "fade-bg fade-bg--visible" : "fade-bg"}
      ></div>
      <header className="header" ref={containerRef}>
        <Navbar handleToggle={handleToggle} isMenuOpen={isMenuOpen} />
        <NavDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </>
  );
}

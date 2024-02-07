import { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import NavDropdown from "../components/navigation/NavDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <>
      <div className={isMenuOpen ? "fade-bg" : ""}></div>
      <header className="header">
        <Navbar handleToggle={handleToggle} isMenuOpen={isMenuOpen} />
        <NavDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </>
  );
}

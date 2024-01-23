import { useState } from "react";
import Navbar from "./Navbar";
import NavDropdown from "./NavDropdown";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <header className="header">
      <Navbar handleToggle={handleToggle} isMenuOpen={isMenuOpen} />
      <NavDropdown isMenuOpen={isMenuOpen} />
    </header>
  );
}

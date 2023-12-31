import { useState } from "react";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import "./navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <nav className="navbar">
      <h3 className="navbar__logo">Emirhan.dev</h3>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="#home">Home</a>
        </li>
        <li className="navbar__link">
          <a href="#about">About</a>
        </li>
        <li className="navbar__link">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar__link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <i
        className="fa-solid fa-bars-staggered navbar__menu-icon"
        onClick={handleIsOpen}
      ></i>
      <NavbarMobile isOpen={isOpen} onIsOpen={handleIsOpen} />
    </nav>
  );
}

export default Navbar;

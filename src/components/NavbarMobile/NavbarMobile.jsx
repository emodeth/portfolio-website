import "./navbar-mobile.scss";

function NavbarMobile({ isOpen, onIsOpen }) {
  return (
    <div
      className={
        isOpen
          ? "navbar-mobile navbar-mobile--active"
          : "navbar-mobile navbar-mobile--closed"
      }
    >
      <i
        className="fa-solid fa-xmark navbar-mobile__close-icon"
        onClick={onIsOpen}
      ></i>
      <ul className="navbar-mobile__links">
        <li className="navbar-mobile__link" onClick={onIsOpen}>
          <a href="#home">Home</a>
        </li>
        <li className="navbar-mobile__link" onClick={onIsOpen}>
          <a href="#about">About</a>
        </li>
        <li className="navbar-mobile__link" onClick={onIsOpen}>
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-mobile__link" onClick={onIsOpen}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMobile;

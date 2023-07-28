import "./navbar.scss";

function Navbar() {
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
    </nav>
  );
}

export default Navbar;

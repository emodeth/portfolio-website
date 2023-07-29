import "./hero.scss";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import js from "../../images/js.svg";
import react from "../../images/react.svg";
import tailwind from "../../images/tailwind.svg";
import sass from "../../images/sass.svg";

function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__main">
            <div className="hero__text">
              <h1 className="hero__header">Front-end Developer</h1>
              <p className="hero__description">
                Hi, I'm Emirhan Keskin. A passionate Front-end Developer based
                in Istanbul, Turkey. 📍
              </p>
              <div className="hero__contact">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/stefvndev"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="hero__img"></div>
          </div>
          <div className="hero__tech-stack">
            <p>Tech Stack</p>
            <ul>
              <li>
                <img src={html} alt="html" />
              </li>
              <li>
                <img src={css} alt="html" />
              </li>
              <li>
                <img src={js} alt="html" />
              </li>
              <li>
                <img src={react} alt="html" />
              </li>
              <li>
                <img src={tailwind} alt="html" />
              </li>
              <li>
                <img src={sass} alt="html" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

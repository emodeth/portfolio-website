import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import htmlCss from "../../images/html-css.svg";
import jsTs from "../../images/jsts.svg";
import reactNext from "../../images/react-nextjs.svg";
import tailwindScss from "../../images/tailwind-scss.svg";

import "./hero.scss";

function Hero() {
  return (
    <motion.div
      id="home"
      className="hero"
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__main">
            <div className="hero__text">
              <h1 className="hero__header">Front-end Developer</h1>
              <p className="hero__description">
                Hi, I'm Emirhan Keskin. A Front-end Developer based in Istanbul,
                Turkey. 📍
              </p>
              <div className="hero__contact">
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/emirhan-keskin-99854b215/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/emodeth"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="hero__img"></div>
          </div>
          <div className="hero__tech-stack">
            <p>Tech Stack</p>
            <ul>
              <li>
                <img src={htmlCss} alt="html css" />
              </li>
              <li>
                <img src={jsTs} alt="js ts" />
              </li>
              <li>
                <img src={reactNext} alt="react nextjs" />
              </li>
              <li>
                <img src={tailwindScss} alt="tailwind css" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;

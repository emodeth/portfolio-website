import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import rotatingImg from "../../images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import workingImg from "../../images/working-emoji.c5325f52b5be329995a5.png";

import "./about.scss";

function About() {
  return (
    <motion.div
      id="about"
      className="about"
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="about__container container">
        <div className="about__img">
          <div className="about__rotating">
            <img src={workingImg} alt="working emoji" />
            <img src={rotatingImg} alt="rotating text" />
          </div>
        </div>
        <div className="about__content">
          <h3>About Me</h3>
          <h2>Front-end Developer based in Istanbul, Turkey 📍</h2>
          <p>
            Hey, my name is Emirhan, and I'm a Frontend Developer. I am studying
            Software Engineering at Istanbul Aydın University.
          </p>
          <p>
            My main stack currently is React in combination with Tailwind CSS. I
            am currently working on my Next.js and Typescript skills.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

import "./about.scss";
import rotatingImg from "../../images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import workingImg from "../../images/working-emoji.c5325f52b5be329995a5.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="about__container container">
        <div className="about__img">
          <div className="about__rotating">
            <img src={workingImg} alt="working emoji" />
            <img src={rotatingImg} alt="rotating text" />
          </div>
        </div>
        <div className="about__content">
          <h3>About Me</h3>
          <h2>A dedicated Front-end Developer based in Istanbul, Turkey 📍</h2>
          <p>
            Greetings! I'm a dedicated Junior Front End Developer proficient in
            HTML, CSS, JavaScript, React, Tailwind CSS, and Sass. My passion is
            creating captivating user interfaces and seamless web experiences.
            With a sharp eye for design and clean code practices, I ensure
            visually stunning, responsive, and user-friendly projects.
          </p>
          <p>
            Constantly seeking growth, I stay updated with the latest trends in
            front-end development, bringing fresh ideas and innovative solutions
            to every project. Collaboration is at the heart of my work ethic,
            thriving in team environments where ideas flow freely, leading to
            exceptional digital solutions.
          </p>
          <p>
            Excited about the ever-evolving world of web development, I'm eager
            to contribute my skills and enthusiasm to build meaningful and
            impactful applications. If you need a motivated Junior Front End
            Developer to enhance your team, let's connect and create remarkable
            web experiences together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

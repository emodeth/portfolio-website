import "./projects.scss";
import Project from "../Project/Project";
import coindom from "../../images/coindom.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__container container">
        <h3 className="projects__header">Portfolio</h3>
        <h4 className="projects__header-2">
          Each project is a unique piece of development
        </h4>
        <Project
          title="coindom"
          description="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
          tech1="React"
          tech2="SCSS"
          ghLink="https://github.com/emodeth/coindom-crypto-v2"
          ldLink="https://coindom-crypto.vercel.app/"
          imgUrl={coindom}
          layout="row"
        />
      </div>
    </div>
  );
}

export default Projects;

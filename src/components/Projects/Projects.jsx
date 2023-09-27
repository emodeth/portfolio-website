import "./projects.scss";
import Project from "../Project/Project";
import coindom from "../../images/coindom.png";
import carRental from "../../images/car-rental.png";
import ecommerce from "../../images/e-commerce.png";
import metaversus from "../../images/metaversus-rouge.vercel.app_ (1).png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects__container container">
        <h3 className="projects__header">Portfolio</h3>
        <h4 className="projects__header-2">
          Each project is a unique piece of development
        </h4>
        <Project
          title="car rental"
          description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
          tech1="React"
          tech2="Vanilla CSS"
          ghLink="https://github.com/emodeth/car-rental"
          ldLink="https://car-rental-emodeth.vercel.app/"
          imgUrl={carRental}
          layout="row"
        />
        <Project
          title="Ecommerce"
          description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
          tech1="React"
          tech2="Tailwind CSS"
          ghLink="https://github.com/emodeth/e-commerce"
          ldLink="https://minimailist-e-commerce-emodeth.vercel.app/"
          imgUrl={ecommerce}
          layout="row-reverse"
        />
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
        <Project
          title="Metaversus"
          description="Metaversus is a company that specializes in creating immersive virtual worlds and experiences."
          tech1="React"
          tech2="Tailwind CSS"
          ghLink="https://github.com/emodeth/metaversus"
          ldLink="https://metaversus-rouge.vercel.app/"
          imgUrl={metaversus}
          layout="row-reverse"
        />
      </div>
    </div>
  );
}

export default Projects;

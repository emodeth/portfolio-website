import "./project.scss";

function Project({
  title,
  description,
  tech1,
  tech2,
  ghLink,
  ldLink,
  imgUrl,
  layout,
}) {
  return (
    <div
      className={
        layout === "row-reverse"
          ? "project project--row-reverse"
          : "project project--row"
      }
    >
      <div className="project__img">
        <a href={ldLink} target="_blank" rel="noreferrer">
          <img src={imgUrl} alt="project" />
        </a>
      </div>
      <div className="project__content">
        <h4 className="project__header">{title}</h4>
        <p className="project__description">{description}</p>
        <div className="project__tech-container">
          <div className="project__tech">{tech1}</div>
          <div className="project__tech">{tech2}</div>
        </div>
        <div className="project__links">
          <a
            href={ghLink}
            className="project__github"
            target="_blank"
            rel="noreferrer"
          >
            Code
            <span>
              <i className="fa-brands fa-github"></i>
            </span>
          </a>
          <a
            href={ldLink}
            className="project__live-demo"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <span>
              <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

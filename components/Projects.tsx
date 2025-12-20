import ProjectItem from "./ProjectItem";
import { PROJECTS } from "@/lib/data";

const Projects = () => {
  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold text-foreground mb-5">Projects</h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import { Project } from "@/lib/types";
import ProjectItem from "./ProjectItem";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="mt-16">
      <h2 className="font-bold text-foreground mb-5">Featured Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

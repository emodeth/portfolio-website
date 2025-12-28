import TechBadge from "./TechBadge";
import { Project } from "@/lib/types";

const TechStack = ({ project }: { project: Project }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl! font-bold text-foreground mb-4">Tech Stack</h2>
      <div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {project.techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

import TechBadge from "./TechBadge";

const TechStack = ({ project }: { project: any }) => {
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

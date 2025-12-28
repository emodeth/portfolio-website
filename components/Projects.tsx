import prisma from "@/lib/prisma";
import ProjectItem from "./ProjectItem";

const Projects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      techStack: true,
    },
  });

  return (
    <div className="mt-16">
      <h2 className="text-lg font-bold text-foreground mb-5">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

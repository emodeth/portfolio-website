const ProjectTitle = ({ project }: { project: any }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl! font-bold text-foreground mb-2">
        {project.title}
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectTitle;

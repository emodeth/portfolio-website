import React from "react";

const ProjectVideo = ({ project }: { project: any }) => {
  return (
    project.videoSource && (
      <div className="space-y-6">
        <h2 className="text-xl! font-bold text-foreground">Project Video</h2>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-lg">
          <video
            src={project.videoSource}
            controls
            className="h-full w-full object-cover"
            poster={project.image}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  );
};

export default ProjectVideo;

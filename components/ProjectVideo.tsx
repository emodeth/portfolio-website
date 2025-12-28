import { Project } from "@/lib/types";
import { getEmbedUrl } from "@/lib/utils";

const ProjectVideo = ({ project }: { project: Project }) => {
  if (!project.videoUrl) return null;

  const { type, src } = getEmbedUrl(project.videoUrl);

  return (
    <div className="space-y-6">
      <h2 className="text-xl! font-bold text-foreground">Project Video</h2>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-lg">
        {type === "native" ? (
          <video
            src={src}
            controls
            className="h-full w-full object-cover"
            poster={project.coverUrl}
            muted
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={src}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={project.title}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectVideo;

import { client } from "@/sanity/client";
import { Project } from "@/lib/types";
import ProjectItem from "./ProjectItem";

const Projects = async () => {
  const query = `*[_type == "project"] | order(id desc){
    "id": _id,
    title,
    description,
    "coverUrl": coverUrl.asset->url,
    videoUrl,
    codeUrl,
    demoUrl,
    "photos": photos[].asset->url,

    content,
    techStack[]->{
      "id": _id,
      name,
      iconName
    }
  }`;

  const projects: Project[] = await client.fetch(query);

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

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectHeader from "@/components/ProjectHeader";

import ProjectTitle from "@/components/ProjectTitle";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectGallery from "@/components/ProjectGallery";
import { client } from "@/sanity/client";
import { Project } from "@/lib/types";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const query = `*[_type == "project" && _id == $id][0]{
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

  const project: Project = await client.fetch(query, { id });

  if (!project) {
    return (
      <MaxWidthWrapper>
        <div className="py-20 text-center">Project not found</div>
      </MaxWidthWrapper>
    );
  }

  return (
    <MaxWidthWrapper>
      <ProjectHeader project={project} />
      <ProjectTitle project={project} />

      <div className="mt-16 space-y-16">
        <ProjectGallery project={project} />
        <ProjectVideo project={project} />
      </div>
    </MaxWidthWrapper>
  );
};

export default ProjectPage;

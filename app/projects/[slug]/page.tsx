import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectHeader from "@/components/ProjectHeader";

import ProjectTitle from "@/components/ProjectTitle";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectGallery from "@/components/ProjectGallery";
import { client } from "@/sanity/client";
import { Project } from "@/lib/types";

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const query = `*[_type == "project" && slug == $slug][0]{
    "id": _id,
    slug,
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

  const project: Project = await client.fetch(query, { slug }, { next: { revalidate: 900, tags: ['sanity', `project-${slug}`] } });

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
        <ProjectVideo project={project} />
        <ProjectGallery project={project} />
      </div>
    </MaxWidthWrapper>
  );
};

export async function generateStaticParams() {
  const query = `*[_type == "project"]{ "slug": slug }`;
  const projects = await client.fetch(query);

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}


export default ProjectPage;

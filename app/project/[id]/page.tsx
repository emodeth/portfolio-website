import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectHeader from "@/components/ProjectHeader";

import TechStack from "@/components/TechStack";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectGallery from "@/components/ProjectGallery";
import prisma from "@/lib/prisma";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      techStack: true,
    },
  });

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
      <TechStack project={project} />

      <div className="mt-16 space-y-16">
        <ProjectVideo project={project} />
        <ProjectGallery project={project} />
      </div>
    </MaxWidthWrapper>
  );
};

export default ProjectPage;

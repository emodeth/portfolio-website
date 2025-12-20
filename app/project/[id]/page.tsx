"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectHeader from "@/components/ProjectHeader";
import { PROJECTS } from "@/lib/data";
import { useParams } from "next/navigation";

import TechStack from "@/components/TechStack";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectGallery from "@/components/ProjectGallery";

const ProjectPage = () => {
  const params = useParams();
  const id = params?.id;
  const project = PROJECTS.find((p) => p.id === Number(id)) || PROJECTS[0];

  if (!project) {
    return (
      <MaxWidthWrapper>
        <div className="py-20 text-center">Project not found</div>
      </MaxWidthWrapper>
    );
  }

  return (
    <MaxWidthWrapper>
      <ProjectHeader />
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

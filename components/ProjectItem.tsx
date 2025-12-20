"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoLogoGithub, IoLogoYoutube, IoMdGlobe } from "react-icons/io";
import { ReactNode } from "react";
import TechBadge from "./TechBadge";
import { useRouter } from "next/navigation";

export interface TechStackItem {
  name: string;
  icon?: ReactNode;
  class?: string;
}

interface ProjectItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: TechStackItem[];
  liveLink?: string;
  sourceLink?: string;
  videoLink?: string;
}

const ProjectItem = ({ project }: { project: ProjectItemProps }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/project/${project.id}`)}
      className="flex flex-col gap-6 rounded-2xl border border-border bg-muted/50 p-6 transition-colors hover:bg-muted/80 cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-foreground">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>

        <div
          className="flex flex-wrap gap-3 pt-2"
          onClick={(e) => e.stopPropagation()}
        >
          {project.liveLink && (
            <Button asChild variant="outline" className="gap-2 rounded-xl">
              <Link href={project.liveLink} target="_blank">
                <IoMdGlobe className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.sourceLink && (
            <Button asChild variant="outline" className="gap-2 rounded-xl">
              <Link href={project.sourceLink} target="_blank">
                <IoLogoGithub className="h-4 w-4" />
                Source Code
              </Link>
            </Button>
          )}
          {project.videoLink && (
            <Button asChild variant="outline" className="gap-2 rounded-xl">
              <Link href={project.videoLink} target="_blank">
                <IoLogoYoutube className="h-4 w-4" />
                Watch Video
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

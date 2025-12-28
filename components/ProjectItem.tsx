"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoLogoGithub, IoLogoYoutube, IoMdGlobe } from "react-icons/io";
import TechBadge from "./TechBadge";
import { Project } from "@/lib/types";

const ProjectItem = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => router.prefetch(`/project/${project.id}`)}
      className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-muted/50 p-6 transition-colors hover:bg-muted/80"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
        <Image
          src={project.projectCoverUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-foreground">
            <Link href={`/project/${project.id}`}>
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </Link>
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

        <div className="relative z-10 flex flex-wrap gap-3 pt-2">
          {project.demoUrl && (
            <Button asChild variant="outline" className="gap-2 rounded-xl">
              <Link href={project.demoUrl} target="_blank">
                <IoMdGlobe className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.codeUrl && (
            <Button asChild variant="outline" className="gap-2 rounded-xl">
              <Link href={project.codeUrl} target="_blank">
                <IoLogoGithub className="h-4 w-4" />
                Source Code
              </Link>
            </Button>
          )}
          {project.videoUrl && (
            <Button asChild variant="outline" className="gap-2 rounded-xl">
              <Link href={project.videoUrl} target="_blank">
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

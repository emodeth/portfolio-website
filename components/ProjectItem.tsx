"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoLogoGithub, IoLogoYoutube, IoMdOpen } from "react-icons/io";
import TechBadge from "./TechBadge";
import { Project } from "@/lib/types";

const ProjectItem = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div className="group flex flex-col overflow-hidden rounded-md border border-accent bg-card hover:bg-card/80 cursor-pointer"
      onClick={() => router.push(`/projects/${project.slug}`)}>
      <div
        className="relative aspect-video w-full cursor-pointer overflow-hidden"
      >
        <Image
          src={project.coverUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="font-bold text-gray-1200"
          >
            {project.title}
          </Link>

          {project.demoUrl && (
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="h-10 w-10 shrink-0 rounded-lg bg-background text-gray-1100 hover:bg-background/50 "
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={project.demoUrl} target="_blank">
                <IoMdOpen className="h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>

        <p className="mb-6 line-clamp-3 text-gray-1100 leading-relaxed text-[15px]">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 md:flex-row">
          {project.codeUrl && (
            <Button
              asChild
              variant="outline"
              className="w-full gap-2 rounded-md border-border bg-transparent hover:bg-muted md:w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={project.codeUrl} target="_blank">
                <IoLogoGithub className="h-4 w-4" />
                Source Code
              </Link>
            </Button>
          )}
          {project.videoUrl && (
            <Button
              asChild
              variant="outline"
              className="w-full gap-2 rounded-md border-border bg-transparent hover:bg-muted md:w-auto"
              onClick={(e) => e.stopPropagation()}
            >
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

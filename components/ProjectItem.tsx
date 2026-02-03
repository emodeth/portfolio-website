"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoIosLink, IoLogoGithub, IoLogoYoutube } from "react-icons/io";
import TechBadge from "./TechBadge";
import { Project } from "@/lib/types";

const ProjectItem = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div
      className="group flex flex-col overflow-hidden rounded-xl bg-sidebar cursor-pointer transition duration-200"
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      <div className="p-6 pb-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={project.coverUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-1200">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm text-gray-1100 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.codeUrl && (
            <Button
              asChild
              className="gap-2 rounded-md bg-secondary px-4 py-2 text-sm text-foreground hover:bg-input border-0 transition-colors duration-200"
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
              className="gap-2 rounded-md bg-secondary px-4 py-2 text-sm text-foreground hover:bg-input border-0 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={project.videoUrl} target="_blank">
                <IoLogoYoutube className="h-4 w-4" />
                Watch Video
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button
              asChild
              className="gap-2 rounded-md bg-secondary px-4 py-2 text-sm text-foreground hover:bg-input border-0 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={project.demoUrl} target="_blank">
                <IoIosLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

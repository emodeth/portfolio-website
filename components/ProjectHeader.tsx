"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { IoIosLink, IoLogoGithub, IoLogoYoutube } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";

const ProjectHeader = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div className="mb-24 flex min-h-9 w-full select-none items-center justify-between gap-2">
      <Link
        href="/"
        onMouseEnter={() => router.prefetch("/")}
        className="p-2 rounded-full duration-200 bg-secondary text-secondary-foreground hover:bg-secondary/80"
      >
        <PiArrowBendUpLeftBold className="h-4.5 w-4.5" />
      </Link>

      <div className="flex gap-2 items-center">
        {project.codeUrl && (
          <Button
            variant="secondary"
            className="p-2 rounded-full cursor-pointer pl-3 pr-4"
            asChild
          >
            <Link href={project.codeUrl} target="_blank" rel="noreferrer">
              <IoLogoGithub className="h-4.5 w-4.5" />
              Code
            </Link>
          </Button>
        )}
        {project.videoUrl && (
          <Button
            variant="secondary"
            className="p-2 rounded-full cursor-pointer pl-3 pr-4"
            asChild
          >
            <Link href={project.videoUrl} target="_blank" rel="noreferrer">
              <IoLogoYoutube className="h-4.5 w-4.5" />
              Video
            </Link>
          </Button>
        )}
        {project.demoUrl && (
          <Button
            variant="secondary"
            className="p-2 rounded-full cursor-pointer pl-3 pr-4"
            asChild
          >
            <Link href={project.demoUrl} target="_blank" rel="noreferrer">
              <IoIosLink className="h-4.5 w-4.5" />
              Live
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;

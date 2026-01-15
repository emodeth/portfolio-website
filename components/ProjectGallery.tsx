"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Project } from "@/lib/types";
import Lightbox from "./Lightbox";

const ProjectGallery = ({ project }: { project: Project }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!project.photos || project.photos.length === 0) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl! font-bold text-gray-1200">Project Gallery</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {project.photos.map((img, index) => (
            <CarouselItem key={index}>
              <div
                className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-md cursor-zoom-in group"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer" />
        <CarouselNext className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer" />
      </Carousel>

      {selectedIndex !== null && (
        <Lightbox
          images={project.photos}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          setSelectedIndex={setSelectedIndex}
        />
      )}
    </div>
  );
};

export default ProjectGallery;

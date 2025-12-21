import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Project } from "@/lib/types";

const ProjectGallery = ({ project }: { project: Project }) => {
  return (
    project.photos &&
    project.photos.length > 0 && (
      <div className="space-y-6">
        <h2 className="text-xl! font-bold text-foreground">Project Gallery</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {project.photos.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted shadow-md">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer" />
          <CarouselNext className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer" />
        </Carousel>
      </div>
    )
  );
};

export default ProjectGallery;

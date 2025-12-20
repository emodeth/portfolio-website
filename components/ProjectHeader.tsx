import Link from "next/link";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { IoLogoGithub, IoLogoYoutube, IoMdGlobe } from "react-icons/io";
import { Button } from "@/components/ui/button";

const ProjectHeader = () => {
  return (
    <div className="mb-24 flex min-h-9 w-full select-none items-center justify-between gap-2">
      <Link
        href="/"
        className="p-2 rounded-full duration-200 bg-secondary text-secondary-foreground hover:bg-secondary/80"
      >
        <PiArrowBendUpLeftBold className="h-4.5 w-4.5" />
      </Link>

      <div className="flex gap-2 items-center">
        <Button variant="secondary" className="p-2 rounded-full cursor-pointer">
          <IoLogoGithub className="h-4.5 w-4.5" />
          Code
        </Button>
        <Button variant="secondary" className="p-2 rounded-full cursor-pointer">
          <IoMdGlobe className="h-4.5 w-4.5" />
          Demo
        </Button>
        <Button variant="secondary" className="p-2 rounded-full cursor-pointer">
          <IoLogoYoutube className="h-4.5 w-4.5" />
          Video
        </Button>
      </div>
    </div>
  );
};

export default ProjectHeader;

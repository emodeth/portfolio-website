import { Project } from "@/lib/types";
import MarkdownRenderer from "./MarkdownRenderer";

const ProjectTitle = ({ project }: { project: Project }) => {
  return (
    <div className="space-y-4">
      <h2 className=" font-bold text-gray-1200 mb-2">
        {project.title}
      </h2>
      <div className="text-text-paragraph leading-relaxed max-w-none">
        <MarkdownRenderer>{project.content}</MarkdownRenderer>
      </div>
    </div>
  );
};

export default ProjectTitle;

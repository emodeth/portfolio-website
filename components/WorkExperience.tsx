import { WorkExperience as WorkExperienceType } from "@/lib/types";
import WorkItem from "./WorkItem";

interface WorkExperienceProps {
  workExperience: WorkExperienceType[];
}

const WorkExperience = ({ workExperience }: WorkExperienceProps) => {
  return (
    <div className="mt-16 flex flex-col">
      <h2 className="font-bold text-gray-1200 mb-5">
        Work Experience
      </h2>

      <div className="flex flex-col gap-8">
        {workExperience.map((experience) => (
          <WorkItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

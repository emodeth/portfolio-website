import WorkItem from "./WorkItem";
import { WORK_EXPERIENCE } from "@/lib/data";

const WorkExperience = () => {
  return (
    <div className="mt-16 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-foreground mb-2">
        Work Experience
      </h2>

      <div className="flex flex-col gap-8">
        {WORK_EXPERIENCE.map((exp) => (
          <WorkItem key={exp.company} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

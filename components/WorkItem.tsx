import { WorkExperience } from "@/lib/types";

const WorkItem = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-10">
      <span className="min-w-[120px] font-medium text-gray-1100 hidden md:block">
        {experience.startDate.getFullYear()} -{" "}
        {experience.endDate.getFullYear()}
      </span>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col text-[16px]">
          <h3 className="font-semibold text-gray-1200">
            {experience.workTitle}
          </h3>
          <p className="text-gray-1100">
            {experience.companyName} • {experience.type}
            <span className="md:hidden">
              {" "}
              • {experience.startDate.getFullYear()} -{" "}
              {experience.endDate.getFullYear()}
            </span>
          </p>
        </div>

        <p className="max-w-xl leading-relaxed text-gray-1100">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;

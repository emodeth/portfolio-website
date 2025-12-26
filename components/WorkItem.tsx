import { WorkExperience } from "@/lib/types";

const WorkItem = ({ experience }: { experience: WorkExperience }) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-10">
      <span className="min-w-[120px] font-medium text-muted-foreground">
        {experience.startDate.getFullYear()} -{" "}
        {experience.endDate.getFullYear()}
      </span>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col text-[16px]">
          <h3 className="font-semibold text-foreground">
            {experience.workTitle}
          </h3>
          <p className="text-muted-foreground">
            {experience.companyName} • {experience.type}
          </p>
        </div>

        <p className="max-w-xl leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default WorkItem;

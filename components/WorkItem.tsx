export interface WorkExperienceItemProps {
  date: string;
  title: string;
  company: string;
  type: string;
  description: string;
}

const WorkItem = ({ experience }: { experience: WorkExperienceItemProps }) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-10">
      <span className="min-w-[120px] font-medium text-muted-foreground">
        {experience.date}
      </span>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-foreground">
            {experience.title}
          </h3>
          <p className="text-muted-foreground">
            {experience.company} • {experience.type}
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

import prisma from "@/lib/prisma";
import WorkItem from "./WorkItem";

const WorkExperience = async () => {
  const workExperience = await prisma.workExperience.findMany();

  return (
    <div className="mt-16 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-foreground mb-2">
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

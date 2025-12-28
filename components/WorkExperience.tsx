import { client } from "@/sanity/client";
import { WorkExperience as WorkExperienceType } from "@/lib/types";
import WorkItem from "./WorkItem";

const WorkExperience = async () => {
  const query = `*[_type == "workExperience"] | order(startDate desc){
    "id": _id,
    companyName,
    description,
    type,
    workTitle,
    startDate,
    endDate
  }`;

  const experiences = await client.fetch(query);

  const workExperience: WorkExperienceType[] = experiences.map(
    (experience: {
      id: string;
      companyName: string;
      description: string;
      type: string;
      workTitle: string;
      startDate: string;
      endDate: string;
    }) => ({
      ...experience,
      startDate: new Date(experience.startDate),
      endDate: new Date(experience.endDate),
    })
  );

  return (
    <div className="mt-16 flex flex-col">
      <h2 className="text-lg font-bold text-foreground mb-5">
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

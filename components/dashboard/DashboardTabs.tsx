"use client";

import { useState } from "react";
import ProfileManager from "./ProfileManager";
import WorkExperienceManager from "./WorkExperienceManager";
import ProjectManager from "./ProjectManager";
import TechManager from "./TechManager";
import { Profile, WorkExperience, Project, Tech } from "@/lib/types";

type Props = {
  profile: Profile | null;
  workExperiences: WorkExperience[];
  projects: (Project & { techStack: Tech[] })[];
  techs: Tech[];
};

export default function DashboardTabs({
  profile,
  workExperiences,
  projects,
  techs,
}: Props) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
      <div className="flex border-b border-border mb-8 overflow-x-auto">
        <button
          className={`px-4 py-3 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "profile"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`px-4 py-3 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "experience"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Work Experience
        </button>
        <button
          className={`px-4 py-3 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "projects"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`px-4 py-3 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === "techs"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("techs")}
        >
          Technologies
        </button>
      </div>

      <div className="min-h-[500px]">
        {activeTab === "profile" && <ProfileManager initialProfile={profile} />}
        {activeTab === "experience" && (
          <WorkExperienceManager initialData={workExperiences} />
        )}
        {activeTab === "projects" && (
          <ProjectManager initialData={projects} availableTechs={techs} />
        )}
        {activeTab === "techs" && <TechManager initialData={techs} />}
      </div>
    </div>
  );
}

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import {
  getProfile,
  getWorkExperiences,
  getProjects,
  getTechs,
} from "@/lib/actions";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/admin");
  }

  const [profile, workExperiences, projects, techs] = await Promise.all([
    getProfile(),
    getWorkExperiences(),
    getProjects(),
    getTechs(),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <DashboardTabs
        profile={profile}
        workExperiences={workExperiences}
        projects={projects}
        techs={techs}
      />
    </div>
  );
}

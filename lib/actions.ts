"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Profile, WorkExperience, Project, Tech } from "@/lib/types";

//Profile
export async function getProfile() {
  return await prisma.profile.findFirst();
}

export async function updateProfile(data: Partial<Profile>) {
  const profile = await prisma.profile.findFirst();
  if (profile) {
    await prisma.profile.update({
      where: { id: profile.id },
      data: {
        name: data.name,
        description: data.description,
        imgUrl: data.imgUrl,
        jobTitle: data.jobTitle,
        mail: data.mail,
        githubUrl: data.githubUrl,
        resume: data.resume,
      },
    });
  } else {
    await prisma.profile.create({
      data: {
        name: data.name || "",
        description: data.description || "",
        imgUrl: data.imgUrl || "",
        jobTitle: data.jobTitle || "",
        mail: data.mail || "",
        githubUrl: data.githubUrl || "",
        resume: data.resume || "",
      },
    });
  }
  revalidatePath("/");
  revalidatePath("/dashboard");
}

//WorkExperiences
export async function getWorkExperiences() {
  return await prisma.workExperience.findMany({
    orderBy: { startDate: "desc" },
  });
}

export async function createWorkExperience(data: Omit<WorkExperience, "id">) {
  await prisma.workExperience.create({
    data,
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

export async function updateWorkExperience(
  id: number,
  data: Partial<WorkExperience>
) {
  await prisma.workExperience.update({
    where: { id },
    data,
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

export async function deleteWorkExperience(id: number) {
  await prisma.workExperience.delete({
    where: { id },
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

//Projects
export async function getProjects() {
  return await prisma.project.findMany({
    include: { techStack: true },
    orderBy: { id: "desc" },
  });
}

export async function createProject(
  data: Omit<Project, "id" | "techStack"> & { techStack: string[] }
) {
  const techIds: number[] = [];
  for (const name of data.techStack) {
    const existing = await prisma.tech.findFirst({ where: { name } });
    if (existing) {
      techIds.push(existing.id);
    } else {
      const newTech = await prisma.tech.create({
        data: { name, iconName: "FaCode" },
      });
      techIds.push(newTech.id);
    }
  }

  await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      projectContent: data.projectContent,
      projectCoverUrl: data.projectCoverUrl,
      videoUrl: data.videoUrl,
      codeUrl: data.codeUrl,
      demoUrl: data.demoUrl,
      photos: data.photos,
      techStack: {
        connect: techIds.map((id) => ({ id })),
      },
    },
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

export async function updateProject(
  id: number,
  data: Partial<Omit<Project, "techStack">> & { techStack?: string[] }
) {
  const updateData: any = { ...data };
  delete updateData.techStack;

  if (data.techStack) {
    const techIds: number[] = [];
    for (const name of data.techStack) {
      const existing = await prisma.tech.findFirst({ where: { name } });
      if (existing) {
        techIds.push(existing.id);
      } else {
        const newTech = await prisma.tech.create({
          data: { name, iconName: "FaCode" },
        });
        techIds.push(newTech.id);
      }
    }
    updateData.techStack = {
      set: [],
      connect: techIds.map((id) => ({ id })),
    };
  }

  await prisma.project.update({
    where: { id },
    data: updateData,
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

export async function deleteProject(id: number) {
  await prisma.project.delete({
    where: { id },
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

//Techs
export async function getTechs() {
  return await prisma.tech.findMany({
    orderBy: { name: "asc" },
  });
}

export async function createTech(data: Omit<Tech, "id">) {
  const existing = await prisma.tech.findFirst({
    where: { name: { equals: data.name, mode: "insensitive" } },
  });

  if (existing) {
    return;
  }

  await prisma.tech.create({
    data,
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

export async function updateTech(id: number, data: Partial<Tech>) {
  await prisma.tech.update({
    where: { id },
    data,
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

export async function deleteTech(id: number) {
  await prisma.tech.delete({
    where: { id },
  });
  revalidatePath("/");
  revalidatePath("/dashboard");
}

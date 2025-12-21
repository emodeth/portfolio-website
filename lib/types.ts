export interface Profile {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  jobTitle: string;
  mail: string;
  githubUrl: string;
  resume: string;
}

export interface WorkExperience {
  id: number;
  companyName: string;
  description: string;
  type: string;
  workTitle: string;
  startDate: Date;
  endDate: Date;
}

export interface Tech {
  id: number;
  name: string;
  iconName: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  projectCoverUrl: string;
  videoUrl: string | null;
  codeUrl: string | null;
  demoUrl: string | null;
  photos: string[];
  projectContent: string;
  techStack: Tech[];
}

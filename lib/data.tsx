import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export const PROJECTS = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    image: "/project1.png",
    techStack: [
      { name: "React", icon: <RiReactjsFill /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    ],
    liveLink: "https://project1.com",
    sourceLink: "https://github.com/project1",
    videoLink: "https://project1.com/video",
    videoSource:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    gallery: ["/project1-detail-1.png", "/project1-detail-2.png"],
  },
];

export const WORK_EXPERIENCE = [
  {
    date: "2023 - 2025",
    title: "Frontend Software Developer",
    company: "Stork",
    type: "Full-time",
    description:
      "Stork is a Türkiye based e-commerce start-up. I worked on development of the frontend of the website and mobile app. I used mostly Next.js, TypeScript, React, Tailwind CSS, and React Native. I also reviewed existing API endpoints, provided feedback on the data they returned and defined requirements for necessary new endpoints I created main API files, Context and React-Query files. I created the main structure of frontend. I refactored the code-base.",
  },
];

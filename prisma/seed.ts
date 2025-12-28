import prisma from "@/lib/prisma";

async function main() {
  await prisma.tech.deleteMany();
  await prisma.project.deleteMany();
  await prisma.workExperience.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: "Emirhan Keskin",
      description:
        "I'm a senior Software Engineering student and a Frontend Developer based in Istanbul, Türkiye. I am passionate about transforming concepts into functional products. My focus is on writing clean, maintainable code. My toolkit consist of React, Tailwind CSS, TypeScript, Next.js and React Native.",
      imgUrl: "https://avatar.vercel.sh/EmirhanKeskin",
      jobTitle: "Frontend Developer",
      mail: "emirhankeskindev@gmail.com",
      githubUrl: "https://github.com/emodeth",
      resume: "https://example.com/resume.pdf",
    },
  });

  await prisma.workExperience.createMany({
    data: [
      {
        companyName: "Stork",
        description:
          "Stork is a Türkiye based e-commerce start-up. I worked on development of the frontend of the website and mobile app. I used mostly Next.js, TypeScript, React, Tailwind CSS, and React Native.",
        type: "Full-time",
        workTitle: "Frontend Developer",
        startDate: new Date("2024"),
        endDate: new Date("2025"),
      },
    ],
  });

  const react = await prisma.tech.create({
    data: { name: "React", iconName: "FaReact" },
  });

  await prisma.tech.create({
    data: { name: "Next.js", iconName: "RiNextjsFill" },
  });

  await prisma.tech.create({
    data: { name: "TypeScript", iconName: "BiLogoTypescript" },
  });

  const vite = await prisma.tech.create({
    data: { name: "Vite", iconName: "SiVite" },
  });

  const javascript = await prisma.tech.create({
    data: { name: "JavaScript", iconName: "BiLogoJavascript" },
  });

  const tailwindcss = await prisma.tech.create({
    data: { name: "Tailwind CSS", iconName: "BiLogoTailwindCss" },
  });

  await prisma.tech.create({
    data: { name: "CSS", iconName: "BiLogoCss3" },
  });

  const reactQuery = await prisma.tech.create({
    data: { name: "React Query", iconName: "SiReactquery" },
  });

  const shadcn = await prisma.tech.create({
    data: { name: "ShadCN", iconName: "SiShadcnui" },
  });

  await prisma.project.create({
    data: {
      title: "IAU Project Selector",
      description: `Developed a web-based platform to digitize the project selection process at Istanbul Aydin University, replacing inefficient and time consuming manual workflows.`,
      projectContent: `Developed a web-based platform to digitize the project selection process at Istanbul Aydin University, replacing inefficient and time consuming manual workflows.`,
      projectCoverUrl: "https://i.hizliresim.com/rt05tsm.png",
      videoUrl: "https://www.youtube.com/watch?v=QtaaJWW4HS0",
      codeUrl: "https://github.com/emodeth/project-selector",
      demoUrl: "",
      photos: [
        "https://i.hizliresim.com/tqvnyg9.png",
        "https://i.hizliresim.com/sx68928.png",
        "https://i.hizliresim.com/7pf7gni.png",
        "https://i.hizliresim.com/jt6mey7.png",
        "https://i.hizliresim.com/388wau7.png",
        "https://i.hizliresim.com/4w2ttv1.png",
        "https://i.hizliresim.com/cpg7vao.png",
        "https://i.hizliresim.com/nlnceu1.png",
        "https://i.hizliresim.com/rt05tsm.png",
        "https://i.hizliresim.com/ng7rl18.png",
        "https://i.hizliresim.com/a6oisx3.png",
        "https://i.hizliresim.com/5asnzuy.png",
        "https://i.hizliresim.com/7jjbc4v.png",
        "https://i.hizliresim.com/a8lfyw4.png",
      ],
      techStack: {
        connect: [
          { id: react.id },
          { id: javascript.id },
          { id: vite.id },
          { id: tailwindcss.id },
          { id: reactQuery.id },
          { id: shadcn.id },
        ],
      },
    },
  });

  console.log("Seed data created successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

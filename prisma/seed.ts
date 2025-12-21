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

  const nextjs = await prisma.tech.create({
    data: { name: "Next.js", iconName: "SiNextdotjs" },
  });

  const typescript = await prisma.tech.create({
    data: { name: "TypeScript", iconName: "SiTypescript" },
  });

  await prisma.project.create({
    data: {
      title: "IAU Project Selector",
      description: `Developed a web-based platform to digitize the project selection process at Istanbul Aydin University, replacing inefficient and time consuming manual workflows.`,
      projectContent: `Developed a web-based platform to digitize the project selection process at Istanbul Aydin University, replacing inefficient and time consuming manual workflows.`,
      projectCoverUrl: "https://i.hizliresim.com/pz80lkd.png",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      codeUrl: "https://github.com/johndoe/ecommerce",
      demoUrl: "https://ecommerce-demo.example.com",
      photos: [
        "https://i.hizliresim.com/pz80lkd.png",
        "https://i.hizliresim.com/pz80lkd.png",
      ],
      techStack: {
        connect: [{ id: react.id }, { id: nextjs.id }, { id: typescript.id }],
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

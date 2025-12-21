-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "resume" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "workTitle" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectCoverUrl" TEXT NOT NULL,
    "videoUrl" TEXT,
    "codeUrl" TEXT,
    "demoUrl" TEXT,
    "photos" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tech" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTech" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectToTech_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToTech_B_index" ON "_ProjectToTech"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTech" ADD CONSTRAINT "_ProjectToTech_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTech" ADD CONSTRAINT "_ProjectToTech_B_fkey" FOREIGN KEY ("B") REFERENCES "Tech"("id") ON DELETE CASCADE ON UPDATE CASCADE;

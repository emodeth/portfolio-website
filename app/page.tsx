import AboutMe from "@/components/AboutMe";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
  return (
    <MaxWidthWrapper>
      <AboutMe />
      <WorkExperience />
      <Projects />
    </MaxWidthWrapper>
  );
};

export default Home;

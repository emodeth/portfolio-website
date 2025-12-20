import ProfileItem from "./ProfileItem";
import { Button } from "./ui/button";
import { IoIosDocument, IoLogoGithub, IoMdMail } from "react-icons/io";
const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <ProfileItem />

      <p className="text-lg leading-relaxed text-muted-foreground mb-6">
        I&apos;m Emirhan Keskin, a software engineer with a passion for creating
        innovative and user-friendly applications. With a strong foundation in
        computer science and a keen eye for detail, I strive to deliver
        high-quality solutions that meet the needs of both users and businesses.
      </p>

      <div className="flex gap-3">
        <Button asChild variant="secondary" className="gap-2">
          <a href="mailto:emirhankeskindev@gmail.com">
            <IoMdMail />
            Mail
          </a>
        </Button>
        <Button asChild variant="secondary" className="gap-2">
          <a href="https://github.com/emodeth" target="_blank">
            <IoLogoGithub />
            GitHub
          </a>
        </Button>
        <Button asChild variant="secondary" className="gap-2">
          <a
            href="/emirhan_keskin-cv.pdf"
            target="_blank"
            download="Emirhan_Keskin_CV.pdf"
          >
            <IoIosDocument />
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;

import { Profile } from "@/lib/types";
import ProfileItem from "./ProfileItem";
import { Button } from "./ui/button";
import { IoIosDocument, IoLogoGithub, IoMdMail } from "react-icons/io";

import MarkdownRenderer from "./MarkdownRenderer";

interface AboutMeProps {
  profile: Profile;
}

const AboutMe = ({ profile }: AboutMeProps) => {
  return (
    <div className="flex flex-col">
      {profile && (
        <>
          <ProfileItem profile={profile} />

          <div className="mb-6 text-[16px] leading-relaxed">
            <MarkdownRenderer>{profile.description}</MarkdownRenderer>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" className="gap-2">
              <a href={`mailto:${profile.mail}`}>
                <IoMdMail />
                Mail
              </a>
            </Button>
            <Button asChild variant="secondary" className="gap-2">
              <a href={profile.githubUrl} target="_blank">
                <IoLogoGithub />
                GitHub
              </a>
            </Button>
            <Button asChild variant="secondary" className="gap-2">
              <a href={profile.resume} target="_blank">
                <IoIosDocument />
                Resume
              </a>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;

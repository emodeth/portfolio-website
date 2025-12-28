import { client } from "@/sanity/client";
import { Profile } from "@/lib/types";
import ProfileItem from "./ProfileItem";
import { Button } from "./ui/button";
import { IoIosDocument, IoLogoGithub, IoMdMail } from "react-icons/io";
const AboutMe = async () => {
  const query = `*[_type == "profile"][0]{
    "id": _id,
    name,
    description,
    jobTitle,
    mail,
    githubUrl,
    imgUrl,
    "resume": resume.asset->url
  }`;

  const profile: Profile = await client.fetch(query);

  return (
    <div className="flex flex-col">
      {profile && (
        <>
          <ProfileItem profile={profile} />

          <p className="text-[16px] leading-relaxed text-muted-foreground mb-6">
            {profile.description}
          </p>

          <div className="flex gap-3">
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

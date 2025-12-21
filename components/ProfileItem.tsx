import { Profile } from "@/lib/types";
import Image from "next/image";

const ProfileItem = ({ profile }: { profile: Profile }) => {
  return (
    <div className="flex items-center gap-4 mb-6 mt-9">
      <div className="relative h-11 w-11 overflow-hidden rounded-full border border-border bg-muted">
        <Image
          src={profile.imgUrl}
          alt="Avatar"
          height={44}
          width={44}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-foreground leading-snug">
          {profile.name}
        </h3>
        <p className="text-muted-foreground leading-snug">{profile.jobTitle}</p>
      </div>
    </div>
  );
};

export default ProfileItem;

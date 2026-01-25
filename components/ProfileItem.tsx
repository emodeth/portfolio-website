import { Profile } from "@/lib/types";

const ProfileItem = ({ profile }: { profile: Profile }) => {
  return (
    <div className="flex items-center justify-between mb-6 mt-9">
      <div className="flex items-center gap-4">

        <div className="flex flex-col">
          <h3 className="text-[16px] font-semibold text-gray-1200 leading-snug">
            {profile.name}
          </h3>
          <p className="text-[16px] text-gray-1100 leading-snug">
            {profile.jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;

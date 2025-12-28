"use client";

import { Profile } from "@/lib/types";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { Button } from "./ui/button";

const ProfileItem = ({ profile }: { profile: Profile }) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mb-6 mt-9">
      <div className="flex items-center gap-4">
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
          <h3 className="text-[16px] font-semibold text-foreground leading-snug">
            {profile.name}
          </h3>
          <p className="text-[16px] text-muted-foreground leading-snug">
            {profile.jobTitle}
          </p>
        </div>
      </div>

      {session && (
        <Button asChild variant="outline" size="sm" className="hidden sm:flex">
          <Link href="/dashboard" className="gap-2">
            <LuLayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ProfileItem;

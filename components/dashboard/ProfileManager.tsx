"use client";

import { useState } from "react";
import { Profile } from "@/lib/types";
import { updateProfile } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { LuPencil } from "react-icons/lu";
import ProfileModal from "./ProfileModal";

export default function ProfileManager({
  initialProfile,
}: {
  initialProfile: Profile | null;
}) {
  const [formData, setFormData] = useState<Partial<Profile>>(
    initialProfile || {
      name: "",
      description: "",
      imgUrl: "",
      jobTitle: "",
      mail: "",
      githubUrl: "",
      resume: "",
    }
  );
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-muted/30 p-6 rounded-lg border border-border">
        <div className="flex gap-6 items-start">
          {formData.imgUrl ? (
            <img
              src={formData.imgUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
          <div className="space-y-2">
            <div>
              <h2 className="text-2xl font-bold">
                {formData.name || "No Name"}
              </h2>
              <p className="text-lg text-primary">{formData.jobTitle}</p>
            </div>
            <p className="text-muted-foreground max-w-lg">
              {formData.description}
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground pt-2">
              {formData.mail && <span>{formData.mail}</span>}
              {formData.githubUrl && (
                <a
                  href={formData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              )}
              {formData.resume && (
                <a
                  href={formData.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
        <Button onClick={() => setIsEditing(true)} className="gap-2">
          <LuPencil className="w-4 h-4" /> Edit Profile
        </Button>
      </div>

      <ProfileModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSubmit={handleSubmit}
        loading={loading}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  );
}

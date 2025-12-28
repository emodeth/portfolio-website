"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Profile } from "@/lib/types";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  loading: boolean;
  formData: Partial<Profile>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function ProfileModal({
  isOpen,
  onClose,
  onSubmit,
  loading,
  formData,
  handleChange,
}: ProfileModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Profile"
      description="Update your personal information and links."
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Job Title</label>
            <input
              name="jobTitle"
              value={formData.jobTitle || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              name="mail"
              value={formData.mail || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>
            <input
              name="imgUrl"
              value={formData.imgUrl || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Github URL</label>
            <input
              name="githubUrl"
              value={formData.githubUrl || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Resume URL</label>
            <input
              name="resume"
              value={formData.resume || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description || ""}
            onChange={handleChange}
            className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex gap-2 justify-end pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

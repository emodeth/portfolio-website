"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Tech } from "@/lib/types";
import { iconMap } from "@/lib/icons";

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formData: Partial<Tech>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function TechModal({
  isOpen,
  onClose,
  title,
  description,
  onSubmit,
  formData,
  handleChange,
}: TechModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Icon</label>
          <select
            name="iconName"
            value={formData.iconName || ""}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
          >
            <option value="">Select an icon</option>
            {Object.keys(iconMap).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 justify-end pt-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Modal>
  );
}

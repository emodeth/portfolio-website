"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { WorkExperience } from "@/lib/types";

interface WorkExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formData: Partial<WorkExperience>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formatDateForInput: (date: Date | string | undefined) => string;
}

export default function WorkExperienceModal({
  isOpen,
  onClose,
  title,
  description,
  onSubmit,
  formData,
  handleChange,
  formatDateForInput,
}: WorkExperienceModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Company Name</label>
            <input
              name="companyName"
              value={formData.companyName || ""}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Work Title</label>
            <input
              name="workTitle"
              value={formData.workTitle || ""}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Type (e.g. Full-time)</label>
            <input
              name="type"
              value={formData.type || ""}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2 grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formatDateForInput(formData.startDate)}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formatDateForInput(formData.endDate)}
                onChange={handleChange}
                required
                className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows={5}
            value={formData.description || ""}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
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

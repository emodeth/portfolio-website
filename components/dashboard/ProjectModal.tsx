"use client";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Project, Tech } from "@/lib/types";
import { LuX } from "react-icons/lu";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formData: Partial<Project> & { techStackNames?: string[] };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  availableTechs: Tech[];
  newTech: string;
  setNewTech: (val: string) => void;
  handleAddTech: (e: React.FormEvent) => void;
  handleRemoveTech: (tech: string) => void;
  setFormData: React.Dispatch<
    React.SetStateAction<Partial<Project> & { techStackNames?: string[] }>
  >;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  onSubmit,
  formData,
  handleChange,
  availableTechs,
  newTech,
  setNewTech,
  handleAddTech,
  handleRemoveTech,
  setFormData,
}: ProjectModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Cover Image URL</label>
            <input
              name="projectCoverUrl"
              value={formData.projectCoverUrl || ""}
              onChange={handleChange}
              required
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Demo URL</label>
            <input
              name="demoUrl"
              value={formData.demoUrl || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Code URL</label>
            <input
              name="codeUrl"
              value={formData.codeUrl || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Video URL</label>
            <input
              name="videoUrl"
              value={formData.videoUrl || ""}
              onChange={handleChange}
              className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Short Description</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description || ""}
            onChange={handleChange}
            required
            className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Project Content (HTML/Rich Text)
          </label>
          <textarea
            name="projectContent"
            rows={6}
            value={formData.projectContent || ""}
            onChange={handleChange}
            className="w-full rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Project Photos</label>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                id="new-photo-url"
                placeholder="Enter image URL"
                className="flex-1 rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const input = e.currentTarget;
                    const val = input.value.trim();
                    if (val) {
                      setFormData((prev) => ({
                        ...prev,
                        photos: [...(prev.photos || []), val],
                      }));
                      input.value = "";
                    }
                  }
                }}
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  const input = document.getElementById(
                    "new-photo-url"
                  ) as HTMLInputElement;
                  const val = input.value.trim();
                  if (val) {
                    setFormData((prev) => ({
                      ...prev,
                      photos: [...(prev.photos || []), val],
                    }));
                    input.value = "";
                  }
                }}
              >
                Add
              </Button>
            </div>
            <div className="space-y-2">
              {formData.photos?.map((photo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-md bg-muted/30 border border-border"
                >
                  <img
                    src={photo}
                    alt={`Preview ${index}`}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm truncate flex-1">{photo}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        photos: prev.photos?.filter((_, i) => i !== index),
                      }))
                    }
                    className="text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    <LuX className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {(!formData.photos || formData.photos.length === 0) && (
                <p className="text-sm text-muted-foreground italic">
                  No photos added yet.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Tech Stack</label>
          <div className="flex flex-wrap gap-2 mb-2 p-2 bg-muted/30 rounded-md">
            {formData.techStackNames?.map((tech) => (
              <span
                key={tech}
                className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs flex items-center gap-1"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="hover:text-red-500"
                >
                  <LuX className="w-3 h-3" />
                </button>
              </span>
            ))}
            {(!formData.techStackNames ||
              formData.techStackNames.length === 0) && (
              <span className="text-muted-foreground text-xs italic">
                No tech added
              </span>
            )}
          </div>
          <div className="relative">
            <div className="flex gap-2">
              <input
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                placeholder="Add tech (search existing or create new)"
                className="flex-1 rounded-md bg-muted/50 border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTech(e);
                  }
                }}
              />
              <Button
                type="button"
                variant="secondary"
                onClick={handleAddTech}
                disabled={!newTech.trim()}
              >
                Add
              </Button>
            </div>
            {newTech.trim() && (
              <div className="absolute z-10 w-full mt-1 bg-popover text-popover-foreground border border-border rounded-md shadow-md max-h-48 overflow-y-auto">
                {availableTechs
                  .filter(
                    (t) =>
                      t.name.toLowerCase().includes(newTech.toLowerCase()) &&
                      !formData.techStackNames?.includes(t.name)
                  )
                  .map((tech) => (
                    <button
                      key={tech.id}
                      type="button"
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted/50 transition-colors flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          techStackNames: [
                            ...(prev.techStackNames || []),
                            tech.name,
                          ],
                        }));
                        setNewTech("");
                      }}
                    >
                      {tech.name}
                      {tech.iconName && (
                        <span className="text-xs text-muted-foreground">
                          {tech.iconName}
                        </span>
                      )}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-2 justify-end pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Modal>
  );
}

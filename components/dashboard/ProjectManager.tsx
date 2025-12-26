"use client";

import { useState } from "react";
import { Project, Tech } from "@/lib/types";
import { createProject, updateProject, deleteProject } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { LuPlus, LuPencil, LuTrash } from "react-icons/lu";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProjectModal from "./ProjectModal";

type ProjectWithTech = Project & { techStack: Tech[] };

export default function ProjectManager({
  initialData,
  availableTechs,
}: {
  initialData: ProjectWithTech[];
  availableTechs: Tech[];
}) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<
    Partial<Project> & { techStackNames?: string[] }
  >({});
  const [isAdding, setIsAdding] = useState(false);
  const [newTech, setNewTech] = useState("");

  const handleEdit = (proj: ProjectWithTech) => {
    setEditingId(proj.id);
    setFormData({
      ...proj,
      techStackNames: proj.techStack.map((t) => t.name),
    });
    setIsAdding(false);
  };

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      photos: [],
      techStackNames: [],
    });
    setIsAdding(true);
  };

  const handleAddTech = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTech.trim()) return;
    setFormData((prev) => ({
      ...prev,
      techStackNames: [...(prev.techStackNames || []), newTech.trim()],
    }));
    setNewTech("");
  };

  const handleRemoveTech = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      techStackNames: prev.techStackNames?.filter((t) => t !== tech),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const dataToSubmit = {
      title: formData.title,
      description: formData.description,
      projectContent: formData.projectContent || "",
      projectCoverUrl: formData.projectCoverUrl || "",
      videoUrl: formData.videoUrl || null,
      codeUrl: formData.codeUrl || null,
      demoUrl: formData.demoUrl || null,
      photos: formData.photos || [],
      techStack: formData.techStackNames || [],
    };

    if (isAdding) {
      await createProject(dataToSubmit);
      setIsAdding(false);
    } else if (editingId) {
      await updateProject(editingId, dataToSubmit);
      setEditingId(null);
    }
    setFormData({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const [deletingId, setDeletingId] = useState<number | null>(null);

  const confirmDelete = (id: number) => {
    setDeletingId(id);
  };

  const handleDelete = async () => {
    if (deletingId) {
      await deleteProject(deletingId);
      setDeletingId(null);
    }
  };

  const cancelDelete = () => {
    setDeletingId(null);
  };

  return (
    <div className="space-y-6">
      <DeleteConfirmModal
        isOpen={!!deletingId}
        onClose={cancelDelete}
        onConfirm={handleDelete}
        description="Are you sure you want to delete this project? This action cannot be undone."
      />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Projects</h2>
        <Button onClick={handleAdd} className="gap-2">
          <LuPlus className="w-4 h-4" /> Add Project
        </Button>
      </div>

      <ProjectModal
        isOpen={isAdding || !!editingId}
        onClose={handleCancel}
        title={isAdding ? "Add New Project" : "Edit Project"}
        description={
          isAdding
            ? "Add a new project to your portfolio."
            : "Update details for this project."
        }
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        availableTechs={availableTechs}
        newTech={newTech}
        setNewTech={setNewTech}
        handleAddTech={handleAddTech}
        handleRemoveTech={handleRemoveTech}
        setFormData={setFormData}
      />

      <div className="grid gap-4">
        {initialData.map((proj) => (
          <div
            key={proj.id}
            className="flex justify-between items-start bg-muted/30 p-4 rounded-lg border border-border"
          >
            <div className="flex gap-4">
              {proj.projectCoverUrl && (
                <img
                  src={proj.projectCoverUrl}
                  alt={proj.title}
                  className="w-24 h-16 object-cover rounded-md bg-background"
                />
              )}
              <div>
                <h3 className="font-bold text-lg">{proj.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {proj.techStack.map((t) => (
                    <span
                      key={t.id}
                      className="text-xs text-muted-foreground bg-background px-1.5 py-0.5 rounded border border-border"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={() => handleEdit(proj)}
              >
                <LuPencil className="w-4 h-4" />
              </Button>
              <Button
                size="icon-sm"
                variant="ghost"
                className="text-red-500 hover:text-red-700 hover:bg-red-100/10"
                onClick={() => confirmDelete(proj.id)}
              >
                <LuTrash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        {initialData.length === 0 && (
          <p className="text-center text-muted-foreground">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}

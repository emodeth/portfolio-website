"use client";

import { useState } from "react";
import { WorkExperience } from "@/lib/types";
import {
  createWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
} from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { LuPlus, LuPencil, LuTrash } from "react-icons/lu";
import DeleteConfirmModal from "./DeleteConfirmModal";
import WorkExperienceModal from "./WorkExperienceModal";

export default function WorkExperienceManager({
  initialData,
}: {
  initialData: WorkExperience[];
}) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<WorkExperience>>({});
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (exp: WorkExperience) => {
    setEditingId(exp.id);
    setFormData(exp);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setEditingId(null);
    setFormData({ startDate: new Date(), endDate: new Date() });
    setIsAdding(true);
  };

  const [deletingId, setDeletingId] = useState<number | null>(null);

  const confirmDelete = (id: number) => {
    setDeletingId(id);
  };

  const handleDelete = async () => {
    if (deletingId) {
      await deleteWorkExperience(deletingId);
      setDeletingId(null);
    }
  };

  const cancelDelete = () => {
    setDeletingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      startDate: new Date(formData.startDate || new Date()),
      endDate: new Date(formData.endDate || new Date()),
    } as any;

    if (isAdding) {
      await createWorkExperience(dataToSubmit);
      setIsAdding(false);
    } else if (editingId) {
      await updateWorkExperience(editingId, dataToSubmit);
      setEditingId(null);
    }
    setFormData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDateForInput = (date: Date | string | undefined) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  return (
    <div className="space-y-6">
      <DeleteConfirmModal
        isOpen={!!deletingId}
        onClose={cancelDelete}
        onConfirm={handleDelete}
        description="Are you sure you want to delete this work experience? This action cannot be undone."
      />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Work Experience</h2>
        <Button onClick={handleAdd} className="gap-2">
          <LuPlus className="w-4 h-4" /> Add Experience
        </Button>
      </div>

      <WorkExperienceModal
        isOpen={isAdding || !!editingId}
        onClose={handleCancel}
        title={isAdding ? "Add New Experience" : "Edit Experience"}
        description={
          isAdding
            ? "Add a new work position to your profile."
            : "Update details for this work position."
        }
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        formatDateForInput={formatDateForInput}
      />

      <div className="grid gap-4">
        {initialData.map((exp) => (
          <div
            key={exp.id}
            className="flex justify-between items-start bg-muted/30 p-4 rounded-lg border border-border"
          >
            <div>
              <h3 className="font-bold text-lg">{exp.companyName}</h3>
              <p className="text-sm text-foreground/80">
                {exp.workTitle} • {exp.type}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(exp.startDate).toLocaleDateString()} -{" "}
                {new Date(exp.endDate).toLocaleDateString()}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {exp.description}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="icon-sm"
                variant="ghost"
                onClick={() => handleEdit(exp)}
              >
                <LuPencil className="w-4 h-4" />
              </Button>
              <Button
                size="icon-sm"
                variant="ghost"
                className="text-red-500 hover:text-red-700 hover:bg-red-100/10"
                onClick={() => confirmDelete(exp.id)}
              >
                <LuTrash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        {initialData.length === 0 && (
          <p className="text-center text-muted-foreground">
            No work experience found.
          </p>
        )}
      </div>
    </div>
  );
}

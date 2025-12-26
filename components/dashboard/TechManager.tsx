"use client";

import { useState, createElement } from "react";
import { Tech } from "@/lib/types";
import { createTech, updateTech, deleteTech } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { LuPlus, LuPencil, LuTrash } from "react-icons/lu";
import { getTechIcon } from "@/lib/icons";
import DeleteConfirmModal from "./DeleteConfirmModal";
import TechModal from "./TechModal";

export default function TechManager({ initialData }: { initialData: Tech[] }) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Tech>>({});
  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleEdit = (tech: Tech) => {
    setEditingId(tech.id);
    setFormData(tech);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setEditingId(null);
    setFormData({ iconName: "FaReact" });
    setIsAdding(true);
  };

  const confirmDelete = (id: number) => {
    setDeletingId(id);
  };

  const handleDelete = async () => {
    if (deletingId) {
      await deleteTech(deletingId);
      setDeletingId(null);
    }
  };

  const cancelDelete = () => {
    setDeletingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isAdding) {
      await createTech(formData as Tech);
      setIsAdding(false);
    } else if (editingId) {
      await updateTech(editingId, formData);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <DeleteConfirmModal
        isOpen={!!deletingId}
        onClose={cancelDelete}
        onConfirm={handleDelete}
        description="Are you sure you want to delete this tech? It will be removed from all associated projects."
      />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Technologies</h2>
        <Button onClick={handleAdd} className="gap-2">
          <LuPlus className="w-4 h-4" /> Add Tech
        </Button>
      </div>

      <TechModal
        isOpen={isAdding || !!editingId}
        onClose={handleCancel}
        title={isAdding ? "Add New Tech" : "Edit Tech"}
        description={
          isAdding
            ? "Add a new technology to your stack."
            : "Update details for this technology."
        }
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {initialData.map((tech) => {
          const iconComponent = getTechIcon(tech.iconName);
          return (
            <div
              key={tech.id}
              className="flex justify-between items-center bg-muted/30 p-4 rounded-lg border border-border"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 bg-background rounded-md border border-border shrink-0">
                  {createElement(iconComponent, {
                    className: "w-5 h-5 text-primary",
                  })}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold truncate" title={tech.name}>
                    {tech.name}
                  </h3>
                  <p
                    className="text-xs text-muted-foreground truncate"
                    title={tech.iconName}
                  >
                    {tech.iconName}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={() => handleEdit(tech)}
                >
                  <LuPencil className="w-4 h-4" />
                </Button>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="text-red-500 hover:text-red-700 hover:bg-red-100/10"
                  onClick={() => confirmDelete(tech.id)}
                >
                  <LuTrash className="w-4 h-4" />
                </Button>
              </div>
            </div>
          );
        })}
        {initialData.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">
            No technologies found.
          </p>
        )}
      </div>
    </div>
  );
}

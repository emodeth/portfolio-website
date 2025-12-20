import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechStackItem {
  name: string;
  icon?: ReactNode;
  class?: string;
}

interface TechBadgeProps {
  tech: TechStackItem;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors ",
        tech.class
      )}
    >
      {tech.icon}
      {tech.name}
    </div>
  );
};

export default TechBadge;

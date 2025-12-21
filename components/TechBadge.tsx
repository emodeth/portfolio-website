import { Tech } from "@/lib/types";
import { cn } from "@/lib/utils";

const TechBadge = ({ tech }: { tech: Tech }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors"
      )}
    >
      {tech.name}
    </div>
  );
};

export default TechBadge;

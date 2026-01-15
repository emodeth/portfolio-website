import { Tech } from "@/lib/types";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/icons";
import { createElement } from "react";

const TechBadge = ({ tech }: { tech: Tech }) => {
  const iconComponent = getTechIcon(tech.iconName);

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-gray-1100 transition-colors text-[14px] whitespace-nowrap"
      )}
    >
      {createElement(iconComponent, { className: "w-3.5 h-3.5" })}
      {tech.name}
    </div>
  );
};

export default TechBadge;

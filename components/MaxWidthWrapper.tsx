import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CodeWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function CodeWindow({ title = "~/dev", children, className, bodyClassName }: CodeWindowProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-terminal shadow-2xl overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-card border-b border-border">
        <span className="h-3 w-3 rounded-full bg-chrome-red" />
        <span className="h-3 w-3 rounded-full bg-chrome-yellow" />
        <span className="h-3 w-3 rounded-full bg-chrome-green" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">{title}</span>
      </div>
      <div className={cn("p-5 font-mono text-sm text-foreground", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}

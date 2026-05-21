import { cn } from "@/lib/utils";
import type { PostTag } from "@/data/posts";

const TAG_STYLES: Record<PostTag, string> = {
  "Front End": "border-accent/50 text-accent",
  "Back End": "border-primary/50 text-primary",
  Tools: "border-muted-foreground/50 text-muted-foreground",
};

interface TagChipProps {
  tag: PostTag;
  className?: string;
}

export function TagChip({ tag, className }: TagChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-background/40",
        TAG_STYLES[tag],
        className,
      )}
    >
      #{tag.toLowerCase().replace(" ", "-")}
    </span>
  );
}

import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import type { Post } from "@/data/posts";
import { TagChip } from "./TagChip";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/60 hover:shadow-[0_0_24px_hsl(var(--primary)/0.18)]"
    >
      <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-3">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          {post.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3 w-3" />
          {post.readingTime}
        </span>
        <TagChip tag={post.tag} className="ml-auto" />
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>

      <div className="mt-4 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        $ cat {post.slug}.md →
      </div>
    </Link>
  );
}

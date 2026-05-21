import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { TagChip } from "./TagChip";

interface Props {
  posts: Post[];
}

export function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-border">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
        <span className="opacity-60">//</span> related
      </p>
      <h2 className="font-display text-xl font-semibold mb-5">
        <span className="text-primary font-mono mr-2">{`>`}</span>
        Keep reading
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              className="group block h-full rounded-md border border-border bg-card p-4 transition-all hover:border-accent/60 hover:shadow-[0_0_20px_hsl(var(--accent)/0.15)]"
            >
              <div className="flex items-center justify-between gap-2 mb-2 text-[11px] font-mono text-muted-foreground">
                <TagChip tag={p.tag} />
                <span>{p.readingTime}</span>
              </div>
              <h3 className="font-display text-sm font-semibold leading-snug group-hover:text-accent transition-colors line-clamp-2">
                {p.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground group-hover:text-primary transition-colors">
                read <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import { posts, type PostTag } from "@/data/posts";
import { PostCard } from "@/components/PostCard";
import { cn } from "@/lib/utils";

type Filter = "All" | PostTag;
const FILTERS: Filter[] = ["All", "Front End", "Back End", "Tools"];

function isFilter(v: string | null): v is Filter {
  return v !== null && (FILTERS as string[]).includes(v);
}

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const initialTag = isFilter(params.get("tag")) ? (params.get("tag") as Filter) : "All";
  const initialQ = params.get("q") ?? "";

  const [active, setActive] = useState<Filter>(initialTag);
  const [query, setQuery] = useState(initialQ);

  // Keep URL in sync
  useEffect(() => {
    const next = new URLSearchParams();
    if (active !== "All") next.set("tag", active);
    if (query.trim()) next.set("q", query.trim());
    setParams(next, { replace: true });
  }, [active, query, setParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => (active === "All" ? true : p.tag === active))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [active, query]);

  return (
    <div className="container py-12 sm:py-16">
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          <span className="opacity-60">//</span> blog
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          <span className="terminal-prompt" />
          ls ~/posts
        </h1>
        <p className="text-muted-foreground font-sans">Notes on building software, in roughly reverse chronological order.</p>
      </header>

      {/* Search */}
      <div className="mb-5">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="grep posts..."
            aria-label="Search posts"
            className="w-full rounded-md border border-border bg-card pl-9 pr-9 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-sm">
        <span className="text-muted-foreground mr-1">filter:</span>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "px-3 py-1.5 rounded-md border transition-all",
              active === f
                ? "border-primary text-primary bg-primary/10 shadow-[0_0_12px_hsl(var(--primary)/0.25)]"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40",
            )}
          >
            {f === "All" ? "*" : `#${f.toLowerCase().replace(" ", "-")}`}
          </button>
        ))}
        <span className="ml-auto text-xs text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> grep: no posts match{" "}
            <span className="text-accent">"{query || active}"</span>
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActive("All");
            }}
            className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-mono hover:border-primary hover:text-primary transition-colors"
          >
            reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}

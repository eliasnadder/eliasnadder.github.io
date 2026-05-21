import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Github, ArrowRight, Search, X } from "lucide-react";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { FEATURED_PROJECTS, type FeaturedProject } from "@/data/projects";

type TypeFilter = FeaturedProject["type"] | "all";

const FILTERS: { value: TypeFilter; label: string }[] = [
  { value: "all",     label: "All" },
  { value: "web",     label: "Web" },
  { value: "mobile",  label: "Mobile" },
  { value: "backend", label: "Backend" },
  { value: "ai",      label: "AI / ML" },
];

export default function Projects() {
  const [query, setQuery]   = useState("");
  const [active, setActive] = useState<TypeFilter>("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return FEATURED_PROJECTS.filter((p) => {
      const matchesType = active === "all" || p.type === active;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)) ||
        p.description.some((d) => d.toLowerCase().includes(q));
      return matchesType && matchesQuery;
    });
  }, [query, active]);

  return (
    <div className="container py-12 sm:py-16">
      {/* Header */}
      <header className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          <span className="opacity-60">//</span> projects
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
              <span className="terminal-prompt" />
              ls -la <span className="text-accent">~/projects</span>
            </h1>
            <p className="text-muted-foreground font-sans">
              A selection of things I've built — web apps, mobile, backend APIs, and AI systems.
            </p>
          </div>

          <Link
            to="/projects/github"
            className="inline-flex items-center gap-2 shrink-0 rounded-md border border-border bg-card px-4 py-2 text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub repos
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {/* Search bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tech, keywords…"
            className="w-full rounded-md border border-border bg-card pl-9 pr-9 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Type filter chips */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-3 py-1.5 rounded-md border text-xs font-mono transition-colors ${
                active === f.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-10 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> no projects match{" "}
            <span className="text-accent">"{query}"</span>
          </p>
          <button
            onClick={() => { setQuery(""); setActive("all"); }}
            className="mt-3 text-xs font-mono text-primary hover:underline"
          >
            clear filters
          </button>
        </div>
      ) : (
        <>
          <p className="text-xs font-mono text-muted-foreground mb-5">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            {active !== "all" && <span> · <span className="text-primary">{active}</span></span>}
            {query && <span> · matching <span className="text-accent">"{query}"</span></span>}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import { Star, GitFork, ExternalLink, BookMarked } from "lucide-react";
import { languageColor, type Repo } from "@/data/projects";

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/60 hover:shadow-[0_0_24px_hsl(var(--accent)/0.18)]">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookMarked className="h-4 w-4 text-muted-foreground shrink-0" />
          <a
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono font-semibold text-accent hover:underline truncate"
          >
            {repo.name}
          </a>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-border text-muted-foreground font-mono shrink-0">
          Public
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{repo.description}</p>

      <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono flex-wrap">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: `hsl(${languageColor(repo.language)})` }}
            />
            {repo.language}
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <Star className="h-3.5 w-3.5" />
          {repo.stars.toLocaleString()}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" />
          {repo.forks.toLocaleString()}
        </span>
        <a
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-1 text-primary hover:underline"
        >
          View <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

export function RepoCardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-5 animate-pulse">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-4 w-4 rounded bg-muted" />
        <div className="h-4 w-40 rounded bg-muted" />
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-4/5 rounded bg-muted" />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-3 w-16 rounded bg-muted" />
        <div className="h-3 w-10 rounded bg-muted" />
        <div className="h-3 w-10 rounded bg-muted" />
      </div>
    </div>
  );
}

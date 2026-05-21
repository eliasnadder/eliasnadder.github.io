import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import { RepoCard, RepoCardSkeleton } from "@/components/RepoCard";
import { GitHubProfileHeader, GitHubProfileHeaderSkeleton } from "@/components/GitHubProfileHeader";
import { fetchUser, fetchUserRepos } from "@/lib/github";
import { GITHUB_USERNAME } from "@/data/projects";

export default function GithubProjects() {
  const reposQuery = useQuery({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: ({ signal }) => fetchUserRepos(GITHUB_USERNAME, signal),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const userQuery = useQuery({
    queryKey: ["github-user", GITHUB_USERNAME],
    queryFn: ({ signal }) => fetchUser(GITHUB_USERNAME, signal),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const isLoading = reposQuery.isLoading || userQuery.isLoading;
  const isFetching = reposQuery.isFetching || userQuery.isFetching;
  const isError = reposQuery.isError || userQuery.isError;
  const error = reposQuery.error ?? userQuery.error;
  const refetchAll = () => {
    reposQuery.refetch();
    userQuery.refetch();
  };

  return (
    <div className="container py-12 sm:py-16">
      <header className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> back to projects
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          <span className="opacity-60">//</span> open source
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          <span className="terminal-prompt" />
          gh repo list <span className="text-accent">{GITHUB_USERNAME}</span>
        </h1>
        <p className="text-muted-foreground font-sans">
          Live from the GitHub API — public, non-fork repositories, sorted by stars.
        </p>
      </header>

      {isError && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-6 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-sm text-destructive mb-1">
                <span className="opacity-70">$</span> gh repo list — error
              </p>
              <p className="text-sm text-foreground/90 font-sans mb-4">
                {error instanceof Error ? error.message : "Failed to load repositories."}
              </p>
              <button
                onClick={refetchAll}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-mono hover:border-primary hover:text-primary transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Retry
              </button>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <>
          <GitHubProfileHeaderSkeleton />
          <div className="grid gap-5 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <RepoCardSkeleton key={i} />
            ))}
          </div>
        </>
      )}

      {!isLoading && !isError && userQuery.data && reposQuery.data && (
        <>
          <GitHubProfileHeader user={userQuery.data} repos={reposQuery.data} />

          {reposQuery.data.length === 0 ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> No public repositories found for {GITHUB_USERNAME}.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-5 text-xs font-mono text-muted-foreground">
                <span>
                  {reposQuery.data.length}{" "}
                  {reposQuery.data.length === 1 ? "repository" : "repositories"}
                </span>
                <button
                  onClick={refetchAll}
                  disabled={isFetching}
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`h-3 w-3 ${isFetching ? "animate-spin" : ""}`} /> refresh
                </button>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {reposQuery.data.map((r) => (
                  <RepoCard key={r.name} repo={r} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

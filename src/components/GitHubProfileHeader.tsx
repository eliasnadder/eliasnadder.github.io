import { Link2, MapPin, Users, Star, BookMarked } from "lucide-react";
import type { GitHubUser } from "@/lib/github";
import type { Repo } from "@/data/projects";

interface Props {
  user: GitHubUser;
  repos: Repo[];
}

export function GitHubProfileHeader({ user, repos }: Props) {
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);

  return (
    <div className="rounded-lg border border-border bg-card p-5 sm:p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 self-start"
          aria-label={`${user.login} on GitHub`}
        >
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            loading="lazy"
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-md border border-border object-cover"
          />
        </a>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap mb-1">
            <h2 className="font-display text-xl font-semibold text-foreground">{user.name ?? user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-accent hover:underline"
            >
              @{user.login}
            </a>
          </div>

          {user.bio && <p className="text-sm text-foreground/85 leading-relaxed mb-3 font-sans">{user.bio}</p>}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-muted-foreground">
            {user.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {user.location}
              </span>
            )}
            {user.blog && (
              <a
                href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Link2 className="h-3.5 w-3.5" /> {user.blog.replace(/^https?:\/\//, "")}
              </a>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              <span className="text-foreground">{user.followers.toLocaleString()}</span> followers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookMarked className="h-3.5 w-3.5" />
              <span className="text-foreground">{repos.length}</span> shown
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">{totalStars.toLocaleString()}</span> total stars
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GitHubProfileHeaderSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-5 sm:p-6 mb-8 animate-pulse">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-md bg-muted shrink-0" />
        <div className="flex-1 space-y-3">
          <div className="h-5 w-48 rounded bg-muted" />
          <div className="h-3 w-full max-w-md rounded bg-muted" />
          <div className="flex gap-4 pt-1">
            <div className="h-3 w-20 rounded bg-muted" />
            <div className="h-3 w-20 rounded bg-muted" />
            <div className="h-3 w-20 rounded bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}

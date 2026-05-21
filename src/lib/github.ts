import type { Repo } from "@/data/projects";

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  blog: string | null;
  company: string | null;
}

export async function fetchUserRepos(username: string, signal?: AbortSignal): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`,
    {
      headers: { Accept: "application/vnd.github+json" },
      signal,
    },
  );

  if (!res.ok) {
    if (res.status === 404) throw new Error(`User "${username}" not found on GitHub.`);
    if (res.status === 403) throw new Error("GitHub API rate limit reached. Please try again in a few minutes.");
    throw new Error(`GitHub API error (${res.status}).`);
  }

  const data: GitHubRepo[] = await res.json();

  return data
    .filter((r) => !r.fork && !r.archived && !r.private)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map((r) => ({
      name: r.name,
      description: r.description ?? "No description provided.",
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      url: r.html_url,
      updatedAt: r.updated_at,
    }));
}

export async function fetchUser(username: string, signal?: AbortSignal): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error(`User "${username}" not found on GitHub.`);
    if (res.status === 403) throw new Error("GitHub API rate limit reached.");
    throw new Error(`GitHub API error (${res.status}).`);
  }
  return res.json();
}

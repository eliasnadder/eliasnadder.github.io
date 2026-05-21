import { Link, useParams, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  ExternalLink,
  ImagePlus,
  Github,
  BookMarked,
  Star,
  GitFork,
  RefreshCw,
  Lightbulb,
  Target,
  GraduationCap,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FEATURED_PROJECTS, languageColor } from "@/data/projects";
import { TYPE_META } from "@/components/FeaturedProjectCard";

// ── GitHub helpers ────────────────────────────────────────────────────────────
function parseGithubRepo(url: string): { owner: string; repo: string } | null {
  try {
    const parts = new URL(url).pathname.replace(/^\//, "").split("/");
    if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
  } catch {}
  return null;
}

interface GHRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

async function fetchRepo(owner: string, repo: string, signal?: AbortSignal): Promise<GHRepo> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });
  if (!res.ok) throw new Error(`GitHub API error (${res.status})`);
  return res.json();
}

function GithubRepoCard({ githubUrl, fallbackDesc }: { githubUrl: string; fallbackDesc: string }) {
  const parsed = parseGithubRepo(githubUrl);
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["gh-repo", parsed?.owner, parsed?.repo],
    queryFn: ({ signal }) => fetchRepo(parsed!.owner, parsed!.repo, signal),
    enabled: !!parsed,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
  if (!parsed) return null;

  return (
    <div className="rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/60 hover:shadow-[0_0_24px_hsl(var(--accent)/0.18)]">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookMarked className="h-4 w-4 text-muted-foreground shrink-0" />
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono font-semibold text-accent hover:underline truncate text-sm"
          >
            {isLoading
              ? <span className="inline-block h-3.5 w-36 rounded bg-muted animate-pulse" />
              : (data?.full_name ?? `${parsed.owner}/${parsed.repo}`)}
          </a>
        </div>
        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-border text-muted-foreground font-mono shrink-0">
          Public
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
        {isLoading
          ? <span className="inline-block h-3 w-full rounded bg-muted animate-pulse" />
          : (data?.description ?? fallbackDesc)}
      </p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono flex-wrap">
        {!isLoading && data?.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="h-3 w-3 rounded-full shrink-0"
              style={{ backgroundColor: `hsl(${languageColor(data.language)})` }}
            />
            {data.language}
          </span>
        )}
        {isLoading && <span className="inline-block h-3 w-20 rounded bg-muted animate-pulse" />}
        <span className="inline-flex items-center gap-1">
          <Star className="h-3.5 w-3.5" />
          {isLoading ? "—" : (data?.stargazers_count.toLocaleString() ?? "—")}
        </span>
        <span className="inline-flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" />
          {isLoading ? "—" : (data?.forks_count.toLocaleString() ?? "—")}
        </span>
        <div className="ml-auto flex items-center gap-3">
          {isError && (
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="inline-flex items-center gap-1 hover:text-primary transition-colors disabled:opacity-50"
              title="Retry"
            >
              <RefreshCw className={`h-3 w-3 ${isFetching ? "animate-spin" : ""}`} />
            </button>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            View <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Screenshot gallery with horizontal scroll + modal ────────────────────────
function ScreenshotGallery({ name, screenshots }: { name: string; screenshots: string[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : 0)), [screenshots.length]);
  const next = useCallback(() => setActive((i) => (i !== null ? (i + 1) % screenshots.length : 0)), [screenshots.length]);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, close, prev, next]);

  return (
    <section>
      <SectionHeading>screenshots</SectionHeading>

      {/* Horizontal scroll strip — portrait cards */}
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {screenshots.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="shrink-0 rounded-lg border border-border bg-[#111] overflow-hidden w-56 aspect-[9/16] hover:border-primary/60 hover:shadow-[0_0_16px_hsl(var(--primary)/0.2)] transition-all focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`View ${name} screenshot ${i + 1}`}
          >
            <img
              src={src}
              alt={`${name} screenshot ${i + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 p-2 rounded-full bg-card/80 border border-border text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-2 rounded-full bg-card/80 border border-border text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[active]}
              alt={`${name} screenshot ${active + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg border border-border object-contain"
            />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50">
              {active + 1} / {screenshots.length}
            </p>
          </div>

          {/* Next */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-2 rounded-full bg-card/80 border border-border text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
      <span className="opacity-60">//</span> {children}
    </h2>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = FEATURED_PROJECTS.find((p) => p.id === id);
  if (!project) return <Navigate to="/projects" replace />;

  const meta = TYPE_META[project.type];

  return (
    <div className="container py-12 sm:py-16 max-w-4xl">
      {/* Back */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> back to projects
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-border bg-card ${meta.color}`}>
            <meta.Icon className="h-3 w-3" />
            {meta.label}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-1">{project.name}</h1>
        <p className="font-mono text-sm text-primary">{project.tagline}</p>
      </header>

      {/* Hero screenshot */}
      <div className="w-full aspect-video rounded-lg border border-border bg-[#111] overflow-hidden mb-6 flex items-center justify-center">
        {project.screenshot ? (
          <img src={project.screenshot} alt={`${project.name} screenshot`} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/30 select-none">
            <ImagePlus className="h-10 w-10" />
            <span className="font-mono text-xs">screenshot coming soon</span>
          </div>
        )}
      </div>

      {/* ── Under image: repo card + tech stack side by side ── */}
      <div className="grid gap-5 sm:grid-cols-2 mb-10">
        {/* GitHub repo card */}
        {project.githubUrl ? (
          <div>
            <SectionHeading>repository</SectionHeading>
            <GithubRepoCard githubUrl={project.githubUrl} fallbackDesc={project.tagline} />
          </div>
        ) : (
          /* placeholder so tech stack stays right even without a repo */
          <div />
        )}

        {/* Tech stack */}
        <div>
          <SectionHeading>tech stack</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono px-2.5 py-1 rounded border border-border bg-muted/30 text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Overview / About — full width ── */}
      {project.overview && (
        <section className="mb-10">
          <SectionHeading>about</SectionHeading>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
        </section>
      )}

      {/* ── Content — full width ── */}
      <div className="space-y-12">

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section>
              <SectionHeading>key features</SectionHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.keyFeatures.map((group) => (
                  <div key={group.title} className="rounded-lg border border-border bg-card p-4">
                    <p className="font-mono text-xs text-accent mb-3 uppercase tracking-wider">{group.title}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-mono shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Problem & Solution */}
          {(project.problemStatement || project.solution) && (
            <section>
              <SectionHeading>problem & solution</SectionHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.problemStatement && (
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-destructive shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider text-destructive">Problem</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problemStatement}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider text-primary">Solution</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Architecture */}
          {project.architecture && (
            <section>
              <SectionHeading>architecture</SectionHeading>
              <div className="rounded-lg border border-border bg-[#0d0d0d] p-5 overflow-x-auto">
                <pre className="font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre">
                  {project.architecture}
                </pre>
              </div>
            </section>
          )}

          {/* Design Philosophy */}
          {project.designPhilosophy && (
            <section>
              <SectionHeading>design philosophy</SectionHeading>
              <div className="rounded-lg border border-border bg-card p-4 flex gap-3">
                <Sparkles className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{project.designPhilosophy}</p>
              </div>
            </section>
          )}

          {/* What I Learned */}
          {project.whatILearned && project.whatILearned.length > 0 && (
            <section>
              <SectionHeading>what i learned</SectionHeading>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-mono text-xs text-muted-foreground">Key takeaways from this project</span>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.whatILearned.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-mono shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Screenshot gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <ScreenshotGallery name={project.name} screenshots={project.screenshots} />
          )}
        </div>
    </div>
  );
}

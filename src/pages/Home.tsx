import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CodeWindow } from "@/components/CodeWindow";
import { Typewriter } from "@/components/Typewriter";
import { SocialLinks } from "@/components/SocialLinks";
import { PostCard } from "@/components/PostCard";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { posts } from "@/data/posts";
import { FEATURED_PROJECTS } from "@/data/projects";

export default function Home() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const featuredProjects = FEATURED_PROJECTS.slice(0, 4);

  return (
    <div className="container py-12 sm:py-20">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <span className="opacity-60">//</span> personal blog · v1.0.0
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
            Hey, I'm <span className="text-primary glow-green">Elias</span>.
            <br />
            I build things on <span className="text-accent glow-blue">the web</span>.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8 font-sans">
            Full-stack developer based in Damascus. I build web apps, mobile apps, and AI systems —
            and write about the things I learn along the way.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-mono font-semibold text-primary-foreground transition-all hover:shadow-[0_0_24px_hsl(var(--primary)/0.5)]"
            >
              Check my projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-mono text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              About me
            </Link>
          </div>

          <SocialLinks />
        </div>

        <CodeWindow title="eliasnadder@dev:~ — zsh">
          <Typewriter
            lines={[
              { prompt: true, text: "whoami" },
              { text: "eliasnadder — full-stack dev · Damascus, Syria", className: "text-muted-foreground" },
              { prompt: true, text: "cat stack.txt" },
              { text: "React · Laravel · Flutter · Python", className: "text-accent" },
              { prompt: true, text: "ls ~/projects" },
              { text: "MAISON  GoOrder  CasaLingua  SenetAI", className: "text-foreground" },
              { prompt: true, text: "echo $STATUS" },
              { text: "open to interesting work 🚀", className: "text-primary" },
            ]}
          />
        </CodeWindow>
      </section>

      {/* Featured projects */}
      <section className="mt-20 sm:mt-28">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
              <span className="opacity-60">//</span> featured projects
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              <span className="terminal-prompt" />
              ls -la <span className="text-accent">~/projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-mono text-accent hover:text-primary transition-colors"
          >
            view all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <FeaturedProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-accent hover:text-primary transition-colors"
          >
            view all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Latest posts */}
      {/* <section className="mt-20 sm:mt-28">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
              <span className="opacity-60">//</span> latest posts
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              <span className="terminal-prompt" />
              ls -lt ~/blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-mono text-accent hover:text-primary transition-colors"
          >
            view all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-mono text-accent hover:text-primary transition-colors"
          >
            view all posts <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
}

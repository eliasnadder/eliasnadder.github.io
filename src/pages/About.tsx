import { bio, techStack, experiences, education, languages } from "@/data/about";
import { SocialLinks } from "@/components/SocialLinks";
import { CodeWindow } from "@/components/CodeWindow";
import { Typewriter } from "@/components/Typewriter";
import { GraduationCap, Languages, Phone, Mail, MapPin } from "lucide-react";

const STACK_GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages",  items: ["PHP", "TypeScript", "JavaScript", "Dart", "Python"] },
  { label: "Frontend",   items: ["React", "Tailwind CSS", "Vite"] },
  { label: "Backend",    items: ["Laravel", "REST API", "JWT"] },
  { label: "Databases",  items: ["MySQL", "Supabase", "Eloquent ORM"] },
  { label: "Mobile",     items: ["Flutter", "BLoC"] },
];

export default function About() {
  return (
    <div className="container py-12 sm:py-16 max-w-4xl">
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          <span className="opacity-60">//</span> about
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          <span className="terminal-prompt" />
          cat about.md
        </h1>

        {/* Contact line */}
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-5 text-xs font-mono text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-primary" /> Damascus, Syria
          </span>
          <a
            href="tel:+963934186668"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="h-3 w-3 text-primary" /> +963 934 186 668
          </a>
          <a
            href="mailto:eliasnaderr@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="h-3 w-3 text-primary" /> eliasnaderr@gmail.com
          </a>
        </div>

        <p className="text-lg text-foreground/90 leading-relaxed font-sans max-w-2xl">{bio}</p>
      </header>

      {/* Tech stack — grouped */}
      <section className="mb-14">
        <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
          <span className="text-primary font-mono">{`>`}</span> Tech stack
        </h2>
        <div className="space-y-4">
          {STACK_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground/60 w-20 shrink-0">
                {group.label}
              </span>
              {group.items.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md border border-border bg-card font-mono text-sm text-foreground/90 hover:border-accent/60 hover:text-accent transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-14">
        <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
          <span className="text-primary font-mono">{`>`}</span> Experience
        </h2>
        <CodeWindow title="experience.log">
          <ul className="space-y-6">
            {experiences.map((e, i) => (
              <li key={i} className="grid gap-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-muted-foreground text-xs font-mono">[{e.period}]</span>
                  <span className="text-primary font-semibold">{e.role}</span>
                  <span className="text-muted-foreground font-mono">@</span>
                  <span className="text-accent">{e.company}</span>
                </div>
                <p className="text-foreground/80 text-sm ml-1 border-l border-border pl-4 leading-relaxed">
                  {e.description}
                </p>
              </li>
            ))}
          </ul>
        </CodeWindow>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
          <span className="text-primary font-mono">{`>`}</span> Education
        </h2>
        <div className="space-y-4">
          {education.map((e, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-5 flex gap-4 items-start"
            >
              <GraduationCap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-foreground">{e.degree}</p>
                <p className="font-mono text-sm text-accent">{e.institution}</p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">{e.period}</p>
                <p className="text-sm text-muted-foreground mt-2 italic">{e.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-14">
        <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
          <span className="text-primary font-mono">{`>`}</span> Languages
        </h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((l) => (
            <div
              key={l.name}
              className="rounded-lg border border-border bg-card px-5 py-3 flex items-center gap-3"
            >
              <Languages className="h-4 w-4 text-primary shrink-0" />
              <div>
                <p className="font-mono text-sm font-semibold text-foreground">{l.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{l.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
          <span className="text-primary font-mono">{`>`}</span> Get in touch
        </h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <p className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-primary">$</span> echo "open to interesting conversations & collaborations"
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}

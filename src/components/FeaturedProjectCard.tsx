import { Link } from "react-router-dom";
import { ImagePlus, Smartphone, Globe, Server, Bot, ArrowRight } from "lucide-react";
import type { FeaturedProject } from "@/data/projects";

export const TYPE_META: Record<
  FeaturedProject["type"],
  { label: string; Icon: React.ElementType; color: string }
> = {
  web:     { label: "Web",     Icon: Globe,      color: "text-accent" },
  mobile:  { label: "Mobile",  Icon: Smartphone, color: "text-primary" },
  backend: { label: "Backend", Icon: Server,     color: "text-yellow-400" },
  ai:      { label: "AI / ML", Icon: Bot,        color: "text-purple-400" },
};

export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const meta = TYPE_META[project.type];

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group rounded-lg border border-border bg-card overflow-hidden flex flex-col transition-all hover:border-primary/50 hover:shadow-[0_0_28px_hsl(var(--primary)/0.15)]"
    >
      {/* Screenshot */}
      <div className="relative w-full aspect-video bg-[#111] border-b border-border flex items-center justify-center overflow-hidden">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/30 select-none">
            <ImagePlus className="h-8 w-8" />
            <span className="font-mono text-xs">screenshot coming soon</span>
          </div>
        )}
        {/* Type badge */}
        <span
          className={`absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-border bg-card/80 backdrop-blur-sm ${meta.color}`}
        >
          <meta.Icon className="h-3 w-3" />
          {meta.label}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-display font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="font-mono text-xs text-primary mt-0.5">{project.tagline}</p>
        </div>

        {/* Show only first 2 bullets on card — full list on detail page */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {project.description.slice(0, 2).map((point, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary font-mono shrink-0 mt-0.5">›</span>
              <span>{point}</span>
            </li>
          ))}
          {project.description.length > 2 && (
            <li className="text-xs font-mono text-muted-foreground/50 pl-4">
              +{project.description.length - 2} more…
            </li>
          )}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded border border-border bg-muted/30 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary mt-auto group-hover:gap-2.5 transition-all">
          View details <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

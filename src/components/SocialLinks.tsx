import { Github, Twitter, Linkedin, Mail, Rss } from "lucide-react";
import { social } from "@/data/about";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md";
}

const items = [
  { href: social.github, icon: Github, label: "GitHub" },
  { href: social.twitter, icon: Twitter, label: "Twitter" },
  { href: social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: social.email, icon: Mail, label: "Email" },
  { href: social.rss, icon: Rss, label: "RSS" },
];

export function SocialLinks({ className, size = "md" }: SocialLinksProps) {
  const dim = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const icon = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all",
            "hover:text-primary hover:border-primary/60 hover:shadow-[0_0_18px_hsl(var(--primary)/0.35)]",
            dim,
          )}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}

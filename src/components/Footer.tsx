import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
        <p>
          <span className="text-primary">$</span> echo "© {new Date().getFullYear()} ~/dev — built with React + Vite"
        </p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}

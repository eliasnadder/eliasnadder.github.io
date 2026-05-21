import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CommandPalette } from "./CommandPalette";

const links = [
  { to: "/", label: "home", end: true },
  // { to: "/blog", label: "blog" },
  { to: "/projects", label: "projects" },
  { to: "/about", label: "about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-3">
        <NavLink to="/" className="font-mono text-sm font-semibold shrink-0">
          <span className="text-primary">~/</span>
          <span className="text-foreground">dev</span>
          <span className="text-primary animate-blink ml-0.5">▊</span>
        </NavLink>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="flex items-center gap-1 sm:gap-2 font-mono text-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  cn(
                    "px-2.5 sm:px-3 py-1.5 rounded-md transition-colors relative",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="hidden sm:inline text-muted-foreground/60">/</span>
                    {l.label}
                    {isActive && (
                      <span className="absolute left-2 right-2 -bottom-px h-px bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <CommandPalette />
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Home, FolderGit2, User, Search, Archive } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { posts } from "@/data/posts";

const PAGES = [
  { label: "Home", to: "/", icon: Home },
  // { label: "Blog", to: "/blog", icon: FileText },
  { label: "Projects", to: "/projects", icon: Archive },
  { label: "Repos", to: "/projects/github", icon: FolderGit2 },
  { label: "About", to: "/about", icon: User },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden md:inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-2.5 py-1 text-xs font-mono text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search…</span>
        <kbd className="ml-2 inline-flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search posts…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {PAGES.map((p) => {
              const Icon = p.icon;
              return (
                <CommandItem key={p.to} value={`page ${p.label}`} onSelect={() => go(p.to)}>
                  <Icon className="mr-2 h-4 w-4 text-primary" />
                  <span>{p.label}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
          <CommandSeparator />
          {/* <CommandGroup heading="Posts">
            {posts.map((p) => (
              <CommandItem
                key={p.slug}
                value={`post ${p.title} ${p.tag}`}
                onSelect={() => go(`/blog/${p.slug}`)}
              >
                <FileText className="mr-2 h-4 w-4 text-accent" />
                <div className="flex flex-col min-w-0">
                  <span className="truncate">{p.title}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    #{p.tag.toLowerCase().replace(" ", "-")} · {p.date}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </>
  );
}

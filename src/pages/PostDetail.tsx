import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { posts } from "@/data/posts";
import { Markdown } from "@/components/Markdown";
import { TagChip } from "@/components/TagChip";
import { ReadingProgress } from "@/components/ReadingProgress";
import { RelatedPosts } from "@/components/RelatedPosts";
import NotFound from "./NotFound";
import { useEffect, useMemo, useState } from "react";
import { slugify } from "@/lib/slug";
import { cn } from "@/lib/utils";

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  const headings = useMemo(() => {
    if (!post) return [];
    return post.content
      .split("\n")
      .filter((l) => l.startsWith("## "))
      .map((l) => {
        const text = l.replace(/^##\s+/, "");
        return { text, id: slugify(text) };
      });
  }, [post]);

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!post || headings.length === 0) return;
    setActiveId(headings[0].id);

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [post, headings]);

  // Scroll to top whenever the slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  const related = useMemo(() => {
    if (!post) return [];
    return posts
      .filter((p) => p.slug !== post.slug && p.tag === post.tag)
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3);
  }, [post]);

  if (!post) return <NotFound />;

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <ReadingProgress />
      <div className="container py-12 sm:py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> cd ../blog
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1fr_220px]">
          <article className="min-w-0">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground mb-4">
                <TagChip tag={post.tag} />
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> {post.readingTime}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{post.title}</h1>
            </header>

            <Markdown>{post.content}</Markdown>

            <RelatedPosts posts={related} />
          </article>

          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-20">
                <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">// on this page</p>
                <ul className="space-y-2 text-sm font-mono border-l border-border">
                  {headings.map((h) => {
                    const isActive = activeId === h.id;
                    return (
                      <li key={h.id} className="relative">
                        {isActive && (
                          <span
                            className="absolute -left-px top-0 bottom-0 w-px bg-primary"
                            style={{ boxShadow: "0 0 6px hsl(var(--primary))" }}
                            aria-hidden="true"
                          />
                        )}
                        <a
                          href={`#${h.id}`}
                          onClick={(e) => handleTocClick(e, h.id)}
                          className={cn(
                            "block pl-3 py-0.5 transition-colors hover:text-accent",
                            isActive ? "text-primary" : "text-muted-foreground",
                          )}
                        >
                          → {h.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </>
  );
}

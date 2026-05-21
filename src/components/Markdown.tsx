import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "./CodeBlock";
import { headingId } from "@/lib/slug";

export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-article">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 id={headingId(children)} className="font-display text-3xl sm:text-4xl font-bold mt-10 mb-5 text-foreground scroll-mt-24">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              id={headingId(children)}
              className="font-display text-2xl font-semibold mt-10 mb-4 text-foreground border-b border-border pb-2 scroll-mt-24"
            >
              <span className="text-primary mr-2">##</span>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={headingId(children)} className="font-display text-xl font-semibold mt-8 mb-3 text-foreground scroll-mt-24">
              <span className="text-primary mr-2">###</span>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4 leading-relaxed text-foreground/90 font-sans">{children}</p>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-accent underline underline-offset-4 hover:text-primary" target="_blank" rel="noreferrer">
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="my-4 ml-6 list-disc space-y-2 text-foreground/90 font-sans">{children}</ul>,
          ol: ({ children }) => <ol className="my-4 ml-6 list-decimal space-y-2 text-foreground/90 font-sans">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-5 border-l-2 border-primary/60 pl-4 italic text-muted-foreground">{children}</blockquote>
          ),
          hr: () => <hr className="my-8 border-border" />,
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            if (!inline && match) {
              return <CodeBlock language={match[1]} value={String(children)} />;
            }
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 text-[0.85em] text-accent font-mono" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

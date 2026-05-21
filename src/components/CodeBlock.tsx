import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  value: string;
}

export function CodeBlock({ language, value }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore — clipboard not available
    }
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border bg-terminal group/code">
      <div className="flex items-center gap-2 px-4 py-2 bg-card border-b border-border">
        <span className="h-2.5 w-2.5 rounded-full bg-chrome-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-chrome-yellow" />
        <span className="h-2.5 w-2.5 rounded-full bg-chrome-green" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="ml-auto inline-flex items-center gap-1.5 rounded border border-border bg-background/40 px-2 py-1 text-[11px] font-mono text-muted-foreground transition-all hover:border-primary/60 hover:text-primary opacity-60 group-hover/code:opacity-100 focus-visible:opacity-100"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem 1.25rem",
          background: "transparent",
          fontSize: "0.85rem",
        }}
        codeTagProps={{ style: { fontFamily: '"JetBrains Mono", monospace' } }}
      >
        {value.replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}

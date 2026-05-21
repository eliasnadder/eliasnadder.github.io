import { useEffect, useState } from "react";

interface Line {
  prompt?: boolean;
  text: string;
  className?: string;
}

interface TypewriterProps {
  lines: Line[];
  speed?: number;
  startDelay?: number;
}

export function Typewriter({ lines, speed = 28, startDelay = 250 }: TypewriterProps) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx].text;
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, 350);
    return () => clearTimeout(t);
  }, [started, lineIdx, charIdx, lines, speed]);

  return (
    <div className="font-mono text-sm sm:text-base leading-relaxed">
      {lines.map((line, i) => {
        const isCurrent = i === lineIdx;
        const isPast = i < lineIdx;
        const text = isPast ? line.text : isCurrent ? line.text.slice(0, charIdx) : "";
        if (!isPast && !isCurrent) return null;
        return (
          <div key={i} className={line.className}>
            {line.prompt && <span className="text-primary font-semibold">$ </span>}
            <span>{text}</span>
            {isCurrent && i < lines.length && (
              <span className="text-primary animate-blink">▊</span>
            )}
          </div>
        );
      })}
      {lineIdx >= lines.length && (
        <div>
          <span className="text-primary font-semibold">$ </span>
          <span className="text-primary animate-blink">▊</span>
        </div>
      )}
    </div>
  );
}

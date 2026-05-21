import { useEffect, useState } from "react";
import {GitCommitHorizontal} from "lucide-react";
const StatusBar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Damascus", hour12: false }));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Damascus", hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full border-t border-outline-variant bg-background/90 z-50 flex items-center justify-between px-4 py-1 font-label-caps text-label-caps text-on-surface-variant">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-primary-container rounded-full"></div>
          <span>SYS_ONLINE</span>
        </div>
        <span className="hidden md:inline text-outline">|</span>
        <span className="hidden md:inline-flex items-center gap-1">
          <GitCommitHorizontal className="w-4 h-4" />
          main
        </span>
      </div>
      <div>
        <span>SYR {time}</span>
      </div>
    </div>
  );
};

export default StatusBar;

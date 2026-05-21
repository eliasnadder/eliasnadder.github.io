import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="container py-24 max-w-2xl">
      <div className="rounded-lg border border-border bg-terminal p-6 font-mono text-sm shadow-2xl">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <span className="h-3 w-3 rounded-full bg-chrome-red" />
          <span className="h-3 w-3 rounded-full bg-chrome-yellow" />
          <span className="h-3 w-3 rounded-full bg-chrome-green" />
          <span className="ml-3 text-xs text-muted-foreground">error</span>
        </div>
        <p>
          <span className="text-primary">$</span> cat {location.pathname}
        </p>
        <p className="text-destructive mt-2">cat: {location.pathname}: No such file or directory</p>
        <p className="mt-4">
          <span className="text-primary">$</span>{" "}
          <Link to="/" className="text-accent underline underline-offset-4 hover:text-primary">
            cd ~/
          </Link>
        </p>
      </div>
      <h1 className="font-display text-4xl font-bold mt-8">404 — page not found</h1>
    </div>
  );
};

export default NotFound;

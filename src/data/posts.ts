export type PostTag = "Front End" | "Back End" | "Tools";

export interface Post {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tag: PostTag;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "react-server-components-deep-dive",
    title: "React Server Components: A Deep Dive",
    date: "2025-03-14",
    readingTime: "8 min",
    tag: "Front End",
    excerpt: "Understanding RSC, the boundaries between server and client, and what it means for the future of React apps.",
    content: `# React Server Components: A Deep Dive

React Server Components (RSC) shift rendering work to the server while preserving interactivity on the client.

## Why it matters

- Smaller client bundles
- Direct database access from components
- Better data-fetching ergonomics

\`\`\`tsx
// app/page.tsx — a Server Component
import { db } from "@/lib/db";

export default async function Page() {
  const posts = await db.post.findMany();
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## The boundary

Use \`"use client"\` to opt into client rendering for interactivity:

\`\`\`tsx
"use client";
import { useState } from "react";

export function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{n}</button>;
}
\`\`\`

## Takeaways

RSC is a paradigm shift. Embrace the boundary, ship less JS, and let the server do what it does best.`,
  },
  {
    slug: "css-container-queries",
    title: "Mastering CSS Container Queries",
    date: "2025-02-28",
    readingTime: "5 min",
    tag: "Front End",
    excerpt: "Container queries finally let components be truly responsive — based on their parent, not the viewport.",
    content: `# Mastering CSS Container Queries

Media queries respond to the viewport. **Container queries** respond to a parent element. Game changer.

\`\`\`css
.card-grid {
  container-type: inline-size;
}

@container (min-width: 600px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

Now the same \`.card\` adapts whether it's in a sidebar or a full-width hero.`,
  },
  {
    slug: "postgres-jsonb-patterns",
    title: "Advanced PostgreSQL JSONB Patterns",
    date: "2025-03-02",
    readingTime: "10 min",
    tag: "Back End",
    excerpt: "JSONB unlocks schema flexibility in Postgres. Here's how to index, query, and avoid the common pitfalls.",
    content: `# Advanced PostgreSQL JSONB Patterns

JSONB is one of Postgres's most powerful features when used correctly.

## Indexing

\`\`\`sql
CREATE INDEX idx_metadata_gin ON events USING GIN (metadata);

-- Or, target a specific path:
CREATE INDEX idx_user_id ON events ((metadata->>'user_id'));
\`\`\`

## Querying

\`\`\`sql
SELECT * FROM events
WHERE metadata @> '{"type": "signup"}'
  AND (metadata->>'user_id')::uuid = $1;
\`\`\`

## Pitfalls

- Don't store everything as JSONB — relational columns still win for hot paths.
- Always use \`@>\` (containment) over \`->\` chains where possible: it's GIN-indexable.`,
  },
  {
    slug: "designing-rest-apis",
    title: "Designing REST APIs That Don't Suck",
    date: "2025-01-19",
    readingTime: "7 min",
    tag: "Back End",
    excerpt: "Pragmatic principles for building APIs developers actually enjoy consuming.",
    content: `# Designing REST APIs That Don't Suck

A few rules I've learned the hard way.

## 1. Be predictable

\`\`\`http
GET    /api/posts          → list
GET    /api/posts/:id      → one
POST   /api/posts          → create
PATCH  /api/posts/:id      → update
DELETE /api/posts/:id      → delete
\`\`\`

## 2. Version from day one

\`\`\`http
GET /api/v1/posts
\`\`\`

## 3. Errors are part of the API

\`\`\`json
{
  "error": {
    "code": "post_not_found",
    "message": "No post with id abc123",
    "request_id": "req_xyz"
  }
}
\`\`\`

Consistency beats cleverness. Every. Single. Time.`,
  },
  {
    slug: "neovim-modern-setup",
    title: "My Modern Neovim Setup for 2025",
    date: "2025-03-22",
    readingTime: "6 min",
    tag: "Tools",
    excerpt: "LSP, Treesitter, and a config that actually feels like an IDE — without the bloat.",
    content: `# My Modern Neovim Setup for 2025

After years of tweaking, here's the setup that finally stuck.

## Plugin manager: lazy.nvim

\`\`\`lua
require("lazy").setup({
  { "neovim/nvim-lspconfig" },
  { "nvim-treesitter/nvim-treesitter", build = ":TSUpdate" },
  { "hrsh7th/nvim-cmp" },
  { "folke/tokyonight.nvim" },
})
\`\`\`

## Keymaps that matter

\`\`\`lua
vim.keymap.set("n", "<leader>ff", require("telescope.builtin").find_files)
vim.keymap.set("n", "gd", vim.lsp.buf.definition)
vim.keymap.set("n", "<leader>ca", vim.lsp.buf.code_action)
\`\`\`

That's 90% of what I do all day.`,
  },
  {
    slug: "docker-compose-dev-workflow",
    title: "A Docker Compose Workflow for Local Dev",
    date: "2025-02-10",
    readingTime: "5 min",
    tag: "Tools",
    excerpt: "How I run a Postgres + Redis + Mailhog stack locally with one command.",
    content: `# A Docker Compose Workflow for Local Dev

\`\`\`yaml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: dev
    ports: ["5432:5432"]
    volumes: [pgdata:/var/lib/postgresql/data]

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  mail:
    image: mailhog/mailhog
    ports: ["1025:1025", "8025:8025"]

volumes:
  pgdata:
\`\`\`

\`docker compose up -d\` and you're done.`,
  },
];

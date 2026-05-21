export const bio = `Full-stack developer based in Damascus with hands-on experience building production-grade web applications, mobile apps, and AI/ML systems. Proficient in Laravel, React, Flutter, and Python. Strong background in both Arabic and English technical environments.`;

export const techStack = [
  // Languages
  "PHP",
  "TypeScript",
  "JavaScript",
  "Dart",
  "Python",
  // Frontend
  "React",
  "Tailwind CSS",
  "Vite",
  // Backend
  "Laravel",
  "REST API",
  "JWT",
  // Databases
  "MySQL",
  "Supabase",
  "Eloquent ORM",
  // Mobile
  "Flutter",
  "BLoC",
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Full-stack Developer",
    company: "Freelance / Personal Projects",
    period: "2026 — Present",
    description:
      "Building production-grade web and mobile applications. Projects include a luxury e-commerce storefront (React + Supabase), a Flutter mobile commerce app with BLoC state management, an AI-powered real estate platform with Google Gemini, and a Laravel REST API backend.",
  },
  {
    role: "AI / ML Engineer",
    company: "Personal Research",
    period: "2026",
    description:
      "Designed and trained an evolutionary game agent (Senet AI) using genetic algorithms over 50 generations with adaptive curriculum learning. Parallelized evaluation via Python's ProcessPoolExecutor and tracked metrics with WandB.",
  },
  {
    role: "Computer Science Student",
    company: "Damascus University",
    period: "2022 — 2027 (expected)",
    description:
      "Studying Computer Science with relevant coursework in Frontend, Backend, Databases, Data Structures, and AI Models.",
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  notes: string;
}

export const education: Education[] = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Damascus University",
    period: "2023 — 2027 (expected)",
    notes: "Relevant coursework: Frontend, Backend, Databases, Data Structures, AI Models",
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent — technical & professional" },
];

export const social = {
  github: "https://github.com/eliasnadder",
  twitter: "https://twitter.com/eliasnadder",
  linkedin: "https://linkedin.com/in/eliasnadder",
  email: "mailto:eliasnaderr@gmail.com",
  rss: "/rss.xml",
};

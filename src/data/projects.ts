export const GITHUB_USERNAME = "eliasnadder";

// ─── Featured / CV Projects ──────────────────────────────────────────────────

export interface FeatureGroup {
  title: string;
  items: string[];
}

export interface FeaturedProject {
  id: string;
  name: string;
  tagline: string;
  /** Short paragraph shown in cards */
  description: string[];
  /** Longer overview paragraph for detail page */
  overview?: string;
  /** Grouped key features for detail page */
  keyFeatures?: FeatureGroup[];
  /** Architecture / technical notes */
  architecture?: string;
  /** Problem statement */
  problemStatement?: string;
  /** Solution summary */
  solution?: string;
  /** What I learned bullets */
  whatILearned?: string[];
  /** Design philosophy */
  designPhilosophy?: string;
  tech: string[];
  url?: string;
  githubUrl?: string;
  /** Primary hero screenshot */
  screenshot?: string;
  /** Additional gallery screenshots */
  screenshots?: string[];
  type: "web" | "mobile" | "backend" | "ai";
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    tagline: "Modern finance management — simplicity, analytics, and secure expense tracking.",
    description: [
      "Premium Flutter application for managing personal finances through intuitive expense tracking, analytics dashboards, and a polished Material Design 3 experience.",
      "Full transaction workflow: add, edit, and delete expenses with smart category organization, filtering, search, and monthly spending summaries.",
      "Interactive financial charts with spending breakdown visualization, category-based analytics, real-time balance calculations, and monthly trend monitoring.",
      "Biometric authentication with app lock protection, secure local persistence, and a splash-to-auth security flow.",
      "Three-way theme system (light / dark / system) with fully customized Material Design 3 themes, persistent preferences, and smooth page transitions.",
    ],
    overview:
      "Expense Tracker is a premium Flutter application designed to help users monitor spending habits through interactive analytics, biometric security, and clean Material Design 3 interfaces. Built with modern architecture principles emphasizing clean UI, scalable state management, and production-ready mobile development practices.",
    keyFeatures: [
      {
        title: "Expense Management",
        items: [
          "Add, edit, and delete expenses",
          "Smart category organization",
          "Expense filtering and search",
          "Monthly spending summaries",
          "Recent transactions system",
        ],
      },
      {
        title: "Analytics & Insights",
        items: [
          "Interactive financial charts",
          "Spending breakdown visualization",
          "Category-based analytics",
          "Real-time balance calculations",
          "Monthly trend monitoring",
        ],
      },
      {
        title: "Security",
        items: [
          "Biometric authentication",
          "App lock protection",
          "Secure local persistence",
          "Splash-to-auth security flow",
        ],
      },
      {
        title: "User Experience",
        items: [
          "Material Design 3 interface",
          "Light / Dark / System themes",
          "Smooth page transitions",
          "Responsive mobile layouts",
          "Modern animations",
        ],
      },
    ],
    architecture:
      "Presentation Layer\n├── Reusable Widgets\n├── Theme System\n└── Screens & Navigation\nState Management\n├── BLoC / Cubit\n├── Reactive UI Updates\n└── Event-driven Architecture\nData Layer\n├── Local Persistence\n├── Repositories\n└── Models & Serialization\nCore Layer\n├── Utilities & Services\n├── Constants\n└── Secure Storage",
    designPhilosophy:
      "The application was designed around clarity and ease of use. The interface minimizes complexity while maintaining powerful financial insights and modern interaction patterns inspired by premium fintech applications.",
    problemStatement:
      "Most expense tracking applications are either visually outdated or overloaded with unnecessary complexity, making everyday financial tracking frustrating for users.",
    solution:
      "Expense Tracker delivers a streamlined and visually polished experience that combines simplicity, analytics, and security in a scalable mobile application.",
    whatILearned: [
      "Advanced Flutter architecture patterns",
      "Material Design 3 implementation",
      "Biometric authentication integration",
      "Financial analytics visualization",
      "Theme management systems",
      "Animation and UX optimization",
      "State management scalability with BLoC/Cubit",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Material Design 3", "Biometrics", "Local Storage"],
    type: "mobile",
    screenshot: "/projects/expense-tracker/expense-tracker.jpeg",
    screenshots: [
      "/projects/expense-tracker/Screenshot_20260521_234110.jpg",
      "/projects/expense-tracker/Screenshot_20260521_234115.jpg",
      "/projects/expense-tracker/Screenshot_20260521_234118.jpg",
      "/projects/expense-tracker/Screenshot_20260521_234121.jpg",
      "/projects/expense-tracker/Screenshot_20260521_234127.jpg",
      "/projects/expense-tracker/Screenshot_20260521_234131.jpg",
    ],
    githubUrl: "https://github.com/eliasnadder/expense-tracker"
  },
  {
    id: "maison",
    name: "MAISON",
    tagline: "Luxury E-commerce Storefront",
    description: [
      "Full-featured bilingual (EN/FR) luxury retail storefront with product browsing, category filtering, full-text search, and a WhatsApp-integrated order-via-agent flow.",
      "Cart sidebar with live stock validation via Supabase real-time queries, size selection, and quantity controls bounded by inventory data.",
      "Complete admin panel behind Supabase Row-Level Security with product CRUD, orders tracking, and a revenue analytics dashboard.",
      "Polished UI with Cormorant Garamond serif typography, gold accent palette, animated hero section, skeleton loaders, and intersection-observer-triggered navbar search.",
    ],
    overview:
      "MAISON is a bilingual luxury e-commerce storefront focused on premium user experience, real-time inventory validation, and elegant visual presentation. The platform combines modern frontend architecture with scalable commerce workflows and an advanced admin management system.",
    keyFeatures: [
      {
        title: "Commerce",
        items: [
          "Bilingual EN/FR interface",
          "Real-time inventory validation",
          "WhatsApp-integrated order workflow",
          "Category filtering & full-text search",
          "Responsive luxury UI",
        ],
      },
      {
        title: "Admin",
        items: [
          "Advanced admin dashboard",
          "Product CRUD management",
          "Revenue analytics system",
          "Supabase Row-Level Security",
          "Orders tracking",
        ],
      },
    ],
    problemStatement:
      "Luxury brands need a digital storefront that matches the premium feel of their physical presence — most off-the-shelf solutions feel generic and fail to convey exclusivity.",
    solution:
      "MAISON delivers a bespoke bilingual storefront with real-time inventory, a polished gold-accent design system, and a WhatsApp-integrated ordering flow that mirrors a personal shopping assistant experience.",
    whatILearned: [
      "Supabase Row-Level Security for multi-role access control",
      "Real-time query patterns with Supabase subscriptions",
      "Bilingual routing and content management in React",
      "Intersection Observer API for scroll-triggered UI",
      "Admin dashboard architecture with analytics",
    ],
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    type: "web",
    screenshot: "/projects/masion/localhost_8082_ (1).png",
    screenshots: [
      "/projects/masion/localhost_8082_ (1).png",
      "/projects/masion/localhost_8082_ (2).png",
      "/projects/masion/localhost_8082_ (3).png",
      "/projects/masion/localhost_8082_ (4).png",
      "/projects/masion/localhost_8082_ (5).png",
    ],
    githubUrl: "https://github.com/nully-boop/chic-cart",
  },
  {
    id: "goorder-app",
    name: "GoOrder",
    tagline: "Flutter Mobile Commerce App",
    description: [
      "Full-featured mobile e-commerce app using Flutter and the BLoC pattern for predictable state management across cart, orders, favorites, search, and auth flows.",
      "JWT-based authentication with phone-number login and password flows, persisting tokens via SharedPreferences and decoding claims with jwt_decoder.",
      "Cart management with quantity sliders, add/remove animations, real-time total calculation, and order submission to a Laravel REST API via Dio.",
      "Multi-tab search, pull-to-refresh with liquid animations, geolocation-based location tagging, and image upload via image_picker for profile editing.",
      "Three-way theme system (light / dark / system) persisted via SharedPreferences and driven by ThemeBloc.",
    ],
    overview:
      "GoOrder is a full-featured Flutter e-commerce application implementing scalable BLoC architecture, JWT authentication, real-time cart workflows, geolocation features, and multi-theme support.",
    keyFeatures: [
      {
        title: "Auth & Profile",
        items: [
          "JWT authentication",
          "Phone-number & password login",
          "Profile image upload",
          "Token persistence via SharedPreferences",
        ],
      },
      {
        title: "Commerce",
        items: [
          "Cart & favorites management",
          "Animated add/remove interactions",
          "Real-time total calculation",
          "Order submission to Laravel API",
        ],
      },
      {
        title: "UX & Features",
        items: [
          "Product/store multi-tab search",
          "Pull-to-refresh with liquid animations",
          "Geolocation integration",
          "Light / Dark / System theme",
        ],
      },
    ],
    problemStatement:
      "Building a scalable mobile commerce app requires careful state management, smooth animations, and reliable API integration — all while maintaining a great user experience.",
    solution:
      "GoOrder uses the BLoC pattern for predictable state across all flows, Dio for robust API communication, and a ThemeBloc-driven theme system for a polished cross-platform experience.",
    whatILearned: [
      "BLoC pattern for scalable Flutter state management",
      "JWT authentication with token persistence",
      "Dio HTTP client with interceptors",
      "Geolocation services in Flutter",
      "Liquid pull-to-refresh animations",
      "Multi-theme architecture with ThemeBloc",
    ],
    tech: ["Flutter", "Dart", "BLoC", "REST API", "JWT", "Geolocator"],
    type: "mobile",
    screenshot: "/projects/goorder/image1.jpeg",
    screenshots: [
      "/projects/goorder/photo_2025-06-22_15-28-05.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-06.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-07.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-09.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-10.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-11.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-12.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-14.jpg",
      "/projects/goorder/photo_2025-06-22_15-28-14 (2).jpg",
    ],
    githubUrl: "https://github.com/eliasnadder/goorder",
  },
  {
    id: "casa-lingua",
    name: "Casa Lingua Finder",
    tagline: "AI-Powered Property Management Site",
    description: [
      "Full-featured multilingual real estate platform with AI-powered property search and voice chat integration using Google Gemini AI.",
      "Advanced filtering, interactive maps, currency conversion, and a dark/light theme system with RTL language support.",
      "Modular component architecture with Framer Motion animations, React Query caching, and a global AI chat assistant.",
      "Responsive layouts optimized for mobile, tablet, and desktop with accessibility-first UI components via shadcn/ui.",
    ],
    overview:
      "Casa Lingua Finder is a multilingual property management platform integrating AI-powered search, voice interaction, advanced filtering, and responsive modern UI experiences optimized for global accessibility.",
    keyFeatures: [
      {
        title: "AI & Search",
        items: [
          "AI-powered property search",
          "Voice chat integration",
          "Google Gemini AI assistant",
          "Advanced filtering system",
        ],
      },
      {
        title: "UX & Localization",
        items: [
          "Interactive maps",
          "Currency conversion",
          "RTL language support",
          "Dark / Light themes",
          "Framer Motion animations",
        ],
      },
    ],
    problemStatement:
      "Real estate platforms often lack intelligent search and multilingual support, making property discovery frustrating for international users.",
    solution:
      "Casa Lingua Finder integrates Google Gemini AI for natural language property search and voice interaction, combined with RTL support and currency conversion for a truly global experience.",
    whatILearned: [
      "Google Gemini AI API integration",
      "Voice chat and speech recognition in the browser",
      "RTL layout support in React",
      "React Query caching strategies",
      "Framer Motion animation patterns",
      "Accessibility-first component design",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Google Gemini AI", "React Query"],
    type: "web",
    screenshot: "/projects/casa/localhost_8083_ (1).png",
    screenshots: [
      "/projects/casa/localhost_8083_ (1).png",
      "/projects/casa/localhost_8083_ (2).png",
      "/projects/casa/localhost_8083_ (3).png",
    ],
    githubUrl: "https://github.com/nully-boop/casa-lingua-finder",
  },
  {
    id: "goorder-backend",
    name: "GoOrder Backend",
    tagline: "Laravel REST API",
    description: [
      "Production-ready e-commerce REST API using Laravel 11 with full JWT-based authentication for both users and admins.",
      "Cart management, favorites, order placement, cancellation, and quantity update flows with database transaction safety.",
      "Admin panel with store/product CRUD, order approval/rejection workflows, dashboard statistics, and image upload via polymorphic relations.",
      "Service-layer architecture with FormRequest validation, API response traits, middleware guards, and morphable media management.",
    ],
    overview:
      "GoOrder Backend is a production-grade Laravel 11 REST API implementing JWT authentication, transaction-safe commerce workflows, scalable service-layer architecture, and comprehensive admin management systems.",
    keyFeatures: [
      {
        title: "Auth & Security",
        items: [
          "JWT authentication system",
          "User & admin authorization",
          "Middleware guards",
          "FormRequest validation",
        ],
      },
      {
        title: "Commerce API",
        items: [
          "Cart & favorites workflows",
          "Order management system",
          "Transaction-safe operations",
          "Product/store CRUD",
        ],
      },
      {
        title: "Admin",
        items: [
          "Dashboard analytics",
          "Order approval/rejection",
          "Image upload via polymorphic relations",
          "API response traits",
        ],
      },
    ],
    architecture:
      "Service Layer → FormRequest Validation → Controllers → Eloquent Models → MySQL\nMiddleware Guards → JWT Auth → Role-based Access\nPolymorphic Media Management → Image Storage",
    problemStatement:
      "Mobile commerce apps need a reliable, secure backend that handles concurrent transactions, role-based access, and complex order workflows without data integrity issues.",
    solution:
      "GoOrder Backend uses Laravel's service-layer architecture with database transactions, FormRequest validation, and JWT middleware to deliver a production-ready API with full admin capabilities.",
    whatILearned: [
      "Service-layer architecture in Laravel",
      "Database transaction safety patterns",
      "JWT authentication for multi-role APIs",
      "Polymorphic relations for media management",
      "API response trait standardization",
      "FormRequest validation best practices",
    ],
    tech: ["Laravel", "PHP", "JWT", "MySQL", "REST API"],
    type: "backend",
    githubUrl: "https://github.com/eliasnadder/final-state-ecommerce",
  },
  {
    id: "senet-ai",
    name: "Senet AI",
    tagline: "Evolutionary Game Agent",
    description: [
      "AI agent trained to play the ancient board game Senet using genetic algorithm evolution over 50 generations.",
      "Adaptive curriculum learning where opponent difficulty scales dynamically based on population win rate thresholds.",
      "Parallelized evaluation using Python's ProcessPoolExecutor across 40-individual populations with 10 matches per evaluation.",
      "Training metrics (win rates, diversity, score evolution, opponent strength) tracked via WandB with checkpoint-based resumption.",
    ],
    overview:
      "Senet AI is an experimental artificial intelligence project focused on training evolutionary game agents using genetic algorithms, multiprocessing optimization, adaptive curriculum learning, and advanced training analytics.",
    keyFeatures: [
      {
        title: "Evolution",
        items: [
          "Genetic algorithm evolution",
          "50-generation training runs",
          "Population-based training",
          "Adaptive curriculum learning",
        ],
      },
      {
        title: "Performance",
        items: [
          "Parallelized evaluations",
          "ProcessPoolExecutor multiprocessing",
          "40-individual populations",
          "10 matches per evaluation",
        ],
      },
      {
        title: "Analytics",
        items: [
          "WandB integration",
          "Win rate tracking",
          "Diversity & score evolution",
          "Checkpoint-based resumption",
        ],
      },
    ],
    problemStatement:
      "Training a game-playing AI from scratch requires balancing exploration vs exploitation, managing computational cost, and ensuring the agent faces progressively harder opponents.",
    solution:
      "Senet AI uses genetic algorithms with adaptive curriculum learning — opponent difficulty scales with population win rate — and parallelized evaluation to efficiently train across 50 generations.",
    whatILearned: [
      "Genetic algorithm design and implementation",
      "Adaptive curriculum learning strategies",
      "Python multiprocessing with ProcessPoolExecutor",
      "WandB experiment tracking and visualization",
      "Population diversity management",
      "Checkpoint-based training resumption",
    ],
    tech: ["Python", "Genetic Algorithms", "WandB", "Kaggle", "Multiprocessing"],
    type: "ai",
  },
];

// ─── Repo (GitHub API) ────────────────────────────────────────────────────────

export interface Repo {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "210 100% 60%",
  JavaScript: "50 90% 60%",
  Python: "50 90% 55%",
  Go: "190 80% 55%",
  Rust: "20 80% 50%",
  Java: "25 70% 50%",
  C: "220 10% 60%",
  "C++": "330 60% 55%",
  "C#": "270 60% 50%",
  Ruby: "0 80% 55%",
  PHP: "240 30% 55%",
  Swift: "20 90% 60%",
  Kotlin: "270 70% 60%",
  Lua: "240 80% 65%",
  Shell: "120 40% 55%",
  HTML: "15 80% 55%",
  CSS: "220 70% 55%",
  Vue: "150 60% 50%",
  Svelte: "15 90% 55%",
  Dart: "200 80% 55%",
  Elixir: "270 50% 55%",
  Haskell: "270 60% 60%",
};

export function languageColor(lang: string | null): string {
  if (!lang) return "0 0% 50%";
  return LANGUAGE_COLORS[lang] ?? "0 0% 50%";
}

import { Project, ProjectType, TechCategory, SkillGroup } from './types';

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: TechCategory.BACKEND,
    skills: [
      { name: 'Laravel', icon: 'Box' },
      { name: 'PHP', icon: 'FileCode' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'Redis', icon: 'Layers' },
      { name: 'REST APIs', icon: 'Globe' }
    ]
  },
  {
    category: TechCategory.FRONTEND,
    skills: [
      { name: 'React', icon: 'Atom' },
      { name: 'TypeScript', icon: 'Code2' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Next.js', icon: 'Zap' },
      { name: 'Redux', icon: 'RefreshCw' }
    ]
  },
  {
    category: TechCategory.MOBILE,
    skills: [
      { name: 'Flutter', icon: 'Smartphone' },
      { name: 'Dart', icon: 'Target' },
      { name: 'Bloc Pattern', icon: 'LayoutTemplate' },
      { name: 'Native Channels', icon: 'ArrowLeftRight' },
      { name: 'Firebase', icon: 'Flame' }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'hero-ecosystem',
    title: 'OmniSync Enterprise Ecosystem',
    subtitle: 'Unified Logistics Management Platform',
    description: 'A complete end-to-end ecosystem allowing real-time logistics tracking. Drivers use the Flutter app for status updates, admins use the React dashboard for monitoring, all powered by a robust Laravel API orchestration layer.',
    type: ProjectType.ECOSYSTEM,
    techStack: ['Flutter', 'React', 'TypeScript', 'Laravel', 'MySQL', 'WebSockets'],
    links: [
      { label: 'View Architecture', url: '#', type: 'case-study' },
      { label: 'Live Demo', url: '#', type: 'live' },
      { label: 'GitHub Repo', url: '#', type: 'github' }
    ],
    architecture: {
      mobile: 'Driver App (Flutter)',
      backend: 'Core API (Laravel)',
      web: 'Admin Panel (React)'
    },
    imagePlaceholder: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 'react-dashboard',
    title: 'FinTech Analytics Pro',
    subtitle: 'Advanced Financial Data Visualization',
    description: 'A standalone high-performance React application featuring complex D3 charts, real-time stock data processing, and a highly interactive dark-mode UI built with Tailwind.',
    type: ProjectType.STANDALONE_WEB,
    techStack: ['React', 'TypeScript', 'D3.js', 'Recharts', 'Zustand'],
    links: [
      { label: 'Live Demo', url: '#', type: 'live' },
      { label: 'GitHub', url: '#', type: 'github' }
    ],
    imagePlaceholder: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'flutter-health',
    title: 'Zenith Health Tracker',
    subtitle: 'Native Health & Fitness Integration',
    description: 'A smooth 60fps Flutter application integrating with native health APIs (HealthKit/Google Fit). Features offline-first architecture and complex animations.',
    type: ProjectType.STANDALONE_MOBILE,
    techStack: ['Flutter', 'Dart', 'Isar DB', 'Riverpod'],
    links: [
      { label: 'App Store', url: '#', type: 'live' },
      { label: 'GitHub', url: '#', type: 'github' }
    ],
    imagePlaceholder: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'flutter-social',
    title: 'Momentum Social',
    subtitle: 'Real-time Chat & Media Sharing',
    description: 'A Flutter-based social network focused on instant media sharing. Implements heavy caching strategies and optimized list rendering for performance.',
    type: ProjectType.STANDALONE_MOBILE,
    techStack: ['Flutter', 'Firebase', 'Cloud Functions'],
    links: [
      { label: 'GitHub', url: '#', type: 'github' }
    ],
    imagePlaceholder: 'https://images.unsplash.com/photo-1516251193000-18e658485689?q=80&w=2070&auto=format&fit=crop'
  }
];
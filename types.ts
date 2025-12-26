export enum TechCategory {
  BACKEND = 'Backend',
  FRONTEND = 'Frontend',
  MOBILE = 'Mobile',
  DEVOPS = 'DevOps'
}

export enum ProjectType {
  ECOSYSTEM = 'Ecosystem',
  STANDALONE_WEB = 'Standalone Web',
  STANDALONE_MOBILE = 'Standalone Mobile'
}

export interface Skill {
  name: string;
  icon?: string; // Icon name reference
  level?: number;
}

export interface SkillGroup {
  category: TechCategory;
  skills: Skill[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'case-study';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: ProjectType;
  techStack: string[];
  links: ProjectLink[];
  imagePlaceholder?: string;
  // Specific for the ecosystem visualization
  architecture?: {
    mobile: string;
    backend: string;
    web: string;
  };
}
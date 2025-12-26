import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { SOCIAL_LINKS, NAVIGATION_LINKS } from '../constants';

interface NavigationProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
          DevPortfolio
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
          <ThemeToggle />
          <a
            href={NAVIGATION_LINKS.projects}
            onClick={(e) => scrollToSection(e, 'projects')}
            className="hidden sm:block ml-2 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            Projects
          </a>
          <a
            href={NAVIGATION_LINKS.contact}
            onClick={(e) => scrollToSection(e, 'contact')}
            className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeInSection } from './FadeInSection';
import { NAVIGATION_LINKS } from '../constants';

interface HeroSectionProps {
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section className="mb-24 lg:mb-32">
      <FadeInSection>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 shadow-sm dark:shadow-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for Full-Stack Roles
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Building Cross-Platform <br />
            <span className="bg-gradient-to-r from-primary-600 to-cyan-600 dark:from-primary-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Digital Ecosystems
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
            I am a Full Stack Developer specialized in connecting worlds. I bridge
            <span className="text-red-600 dark:text-red-400 font-medium mx-1">Laravel</span> backends with
            <span className="text-cyan-600 dark:text-cyan-400 font-medium mx-1">React</span> dashboards and
            <span className="text-blue-600 dark:text-blue-400 font-medium mx-1">Flutter</span> mobile apps to create unified, scalable systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={NAVIGATION_LINKS.projects}
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-lg font-semibold hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors text-center shadow-lg hover:shadow-xl"
            >
              View My Masterpiece
            </a>
            <a
              href={NAVIGATION_LINKS.contact}
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-lg font-medium hover:bg-slate-50 dark:hover:border-slate-600 transition-all text-center shadow-sm dark:shadow-none"
            >
              Contact Me
            </a>
          </div>
        </div>

        <a
          href={NAVIGATION_LINKS.about}
          onClick={(e) => scrollToSection(e, 'about')}
          className="mt-12 opacity-50 animate-bounce inline-block cursor-pointer hover:opacity-100 transition-opacity"
        >
          <ChevronDown className="text-slate-400 dark:text-slate-500" />
        </a>
      </FadeInSection>
    </section>
  );
};
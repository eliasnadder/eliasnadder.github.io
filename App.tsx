import React, { useEffect, useState, useMemo } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Filter, ArrowUpDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import { SkillColumn } from './components/SkillColumn';
import { FadeInSection } from './components/FadeInSection';
import { ThemeToggle } from './components/ThemeToggle';
import { BioSection } from './components/BioSection';
import { ContactForm } from './components/ContactForm';
import { PROJECTS_DATA, SKILLS_DATA } from './constants';
import { ProjectType } from './types';

const App: React.FC = () => {
  // Filter & Sort State
  const [activeType, setActiveType] = useState<string>('All');
  const [activeTech, setActiveTech] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');

  useEffect(() => {
    // Enable smooth scrolling behavior for the entire document
    // We also keep this CSS property for keyboard navigation accessibility
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Helper for explicit smooth scrolling on click
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute unique tech stack items for the filter dropdown
  const allTech = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS_DATA.forEach(p => p.techStack.forEach(t => techs.add(t)));
    return ['All', ...Array.from(techs).sort()];
  }, []);

  // Derived filtered and sorted projects
  const visibleProjects = useMemo(() => {
    let filtered = [...PROJECTS_DATA];

    // Filter by Type
    if (activeType !== 'All') {
      filtered = filtered.filter(p => p.type === activeType);
    }

    // Filter by Tech
    if (activeTech !== 'All') {
      filtered = filtered.filter(p => p.techStack.includes(activeTech));
    }

    // Sort
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }
    // 'default' keeps original order

    return filtered;
  }, [activeType, activeTech, sortOrder]);

  // Structured Data (Schema.org) for SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Full Stack Engineer",
    "url": "https://portfolio.dev",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    "jobTitle": "Senior Full Stack Engineer",
    "description": "Specialized in building cross-platform digital ecosystems using React, Flutter, and Laravel.",
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
    ],
    "knowsAbout": ["React", "Flutter", "Laravel", "TypeScript", "System Architecture", "Web Development", "Mobile Development"]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 selection:bg-primary-500/30 selection:text-primary-600 dark:selection:text-primary-200 transition-colors duration-300">
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            DevPortfolio
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
            <ThemeToggle />
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="hidden sm:block ml-2 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Hero Section */}
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
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-lg font-semibold hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors text-center shadow-lg hover:shadow-xl"
                >
                  View My Masterpiece
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-lg font-medium hover:bg-slate-50 dark:hover:border-slate-600 transition-all text-center shadow-sm dark:shadow-none"
                >
                  Contact Me
                </a>
              </div>
            </div>
            
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="mt-12 opacity-50 animate-bounce inline-block cursor-pointer hover:opacity-100 transition-opacity"
            >
              <ChevronDown className="text-slate-400 dark:text-slate-500" />
            </a>
          </FadeInSection>
        </section>

        {/* Bio Section */}
        <section className="mb-32 scroll-mt-28" id="about">
          <FadeInSection delay={100}>
             <BioSection />
          </FadeInSection>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <FadeInSection delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Arsenal</h2>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SKILLS_DATA.map((group) => (
                <SkillColumn key={group.category} group={group} />
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Projects Section - Bento Grid */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <FadeInSection>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Selected Works</h2>
                <p className="text-slate-600 dark:text-slate-400">Highlighting integration and platform mastery.</p>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-8 bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              {/* Type Tabs */}
              <div className="flex flex-wrap gap-2 w-full xl:w-auto">
                {['All', ProjectType.ECOSYSTEM, ProjectType.STANDALONE_WEB, ProjectType.STANDALONE_MOBILE].map(type => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      activeType === type
                        ? 'bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                    }`}
                  >
                    {type === 'All' ? 'All Projects' : type === ProjectType.ECOSYSTEM ? 'Ecosystems' : type.replace('Standalone ', '')}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full xl:w-auto">
                {/* Tech Select */}
                <div className="relative group w-full sm:w-auto">
                   <select
                     value={activeTech}
                     onChange={(e) => setActiveTech(e.target.value)}
                     className="w-full sm:w-48 appearance-none pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors cursor-pointer"
                   >
                     {allTech.map(tech => (
                       <option key={tech} value={tech}>{tech}</option>
                     ))}
                   </select>
                   <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                   <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>

                {/* Sort Button */}
                <button
                  onClick={() => setSortOrder(prev => prev === 'default' ? 'asc' : prev === 'asc' ? 'desc' : 'default')}
                  className="w-full sm:w-auto flex justify-center items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <ArrowUpDown size={16} className={sortOrder !== 'default' ? 'text-primary-500' : 'text-slate-400'} />
                  <span className="min-w-[4rem] text-left">
                    {sortOrder === 'default' ? 'Default' : sortOrder === 'asc' ? 'Name (A-Z)' : 'Name (Z-A)'}
                  </span>
                </button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)] grid-flow-row-dense">
              {visibleProjects.length > 0 ? (
                visibleProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
                    <Filter className="text-slate-400" size={24} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">No projects match your current filters.</p>
                  <button 
                    onClick={() => {setActiveType('All'); setActiveTech('All');}} 
                    className="mt-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-semibold"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </FadeInSection>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 scroll-mt-24">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="sticky top-24">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Let's build something <br />
                  <span className="text-primary-600 dark:text-primary-400">scalable together.</span>
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  I'm currently open for freelance projects and full-time opportunities. 
                  Whether you need a complex enterprise ecosystem or a high-performance 
                  mobile application, let's discuss how we can bring your vision to life.
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                      <Mail size={20} />
                    </div>
                    hello@example.com
                  </a>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                      <Github size={20} />
                     </div>
                     <span className="opacity-70">@devportfolio</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                      <Linkedin size={20} />
                     </div>
                     <span className="opacity-70">/in/devportfolio</span>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Footer Copyright */}
        <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
           <div className="text-center text-slate-500 dark:text-slate-500 text-sm">
             &copy; {new Date().getFullYear()} Full Stack Portfolio.
             <span className="mx-2">•</span>
             Built with React, Tailwind & Framer Motion.
           </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
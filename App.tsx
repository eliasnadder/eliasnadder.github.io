import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BioSection } from './components/BioSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
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

      <Navigation scrollToSection={scrollToSection} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        <HeroSection scrollToSection={scrollToSection} />

        {/* Bio Section */}
        <section className="mb-32 scroll-mt-28" id="about">
          <BioSection />
        </section>

        <SkillsSection />

        <ProjectsSection />

        <ContactSection />

        <Footer />

      </main>
    </div>
  );
};

export default App;
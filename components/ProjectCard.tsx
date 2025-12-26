import React from 'react';
import { Github, Globe, FileText, ArrowUpRight, Layers } from 'lucide-react';
import { Project, ProjectType } from '../types';
import { ArchitectureBadge } from './ArchitectureBadge';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isEcosystem = project.type === ProjectType.ECOSYSTEM;

  // Dynamic layout classes based on project type
  // Removed 'p-6' from here to allow full bleed images for non-ecosystem cards
  const containerClasses = isEcosystem
    ? "col-span-1 md:col-span-3 lg:col-span-2 row-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/50 border-primary-500/30 text-white"
    : "col-span-1 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800";

  return (
    <div className={`group relative rounded-2xl border hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-md dark:shadow-none ${containerClasses}`}>
      
      {/* Ecosystem Background Image */}
      {isEcosystem && project.imagePlaceholder && (
         <div className="absolute inset-0 z-0">
            <img 
              src={project.imagePlaceholder} 
              alt={project.title} 
              loading="lazy"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/20" />
         </div>
      )}

      {/* Decorative Glow for Ecosystem */}
      {isEcosystem && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 dark:bg-primary-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none z-0" />
      )}

      {/* Standard Project Image (Top Banner) */}
      {!isEcosystem && project.imagePlaceholder && (
        <div className="h-48 overflow-hidden relative border-b border-slate-100 dark:border-slate-800 shrink-0">
           <div className="absolute inset-0 bg-slate-900/5 dark:bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
           <img 
             src={project.imagePlaceholder} 
             alt={project.title} 
             loading="lazy"
             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
           />
        </div>
      )}

      {/* Main Content Area Wrapper - Adds the padding back */}
      <div className={`flex flex-col flex-1 p-6 justify-between ${isEcosystem ? 'relative z-10 h-full' : ''}`}>
        
        <div className="flex-1">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-4">
            <div>
              {isEcosystem && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-300 dark:text-primary-400 border border-primary-500/20 mb-3 backdrop-blur-md">
                  <Layers size={12} />
                  Full Ecosystem
                </span>
              )}
              {!isEcosystem && (
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 mb-2 uppercase tracking-wider">
                  {project.type}
                </span>
              )}
              <h3 className={`font-bold ${isEcosystem ? 'text-white' : 'text-slate-900 dark:text-slate-100'} ${isEcosystem ? 'text-3xl' : 'text-xl'}`}>
                {project.title}
              </h3>
              <p className={`font-medium ${isEcosystem ? 'text-slate-300 text-lg mt-1' : 'text-slate-500 dark:text-slate-400 text-sm'}`}>
                {project.subtitle}
              </p>
            </div>
            
            <div className="bg-slate-100 dark:bg-slate-800/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="text-slate-600 dark:text-slate-300" size={20} />
            </div>
          </div>

          {/* Content Body */}
          {isEcosystem ? (
            <>
              <ArchitectureBadge />
              <p className="leading-relaxed mb-6 text-slate-300 text-base max-w-2xl">
                {project.description}
              </p>
            </>
          ) : (
            <>
              {/* Decorative Line for non-ecosystem */}
              <div className="h-1 w-full bg-slate-100 dark:bg-slate-800/50 my-4 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-slate-300 dark:bg-slate-600 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Two-Column Grid for Description and Tech Stack */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5 content-start">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-[10px] font-medium rounded-md border text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer / Buttons */}
        <div className="mt-auto">
          {/* For Ecosystem, Tech Stack is displayed here instead of in the grid above */}
          {isEcosystem && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-xs font-medium rounded-md border text-slate-300 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className={`flex flex-wrap gap-3 pt-4 border-t ${isEcosystem ? 'border-slate-700/50' : 'border-slate-100 dark:border-slate-800/50'}`}>
            {project.links.map((link) => {
              const Icon = link.type === 'github' ? Github : link.type === 'live' ? Globe : FileText;
              const btnBaseClass = "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
              
              let btnVariantClass = "";
              if (link.type === 'case-study') {
                btnVariantClass = "bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-900/20";
              } else {
                if (isEcosystem) {
                  btnVariantClass = "bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 backdrop-blur-sm";
                } else {
                  btnVariantClass = "bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700";
                }
              }

              return (
                <a
                  key={link.label}
                  href={link.url}
                  className={`${btnBaseClass} ${btnVariantClass}`}
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
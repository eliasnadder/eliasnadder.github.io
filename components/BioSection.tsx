import React from 'react';
import { MapPin, Calendar, Coffee } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export const BioSection: React.FC = () => {
  // Calculate age dynamically based on birth date
  const calculateAge = () => {
    const birthDate = new Date('2004-11-09'); // November 9, 2004
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const age = calculateAge();

  return (
    <FadeInSection delay={100}>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
       {/* Image Column */}
       <div className="w-full md:w-5/12 flex justify-center md:justify-end order-1 md:order-1">
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Background decorative square */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-cyan-500 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 group-hover:scale-105 transition-all duration-500"></div>

            {/* Image container */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:-translate-y-2">
                <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
                />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 animate-pulse-slow hidden md:block">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Open to Work</span>
                </div>
            </div>
          </div>
       </div>

       {/* Text Column */}
       <div className="w-full md:w-7/12 text-center md:text-left order-2 md:order-2">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-600 uppercase bg-primary-100/50 dark:bg-primary-900/30 dark:text-primary-400 rounded-full">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm Elias Nadder
          </h2>

          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              a {age}-year-old Full Stack Developer from Damascus, Syria, passionate about creating
              innovative digital solutions. My journey in software development began with curiosity and has evolved
              into a deep expertise in building comprehensive digital ecosystems that connect
              <span className="text-slate-900 dark:text-white font-semibold"> mobile applications</span>,
              <span className="text-slate-900 dark:text-white font-semibold"> web platforms</span>, and
              <span className="text-slate-900 dark:text-white font-semibold"> robust backends</span> seamlessly.
            </p>
            <p>
              My philosophy is simple: technology should serve the business logic, not the other way around.
              Whether I'm optimizing a <span className="text-red-500 dark:text-red-400">Laravel</span> API query or smoothing out a <span className="text-blue-500 dark:text-blue-400">Flutter</span> animation,
              my focus is always on performance, user experience, and scalable architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
              <MapPin size={18} className="text-primary-500" />
              <span>Damascus, Syria</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
              <Calendar size={18} className="text-primary-500" />
              <span>{age} Years Old</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
               <Coffee size={18} className="text-primary-500" />
               <span>Fuel: Espresso</span>
            </div>
          </div>
       </div>
    </div>
    </FadeInSection>
  );
};
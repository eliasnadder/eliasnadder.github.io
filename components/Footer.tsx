import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
       <div className="text-center text-slate-500 dark:text-slate-500 text-sm">
         &copy; {new Date().getFullYear()} Full Stack Portfolio.
         <span className="mx-2">•</span>
         Built with React, Tailwind & Framer Motion.
       </div>
    </footer>
  );
};
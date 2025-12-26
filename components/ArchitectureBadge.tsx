import React from 'react';
import { Database, Smartphone, Monitor, ArrowLeftRight } from 'lucide-react';

export const ArchitectureBadge: React.FC = () => {
  return (
    // Note: The parent ProjectCard for Ecosystem enforces a dark background even in light mode
    // to keep the "Masterpiece" feel. So we generally keep this component dark-themed.
    // However, we ensure it uses transparent backgrounds compatible with the parent's gradient.
    <div className="w-full bg-slate-900/50 rounded-xl p-6 border border-slate-800/50 backdrop-blur-sm my-6">
      <div className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold text-center">
        System Architecture Integration
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        
        {/* Mobile Node */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="p-4 bg-blue-950/30 border border-blue-500/20 rounded-full mb-2 group-hover:border-blue-500/50 group-hover:bg-blue-900/40 transition-all duration-300">
            <Smartphone className="w-6 h-6 text-blue-400" />
          </div>
          <span className="text-sm text-slate-300 font-medium">Flutter App</span>
        </div>

        {/* Connector 1 */}
        <div className="hidden md:flex text-slate-600 animate-pulse-slow">
            <ArrowLeftRight size={20} />
        </div>
        <div className="md:hidden text-slate-600 rotate-90 my-[-10px]">
            <ArrowLeftRight size={20} />
        </div>

        {/* Backend Node */}
        <div className="flex flex-col items-center group cursor-pointer relative">
          <div className="absolute -inset-1 bg-red-500/10 rounded-full blur-md group-hover:bg-red-500/20 transition-all"></div>
          <div className="relative p-5 bg-red-950/30 border border-red-500/20 rounded-full mb-2 group-hover:border-red-500/50 group-hover:bg-red-900/40 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <Database className="w-8 h-8 text-red-400" />
          </div>
          <span className="text-sm text-red-100 font-bold bg-red-500/10 px-2 py-0.5 rounded text-center">Laravel API</span>
        </div>

        {/* Connector 2 */}
        <div className="hidden md:flex text-slate-600 animate-pulse-slow">
            <ArrowLeftRight size={20} />
        </div>
        <div className="md:hidden text-slate-600 rotate-90 my-[-10px]">
            <ArrowLeftRight size={20} />
        </div>

        {/* Web Node */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="p-4 bg-cyan-950/30 border border-cyan-500/20 rounded-full mb-2 group-hover:border-cyan-500/50 group-hover:bg-cyan-900/40 transition-all duration-300">
            <Monitor className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="text-sm text-slate-300 font-medium">React Admin</span>
        </div>

      </div>
    </div>
  );
};
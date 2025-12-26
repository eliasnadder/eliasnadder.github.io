import React from 'react';
import { SkillGroup, TechCategory } from '../types';
import { 
  Server, Layout, Smartphone, Terminal, 
  Box, FileCode, Database, Layers, Globe,
  Atom, Code2, Wind, Zap, RefreshCw,
  Target, LayoutTemplate, ArrowLeftRight, Flame
} from 'lucide-react';

interface SkillColumnProps {
  group: SkillGroup;
}

export const SkillColumn: React.FC<SkillColumnProps> = ({ group }) => {
  // Mapping for the specific skill icons
  const skillIconMap: Record<string, React.ElementType> = {
    'Box': Box,
    'FileCode': FileCode,
    'Database': Database,
    'Layers': Layers,
    'Globe': Globe,
    'Atom': Atom,
    'Code2': Code2,
    'Wind': Wind,
    'Zap': Zap,
    'RefreshCw': RefreshCw,
    'Smartphone': Smartphone,
    'Target': Target,
    'LayoutTemplate': LayoutTemplate,
    'ArrowLeftRight': ArrowLeftRight,
    'Flame': Flame
  };

  const getCategoryIcon = (category: TechCategory) => {
    switch (category) {
      case TechCategory.BACKEND: return <Server className="w-5 h-5 text-red-500 dark:text-red-400" />;
      case TechCategory.FRONTEND: return <Layout className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      case TechCategory.MOBILE: return <Smartphone className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      default: return <Terminal className="w-5 h-5 text-green-500 dark:text-green-400" />;
    }
  };

  const getSkillIcon = (iconName?: string) => {
    if (!iconName || !skillIconMap[iconName]) return <Terminal size={14} className="text-slate-400" />;
    const IconComponent = skillIconMap[iconName];
    return <IconComponent size={14} className="text-slate-500 dark:text-slate-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />;
  };

  return (
    <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:bg-slate-900 transition-all shadow-sm dark:shadow-none">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {getCategoryIcon(group.category)}
        </div>
        <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">{group.category}</h3>
      </div>
      
      <div className="space-y-3">
        {group.skills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between group">
            <div className="flex items-center gap-2.5">
               <div className="p-1 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group-hover:border-primary-200 dark:group-hover:border-primary-800/50 transition-colors">
                 {getSkillIcon(skill.icon)}
               </div>
               <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary-600 dark:group-hover:text-slate-200 transition-colors text-sm">
                 {skill.name}
               </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { SkillColumn } from './SkillColumn';
import { FadeInSection } from './FadeInSection';
import { SKILLS_DATA } from '../constants';

export const SkillsSection: React.FC = () => {
  return (
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
  );
};
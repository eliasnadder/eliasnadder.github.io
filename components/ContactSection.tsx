import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { FadeInSection } from './FadeInSection';
import { SOCIAL_LINKS, CONTACT_LINKS } from '../constants';

export const ContactSection: React.FC = () => {
  return (
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
              <a href={CONTACT_LINKS.email} className="inline-flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                  <Mail size={20} />
                </div>
                hello@example.com
              </a>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                 <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                  <Github size={20} />
                 </div>
                 <span className="opacity-70">{SOCIAL_LINKS.github.handle}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                 <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                  <Linkedin size={20} />
                 </div>
                 <span className="opacity-70">{SOCIAL_LINKS.linkedin.handle}</span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
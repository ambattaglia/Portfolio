import React from 'react';
import { Award, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Credentials
          </h2>
        </div>

        <div className="space-y-5">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {certification.title}
                      </h3>
                      <p className="mt-1 font-semibold text-teal-600 dark:text-teal-400">
                        {certification.issuer}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3 h-3 text-teal-500" />
                      {certification.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {certification.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Verified proficiencies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
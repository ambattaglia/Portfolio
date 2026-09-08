import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Andrea M Battaglia logo"
            className="w-8 h-8 rounded-lg"
          />
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {portfolioData.personalInfo.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <span>Engineered with precision using</span>
          <span className="font-semibold text-teal-600 dark:text-teal-400">React</span>,
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tailwind</span> &
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Vite</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/40 shadow-sm transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

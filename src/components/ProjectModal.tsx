import { useEffect } from 'react';
import type { FC } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Zap } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all focus:outline-none backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          {project.imageSources ? (
            <div className="flex w-full h-full">
              {project.imageSources.map((imageSource, index) => (
                <img
                  key={imageSource}
                  src={imageSource}
                  alt={`${project.title} portrait ${index + 1}`}
                  className="w-1/3 h-full object-cover"
                />
              ))}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500 text-white shadow-sm">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {project.title}
              </h2>
            </div>
            {project.metrics && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm font-semibold backdrop-blur-md">
                <Zap className="w-4 h-4 text-emerald-400" />
                {project.metrics}
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-lg font-medium text-teal-600 dark:text-teal-400">
              {project.subtitle}
            </p>
            <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {project.longDescription}
            </p>
          </div>

          {project.videoUrl && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-950">
              <video
                src={project.videoUrl}
                poster={project.image}
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full"
              />
            </div>
          )}

          {/* Key Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                Key Highlights & Impact
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-teal-500 mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-500" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/20 transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

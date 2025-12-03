"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectShowcase({ project }: Props) {
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  // ESC key closes lightbox
  useEffect(() => {
    if (!activeScreenshot) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveScreenshot(null);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeScreenshot]);

  return (
    <>
      {/* Header / summary */}
      <header className="space-y-3 mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-300">
          {project.title}
        </h1>

        <p className="text-sm text-zinc-300 max-w-2xl">{project.description}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs mt-2">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-900 px-3 py-1 border border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297a12 12 0 00-3.793 23.392c.6.11.793-.26.793-.577v-2.02c-3.226.7-3.907-1.557-3.907-1.557a3.073 3.073 0 00-1.289-1.694c-1.054-.722.082-.708.082-.708a2.45 2.45 0 011.785 1.198 2.47 2.47 0 003.385.965 2.484 2.484 0 01.737-1.556c-2.574-.293-5.283-1.287-5.283-5.722a4.48 4.48 0 011.194-3.106 4.162 4.162 0 01.112-3.071s.973-.312 3.187 1.187a10.875 10.875 0 015.8 0c2.212-1.5 3.186-1.187 3.186-1.187a4.16 4.16 0 01.112 3.071 4.486 4.486 0 011.194 3.106c0 4.446-2.714 5.425-5.296 5.71.42.364.798 1.096.798 2.216v3.293c0 .32.193.694.8.577A12 12 0 0012 .297z" />
              </svg>
              <span>View on GitHub</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          )}
        </div>
      </header>

      {/* Blog-style overview */}
      {project.overview && (
        <section className="space-y-4 text-sm leading-relaxed text-zinc-200 mb-10">
          {project.overview.split("\n").map((para, idx) => {
            const text = para.trim();
            if (!text) return null;
            return <p key={idx}>{text}</p>;
          })}
        </section>
      )}

      {/* Vertical screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="space-y-6 mb-10">
          <h2 className="text-lg font-semibold text-zinc-100">
            Project Screenshots
          </h2>

          <div className="space-y-6">
            {project.screenshots.map((src) => (
              <article
                key={src}
                className="space-y-2 rounded-2xl border border-zinc-800 bg-[#0a0a0f] p-3 md:p-4"
              >
                <button
                  type="button"
                  onClick={() => setActiveScreenshot(src)}
                  className="group relative block overflow-hidden rounded-xl"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot`}
                    className="w-full max-h-[380px] object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute right-3 bottom-3 text-[11px] rounded-full bg-black/70 px-2 py-1 text-zinc-200">
                    Click to view larger
                  </span>
                </button>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox overlay */}
      {activeScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl w-full mx-4 rounded-2xl border border-zinc-700 bg-[#050508] shadow-2xl shadow-black/80 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveScreenshot(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/80 px-3 py-1 text-xs text-zinc-200 hover:bg-black"
            >
              ✕ Close
            </button>

            <div className="flex flex-col">
              <div className="flex-1 flex items-center justify-center bg-black/90">
                <img
                  src={activeScreenshot}
                  alt={`${project.title} screenshot enlarged`}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { TechBadge } from "./TechBadge";

type ProjectsListProps = {
  limit?: number;
};

export default function ProjectsList({ limit }: ProjectsListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="font-tektur">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        className="space-y-4"
      >
        {displayedProjects.map((project: Project, index: number) => {
          const fromLeft = index % 2 === 0;

          return (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, x: fromLeft ? -60 : 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1.1,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="shadow-sm flex flex-col h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block p-4 rounded-xl bg-[#1e1e1e] border border-[#333] shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 hover:scale-[1.02] z-0"
              >
                {/* Screenshots Ribbon */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="absolute -right-4 top-3 rotate-[18deg] z-10">
                    <span className="bg-gradient-to-r from-red-300 to-red-500 text-black text-[10px] px-3 py-1 rounded-sm font-bold shadow-lg border border-yellow-700 uppercase tracking-wide">
                      Screenshots
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-blue-300 mb-1">
                  {project.title}
                </h3>

                <p className="text-sm text-[#cfcfcf]">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
                {project.screenshots && project.screenshots.length > 0 && (
                  <p className="mt-3 text-[11px] text-zinc-400">
                    Click to open project showcase & view screenshots →
                  </p>
                )}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}

import { projects, Project } from "../data/projects";
import { motion } from "framer-motion";
import { TechBadge } from "./TechBadge";

type ProjectsListProps = {
  limit?: number;
};

export default function ProjectsList({limit}: ProjectsListProps) {
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
          // Alternate direction based on even/odd index
          const fromLeft = index % 2 === 0;
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: fromLeft ? -60 : 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1.32,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="shadow-sm flex flex-col h-full"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-[#1e1e1e] border border-[#333] shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-[#cfcfcf]">{project.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
              </a>

            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}

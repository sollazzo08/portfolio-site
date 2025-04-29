import { projects, Project } from "../data/projects";

import {motion} from 'framer-motion';

type ProjectsListProps = {
  limit?: number;
};

export default function ProjectsList({ limit }: ProjectsListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="font-tektur">
<motion.ul
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5, ease: 'easeOut' }}
  className="space-y-4"
>
  {displayedProjects.map((project: Project, index: number) => (
      <li
    key={index}
    className="shadow-sm flex flex-col h-full"
  >
 <a
  key={index}
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="block p-4 rounded-xl bg-[#1e1e1e] border border-[#333] shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 hover:scale-[1.02]"
>
  <h3 className="text-xl font-semibold text-blue-300 mb-1">
    {project.title}
  </h3>
  <p className="text-sm text-[#cfcfcf]">{project.description}</p>
</a>
  </li>

  ))}
</motion.ul>
    </section>
  );
}

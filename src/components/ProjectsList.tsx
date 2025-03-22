import { projects, Project } from "../data/projects";

type ProjectsListProps = {
  limit?: number;
};

export default function ProjectsList({ limit }: ProjectsListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="font-tektur">
<ul className="space-y-4">
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
  <h3 className="text-xl font-semibold text-[#ebeaea] mb-1">
    {project.title}
  </h3>
  <p className="text-sm text-[#cfcfcf]">{project.description}</p>
</a>
  </li>

  ))}
</ul>

    </section>
  );
}

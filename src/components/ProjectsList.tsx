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
          <li key={index} className="">
            <h3 className="text-lg">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              className="text-blue-500 hover:underline inline-block mt-2"
            >
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

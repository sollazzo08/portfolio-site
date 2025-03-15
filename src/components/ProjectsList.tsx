import { projects, Project } from "../data/projects";

type ProjectsListProps = {
  limit?: number;
};

export default function ProjectsList({ limit }: ProjectsListProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <ul className="space-y-4">
        {displayedProjects.map((project: Project, index: number) => (
          <li key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold">{project.title}</h3>
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

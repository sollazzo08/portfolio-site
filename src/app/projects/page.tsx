import ProjectsList from "../../components/ProjectsList";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <ProjectsList />
    </div>
  );
}

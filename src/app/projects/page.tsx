import ProjectsList from "../../components/ProjectsList";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">All Projects</h1>

      {/* Show all projects */}
      <ProjectsList />
    </div>
  );
}

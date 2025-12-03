import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectShowcase from "@/components/ProjectShowcase";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Required when using `output: "export"` with a dynamic route
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen text-zinc-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Breadcrumb / back link */}
        <div className="mb-8 flex items-center gap-3 text-sm text-zinc-400">
          <Link href="/projects" className="hover:text-blue-300">
            ← Back to projects
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300">{project.title}</span>
        </div>

        {/* showcase */}
        <ProjectShowcase project={project} />
      </div>
    </main>
  );
}

// app/projects/[id]/edit/page.tsx
import { updateProject } from "@/lib/actions";
import { getProjectById } from "@/lib/projects-db";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const project = await getProjectById(Number(id));
  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-light text-foreground mb-8">
        Edit <span className="text-accent-glow font-normal">Project</span>
      </h1>

      <form action={updateProject.bind(null, Number(id))} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-muted-custom mb-2">
            Title
          </label>
          <input
            id="title"
            name="title"
            defaultValue={project.title}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-muted-custom mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={project.description}
            rows={4}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="technologies" className="block text-sm font-medium text-muted-custom mb-2">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            // Si technologies es un array en tu DB, lo pasamos a string separado por comas para el input
            defaultValue={Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-indigo-500"
          />
        </div>

        {<div>
          <label htmlFor="link" className="block text-sm font-medium text-muted-custom mb-2">
            Link (optional)
          </label>
          <input
            id="link"
            name="link"
            placeholder="e.g. https://github.com/yourusername/projectyourname"
            defaultValue={project.link}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-indigo-500"
          />
        </div>}

        <div className="flex items-center justify-end space-x-4 pt-4">
          <Link
            href="/projects"
            className="px-4 py-2 text-sm font-medium text-muted-custom hover:text-foreground transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}

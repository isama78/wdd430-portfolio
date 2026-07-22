// app/projects/create/page.tsx
import { createProject } from "@/lib/actions";
import Link from "next/link";

export default function CreateProjectPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-light text-foreground mb-2">
          Create{" "}
          <span className="text-accent-glow font-normal">New Project</span>
        </h1>
        <p className="text-muted-custom text-sm">
          Add a new open-source contribution or portfolio project.
        </p>
      </header>

      <form
        action={createProject}
        className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-muted-custom mb-2"
          >
            Project Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g. Hexagonal Architecture Backend"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-foreground placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-muted-custom mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Describe the project goals, architecture, and main features..."
            required
            className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-foreground placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          />
        </div>

        <div>
          <label
            htmlFor="technologies"
            className="block text-sm font-medium text-muted-custom mb-2"
          >
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            type="text"
            placeholder="e.g. Node.js, Express, MongoDB, TypeScript"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-foreground placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium text-muted-custom mb-2"
          >
            Link (optional)
          </label>
          <input
            id="link"
            name="link"
            type="url"
            placeholder="e.g. https://github.com/yourusername/projectyourname"
            className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-foreground placeholder:text-white/20 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="flex items-center justify-end space-x-4 pt-4 border-t border-white/5">
          <Link
            href="/projects"
            className="px-4 py-2 text-sm font-medium text-muted-custom hover:text-foreground transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/20"
          >
            Save Project
          </button>
        </div>
      </form>
    </main>
  );
}

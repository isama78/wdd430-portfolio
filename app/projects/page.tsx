// app/projects/page.tsx
import { Project } from "@/lib/projects-db"; 
import { headers } from "next/headers";

async function getProjects(): Promise<Project[]> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  
  const res = await fetch(`${protocol}://${host}/api/projects`, { 
    cache: "no-store"
  });
  
  if (!res.ok) {
    throw new Error("Error loading projects");
  }
  
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Projects</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
            <p className="text-zinc-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
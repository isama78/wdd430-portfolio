// app/projects/page.tsx
// import { getBaseUrl } from "@/lib/get-base-url";
import { getProjects } from "@/lib/projects-db"; 

// async function getProjects(): Promise<Project[]> {
//   const baseUrl = getBaseUrl();
//   const res = await fetch(`${baseUrl}/api/projects`, { cache: "no-store" });
  
//   if (!res.ok) {
//     throw new Error("Error loading projects");
//   }
  
//   return res.json();
// }

export default async function ProjectsPage() {
  const projects = getProjects();

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
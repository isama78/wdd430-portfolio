// app/projects/school/page.tsx
import { Project } from "@/lib/projects-db";
import { headers } from "next/headers";

async function getSchoolProjects(): Promise<Project[]> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/projects?type=school`, { 
    cache: "no-store" 
  });
  
  if (!res.ok) {
    throw new Error("Error loading school projects");
  }
  
  return res.json();
}

export default async function SchoolPage() {
  const projects = await getSchoolProjects();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">University Projects</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
            <p className="text-zinc-400">{project.description}</p>
            <p className="text-zinc-400">Technologies: {project.technologies.join(', ')}</p>
            {project.link && (
              <a
                className="text-blue-500" href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
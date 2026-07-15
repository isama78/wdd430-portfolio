// app/projects/opensource/page.tsx
import ProjectList from "@/components/ProjectList";
import { Project } from "@/lib/projects-db";
import { headers } from "next/headers";

async function getOpenSourceProjects(): Promise<Project[]> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  await new Promise(res => setTimeout(res, 2000));
  const res = await fetch(
    `${protocol}://${host}/api/projects?type=opensource`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Error loading open source projects");
  }
  return res.json();
}

export default async function OpenSourcePage() {
  const projects = await getOpenSourceProjects();
  
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-light text-foreground mb-2">
          Open Source <span className="text-accent-glow font-normal">Projects</span>
        </h1>
        <p className="text-muted-custom text-sm">
          These projects were developed as part of my open source contributions.
        </p>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}

import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-2xl">
        <h1 className="text-4xl font-light tracking-tight text-foreground mb-4">
          Featured <span className="text-accent-glow font-normal">Engineering Projects</span>
        </h1>
        <p className="text-muted-custom text-sm leading-relaxed">
          Explore production-grade software solutions focused on robust backend architectures, dynamic schema validations, legacy code migrations, and comprehensive automated testing suites.
        </p>
      </header>
      
      <ProjectList projects={projects} />
    </main>
  );
}
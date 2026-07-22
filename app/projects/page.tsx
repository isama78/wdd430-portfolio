import { ProjectSearch } from '@/components/ProjectSearch';
import ProjectList from '@/components/ProjectList';
import Pagination from '@/components/Pagination';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function ProjectsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;

  const projects = await fetchFilteredProjects(query, currentPage);
  const totalPages = await fetchProjectsPages(query); //
  console.log("projects", projects);
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12 flex justify-between items-center">
        <h1 className="text-3xl font-light text-foreground mb-4">
          Open Source <span className="text-accent-glow font-normal">Projects</span>
        </h1>
        <Link
          href="/projects/create"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all shadow-lg"
        >
          + New Project
        </Link>
      </header>
      <ProjectSearch />
      <ProjectList projects={projects} />

      <div className="mt-12 flex justify-center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </main>
  );
}
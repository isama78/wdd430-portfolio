import { ProjectSearch } from '@/components/ProjectSearch';
import ProjectList from '@/components/ProjectList';
import Pagination from '@/components/Pagination';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';

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

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-light text-foreground mb-4">
          Open Source <span className="text-accent-glow font-normal">Projects</span>
        </h1>
        
        <ProjectSearch />
      </header>

      <ProjectList projects={projects} />

      <div className="mt-12 flex justify-center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </main>
  );
}
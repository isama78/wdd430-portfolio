// app/projects/school/page.tsx
import SchoolProjectList from "@/components/SchoolProjectList";
import ProjectCardSkeleton from "@/components/skeletons";
import { Suspense } from "react";

export default async function SchoolPage() {

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-light text-foreground mb-2">
          Academic <span className="text-accent-glow font-normal">Projects</span>
        </h1>
        <p className="text-muted-custom text-sm">
          These projects were developed as part of my computer science coursework at BYU-Idaho.
        </p>
      </header>

      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}
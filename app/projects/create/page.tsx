import CreateProjectForm from './create-project-form';

export default function CreateProjectPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-light text-foreground mb-2">
          Create <span className="text-accent-glow font-normal">New Project</span>
        </h1>
        <p className="text-muted-custom text-sm">
          Add a new open-source contribution or portfolio project with accessible validation.
        </p>
      </header>

      <CreateProjectForm />
    </main>
  );
}
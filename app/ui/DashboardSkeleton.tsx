export default function Loading() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 animate-pulse">
      <header className="mb-16 max-w-2xl space-y-4">
        <div className="h-4 w-4/6 rounded bg-white/5 border border-white/5" />
        <div className="h-4 w-full rounded bg-white/5 border border-white/5" />
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 h-64 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-6 w-1/2 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
          </div>
          <div className="h-4 w-1/4 rounded bg-white/10" />
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 h-64 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-6 w-2/3 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-3/4 rounded bg-white/10" />
          </div>
          <div className="h-4 w-1/4 rounded bg-white/10" />
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 h-64 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-6 w-2/3 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-3/4 rounded bg-white/10" />
          </div>
          <div className="h-4 w-1/4 rounded bg-white/10" />
        </div>
      </section>
    </main>
  );
}

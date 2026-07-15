export default function ProjectCardSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 h-64 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-6 w-1/2 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
          </div>
          <div className="h-4 w-1/4 rounded bg-white/10" />
        </div>
      ))}
    </div>
  );
}
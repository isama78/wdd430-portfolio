interface StatusCardProps {
  degree: string;
  expectedGraduation: string;
  currentStatus: string;
}

export default function StatusCard({
  degree,
  expectedGraduation,
  currentStatus,
}: StatusCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-border-custom backdrop-blur-lg w-full md:w-80 shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-glow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent-glow/10 border border-accent-glow/20 flex items-center justify-center text-accent-glow">
          🎓
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-slate-500">
            Education
          </h4>
          <p className="text-sm font-medium text-foreground">BYU - Idaho</p>
        </div>
      </div>

      <p className="text-sm text-slate-300 mb-1 font-medium">{degree}</p>
      <p className="text-xs text-muted-custom mb-4">
        Timeline: {expectedGraduation}
      </p>

      <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-muted-custom">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        {currentStatus}
      </div>
    </div>
  );
}

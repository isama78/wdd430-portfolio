interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-6 rounded-2xl bg-card-custom border border-border-custom backdrop-blur-xl flex flex-col h-full transition-all duration-300 hover:border-accent-glow/20 shadow-2xl relative group overflow-hidden">
      <div className="absolute -inset-px bg-gradient-to-br from-accent-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <h3 className="text-lg font-semibold mb-3 text-foreground tracking-wide group-hover:text-accent-glow transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-custom mb-6 flex-grow text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="mb-4">
        <strong className="block text-xs uppercase tracking-widest text-slate-500 mb-2">
          Technologies
        </strong>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-white/5 border border-white/5 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {link && (
        <div className="mt-auto pt-4 border-t border-white/5">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs font-medium text-accent-glow/90 hover:text-accent-glow inline-flex items-center gap-1 transition-all uppercase tracking-wider"
          >
            View Repository &rarr;
          </a>
        </div>
      )}
    </article>
  );
}
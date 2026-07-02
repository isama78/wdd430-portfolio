import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  // Ejemplos basados en tus proyectos reales
  const myProjects: Project[] = [
    {
      title: "Travel Agency API",
      description:
        "Desarrollo backend de punta a punta implementando endpoints PUT y POST para la gestión de datos de una agencia de viajes.",
      technologies: ["Node.js", "Express", "Jest", "API REST"],
      link: "https://github.com/tu-usuario/travel-agency",
    },
    {
      title: "Deep Pulse (V3.1)",
      description:
        "Sistema maestro global (V3.1) para la generación, estructuración y branding visual de videos musicales enfocados en productividad.",
      technologies: [
        "Suno AI",
        "Video Editing",
        "Automation",
        "YouTube Studio",
      ],
      link: "https://youtube.com/@deep-pulse",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : myProjects;

  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {displayProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}

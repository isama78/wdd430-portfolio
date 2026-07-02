import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'PC Repair Management Frontend System',
    description: 'An advanced enterprise frontend application. Features a highly responsive UI with decoupled data grids and persistent state management.',
    technologies: ['React', 'Redux Toolkit', 'Material UI'],
    link: 'https://github.com/isama1978/frontend-pc-repair-management'
  },
  {
    title: 'PC Repair Management Backend System',
    description: 'An advanced enterprise backend application utilizing Hexagonal Architecture (Ports and Adapters). Features a highly responsive UI with decoupled data grids and persistent state management.',
    technologies: ['NestJS', 'PostgreSQL'],
    link: 'https://github.com/isama1978/pc-repair-management'
  },
  {
    title: 'Backend for soundtracks by category (CSE341 / WDD341)',
    description: 'An end-to-end backend solution featuring optimized PUT and POST endpoints. Engineered for high data integrity and tested thoroughly through automated Jest unit test coverage suites.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/isama78/CSE341-project2'
  },
  {
    title: 'Movies Filmography',
       description: 'An HTML, JavaScript, and CSS project to display a filmography of movies.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/isama78/WDD330-Final-Project-Filmography'
  }
];

export default function Home() {
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
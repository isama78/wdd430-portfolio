import { getProjects } from '@/lib/projects-db';
import ProjectCard from '@/components/ProjectCard';

export default async function SchoolProjectList() {
    await new Promise(res => setTimeout(res, 2000));
  const schoolProjects = await getProjects('school');

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {schoolProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
}
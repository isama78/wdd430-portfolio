import StatusCard from '@/components/StatusCard';

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <section className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">
            Professional <span className="text-accent-glow font-normal">Background</span>
          </h2>
          
          <div className="space-y-6 text-sm text-muted-custom leading-relaxed">
            <p>
              I am a Frontend Developer with strong full-stack capabilities and over 3 years of professional software engineering experience specializing in building web platforms with React, Next.js, and TypeScript.
            </p>
            <p>
              My path into tech wasn’t conventional—I spent over a decade managing high-level corporate client dynamics before transitioning into engineering. This extensive background deeply shapes how I build today: I engineer software with the end user’s real friction in mind, ensuring pixel-perfect execution matches logical data integrity.
            </p>
            <p>
              My day-to-day stack consists of designing RESTful services using Node.js, Express, and NestJS, optimizing SQL Server or PostgreSQL data processing queries, and enforcing ironclad schema structures using Zod. I focus heavily on security architectures, dynamic state management, and modern agile software delivery.
            </p>
          </div>
        </section>
        
        <aside className="w-full md:w-auto self-center md:self-start">
          <StatusCard 
            degree="B.S. in Web Development" 
            expectedGraduation="Jan 2021 – Jun 2028" 
            currentStatus="Currently completing WDD430" 
          />
        </aside>
      </div>
    </main>
  );
}
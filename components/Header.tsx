import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-custom bg-background/70 backdrop-blur-md py-4">
      <nav className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-tight text-foreground">
          Mauro <span className="text-accent-glow font-light">Isa</span>
        </div>
        <ul className="flex gap-8 text-sm font-medium text-muted-custom">
          <li>
            <Link href="/" className="hover:text-accent-glow transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent-glow transition-colors">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
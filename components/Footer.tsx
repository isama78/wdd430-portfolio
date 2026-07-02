export default function Footer() {
  return (
    <footer className="border-t border-border-custom bg-background/50 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-xs text-muted-custom">
        <p>Copyright &copy; {new Date().getFullYear()} | Mauro José Isa | All Rights Reserved</p>
      </div>
    </footer>
  );
}
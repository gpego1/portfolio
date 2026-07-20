export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-faint">
        <p>© {new Date().getFullYear()} Gabriel Pego Feitosa.</p>
        <p className="font-mono text-xs">
          construído com React · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

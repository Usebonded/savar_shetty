export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 micro-label text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Savar Shetty. All rights reserved.</p>
        <p>Built with AI Studio</p>
      </div>
    </footer>
  );
}

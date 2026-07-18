import { Moon, Sun } from 'lucide-react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    // Check initial system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-opacity-70 border-b border-black/5 dark:border-white/5"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg-color) 70%, transparent)' }}
    >
      <a href="#" className="font-display font-black text-xl tracking-tighter">SAVAR SHETTY</a>
      
      <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
        <a href="#about" className="hover:text-zinc-100 transition-colors hidden md:block">About</a>
        <a href="#projects" className="hover:text-zinc-100 transition-colors hidden md:block">Projects</a>
        <a href="#contact" className="hover:text-zinc-100 transition-colors hidden md:block">Contact</a>
        <button 
          onClick={toggleDark} 
          className="p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </motion.nav>
  );
}

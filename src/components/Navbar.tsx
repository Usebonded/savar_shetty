import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

const navContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const navItem = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Navbar() {
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
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }, []);

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
      <motion.a 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        href="#" 
        className="font-display font-black text-xl tracking-tighter"
      >
        SAVAR SHETTY
      </motion.a>
      
      <motion.div 
        variants={navContainer}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400"
      >
        <motion.a variants={navItem} href="#about" className="hover:text-zinc-100 transition-colors hidden md:block">About</motion.a>
        <motion.a variants={navItem} href="#projects" className="hover:text-zinc-100 transition-colors hidden md:block">Projects</motion.a>
        <motion.a variants={navItem} href="#timeline" className="hover:text-zinc-100 transition-colors hidden md:block">Timeline</motion.a>
        <motion.a variants={navItem} href="#contact" className="hover:text-zinc-100 transition-colors hidden md:block">Contact</motion.a>
      </motion.div>
    </motion.nav>
  );
}

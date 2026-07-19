import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const textMask = {
  hidden: { y: '120%' },
  show: { y: '0%', transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 } }
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-50" />
      
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <p className="micro-label">(00) INDEX</p>
          <span className="w-12 h-[1px] bg-[var(--fg-color)] opacity-30 block" />
          <p className="micro-label">Portfolio 2026</p>
        </motion.div>

        <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-[-0.05em] leading-[0.8] uppercase">
          <div className="overflow-hidden pb-4 -mb-4"><motion.div initial="hidden" animate="show" variants={textMask}>Savar</motion.div></div>
          <div className="overflow-hidden pb-4 -mb-4"><motion.div initial="hidden" animate="show" variants={textMask} className="text-stroke">Shetty</motion.div></div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="mt-8 max-w-xl text-lg md:text-xl font-light opacity-60 leading-relaxed font-sans text-zinc-400"
        >
          AI & ML Enthusiast <span className="mx-2 opacity-30">|</span> Builder of Intelligent Systems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="mt-12 flex gap-16 items-start"
        >
          <div className="flex flex-col">
            <span className="micro-label mb-2">Technologies</span>
            <span className="text-xs font-mono font-light text-zinc-300">n8n / Python / C++</span>
          </div>
          <div className="flex flex-col">
            <span className="micro-label mb-2">Connect</span>
            <span className="text-xs font-mono font-light text-zinc-300">GH / LI</span>
          </div>
          <div className="flex flex-col">
            <span className="micro-label mb-2">Locale</span>
            <span className="text-xs font-mono font-light text-zinc-300">PUNE, IN</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4 hidden md:flex"
      >
        <div className="w-[1px] h-24 bg-[var(--fg-color)] opacity-20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--fg-color)] opacity-60"
          />
        </div>
      </motion.div>
    </section>
  );
}

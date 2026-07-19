import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const textMask = {
  hidden: { y: '120%' },
  show: { y: '0%', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col items-center"
        >
          <motion.h2 variants={fadeInUp} className="micro-label mb-6 flex items-center justify-center gap-4">
            <span>(04)</span> Get In Touch
          </motion.h2>
          <div className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-[-0.03em] leading-none mb-8">
            <div className="overflow-hidden pb-4 -mb-4"><motion.div variants={textMask}>Let's</motion.div></div>
            <div className="overflow-hidden pb-4 -mb-4"><motion.div variants={textMask}>Collaborate.</motion.div></div>
          </div>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl font-light text-zinc-400 max-w-lg mb-16">
            Whether you're looking to build intelligent systems, discuss ML research, or just say hello.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-4xl border-t border-[var(--border-color)] pt-16">
            <a 
              href="mailto:shettysavar14@gmail.com" 
              className="group flex items-center justify-between md:justify-center gap-4 text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-wider hover:opacity-70 transition-opacity w-full md:w-auto"
            >
              Gmail
              <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="https://github.com/Usebonded" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between md:justify-center gap-4 text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-wider hover:opacity-70 transition-opacity w-full md:w-auto"
            >
              GitHub
              <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/savar-shetty-27773b310" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between md:justify-center gap-4 text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-wider hover:opacity-70 transition-opacity w-full md:w-auto"
            >
              LinkedIn
              <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

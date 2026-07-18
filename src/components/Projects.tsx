import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Stock Trading Bot',
    category: 'Machine Learning / RL',
    description: 'An automated trading system built using Reinforcement Learning. Developed collaboratively with Ashutosh Gopale, Yashasvi Reddy Konda, Pranav Pawar, and Atharva Morbale.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Campus Wallet',
    category: 'Web & FinTech',
    description: 'A dedicated digital payment and wallet solution tailored specifically for the fast-paced college campus environment.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Digital Games',
    category: 'Interactive Web',
    description: 'A collection of interactive web-based games including physics-based "Stack" and classic "Tic-Tac-Toe", showcasing frontend logic and state management.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-12 bg-[var(--fg-color)] text-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="micro-label mb-6 flex items-center gap-4">
              <span>(02)</span> Selected Works
            </h2>
            <p className="font-display text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-none">
              Featured <br/> Projects.
            </p>
          </div>
          <p className="max-w-sm text-lg font-light opacity-80">
            A curated selection of my academic and personal endeavors in software engineering and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className={`group flex flex-col ${index === 1 ? 'md:mt-32' : ''}`}
            >
              <div className="relative overflow-hidden mb-8 bg-white/5 aspect-[4/3]">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-out">
                  <ArrowUpRight size={32} className="text-white" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 group-hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="number-badge">0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-xl font-medium uppercase">{project.title}</h3>
                      <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">{project.category}</p>
                    </div>
                  </div>
                  <div className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</div>
                </div>
                <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-sm ml-12">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

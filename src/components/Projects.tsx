import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { MouseEvent, useRef } from 'react';

const projects = [
  {
    title: 'Stock Trading Bot',
    category: 'Machine Learning / RL',
    description: 'An automated trading system built using Reinforcement Learning. Developed collaboratively with Ashutosh Gopale, Yashasvi Reddy Konda, Pranav Pawar, and Atharva Morbale.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Usebonded'
  },
  {
    title: 'Campus Wallet',
    category: 'Web & FinTech',
    description: 'A dedicated digital payment and wallet solution tailored specifically for the fast-paced college campus environment. Served as Project Lead, developed collaboratively with Ashutosh Gopale, Yashasvi Reddy Konda, Pranav Pawar, and Atharva Morbale.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Usebonded'
  },
  {
    title: 'Digital Games',
    category: 'Interactive Web',
    description: 'A collection of interactive web-based games including physics-based "Stack" and classic "Tic-Tac-Toe", showcasing frontend logic and state management.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    link: 'https://github.com/Usebonded'
  }
];

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
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const textMask = {
  hidden: { y: '120%' },
  show: { y: '0%', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const scale = useTransform(springX, (value) => 1); // Only for type, actual scale on hover is handled below or by css

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate position from -0.5 to 0.5
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={fadeInUp}
      className={`group flex flex-col ${index === 1 ? 'md:mt-32' : ''}`}
      style={{ perspective: 1000 }}
    >
      <motion.a 
        href={project.link}
        target="_blank"
        rel="noreferrer"
        ref={ref as any}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden mb-8 bg-white/5 aspect-[4/3] transform-gpu block cursor-none"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
      >
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transform-gpu"
          style={{ translateZ: 20 }}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-gpu" style={{ translateZ: 30 }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-out transform-gpu pointer-events-none" style={{ translateZ: 50 }}>
          <ArrowUpRight size={32} className="text-white" />
        </div>
      </motion.a>
      
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
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-12 bg-[var(--fg-color)] text-[var(--bg-color)]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        
        <motion.div
          variants={fadeInUp}
          className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="micro-label mb-6 flex items-center gap-4">
              <span>(02)</span> Selected Works
            </h2>
            <div className="font-display text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-none">
              <div className="overflow-hidden pb-4 -mb-4"><motion.div variants={textMask}>Featured</motion.div></div>
              <div className="overflow-hidden pb-4 -mb-4"><motion.div variants={textMask}>Projects.</motion.div></div>
            </div>
          </div>
          <p className="max-w-sm text-lg font-light opacity-80">
            A curated selection of my academic and personal endeavors in software engineering and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </motion.div>
    </section>
  );
}

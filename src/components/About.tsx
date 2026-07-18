import { motion } from 'motion/react';
import Accordion from './Accordion';

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-32"
          >
            <h2 className="micro-label mb-6 flex items-center gap-4">
              <span>(01)</span> Introduction
            </h2>
            <p className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] leading-[0.9]">
              Pushing <br/> boundaries <br/> with AI.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-16 md:mb-24 text-xl md:text-2xl font-light leading-relaxed text-zinc-400"
          >
            I am a 2nd-Year B.Tech Student specializing in Artificial Intelligence & Machine Learning at Symbiosis Skills and Professional University (SSPU). I am deeply passionate about building intelligent systems and exploring the forefront of Generative AI.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="border-t border-[var(--border-color)]"
          >
            <Accordion title="Core Focus" defaultOpen>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Machine Learning', 'Generative AI', 'Agentic AI', 'Data Analytics'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--fg-color)] opacity-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
            
            <Accordion title="Technologies & Tools">
              <p className="mb-6">My technical toolkit allows me to rapidly prototype and deploy complex workflows:</p>
              <div className="flex flex-wrap gap-3">
                {['n8n', 'Python', 'C/C++', 'Data Structures', 'Web Development'].map((tech) => (
                  <span key={tech} className="px-5 py-2.5 border border-[var(--border-color)] rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[var(--fg-color)] hover:text-[var(--bg-color)] transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </Accordion>

            <Accordion title="Soft Skills">
              <p className="leading-relaxed">
                Beyond code, I excel in <strong className="font-medium text-[var(--fg-color)]">rapid problem solving</strong> and thrive in environments that require <strong className="font-medium text-[var(--fg-color)]">cross-functional collaboration</strong>. I believe that communication and adaptability are just as important as technical prowess.
              </p>
            </Accordion>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

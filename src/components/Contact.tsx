import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-24">
        
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="micro-label mb-6 flex items-center gap-4">
              <span>(03)</span> Get In Touch
            </h2>
            <p className="font-display text-5xl md:text-7xl font-black uppercase tracking-[-0.03em] leading-none mb-8">
              Let's <br/> Collaborate.
            </p>
            <p className="text-lg font-light text-zinc-400 max-w-md mb-12">
              Whether you're looking to build intelligent systems, discuss ML research, or just say hello.
            </p>

            <div className="flex flex-col gap-6">
              <a 
                href="https://github.com/Usebonded" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 text-xl font-display uppercase tracking-wider hover:opacity-70 transition-opacity w-fit"
              >
                GitHub
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/savar-shetty-27773b310" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 text-xl font-display uppercase tracking-wider hover:opacity-70 transition-opacity w-fit"
              >
                LinkedIn
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-lg outline-none focus:border-[var(--fg-color)] transition-colors peer placeholder-transparent focus:bg-[#111] px-4"
                placeholder="Name"
              />
              <label htmlFor="name" className="absolute left-4 top-4 micro-label peer-focus:-translate-y-8 peer-valid:-translate-y-8 transition-all cursor-text">
                Your Name
              </label>
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-lg outline-none focus:border-[var(--fg-color)] transition-colors peer placeholder-transparent focus:bg-[#111] px-4"
                placeholder="Email"
              />
              <label htmlFor="email" className="absolute left-4 top-4 micro-label peer-focus:-translate-y-8 peer-valid:-translate-y-8 transition-all cursor-text">
                Email Address
              </label>
            </div>

            <div className="relative group mt-4">
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full bg-transparent border-b border-[var(--border-color)] py-4 text-lg outline-none focus:border-[var(--fg-color)] transition-colors peer placeholder-transparent resize-none focus:bg-[#111] px-4"
                placeholder="Message"
              />
              <label htmlFor="message" className="absolute left-4 top-4 micro-label peer-focus:-translate-y-8 peer-valid:-translate-y-8 transition-all cursor-text">
                Project Details
              </label>
            </div>

            <button 
              type="submit"
              className="mt-8 bg-[var(--fg-color)] text-[var(--bg-color)] px-8 py-5 rounded-full font-semibold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity w-fit flex items-center gap-4 group"
            >
              Send Message
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>

      </div>
    </section>
  );
}

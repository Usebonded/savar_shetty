import { motion } from 'motion/react';

const timelineEvents = [
  {
    date: 'Jun 2025',
    title: 'Start of College',
    description: 'Joined Symbiosis Skills and Professional University as an AIML student.',
  },
  {
    date: 'Sep 2025',
    title: 'Google Gen AI & n8n Workshop',
    description: 'Attended a specialized workshop focusing on Generative AI and workflow automation.',
  },
  {
    date: 'Oct - Nov 2025',
    title: 'All India Hackathon',
    description: 'Developed a Stock Trading Bot project using Reinforcement Learning.',
  },
  {
    date: 'Jan 2026',
    title: 'Google Cybersecurity Workshop',
    description: 'Gained insights into modern cybersecurity practices and defense strategies.',
  },
  {
    date: 'Mar 2026',
    title: 'Inter College Hackathon',
    description: 'Project Lead for Campus Wallet, a digital payment solution for college campuses.',
  },
  {
    date: 'Jun - Jul 2026',
    title: 'Data Analyst Intern at mentoureasy',
    description: 'Summer internship at mentoureasy Gurugram as a Data Analyst.',
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

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 md:py-48 px-6 md:px-12 bg-[var(--bg-color)]">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-16 md:mb-32">
          <motion.h2 variants={fadeInUp} className="micro-label mb-6 flex items-center gap-4">
            <span>(03)</span> Timeline
          </motion.h2>
          <div className="font-display text-4xl md:text-6xl font-black uppercase tracking-[-0.03em] leading-none">
            <div className="overflow-hidden pb-4 -mb-4"><motion.div variants={textMask}>My</motion.div></div>
            <div className="overflow-hidden pb-4 -mb-4"><motion.div variants={textMask}>Journey.</motion.div></div>
          </div>
        </div>

        <div className="relative border-l border-[var(--border-color)] ml-4 md:ml-8">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="mb-16 last:mb-0 pl-8 md:pl-16 relative"
            >
              {/* Dot */}
              <div className="absolute w-3 h-3 bg-[var(--fg-color)] rounded-full -left-[6.5px] top-2" />
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">{event.date}</span>
                <h3 className="font-display text-xl md:text-2xl font-medium uppercase mt-2">{event.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base font-light max-w-lg mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.floor(Math.random() * 15) + 5;
        if (prev + increment >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400); 
          return 100;
        }
        return prev + increment;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--bg-color)]"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="micro-label">(00) SYSTEM INITIALIZATION</span>
          <span className="font-display font-black text-4xl md:text-5xl tracking-[-0.03em] uppercase">
            Savar Shetty
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-5"
        >
           <div className="h-[2px] w-48 md:w-64 bg-[var(--border-color)] overflow-hidden relative rounded-full">
             <motion.div 
               className="absolute top-0 left-0 h-full bg-[var(--fg-color)]"
               initial={{ width: "0%" }}
               animate={{ width: `${progress}%` }}
               transition={{ ease: "linear", duration: 0.2 }}
             />
           </div>
           <span className="font-mono text-xs md:text-sm font-bold text-[var(--fg-color)] w-10 text-right">
             {progress}%
           </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

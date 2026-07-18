import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, ReactNode } from 'react';

export default function Accordion({ 
  title, 
  children, 
  defaultOpen = false 
}: { 
  title: string, 
  children: ReactNode, 
  defaultOpen?: boolean 
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--border-color)]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full py-6 md:py-8 text-left group"
      >
        <h3 className="font-display font-medium text-lg md:text-xl uppercase tracking-tight group-hover:opacity-70 transition-opacity">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="p-2 rounded-full border border-transparent group-hover:border-[var(--border-color)] transition-colors"
        >
          <Plus size={20} strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-sm md:text-base font-light text-zinc-400 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

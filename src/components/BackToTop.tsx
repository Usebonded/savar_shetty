import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show button when scrolled past 100vh (approx hero height)
    if (latest > (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-[var(--fg-color)] text-[var(--bg-color)] shadow-lg hover:scale-110 transition-transform group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

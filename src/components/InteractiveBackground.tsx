import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fast spring for immediate tracking
  const fastSpringConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const fastX = useSpring(mouseX, fastSpringConfig);
  const fastY = useSpring(mouseY, fastSpringConfig);

  // Slow, lazy spring for a cinematic, ambient follow effect
  const slowSpringConfig = { damping: 100, stiffness: 20, mass: 5 };
  const slowX = useSpring(mouseX, slowSpringConfig);
  const slowY = useSpring(mouseY, slowSpringConfig);

  useEffect(() => {
    // Only enable on devices with a fine pointer (like a mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      // Center the background orb on mobile initially
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[var(--bg-color)]">
      {/* Subtle Noise Overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
      
      {/* Primary fast following glow */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-white opacity-[0.03] blur-[80px] md:blur-[100px]"
        style={{
          x: fastX,
          y: fastY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Secondary slow, wide ambient glow */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-zinc-400 opacity-[0.02] blur-[120px] md:blur-[150px]"
        style={{
          x: slowX,
          y: slowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}

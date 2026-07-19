/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen selection:bg-[var(--fg-color)] selection:text-[var(--bg-color)] relative">
      <InteractiveBackground />
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <BackToTop />
          <main>
            <Hero />
            <About />
            <Projects />
            <Timeline />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import InteractiveBackground from './components/InteractiveBackground';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--fg-color)] selection:text-[var(--bg-color)] relative">
      <InteractiveBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

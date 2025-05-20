import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NavigationProvider } from './context/NavigationContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import HeroSection from './sections/HeroSection';
import NewsSection from './sections/NewsSection';
import InstructionsSection from './sections/InstructionsSection';
import FirmwareSection from './sections/FirmwareSection';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "DreamForge | DIY 3D Printer Kits";
  }, []);

  return (
    <NavigationProvider>
      <div className="min-h-screen bg-gray-900 text-white relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 origin-left z-50"
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <main>
          <HeroSection />
          <NewsSection />
          <InstructionsSection />
          <FirmwareSection />
        </main>
        
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;
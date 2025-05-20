import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Printer as Printer3D, FileText, Download } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const Navbar: React.FC = () => {
  const { activeSection, scrollToSection } = useNavigation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Printer3D className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold text-white">DreamForge</span>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {[
            { id: 'home', label: 'Home', icon: Printer3D },
            { id: 'instructions', label: 'Instructions', icon: FileText },
            { id: 'firmware', label: 'Firmware', icon: Download }
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id as any)}
              className={`flex items-center space-x-1 px-2 py-1 relative ${
                activeSection === item.id ? 'text-orange-400' : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400 rounded-full"
                  layoutId="navIndicator"
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
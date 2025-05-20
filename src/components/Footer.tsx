import React from 'react';
import { motion } from 'framer-motion';
import { Printer as Printer3D, Mail, Github, Twitter } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const Footer: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Printer3D className="w-6 h-6 text-orange-500" />
              <span className="text-xl font-bold text-white">DreamForge</span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering makers and creators with high-quality DIY 3D printer kits. 
              Built for reliability, innovation, and endless creativity.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-orange-400 hover:bg-gray-700"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-orange-400 hover:bg-gray-700"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-orange-400 hover:bg-gray-700"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', action: () => scrollToSection('home') },
                { name: 'Instructions', action: () => scrollToSection('instructions') },
                { name: 'Firmware', action: () => scrollToSection('firmware') },
                { name: 'Community Forum', href: '#' },
                { name: 'Contact', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={link.action}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: 'FAQs', href: '#' },
                { name: 'Troubleshooting', href: '#' },
                { name: 'Support', href: '#' },
                { name: 'Models Library', href: '#' },
                { name: 'Calibration Tools', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} DreamForge. All rights reserved. POWERED BY "HUB CITY | Software"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
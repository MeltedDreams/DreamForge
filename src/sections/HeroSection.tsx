import React from 'react';
import { motion } from 'framer-motion';
import { Printer as Printer3D } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const HeroSection: React.FC = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjkgNThhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek01MyA1OGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTQxIDU4YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNMTcgNThhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek01IDU4YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center">
            <Printer3D className="w-12 h-12 text-orange-500" />
            <div className="w-2 h-2 bg-orange-500 rounded-full mx-2 animate-pulse"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full mx-2 animate-pulse" style={{ animationDelay: '300ms' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full mx-2 animate-pulse" style={{ animationDelay: '600ms' }}></div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          DreamForge
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Empowering makers with premium DIY 3D printer kits designed for creativity, reliability, and innovation.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            onClick={() => scrollToSection('instructions')}
            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-orange-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Tutorials
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('firmware')}
            className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Firmware
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-orange-400 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
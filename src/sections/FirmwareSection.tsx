import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { firmwareResources } from '../data/resourcesData';
import ResourceCard from '../components/ResourceCard';
import SectionHeader from '../components/SectionHeader';

const FirmwareSection: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState('latest');

  const latestFirmware = firmwareResources.filter(fw => 
    fw.version === 'NOT OUT YET' && fw.category === 'Firmware'
  );
  
  const previousFirmware = firmwareResources.filter(fw => 
    fw.version !== 'NOT OUT YET' && fw.category === 'Firmware'
  );
  
  const utilities = firmwareResources.filter(fw => 
    fw.category === 'Utility'
  );

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };

  const renderSectionHeader = (title: string, section: string, count: number) => (
    <motion.div
      className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 p-4 mb-4 cursor-pointer"
      onClick={() => toggleSection(section)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Download className="w-5 h-5 text-orange-400 mr-3" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="ml-3 px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300">{count}</span>
        </div>
        <div>
          {expandedSection === section ? 
            <ChevronUp className="w-5 h-5 text-gray-400" /> : 
            <ChevronDown className="w-5 h-5 text-gray-400" />
          }
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="firmware" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Download className="w-6 h-6 text-orange-500" />
          <span className="text-orange-400 font-medium">Software Updates</span>
        </div>
        
        <SectionHeader 
          title="Firmware Downloads" 
          subtitle="Get the latest firmware updates for your DreamForge printer to unlock new features and improve performance."
        />

        <div className="max-w-4xl mx-auto">
          {renderSectionHeader("Latest Firmware Releases", "latest", latestFirmware.length)}
          
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ 
              height: expandedSection === 'latest' ? 'auto' : 0,
              opacity: expandedSection === 'latest' ? 1 : 0
            }}
            className="overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {latestFirmware.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ResourceCard resource={resource} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {renderSectionHeader("Previous Firmware Versions", "previous", previousFirmware.length)}
          
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ 
              height: expandedSection === 'previous' ? 'auto' : 0,
              opacity: expandedSection === 'previous' ? 1 : 0
            }}
            className="overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {previousFirmware.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ResourceCard resource={resource} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {renderSectionHeader("Utilities & Tools", "utilities", utilities.length)}
          
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            animate={{ 
              height: expandedSection === 'utilities' ? 'auto' : 0,
              opacity: expandedSection === 'utilities' ? 1 : 0
            }}
            className="overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {utilities.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ResourceCard resource={resource} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -bottom-64 -left-32 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FirmwareSection;
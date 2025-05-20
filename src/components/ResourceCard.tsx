import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Info } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceCardProps {
  resource: ResourceItem;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-500/50"
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.3)',
        borderColor: 'rgba(6, 182, 212, 0.5)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
          </div>
          {resource.model && (
            <span className="px-2 py-1 bg-gray-700 text-xs font-medium rounded-full text-orange-300">
              {resource.model} {resource.version && `v${resource.version}`}
            </span>
          )}
        </div>
        <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
        <div className="flex items-center text-gray-400 text-xs mb-4">
          <Info className="w-4 h-4 mr-1" />
          <span>{resource.category} • {resource.fileSize} • {resource.date}</span>
        </div>
        <motion.a
          href={resource.fileUrl}
          className="flex items-center justify-center w-full py-2 bg-orange-600/20 hover:bg-orange-600/40 text-orange-300 rounded-md font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
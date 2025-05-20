import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Filter, X } from 'lucide-react';
import { tutorialResources } from '../data/resourcesData';
import ResourceCard from '../components/ResourceCard';
import SectionHeader from '../components/SectionHeader';

const categories = ['All', ...Array.from(new Set(tutorialResources.map(item => item.category)))];
const models = ['All', ...Array.from(new Set(tutorialResources.filter(item => item.model).map(item => item.model as string)))];

const InstructionsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedModel, setSelectedModel] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredResources = tutorialResources.filter(resource => {
    const categoryMatch = selectedCategory === 'All' || resource.category === selectedCategory;
    const modelMatch = selectedModel === 'All' || resource.model === selectedModel;
    return categoryMatch && modelMatch;
  });

  return (
    <section id="instructions" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <FileText className="w-6 h-6 text-orange-500" />
          <span className="text-orange-400 font-medium">Learn & Build</span>
        </div>
        
        <SectionHeader 
          title="Instructions & Tutorials" 
          subtitle="Access comprehensive build guides, maintenance manuals, and DIY tutorials for your DreamForge printer."
        />

        <motion.div 
          className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <button 
              className="md:hidden flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg text-white"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            
            <div className="hidden md:flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                    selectedCategory === category 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex space-x-2">
            {models.map((model) => (
              <motion.button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedModel === model 
                    ? 'bg-gray-700 text-orange-400 border border-orange-500/50' 
                    : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {model}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="md:hidden bg-gray-800 rounded-lg p-4 mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">Filters</h3>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategory === category 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-2">Models</p>
                <div className="flex flex-wrap gap-2">
                  {models.map((model) => (
                    <button
                      key={model}
                      onClick={() => setSelectedModel(model)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedModel === model 
                          ? 'bg-gray-700 text-orange-400 border border-orange-500/50' 
                          : 'bg-gray-800 text-gray-300 border border-gray-700'
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                layout
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default InstructionsSection;
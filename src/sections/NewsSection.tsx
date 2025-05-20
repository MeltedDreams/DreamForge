import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { newsItems } from '../data/newsData';
import NewsCard from '../components/NewsCard';
import SectionHeader from '../components/SectionHeader';

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Newspaper className="w-6 h-6 text-orange-500" />
          <span className="text-orange-400 font-medium">Stay Updated</span>
        </div>
        
        <SectionHeader 
          title="News & Updates" 
          subtitle="Keep up with the latest developments, releases, and community highlights from DreamForge."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 hover:border-orange-500/50"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Updates
          </motion.button>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default NewsSection;
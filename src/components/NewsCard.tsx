import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const NewsCard: React.FC<NewsCardProps> = ({ news, index }) => {
  return (
    <motion.div
      className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.2)',
        borderColor: 'rgba(6, 182, 212, 0.3)'
      }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{news.title}</h3>
      <p className="text-gray-300 mb-4">{news.content}</p>
      <div className="flex items-center text-gray-400 text-sm">
        <Clock className="w-4 h-4 mr-1" />
        <span>{formatDate(news.date)}</span>
      </div>
    </motion.div>
  );
};

export default NewsCard;
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  publishedAt: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title, publishedAt }) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-48">
          <img
            loading="lazy"
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{formattedDate}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default YouTubeVideo;

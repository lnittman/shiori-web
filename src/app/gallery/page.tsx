'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { useLanguage } from '@/components/providers/LanguageProvider';
import useMeasure from 'react-use-measure';

// Temporary data structure - will be replaced with actual data
const items = [
  { id: 1, type: 'photo', src: '/images/placeholder-1.jpg', title: 'Super Bowl Performance' },
  { id: 2, type: 'video', src: '/images/placeholder-2.jpg', title: 'Dance Reel 2024' },
  // Add more items here
];

type FilterType = 'all' | 'photo' | 'video';

export default function Gallery() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');
  const [ref, bounds] = useMeasure();

  const filteredItems = items.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  return (
    <PageLayout>
      {/* Gallery Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <div className="flex justify-center space-x-4">
          {(['all', 'photo', 'video'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm transition-colors
                ${filter === type 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white hover:bg-white/10'}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.type === 'video' && (
                  <div className="mt-2">
                    <span className="inline-flex items-center text-sm">
                      ▶ Play video
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>{language === 'en' ? 'No items found' : '項目が見つかりません'}</p>
        </div>
      )}
    </PageLayout>
  );
} 
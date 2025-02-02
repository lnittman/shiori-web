'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { performances } from '@/lib/data/performances';

export default function WorkDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const performance = performances.find(p => p.id === params.id);
  if (!performance) return null;

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? performance.media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === performance.media.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-6rem)]">
        <div className="max-w-[90%] mx-auto relative">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="absolute -top-8 text-gray-300 hover:text-white transition-colors z-50"
          >
            ← Back
          </button>

          {/* Media Carousel */}
          <div className="relative w-full h-[70vh] bg-black/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {performance.media[currentIndex].type === 'video' ? (
                  <video
                    src={performance.media[currentIndex].url}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <div className="w-full h-full bg-black/50" />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 text-white/70 hover:text-white transition-colors z-10"
            >
              →
            </button>

            {/* Media indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {performance.media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          <h1 className="text-4xl font-bold mb-2">{performance.title}</h1>
          <div className="space-y-4 text-gray-300">
            <div className="flex gap-2 items-center">
              <p>{performance.artist}</p>
              <span>•</span>
              <p>{performance.year}</p>
              <span>•</span>
              <p>{performance.location}</p>
            </div>
            <p className="text-lg">{performance.description}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 

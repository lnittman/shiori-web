'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { performances } from '@/lib/data/performances';
import PerformanceMap, { toMapMarkers } from '@/components/PerformanceMap';

const markers = toMapMarkers(performances);

export default function Work() {
  return (
    <PageLayout>
      <div className="max-w-[1800px] mx-auto px-6">
        <section className="mb-12">
          <PerformanceMap markers={markers} />
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6">
          {performances.map((performance, index) => (
            <Link href={`/work/${performance.id}`} key={index} className="block w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  hover: {
                    y: -4,
                    transition: { duration: 0.2, ease: 'easeOut' }
                  }
                }}
                className="group relative w-full h-full transform-gpu"
              >
                {/* Glass effect - single layer with optimized transitions */}
                <div 
                  className="absolute inset-0 bg-white/[0.02] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-[2px] transition-[background-color] duration-200"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.07), transparent)',
                  }}
                />

                {/* Gradient overlay - single layer */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-200"
                  style={{
                    opacity: 0.8,
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  <motion.div
                    variants={{
                      hover: {
                        x: 4,
                        transition: { duration: 0.2, ease: 'easeOut' }
                      }
                    }}
                  >
                    <h3 className="text-xl font-bold mb-3">
                      {performance.title}
                    </h3>
                    <div className="space-y-1.5 text-gray-300">
                      <p>{performance.artist}</p>
                      <p className="text-sm">
                        {performance.year} • {performance.location}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 
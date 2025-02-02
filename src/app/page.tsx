'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Placeholder for 3D Model */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
        <div className="absolute inset-0 bg-[url('/images/placeholder-hero.jpg')] bg-cover bg-center" />
        
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              {language === 'en' ? 'SHIORI' : '詩織'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              {language === 'en' 
                ? 'Professional Dancer | Los Angeles'
                : 'プロフェッショナルダンサー | ロサンゼルス'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {language === 'en' 
                ? 'Welcome to my world'
                : '私の世界へようこそ'}
            </h2>
            <p className={`text-lg md:text-xl text-gray-300 leading-relaxed ${language === 'jp' ? 'jp' : ''}`}>
              {language === 'en'
                ? 'From Yokohama to Los Angeles, my journey in dance has been a testament to passion, dedication, and the pursuit of artistic excellence. Join me as I continue to push boundaries and create unforgettable moments on stage.'
                : '横浜からロサンゼルスへ - 私のダンスの旅は、情熱と献身、そして芸術的な卓越性の追求の証です。舞台で新たな境地を開拓し、忘れられない瞬間を創造し続ける私の挑戦にご注目ください。'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

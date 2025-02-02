'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Contact() {
  const { language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // TODO: Implement form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>
          
          <div className="mb-12 text-center">
            <p className={`text-xl text-gray-300 ${language === 'jp' ? 'jp' : ''}`}>
              {language === 'en'
                ? 'For bookings, collaborations, or general inquiries'
                : '出演依頼、コラボレーション、お問い合わせはこちらから'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Name' : '名前'}
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Email' : 'メールアドレス'}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {language === 'en' ? 'Message' : 'メッセージ'}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3 px-6 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' 
                ? (language === 'en' ? 'Sending...' : '送信中...')
                : (language === 'en' ? 'Send Message' : 'メッセージを送信')}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-400"
              >
                {language === 'en'
                  ? 'Message sent successfully!'
                  : 'メッセージが送信されました！'}
              </motion.p>
            )}
          </form>

          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Follow me' : 'フォローする'}
            </h2>
            <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/seeee26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
                Instagram
            </a>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
} 
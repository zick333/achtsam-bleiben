'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#333333] py-6 relative">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Simple centered links like original */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#999999]">
          <Link href="/impressum/" className="hover:text-white transition">
            Impressum
          </Link>
          <span>|</span>
          <Link href="/datenschutzerklaerung/" className="hover:text-white transition">
            Datenschutzerklärung
          </Link>
          <span>|</span>
          <Link href="/kontakt/" className="hover:text-white transition">
            Kontakt
          </Link>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#E8913A] rounded-full flex items-center justify-center shadow-lg hover:bg-[#d4822f] transition-all z-50"
          aria-label="Nach oben scrollen"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
}

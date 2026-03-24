'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const nav = [
  {
    key: 'meditation',
    label: 'Meditation',
    items: [
      { href: '/meditationstermine-in-frankfurt/', label: 'Meditationstermine in Frankfurt' },
      { href: '/meine-philosophie-beim-meditieren/', label: 'Meine Meditations-Philosophie' },
      { href: '/meditationswissen/', label: 'Wissen über Meditation' },
      { href: '/empfehlungen-meditationslehrer/', label: 'Empfohlene Meditationslehrer' },
      { href: '/rueckmeldungen/', label: 'Was sagen die Teilnehmer?' },
    ],
  },
  {
    key: 'coaching',
    label: 'Coaching',
    items: [
      { href: '/meine-coaching-philosophie/', label: 'Meine Coaching-Philosophie' },
      { href: '/persoenlichkeits-coaching-in-frankfurt/', label: 'Persönlichkeits-Coaching' },
      { href: '/resilienz-coaching-in-frankfurt/', label: 'Resilienz-Coaching' },
      { href: '/rueckmeldungen/', label: 'Was sagen die Kunden?' },
    ],
  },
  {
    key: 'workshops',
    label: 'Workshops für Unternehmen',
    items: [
      { href: '/resilienz-training-fuer-unternehmen/', label: 'Resilienz-Training' },
      { href: '/achtsamkeitstraining-fuer-unternehmen/', label: 'Achtsamkeitstraining' },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Light = scrolled (white pill) or mobile menu open
  const light = scrolled;

  return (
    <>
      {/* Floating pill wrapper */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-5 pt-3 md:pt-4 pointer-events-none">
        <div className="max-w-[1400px] mx-auto">

          <div
            className={`
              pointer-events-auto flex items-center justify-between h-14 md:h-[60px] px-4 md:px-5
              rounded-2xl bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
              ${light
                ? 'shadow-[0_4px_24px_rgba(28,20,16,0.12),0_1px_0_rgba(28,20,16,0.06)]'
                : 'shadow-[0_2px_16px_rgba(28,20,16,0.07),0_1px_0_rgba(28,20,16,0.04)]'
              }
            `}
          >

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-desktop.jpg"
                alt="Achtsam Bleiben"
                width={180}
                height={54}
                className="h-9 md:h-10 w-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ filter: 'none' }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {nav.map(section => (
                <DesktopDropdown key={section.key} section={section} light={light} />
              ))}

              <Link
                href="/ueber-mich/"
                className={`px-3.5 py-2 text-[18px] font-medium rounded-xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  light
                    ? 'text-[#1C1410] hover:text-[#E8913A] hover:bg-stone-50'
                    : 'text-[#1C1410] hover:text-[#E8913A] hover:bg-stone-50'
                }`}
              >
                Über mich
              </Link>

              <Link
                href="/kontakt/"
                className={`ml-1.5 px-5 py-2.5 rounded-xl text-[15px] font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] ${
                  light
                    ? 'bg-[#E8913A] text-white hover:bg-[#d4822f] shadow-[0_2px_8px_rgba(232,145,58,0.35)]'
                    : 'bg-[#E8913A] text-white hover:bg-[#d4822f]'
                }`}
              >
                Kontakt
              </Link>
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-stone-100"
            >
              <div className="w-[18px] h-3.5 relative flex flex-col justify-between">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="absolute left-0 w-full h-[1.5px] origin-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    style={{
                      backgroundColor: '#1C1410',
                      top: i === 0 ? 0 : i === 1 ? '6px' : '12px',
                      transform: mobileOpen
                        ? i === 0 ? 'translateY(6px) rotate(45deg)'
                        : i === 1 ? 'scaleX(0)'
                        : 'translateY(-6px) rotate(-45deg)'
                        : 'none',
                      opacity: mobileOpen && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </div>
            </button>

          </div>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`fixed inset-0 z-40 xl:hidden bg-[#0e0b09] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Logo in overlay */}
        <div className="px-6 pt-6 pb-0">
          <div className="h-14 flex items-center">
            <Image
              src="/images/logo-desktop.jpg"
              alt="Achtsam Bleiben"
              width={160}
              height={48}
              className="h-9 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-10">

          {/* Nav groups */}
          {nav.map((section, si) => (
            <div key={section.key}>
              <button
                onClick={() => setMobileSection(mobileSection === section.key ? null : section.key)}
                className="w-full flex items-center justify-between py-4 border-b border-white/[0.07]"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 550ms ${si * 50}ms cubic-bezier(0.32,0.72,0,1), transform 550ms ${si * 50}ms cubic-bezier(0.32,0.72,0,1)`,
                }}
              >
                <span className="font-serif text-[1.6rem] text-white leading-none">{section.label}</span>
                <svg
                  className="w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  style={{ transform: mobileSection === section.key ? 'rotate(180deg)' : 'none' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion items */}
              <div
                className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]"
                style={{ maxHeight: mobileSection === section.key ? `${section.items.length * 50}px` : '0px' }}
              >
                <div className="pl-4 pt-2 pb-3 space-y-0">
                  {section.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMobileOpen(false); setMobileSection(null); }}
                      className="block py-2.5 text-[17px] text-white/45 hover:text-white/80 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Über mich */}
          <Link
            href="/ueber-mich/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center py-4 border-b border-white/[0.07] font-serif text-[1.6rem] text-white"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 550ms ${nav.length * 50}ms cubic-bezier(0.32,0.72,0,1), transform 550ms ${nav.length * 50}ms cubic-bezier(0.32,0.72,0,1)`,
            }}
          >
            Über mich
          </Link>

          {/* CTA */}
          <div
            className="mt-8"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 550ms ${(nav.length + 1) * 50}ms cubic-bezier(0.32,0.72,0,1), transform 550ms ${(nav.length + 1) * 50}ms cubic-bezier(0.32,0.72,0,1)`,
            }}
          >
            <Link
              href="/kontakt/"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-4 rounded-2xl bg-[#E8913A] text-white font-semibold text-lg tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
            >
              Kontakt aufnehmen
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

/* ── DESKTOP DROPDOWN ── */
function DesktopDropdown({
  section,
  light,
}: {
  section: (typeof nav)[number];
  light: boolean;
}) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 px-3.5 py-2 text-[18px] font-medium rounded-xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          'text-[#1C1410] hover:text-[#E8913A] hover:bg-stone-50'
        }`}
      >
        {section.label}
        <svg
          className="w-3 h-3 opacity-40 transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rotate-180 flex-shrink-0"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Bridge + panel */}
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] z-50">
        <div
          className="bg-[#1C1410] rounded-2xl p-1.5 min-w-max"
          style={{ boxShadow: '0 16px 48px rgba(14,11,9,0.40), 0 4px 12px rgba(14,11,9,0.20), inset 0 1px 0 rgba(255,255,255,0.06)' }}
        >
          {section.items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-[18px] text-white/60 hover:text-white rounded-xl transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.07] whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

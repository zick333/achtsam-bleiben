'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = {
  meditationFrankfurt: {
    label: 'Meditation',
    items: [
      { href: '/meditationstermine-in-frankfurt/', label: 'Meditationstermine in Frankfurt' },
      { href: '/meine-philosophie-beim-meditieren/', label: 'Meine Meditations-Philosophie' },
      { href: '/meditationswissen/', label: 'Wissen über Meditation' },
      { href: '/empfehlungen-meditationslehrer/', label: 'Empfohlene Meditationslehrer' },
      { href: '/rueckmeldungen/', label: 'Was sagen die Teilnehmer?' },
    ],
  },
  coachingFrankfurt: {
    label: 'Coaching',
    items: [
      { href: '/meine-coaching-philosophie/', label: 'Meine Coaching-Philosophie' },
      { href: '/persoenlichkeits-coaching-in-frankfurt/', label: 'Persönlichkeits-Coaching' },
      { href: '/resilienz-coaching-in-frankfurt/', label: 'Resilienz-Coaching' },
      { href: '/rueckmeldungen/', label: 'Was sagen die Kunden?' },
    ],
  },
  workshops: {
    label: 'Workshops für Unternehmen',
    items: [
      { href: '/resilienz-training-fuer-unternehmen/', label: 'Resilienz-Training' },
      { href: '/achtsamkeitstraining-fuer-unternehmen/', label: 'Achtsamkeitstraining' },
    ],
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Single row: Logo LEFT, Navigation RIGHT */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-desktop.jpg"
              alt="Achtsam Bleiben"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center space-x-4 text-[18px]">
            <NavDropdown
              label={navigation.meditationFrankfurt.label}
              items={navigation.meditationFrankfurt.items}
            />
            <NavDropdown
              label={navigation.coachingFrankfurt.label}
              items={navigation.coachingFrankfurt.items}
            />
            <NavDropdown
              label={navigation.workshops.label}
              items={navigation.workshops.items}
            />
            <Link
              href="/ueber-mich/"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Über mich
            </Link>
            <Link
              href="/kontakt/"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-2">
            <MobileNavSection
              title={navigation.meditationFrankfurt.label}
              items={navigation.meditationFrankfurt.items}
              isOpen={openDropdown === 'meditation'}
              onToggle={() => setOpenDropdown(openDropdown === 'meditation' ? null : 'meditation')}
            />
            <MobileNavSection
              title={navigation.coachingFrankfurt.label}
              items={navigation.coachingFrankfurt.items}
              isOpen={openDropdown === 'coaching'}
              onToggle={() => setOpenDropdown(openDropdown === 'coaching' ? null : 'coaching')}
            />
            <MobileNavSection
              title={navigation.workshops.label}
              items={navigation.workshops.items}
              isOpen={openDropdown === 'workshops'}
              onToggle={() => setOpenDropdown(openDropdown === 'workshops' ? null : 'workshops')}
            />
            <div className="py-2 border-t border-gray-100 mt-2">
              <Link
                href="/ueber-mich/"
                className="block py-2 text-gray-700 hover:text-orange-500"
              >
                Über mich
              </Link>
              <Link
                href="/kontakt/"
                className="block py-2 text-gray-700 hover:text-orange-500"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <div className="relative group">
      <button className="text-gray-700 hover:text-orange-500 flex items-center gap-1 transition py-3">
        {label}
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute left-0 top-full bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-[18px] text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavSection({
  title,
  items,
  isOpen,
  onToggle,
}: {
  title: string;
  items: { href: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-3 text-gray-700"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-2 pl-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-[18px] text-gray-600 hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

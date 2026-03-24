'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BaseLayout } from './BaseLayout';

interface HomePageProps {
  frontmatter: {
    title: string;
    description?: string;
    images?: {
      logo?: string;
      logoMobile?: string;
      bgPattern?: string;
      philosophyImage?: string;
    };
  };
}

const offerings = [
  {
    title: 'Regelmäßige Meditation in Frankfurt-Bornheim',
    description: 'Regelmäßige Treffen, um die Praxis der Meditation zu vertiefen und innere Ruhe zu finden.',
    href: '/meditationstermine-in-frankfurt/',
  },
  {
    title: 'Resilienzworkshops für Unternehmen',
    description: 'Förderung des Wohlbefindens und der Produktivität der Mitarbeitenden durch maßgeschneiderte Achtsamkeitserfahrungen.',
    href: '/resilienz-training-fuer-unternehmen/',
  },
  {
    title: 'Achtsamkeitserlebnisse im Rhein-Main-Gebiet',
    description: 'Entdecke besondere Achtsamkeitsangebote, die dir helfen, im Alltag bewusster und gelassener zu sein.',
    href: '/meditationstermine-in-frankfurt/',
  },
  {
    title: 'Achtsamkeitsbasiertes Coaching',
    description: 'Professionelles Coaching, das klassische Coaching-Methoden mit Achtsamkeitstechniken kombiniert, um Klarheit zu schaffen und persönliche oder berufliche Ziele zu erreichen.',
    href: '/persoenlichkeits-coaching-in-frankfurt/',
  },
];

const philosophy = [
  {
    title: 'Konfessionslose Meditation',
    description: 'Mein Ziel ist es, dir zu helfen, im Moment anzukommen und die innere Stille in dir zu hören.',
  },
  {
    title: 'Vielfältige Einflüsse',
    description: 'Ich integriere verschiedene Meditationsansätze, die mir selbst geholfen haben, um eine abwechslungsreiche und ganzheitliche Praxis zu schaffen.',
  },
  {
    title: 'Achtsamkeit und Bewusstsein',
    description: 'Ich möchte dich darin unterstützen, durch Achtsamkeit mehr Bewusstsein für deine inneren Prozesse zu entwickeln und Handlungsfreiheit statt automatische Reaktionen zu erlangen.',
  },
  {
    title: 'Herzensverbindung',
    description: 'Besonders wichtig ist mir die Meditation, die dich mit deinem Herzen verbindet und deine eigene Herzensenergie stärkt.',
  },
];

const testimonials = [
  {
    quote: 'Ich hatte das Vergnügen, an einem Achtsamkeitstraining mit Holm im Business-Kontext teilzunehmen – und es war eine durchweg bereichernde Erfahrung. Die Inhalte waren praxisnah, gut strukturiert und gleichzeitig tiefgehend – ideal abgestimmt auf die Herausforderungen im Berufsalltag.',
    author: 'Maximilian B.',
    initials: 'MB',
  },
  {
    quote: 'Die Meditation mit Holm ist eines der Highlights meiner Woche.',
    author: 'Sonja B.',
    initials: 'SB',
  },
  {
    quote: "Holms Meditationsabende sind für mich wohltuender Ruhepool im Alltagstrubel und wichtige Ankerpunkte meiner Meditationsroutine.",
    author: 'Ulli B.',
    initials: 'UB',
  },
];

const articleCards = [
  {
    href: '/meditation-schluesssel-zur-gelassenheit/',
    image: '/images/meditation-wissenswertes.jpg',
    title: 'Der Schlüssel zu Gelassenheit: Was du über Meditation wissen solltest.',
  },
  {
    href: '/meditationstechniken-leitfaden-effektivste-meditationsmethoden/',
    image: '/images/meditationstechniken.jpg',
    title: 'Meditationstechniken: Ein Leitfaden zu den effektivsten Methoden',
  },
  {
    href: '/moegliche-gefahren-von-achtsamkeit-und-meditation/',
    image: '/images/related-gefahren.jpg',
    title: 'Mögliche Gefahren von Achtsamkeit und Meditation',
  },
  {
    href: '/faq-einsteigertipps-zur-meditation/',
    image: '/images/meditation-einsteigerfragen-faq.jpg',
    title: 'FAQ & Einsteigertipps zur Meditation',
  },
];

export function HomePage({ frontmatter }: HomePageProps) {
  const philosophyImage = frontmatter.images?.philosophyImage || '/images/coaching-portrait.jpg';
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <BaseLayout>

      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mediation-fuer-firmen.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/90 via-[#0e0b09]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b09]/50 via-transparent to-transparent" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-14 md:pb-20">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold text-white backdrop-blur-sm mb-8 block w-fit">
            Frankfurt · Meditation · Achtsamkeit · Coaching
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tight mb-10 max-w-3xl">
            Zur Stille<br />finden.
          </h1>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Coaching', href: '/meine-coaching-philosophie/' },
              { label: 'Resilienz-Training', href: '/resilienz-training-fuer-unternehmen/' },
              { label: 'Achtsamkeits-Training', href: '/achtsamkeitstraining-fuer-unternehmen/' },
              { label: 'Meditations-Training', href: '/meditationstermine-in-frankfurt/' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full bg-[#E8913A] hover:bg-[#d4822f] px-6 py-3.5 text-white font-semibold text-base md:text-lg tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEIN ANGEBOT ── */}
      <section className="py-24 md:py-32 bg-[#FDFBF8]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Double-Bezel portrait */}
            <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50 order-2 lg:order-1">
              <div
                className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.12)' }}
              >
                <Image
                  src="/images/20231012_164945-scaled.jpg"
                  alt="Holm Zickermann – Meditation und Achtsamkeit in Frankfurt"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Offerings list */}
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center rounded-full border border-stone-200 px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-6">
                Mein Angebot
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1410] font-normal leading-tight mb-12">
                Was ich für<br />dich tun kann.
              </h2>
              <ul className="space-y-8">
                {offerings.map((offering, index) => (
                  <li key={index}>
                    <Link href={offering.href} className="group flex items-start gap-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8913A]/10 flex items-center justify-center mt-0.5 transition-colors duration-300 group-hover:bg-[#E8913A]/20">
                        <span className="text-[11px] font-bold text-[#E8913A]">{String(index + 1).padStart(2, '0')}</span>
                      </span>
                      <div className="border-b border-stone-100 pb-8 flex-1 last:border-0 last:pb-0">
                        <h3 className="font-semibold text-[#1C1410] text-base mb-1.5 transition-colors duration-300 group-hover:text-[#E8913A]">
                          {offering.title}
                        </h3>
                        <p className="text-stone-500 text-[15px] leading-relaxed">
                          {offering.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── WISSENSWERTES ── */}
      <section className="py-24 md:py-32 bg-[#1C1410]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/40 block mb-4">
                Meditationswissen
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight">
                Wissenswertes<br />über Meditation
              </h2>
            </div>
            <Link
              href="/meditationswissen/"
              className="hidden md:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-semibold text-[#E8913A] hover:text-white transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Alle Artikel
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {articleCards.map((card, index) => (
              <Link key={index} href={card.href} className="group block">
                <div className="p-1.5 rounded-[1.5rem] ring-1 ring-white/8 bg-white/[0.03] mb-4">
                  <div className="relative aspect-[4/3] rounded-[calc(1.5rem-0.375rem)] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <h3 className="font-serif text-white/85 text-base leading-snug px-1 transition-colors duration-300 group-hover:text-[#E8913A]">
                  {card.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              href="/meditationswissen/"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8913A] px-6 py-3 text-white font-semibold text-sm tracking-wide"
            >
              Alle Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEINE PHILOSOPHIE ── */}
      <section className="py-24 md:py-32 bg-[#FDFBF8]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-start">

            {/* Double-Bezel image */}
            <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50 lg:sticky lg:top-28">
              <div
                className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.12)' }}
              >
                <Image
                  src={philosophyImage}
                  alt="Holm Zickermann – Meine Philosophie"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Philosophy items */}
            <div className="pt-2">
              <span className="inline-flex items-center rounded-full border border-stone-200 px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-400 mb-6">
                Meine Philosophie
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1C1410] font-normal leading-tight mb-14">
                Was mich antreibt.
              </h2>
              <div className="space-y-0">
                {philosophy.map((item, index) => (
                  <div key={index} className="flex gap-6 pb-10 mb-10 border-b border-stone-100 last:border-0 last:mb-0 last:pb-0">
                    <span className="flex-shrink-0 text-[11px] font-bold text-[#E8913A] tracking-[0.08em] mt-1.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-[#1C1410] mb-3 font-normal">{item.title}</h3>
                      <p className="text-stone-500 leading-relaxed text-[15px]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/meine-philosophie-beim-meditieren/"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
                >
                  Mehr über meine Philosophie
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#1C1410]">
        <div className="max-w-[1400px] mx-auto px-4">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-white/40 block mb-4 text-center">
            Stimmen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-normal text-center mb-16">
            Was sagen die Teilnehmer?
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* Quote */}
            <div className="relative text-center min-h-[180px] flex flex-col items-center justify-center">
              <p className="font-serif text-xl md:text-2xl text-white/80 italic leading-relaxed mb-10">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E8913A]/20 border border-[#E8913A]/30 flex items-center justify-center">
                  <span className="text-[#E8913A] font-semibold text-xs">
                    {testimonials[currentTestimonial].initials}
                  </span>
                </div>
                <span className="text-[#E8913A] font-semibold text-sm tracking-wide uppercase">
                  {testimonials[currentTestimonial].author}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-5 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                aria-label="Vorheriges Testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === currentTestimonial ? 'bg-[#E8913A] w-5' : 'bg-white/20'}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                aria-label="Nächstes Testimonial"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/rueckmeldungen/"
                className="text-[12px] uppercase tracking-[0.16em] font-semibold text-white/40 hover:text-[#E8913A] transition-colors duration-300"
              >
                Alle Rückmeldungen lesen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 md:py-32 bg-[#E8913A]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold text-white mb-8">
              Newsletter
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight mb-4">
              Kein Kurs,<br />kein Termin verpassen.
            </h2>
            <p className="text-white/75 text-base mb-12 leading-relaxed">
              Melde dich für den Newsletter an, um keinen Meditations- und Achtsamkeitskurs zu verpassen.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Vorname"
                  className="w-full px-5 py-3.5 bg-white/20 border border-white/30 rounded-full text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/30 transition-colors duration-300"
                />
                <input
                  type="text"
                  placeholder="Nachname"
                  className="w-full px-5 py-3.5 bg-white/20 border border-white/30 rounded-full text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/30 transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="E-Mail-Adresse"
                  className="w-full px-5 py-3.5 bg-white/20 border border-white/30 rounded-full text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/30 transition-colors duration-300"
                />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 flex-shrink-0 accent-white" />
                <label htmlFor="consent" className="text-white/70 text-sm leading-relaxed">
                  Ich stimme zu, dass meine übermittelten Daten erfasst und gespeichert werden.
                </label>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[#1C1410] font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-stone-100 active:scale-[0.98]"
                >
                  Jetzt abonnieren
                  <span className="w-8 h-8 rounded-full bg-[#E8913A]/15 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                    <svg className="w-4 h-4 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </BaseLayout>
  );
}

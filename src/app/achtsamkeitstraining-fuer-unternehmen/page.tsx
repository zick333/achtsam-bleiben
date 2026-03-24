'use client';

import { useEffect } from 'react';
import { BaseLayout } from '@/components/BaseLayout';
import Image from 'next/image';
import Link from 'next/link';

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => el.classList.add('animate-ready'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const nutzen = [
  {
    num: '01',
    label: 'Gesundheit',
    title: 'Stressreduktion',
    text: 'Regelmäßige Achtsamkeitspraxis senkt Cortisolspiegel und Herzfrequenzvariabilität – das reduziert Fehlzeiten und Burnout-Risiko messbar.',
  },
  {
    num: '02',
    label: 'Fokus',
    title: 'Produktivitätsschub',
    text: 'Klarer Fokus steigert die Deep-Work-Quote: Weniger Task-Switching, mehr qualitatives Ergebnis in kürzerer Zeit.',
  },
  {
    num: '03',
    label: 'Führung',
    title: 'Bessere Entscheidungsqualität',
    text: 'Wer innehalten kann, reagiert weniger impulsiv und wägt Optionen bewusster ab – ein Plus für Leadership und Projektsteuerung.',
  },
  {
    num: '04',
    label: 'Team',
    title: 'Gesunde Teamkultur',
    text: 'Achtsame Kommunikation fördert Empathie, Vertrauen und psychologische Sicherheit – Basis jeder agilen Zusammenarbeit.',
  },
  {
    num: '05',
    label: 'Recruiting',
    title: 'Employer Branding',
    text: 'Moderne Mindfulness-Programme gelten als attraktive Benefits, stärken die Mitarbeiterbindung und verbessern das Recruiting.',
  },
];

const zielgruppen = [
  {
    category: 'Führungskräfte',
    items: [
      'Präsenz und Klarheit im Alltag',
      'Weniger reaktives Handeln',
      'Fokussierte Entscheidungen',
      'Achtsame Führungskultur',
    ],
  },
  {
    category: 'Projekt­teams',
    items: [
      'Konzentration unter Druck',
      'Bewusste Priorisierung',
      'Resilienz in Stressspitzen',
      'Teamkohäsion stärken',
    ],
  },
  {
    category: 'HR & People',
    items: [
      'Gesundheitsprogramme gestalten',
      'Burnout-Prävention verankern',
      'Employer Branding stärken',
      'Psychologische Sicherheit',
    ],
  },
  {
    category: 'Alle Mitarbeitenden',
    items: [
      'Stressoren früh erkennen',
      'Mentale Pausen bewusst nutzen',
      'E-Mail-Flut gelassener begegnen',
      'Innere Ruhe im Arbeitsalltag',
    ],
  },
];

export default function AchtsamkeitstrainingPage() {
  useScrollReveal();

  return (
    <BaseLayout>

      {/* ── HERO ── */}
      <section className="relative min-h-[85dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mediation-fuer-firmen.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/90 via-[#0e0b09]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b09]/60 via-transparent to-transparent" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-16 md:pb-24">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[13px] uppercase tracking-[0.14em] font-semibold text-white/70 backdrop-blur-sm">
              Für Unternehmen · Frankfurt
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Achtsamkeits-<br />Training
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Mentale Präsenz für Teams und Führungskräfte —
            alltagstauglich, messbar wirksam, nachhaltig verankert.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Achtsamkeitstraining für Unternehmen
          </p>
        </div>
      </section>

      {/* ── PORTRAIT + INTRO ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="reveal">
              <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50">
                <div className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.12)' }}>
                  <Image
                    src="/images/coaching-portrait.jpg"
                    alt="Holm Zickermann – Achtsamkeitstrainer und Coach in Frankfurt"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="reveal reveal-delay-1">
                <span className="inline-flex items-center rounded-full border border-[#E8913A]/30 bg-[#E8913A]/5 px-3 py-1 text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-5">
                  Achtsamkeit im Arbeitsalltag
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Permanent wechselnde Prioritäten, E-Mail-Flut und Termindruck lassen wenig
                  Raum für bewusste Pausen. Achtsamkeitstraining schult genau diese mentale
                  Präsenz: Mitarbeitende lernen, den Moment wahrzunehmen, Stressoren früh
                  zu erkennen und zielgerichtet gegenzusteuern.
                </p>
              </div>

              <div className="reveal reveal-delay-2">
                <div className="relative pl-7 border-l-2 border-[#E8913A]">
                  <p className="font-serif text-2xl md:text-3xl italic text-[#1C1410] leading-snug mb-4">
                    „Das Ergebnis sind höhere Konzentration, gelassenere Abläufe und eine resilientere Unternehmenskultur."
                  </p>
                  <cite className="not-italic text-[11px] tracking-[0.15em] uppercase text-stone-400 font-medium">
                    — Holm Zickermann
                  </cite>
                </div>
              </div>

              <div className="reveal reveal-delay-3 grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                {[
                  { value: '15+', label: 'Jahre Praxis' },
                  { value: 'GPM', label: 'Zertifiziert' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-3xl text-[#1C1410] mb-1">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 01: Mein Ansatz ── */}
      <section className="py-24 md:py-32 bg-white border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-6xl leading-none text-[#1C1410] opacity-[0.06] select-none">01</span>
                <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A]">Ansatz</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1410] mb-6 leading-tight">
                Was ist mein Ansatz?
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Als Projektleiter großer Unternehmensvorhaben kenne ich Vorstandsetagen
                  ebenso gut wie den operativen Arbeitsalltag. Diese Erfahrung verbinde ich
                  mit langjähriger Achtsamkeitspraxis und zertifiziertem Coaching-Know-how.
                </p>
                <p>
                  Das Ergebnis: ein praxisnahes Achtsamkeitstraining, das bewährte
                  Business-Methoden mit alltagstauglichen Mindfulness-Übungen verwebt.
                  Ihre Mitarbeiter*innen lernen, den Moment bewusst wahrzunehmen, innere
                  und äußere Reize klar zu unterscheiden und so fokussierter, gelassener
                  und wirkungsvoller zu handeln.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="p-2 rounded-[1.5rem] ring-1 ring-black/5 bg-stone-50">
                <div className="relative aspect-[3/4] rounded-[calc(1.5rem-0.5rem)] overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 16px 48px rgba(14,11,9,0.10)' }}>
                  <Image
                    src="/images/we1-scaled.jpg"
                    alt="Holm Zickermann – Achtsamkeitstrainer in Frankfurt"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm font-medium">Praxisnah & nachhaltig</p>
                    <p className="text-white/60 text-xs tracking-wide">Business-Erfahrung trifft Achtsamkeitspraxis</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-20 md:py-24 bg-stone-50 border-y border-stone-100">
        <div className="reveal max-w-3xl mx-auto px-4 text-center">
          <span className="block w-8 h-px bg-[#E8913A] mx-auto mb-8" />
          <p className="font-serif text-2xl md:text-4xl italic text-[#1C1410] leading-snug mb-6"
            style={{ textWrap: 'balance' } as React.CSSProperties}>
            „Achtsamkeit ist keine Technik – sie ist eine Haltung, die man im Alltag kultivieren kann."
          </p>
          <span className="block w-8 h-px bg-[#E8913A] mx-auto" />
        </div>
      </section>

      {/* ── SECTION 02: Nutzen (numbered) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="reveal mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-6xl leading-none text-[#1C1410] opacity-[0.06] select-none">02</span>
              <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A]">Nutzen</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1410] leading-tight">
              Ist es sinnvoll für Unternehmen?
            </h2>
          </div>
          <div className="space-y-16">
            {nutzen.map((section, i) => (
              <div
                key={section.num}
                className={`reveal reveal-delay-${(i % 3) + 1} grid grid-cols-[auto_1fr] gap-8 items-start`}
              >
                <div className="pt-1 select-none w-14">
                  <span className="font-serif text-5xl text-[#1C1410] opacity-[0.10] leading-none">{section.num}</span>
                </div>
                <div>
                  <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-2">
                    {section.label}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1C1410] mb-4 leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{section.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZIELGRUPPEN (dark, 4-col) ── */}
      <section className="py-24 md:py-32 bg-[#1C1410]">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="reveal mb-16">
            <span className="inline-flex items-center rounded-full border border-[#E8913A]/40 bg-[#E8913A]/10 px-3 py-1 text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-5">
              Zielgruppen
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Für wen ist es geeignet?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-white/5">
            {zielgruppen.map((block, i) => (
              <div
                key={block.category}
                className={`reveal reveal-delay-${(i % 4) + 1} bg-[#1C1410] p-8 md:p-10`}
              >
                <h3 className="font-serif text-2xl md:text-3xl text-[#E8913A] mb-6 leading-tight">
                  {block.category}
                </h3>
                <ul className="space-y-4">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-[#E8913A]/50 flex-shrink-0" />
                      <span className="text-white/70 text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/meditation-hintergrundbild1.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14,11,9,0.82)' }} />

        <div className="relative max-w-[1400px] mx-auto px-4 text-center">
          <div className="reveal">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[13px] uppercase tracking-[0.14em] font-semibold text-white mb-8">
              Ich möchte mehr wissen
            </span>
            <p className="font-serif text-3xl md:text-5xl italic text-white leading-snug mb-4 max-w-2xl mx-auto"
              style={{ textWrap: 'balance' } as React.CSSProperties}>
              Gemeinsam entwickeln wir ein Training, das zu Ihrem Unternehmen passt.
            </p>
            <p className="text-white/75 text-base mb-12 tracking-wide max-w-md mx-auto leading-relaxed">
              Schreiben Sie mir – ich freue mich auf den Austausch.
            </p>
            <Link
              href="/kontakt/"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
            >
              Kontakt aufnehmen
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

    </BaseLayout>
  );
}

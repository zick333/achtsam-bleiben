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

const ablauf = [
  {
    num: '01',
    label: 'Start',
    title: 'Kick-off & Zielklärung',
    text: 'Wir definieren gemeinsam, was Resilienz für dich bedeutet und welche konkreten Ergebnisse du anstrebst. Ein ehrlicher Blick auf die Ausgangssituation.',
  },
  {
    num: '02',
    label: 'Analyse',
    title: 'Stress- & Ressourcen-Analyse',
    text: 'Mithilfe von Fragebögen und achtsamen Check-ins machen wir deine Stressquellen sichtbar – und gleichzeitig die Ressourcen, die du bereits mitbringst.',
  },
  {
    num: '03',
    label: 'Methodik',
    title: 'Methoden-Mix',
    text: 'Emotionsregulation, Wertearbeit, Atem- und Körperübungen, Cognitive Reframing. Jede Session ist individuell auf dich zugeschnitten.',
  },
  {
    num: '04',
    label: 'Praxis',
    title: 'Praxis-Phase',
    text: 'Du testest neue Strategien im Alltag. Was funktioniert, was nicht? Im nächsten Coaching justieren wir gemeinsam nach – pragmatisch und wirksam.',
  },
  {
    num: '05',
    label: 'Transfer',
    title: 'Review & Transfer',
    text: 'Fortschritte werden sichtbar gemacht und gefeiert. Wir legen die nächsten Entwicklungsschritte fest, damit das Gelernte dauerhaft trägt.',
  },
];

const zielgruppen = [
  {
    category: 'Führungskräfte',
    items: [
      'Hohe Belastung souverän meistern',
      'Klar bleiben in Entscheidungsdruck',
      'Vorbild für Resilienzkultur',
      'Stabile Energie im Alltag',
    ],
  },
  {
    category: 'Selbstständige',
    items: [
      'Krisen als Wachstumsmotor nutzen',
      'Unsicherheit als Begleiter akzeptieren',
      'Selbstfürsorge ohne Schuldgefühle',
      'Fokus in eigenen Projekten halten',
    ],
  },
  {
    category: 'Care & Lehrende',
    items: [
      'Emotional nah am Menschen arbeiten',
      'Abgrenzung ohne Kälte',
      'Mitgefühl ohne Erschöpfung',
      'Ressourcen langfristig erhalten',
    ],
  },
  {
    category: 'Burnout-Prävention',
    items: [
      'Frühwarnsignale erkennen',
      'Stressreaktionen regulieren',
      'Stresskompetenz aufbauen',
      'Innere Ruhe als Fundament',
    ],
  },
];

export default function ResilienzCoachingPage() {
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
              Coaching · Frankfurt
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Resilienz-<br />Coaching
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Innere Widerstandskraft aufbauen — handlungsfähig, klar und gelassen
            auch in stürmischen Zeiten.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Resilienz-Coaching in Frankfurt
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
                    src="/images/meditation-frankfurt-1.jpg"
                    alt="Holm Zickermann – Resilienz-Coach in Frankfurt"
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
                  Was ist das?
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Resilienz-Coaching stärkt deine innere Widerstandskraft, damit du auch in
                  stürmischen Zeiten handlungsfähig, klar und gelassen bleibst. Wir
                  verknüpfen fundierte Coaching-Methoden mit Achtsamkeits- und
                  Körperübungen, damit Geist, Gefühle und Nervensystem gemeinsam in
                  Balance kommen.
                </p>
              </div>

              <div className="reveal reveal-delay-2">
                <div className="relative pl-7 border-l-2 border-[#E8913A]">
                  <p className="font-serif text-2xl md:text-3xl italic text-[#1C1410] leading-snug mb-4">
                    „Du lernst, Stress schneller abzubauen, Rückschläge als Lernchance zu nutzen und mit mehr Leichtigkeit voranzugehen."
                  </p>
                  <cite className="not-italic text-[11px] tracking-[0.15em] uppercase text-stone-400 font-medium">
                    — Holm Zickermann
                  </cite>
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
            „Resilienz bedeutet nicht, unberührbar zu sein — sondern immer wieder aufzustehen."
          </p>
          <span className="block w-8 h-px bg-[#E8913A] mx-auto" />
        </div>
      </section>

      {/* ── ABLAUF (numbered) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="reveal mb-16">
            <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-4">
              Prozess
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1410] leading-tight">
              Wie ist der Ablauf?
            </h2>
          </div>
          <div className="space-y-16">
            {ablauf.map((section, i) => (
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

      {/* ── WARUM (dark, 5 items as 2+3 grid) ── */}
      <section className="py-24 md:py-32 bg-[#1C1410]">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="reveal mb-16">
            <span className="inline-flex items-center rounded-full border border-[#E8913A]/40 bg-[#E8913A]/10 px-3 py-1 text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-5">
              Warum?
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Was du gewinnst
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5">
            {[
              {
                title: 'Schnellerer Stressabbau',
                text: 'Sofort anwendbare Techniken, die du im Alltag einsetzt — nicht erst wenn es zu spät ist.',
              },
              {
                title: 'Klarer Kopf',
                text: 'In Entscheidungs- und Konfliktsituationen behältst du den Überblick und handelst bedacht.',
              },
              {
                title: 'Stabile Energie',
                text: 'Kein ständiges Auf und Ab mehr. Du entwickelst eine gleichmäßigere, tragfähige Kraft.',
              },
              {
                title: 'Mehr Lebensfreude',
                text: 'Gestärkte Selbstfürsorge schafft Raum für das, was dir wirklich wichtig ist.',
              },
              {
                title: 'Langfristige Gesundheit',
                text: 'Achtsamer Umgang mit Körper und Geist schützt dich nachhaltig vor Überlastung.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-[#1C1410] p-8 md:p-10`}
              >
                <h3 className="font-serif text-2xl md:text-3xl text-[#E8913A] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
            {/* Filler to prevent empty grid cell showing bg-white/5 */}
            <div className="hidden xl:block bg-[#1C1410]" />
          </div>

        </div>
      </section>

      {/* ── ZIELGRUPPEN (dark, 4-col) ── */}
      <section className="py-24 md:py-32 bg-[#1C1410] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="reveal mb-16">
            <span className="inline-flex items-center rounded-full border border-[#E8913A]/40 bg-[#E8913A]/10 px-3 py-1 text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-5">
              Zielgruppen
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Ist es etwas für mich?
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
              Erstgespräch
            </span>
            <p className="font-serif text-3xl md:text-5xl italic text-white leading-snug mb-4 max-w-2xl mx-auto"
              style={{ textWrap: 'balance' } as React.CSSProperties}>
              Bereit, Herausforderungen in Chancen zu verwandeln?
            </p>
            <p className="text-white/75 text-base mb-12 tracking-wide max-w-md mx-auto leading-relaxed">
              Unverbindliches Kennenlerngespräch — ich melde mich zeitnah bei dir.
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

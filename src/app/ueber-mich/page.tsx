'use client';

import { useEffect } from 'react';
import { BaseLayout } from '@/components/BaseLayout';
import Image from 'next/image';
import Link from 'next/link';

function useScrollReveal() {
  useEffect(() => {
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
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const credentials = [
  {
    category: 'Meditation & Achtsamkeit',
    items: [
      'Vipassana-Meditationslehrer',
      '„Mut zur Stille"-Kurs',
      '„Offenes Herz – Weiter Raum"-Kurs',
      '„Achtsamkeit als Therapie"',
      'Mehrere Schweige- und Meditationsretreats',
    ],
  },
  {
    category: 'Coaching',
    items: [
      'Svaveda-Coachingausbildung',
      'Szenisches Hakomi I und II',
      'Hakomi „Der wesentliche Moment"',
      'Hakomi „Loving Presence"',
      'Hakomi Processing und Körperlesen',
    ],
  },
  {
    category: 'Selbsterfahrung',
    items: [
      'Heldenreise',
      "Lover's Journey",
      'Family Circles',
      'Begegnungen mit dem inneren Kind',
    ],
  },
  {
    category: 'Beruflich',
    items: [
      'Zertifizierter Projektmanager GPM Level C',
      'Erfolgreich führen im Projekt',
      'SAFe Program Consultant',
      'Verschiedene Kommunikationstrainings',
    ],
  },
];

export default function UeberMichPage() {
  useScrollReveal();

  return (
    <BaseLayout>

      {/* ── HERO: Editorial Split ── */}
      <section className="relative min-h-[85dvh] flex items-end overflow-hidden">

        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/meditation-hintergrundbild1.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Sophisticated layered overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/90 via-[#0e0b09]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b09]/60 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-16 md:pb-24">

          {/* Eyebrow badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-white/70 backdrop-blur-sm">
              Meditationslehrer & Coach · Frankfurt
            </span>
          </div>

          {/* Massive serif headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}>
            Holm<br />Zicker&shy;mann
          </h1>

          {/* Intro line + breadcrumb */}
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Über 15 Jahre Erfahrung in Meditation, Achtsamkeit und Coaching —
            mit dem Ziel, innere Ruhe und Klarheit weiterzugeben.
          </p>

          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Über mich
          </p>
        </div>
      </section>

      {/* ── PORTRAIT + QUOTE: Double-Bezel ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Double-Bezel Portrait */}
            <div className="reveal">
              {/* Outer shell */}
              <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50">
                {/* Inner core */}
                <div className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.12)' }}>
                  <Image
                    src="/images/20231012_164945-scaled.jpg"
                    alt="Holm Zickermann – Meditationslehrer und Coach in Frankfurt"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text + Quote */}
            <div className="flex flex-col gap-8">

              <div className="reveal reveal-delay-1">
                <span className="inline-flex items-center rounded-full border border-[#E8913A]/30 bg-[#E8913A]/8 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8913A] mb-5">
                  Über mich
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Meditation und Achtsamkeit begleiten mich nun seit über 15 Jahren und haben
                  mein Leben auf tiefgreifende Weise bereichert. Was als erste intensive Begegnung
                  Anfang 2008 in Thailand begann, hat sich zu einer tiefen und erfüllenden Praxis
                  entwickelt — die mich sowohl privat als auch beruflich prägt.
                </p>
              </div>

              {/* Quote — editorial treatment */}
              <div className="reveal reveal-delay-2">
                <div className="relative pl-7 border-l-2 border-[#E8913A]">
                  <p className="font-serif text-2xl md:text-3xl italic text-[#1C1410] leading-snug mb-4"
                    style={{ textWrap: 'balance' } as React.CSSProperties}>
                    „Es ist schwer das Glück in uns zu finden, aber es ist ganz unmöglich,
                    es woanders zu finden."
                  </p>
                  <cite className="not-italic text-[11px] tracking-[0.15em] uppercase text-stone-400 font-medium">
                    — Nicolas Chamfort
                  </cite>
                </div>
              </div>

              {/* Stats row */}
              <div className="reveal reveal-delay-3 grid grid-cols-3 gap-4 pt-4 border-t border-stone-100">
                {[
                  { value: '15+', label: 'Jahre Praxis' },
                  { value: '200+', label: 'Tage Retreats' },
                  { value: '∞', label: 'Innere Stille' },
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

      {/* ── JOURNEY SECTIONS ── */}
      <section className="py-24 md:py-32 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 space-y-20">

          {[
            {
              title: 'Mein Weg zur Meditation',
              paragraphs: [
                'Meine Meditationsreise begann 2008, als ich das erste Mal über mehrere Tage intensiv meditierte. Heute bin ich selbst Meditationslehrer und gebe mein Wissen weiter. Besonders inspiriert hat mich dabei meine Meditationslehrerin Mae Chee Brigitte — eine Österreicherin, die als buddhistische Nonne seit über 30 Jahren in Thailand lebt und für ihre Arbeit von der UN und dem thailändischen Königshaus geehrt wurde.',
                'Ich durfte Retreats auf der ganzen Welt besuchen — von Thailand über Mexiko bis nach Spanien, Frankreich und Deutschland. Über die Jahre habe ich mehr als 200 Tage in Retreats verbracht und biete heute wöchentliche Meditationsabende in Frankfurt-Bornheim an.',
              ],
            },
            {
              title: 'Meditation als tägliche Praxis',
              paragraphs: [
                'Auch wenn Meditation für mich heute die Basis meines Alltags ist, war das nicht immer so. Es hat Jahre gedauert, bis ich die Disziplin und Klarheit fand, sie in meinen Alltag zu integrieren. Diese tägliche Praxis hilft mir, achtsamer zu leben, meine eigenen Grenzen zu respektieren und die Signale meines Körpers wahrzunehmen.',
              ],
            },
            {
              title: 'Offenheit und Neugier',
              paragraphs: [
                'Ich habe das Glück, in meinem Leben viele besondere Menschen kennenzulernen, die meine Perspektiven erweitern und mir immer wieder neue Inspiration schenken. Diese Offenheit und Neugier prägen auch meine eigene Entwicklung — ich lerne gerne und bin überzeugt davon, dass jeder Moment eine neue Erkenntnis mit sich bringen kann.',
              ],
            },
            {
              title: 'Beruflicher Hintergrund',
              paragraphs: [
                'Beruflich verbinde ich meine langjährige Erfahrung im Management mit meiner Meditationspraxis. Nach meinem BWL-Studium arbeite ich seit vielen Jahren im Projektmanagement eines Großunternehmens — mit Kontakt zu allen Managementebenen. Diese Verbindung ermöglicht es mir, Menschen auf allen Ebenen dabei zu unterstützen, achtsamer zu arbeiten und eine bessere Balance zu finden.',
              ],
            },
            {
              title: 'Persönliches',
              paragraphs: [
                'Neben der Meditation verbringe ich gerne Zeit in der Natur, praktiziere Yoga und treibe regelmäßig Sport. Diese Aktivitäten helfen mir, geerdet zu bleiben und mich immer wieder mit mir selbst zu verbinden.',
              ],
            },
          ].map((section) => (
            <div key={section.title} className="reveal">
              <h2 className="font-serif text-2xl md:text-3xl text-[#1C1410] mb-5 leading-tight">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ── CREDENTIALS: Premium Grid ── */}
      <section className="py-24 md:py-32 bg-white border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="reveal mb-16 text-center">
            <span className="inline-flex items-center rounded-full border border-[#E8913A]/30 bg-[#E8913A]/8 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#E8913A] mb-4">
              Qualifikationen
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1410] leading-tight">
              Aus- und Weiterbildung
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {credentials.map((block, i) => (
              <div
                key={block.category}
                className={`reveal reveal-delay-${(i % 4) + 1}`}
              >
                {/* Double-bezel credential card */}
                <div className="p-1.5 rounded-[1.5rem] ring-1 ring-black/5 bg-stone-50 h-full">
                  <div className="rounded-[calc(1.5rem-0.375rem)] bg-white px-7 py-6 h-full"
                    style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)' }}>
                    <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#E8913A] mb-5">
                      {block.category}
                    </p>
                    <ul className="space-y-3">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-600 text-[15px] leading-snug">
                          <span className="mt-[6px] w-1 h-1 rounded-full bg-stone-300 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-white border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <div className="reveal">
            <p className="font-serif text-2xl md:text-3xl italic text-[#1C1410] mb-3 leading-snug">
              Ich freue mich darauf, dich auf deinem Weg zu begleiten.
            </p>
            <p className="text-stone-400 text-sm mb-10">
              Nimm einfach Kontakt auf — ich melde mich zeitnah bei dir.
            </p>

            {/* Button-in-Button pattern */}
            <Link
              href="/kontakt/"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-6 py-3.5 text-white font-medium text-sm tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
            >
              Kontakt aufnehmen
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

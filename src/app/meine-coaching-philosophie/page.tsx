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

const prinzipien = [
  {
    num: '01',
    label: 'Achtsamkeit',
    title: 'Achtsamkeitsbasiertes Coaching',
    text: 'Achtsamkeit ist der rote Faden meiner Arbeit: Wir üben, den gegenwärtigen Moment wertfrei wahrzunehmen, innere Muster zu erkennen und dadurch neue Handlungsoptionen zu entdecken. Kurze Atem- oder Body-Scan-Sequenzen dienen als Anker, um aus dem Gedankenkarussell auszusteigen und den Blick auf das Wesentliche zu richten.',
  },
  {
    num: '02',
    label: 'Ganzheitlichkeit',
    title: 'Ganzheitlicher Blick',
    text: 'Persönliche oder berufliche Herausforderungen betreffen selten nur einen Lebensbereich. Deshalb schauen wir auf alle Ebenen – Gedanken, Emotionen, Körperempfinden und Umfeld. Durch diesen 360°-Blick erkennst du Wechselwirkungen und kannst nachhaltige Veränderungen anstoßen.',
  },
  {
    num: '03',
    label: 'Präsenz',
    title: 'Präsenz & Bewusstheit als Schlüssel',
    text: 'Statt Probleme endlos zu analysieren, üben wir, präsent zu sein: Beobachten, was gerade wirklich passiert. Benennen, ohne zu bewerten. Bewusst wählen, welcher nächste Schritt sinnvoll ist. Diese drei Schritte machen dein Handeln klarer und fokussierter.',
  },
  {
    num: '04',
    label: 'Mitgefühl',
    title: 'Herz & Mitgefühl',
    text: 'Effektives Coaching geschieht nicht nur im Kopf. Durch gezielte Herz-Fokus-Übungen kultivieren wir Selbstmitgefühl und Empathie – wichtige Voraussetzungen, um authentische Beziehungen zu führen und Konflikte konstruktiv zu lösen.',
  },
  {
    num: '05',
    label: 'Offenheit',
    title: 'Konfessionsunabhängig & offen',
    text: 'Wie in meiner Meditationspraxis steht auch im Coaching kein bestimmtes Glaubenssystem im Vordergrund. Die Übungen sind so angelegt, dass sie zu jedem Weltbild passen. Entscheidend bist du: deine Erfahrungen, Werte und Visionen.',
  },
  {
    num: '06',
    label: 'Vertrauen',
    title: 'Ein sicherer Raum',
    text: 'Vertraulichkeit, Respekt und klare Vereinbarungen sind in allen Coaching-Formaten selbstverständlich. Authentizität wird geschätzt, die Eigenverantwortung des Klienten als Experte seines eigenen Lebens stets gefördert.',
  },
];

export default function CoachingPhilosophiePage() {
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
            Coaching-<br />Philosophie
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Klarheit schaffen, Ziele formulieren, Schritt für Schritt umsetzen —
            mit Kopf, Herz und Körper.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Meine Coaching-Philosophie
          </p>
        </div>
      </section>

      {/* ── VIKTOR FRANKL QUOTE ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="reveal">
              <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50">
                <div className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.12)' }}>
                  <Image
                    src="/images/viktor-frankl.png"
                    alt="Viktor E. Frankl"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm font-medium">Viktor E. Frankl</p>
                    <p className="text-white/60 text-xs tracking-wide">Psychiater & Philosoph · 1905–1997</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="reveal reveal-delay-1">
                <span className="inline-flex items-center rounded-full border border-[#E8913A]/30 bg-[#E8913A]/5 px-3 py-1 text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-5">
                  Leitgedanke
                </span>
                <div className="relative pl-7 border-l-2 border-[#E8913A]">
                  <p className="font-serif text-2xl md:text-3xl italic text-[#1C1410] leading-snug mb-4">
                    „Zwischen Reiz und Reaktion liegt ein Raum. In diesem Raum liegt unsere Macht zur Wahl unserer Reaktion."
                  </p>
                  <cite className="not-italic text-[11px] tracking-[0.15em] uppercase text-stone-400 font-medium">
                    — Viktor E. Frankl
                  </cite>
                </div>
              </div>

              <div className="reveal reveal-delay-2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Diesen Raum bewusst zu gestalten — das ist der Kern meines Coaching-Ansatzes.
                  Ich verbinde klassische Coaching-Tools mit achtsamkeitsbasierten Methoden,
                  um Kopf, Herz und Körper gleichermaßen einzubeziehen.
                </p>
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
            „Coaching ist für mich ein gemeinsamer Weg, auf dem wir Klarheit schaffen, passende Ziele formulieren – und sie Schritt für Schritt in die Tat umsetzen."
          </p>
          <span className="block w-8 h-px bg-[#E8913A] mx-auto" />
        </div>
      </section>

      {/* ── PRINZIPIEN (numbered) ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="reveal mb-16">
            <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-4">
              Meine Prinzipien
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1410] leading-tight">
              Was meine Arbeit ausmacht
            </h2>
          </div>
          <div className="space-y-16">
            {prinzipien.map((section, i) => (
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
              Nächster Schritt
            </span>
            <p className="font-serif text-3xl md:text-5xl italic text-white leading-snug mb-4 max-w-2xl mx-auto"
              style={{ textWrap: 'balance' } as React.CSSProperties}>
              Bereit, deinen eigenen Weg klarer zu sehen?
            </p>
            <p className="text-white/75 text-base mb-12 tracking-wide max-w-md mx-auto leading-relaxed">
              Erfahre mehr über Persönlichkeits-Coaching oder nimm direkt Kontakt auf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/persoenlichkeits-coaching-in-frankfurt/"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
              >
                Persönlichkeits-Coaching
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/kontakt/"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/20 active:scale-[0.98]"
              >
                Kontakt aufnehmen
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </BaseLayout>
  );
}

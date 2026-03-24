'use client';

import { useEffect, useState, useCallback } from 'react';
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

const testimonials = [
  {
    text: 'Das Achtsamkeitstraining war eine wertvolle Bereicherung für mich, sowohl privat als auch beruflich. Seit dem ich an dem Achtsamkeitstraining teilnehme, bin ich im Alltag ruhiger, gelassener und fokussierter. Insbesondere mein Umgang mit beruflichem Stress hat sich deutlich verbessert. Besonders positiv war die offene und empathische Leitung von Holm. Er strahlt eine große Ruhe gepaart mit starker Authentizität aus. Ich habe mich sofort wohl und verstanden gefühlt!',
    author: 'Niklas G.',
    context: 'Achtsamkeitstraining',
  },
  {
    text: 'Die Zusammenarbeit mit Holm über die letzten zwei Jahre hat meine Entwicklung auf vielen Ebenen tiefgreifend unterstützt. Sein ganzheitlicher Blick auf alle Lebensbereiche – beruflich wie privat, körperlich wie seelisch – hat mir geholfen, ein neues Gleichgewicht zu finden und bewusster mit mir selbst und anderen umzugehen.',
    author: 'Natalie N.',
    context: 'Coaching',
  },
  {
    text: 'Ich hatte das Vergnügen, an einem Achtsamkeitstraining mit Holm im Business-Kontext teilzunehmen – und es war eine durchweg bereichernde Erfahrung. Die Inhalte waren praxisnah, gut strukturiert und gleichzeitig tiefgehend. Was das Training aber besonders gemacht hat, war Holm selbst: Mit seiner ruhigen, authentischen und gleichzeitig humorvollen Art schafft er sofort eine vertrauensvolle Atmosphäre. Man spürt, dass er nicht nur Wissen vermittelt, sondern Achtsamkeit wirklich lebt.',
    author: 'Maximilian B.',
    context: 'Business-Training',
  },
  {
    text: 'Du hast Dinge ausgesprochen und auf den Punkt gebracht, die für mich vorher nur als eine vage Unzufriedenheit spürbar waren. Dank deiner Unterstützung konnte ich meine Businesspläne viel strukturierter aufstellen und mit einem klaren Blick in die Zukunft planen. Danke, dass du mich auf diesem Weg so kompetent, aber auch menschlich begleitet hast!',
    author: 'Stefanie S.',
    context: 'Coaching',
  },
  {
    text: 'Nach einem langen Arbeitstag ist die Meditation in der Johanneskirche für mich wie ein kleiner Kurzurlaub für die Seele. Holm vermittelt die Themen so entspannt und inspirierend, dass ich jedes Mal mit neuer Energie und einem Lächeln nach Hause gehe.',
    author: 'Tobias N.',
    context: 'Meditation',
  },
  {
    text: 'Ich habe mich mehr als ein Jahrzehnt mit Meditation schwergetan, keinen wirklichen Zugang gefunden. In der Gruppe mit Holm ist mir dies gelungen und ich konnte loslassen. Danke dafür!',
    author: 'Ortwin Z.',
    context: 'Meditation',
  },
  {
    text: 'Die Meditation in der Johanniskirche war meine erste Meditationserfahrung. Sie ist für Einsteiger und Fortgeschrittene gleichermaßen geeignet. Ich bin begeistert und kann jedem nur die Empfehlung geben, bei Holm zu meditieren.',
    author: 'Martin B.',
    context: 'Meditation',
  },
  {
    text: 'Holms Meditationsabende sind für mich wohltuender Ruhepool im Alltagstrubel und wichtige Ankerpunkte meiner Meditationsroutine.',
    author: 'Ulli B.',
    context: 'Meditation',
  },
  {
    text: 'Die Meditation mit Holm ist eines der Highlights meiner Woche.',
    author: 'Sonja B.',
    context: 'Meditation',
  },
];

const DURATION = 8000;

export default function RueckmeldungenPage() {
  useScrollReveal();

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setProgressKey((k) => k + 1);
      setVisible(true);
    }, 300);
  }, []);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, DURATION);
    return () => clearInterval(timer);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const t = testimonials[current];
  const num = String(current + 1).padStart(2, '0');
  const total = String(testimonials.length).padStart(2, '0');

  return (
    <BaseLayout>

      {/* ── HERO ── */}
      <section className="relative min-h-[85dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/meditation-hintergrundbild1.jpg"
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
              Erfahrungen · Stimmen
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Was sagen<br />die Teilnehmer?
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Rückmeldungen aus Meditation, Coaching und Achtsamkeitstraining —
            in eigenen Worten.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Rückmeldungen
          </p>
        </div>
      </section>

      {/* ── CAROUSEL ── */}
      <section className="bg-stone-50">

        {/* Progress bar */}
        <div className="h-0.5 bg-stone-200 relative overflow-hidden">
          <div
            key={progressKey}
            className="absolute inset-y-0 left-0 bg-[#E8913A] origin-left w-full"
            style={{ animation: `progress-bar ${DURATION}ms linear forwards` }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: Counter + Navigation */}
            <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-8 lg:gap-0">

              {/* Counter */}
              <div className="flex lg:flex-col items-baseline lg:items-start gap-3 lg:gap-0 lg:mb-10">
                <span className="font-serif text-[5rem] md:text-[7rem] lg:text-[8rem] leading-none text-[#1C1410] select-none"
                  style={{ opacity: 0.08 }}>
                  {num}
                </span>
                <div className="lg:mt-3">
                  <div className="w-8 h-px bg-[#E8913A] mb-2" />
                  <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-stone-400">
                    von {total}
                  </span>
                </div>
              </div>

              {/* Dot nav */}
              <div className="flex lg:flex-col gap-1.5 lg:mb-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Stimme ${i + 1}`}
                    className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] rounded-full"
                    style={{
                      width: i === current ? '20px' : '6px',
                      height: '6px',
                      backgroundColor: i === current ? '#E8913A' : '#d6d3d1',
                    }}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex lg:flex-col gap-2">
                <button
                  onClick={prev}
                  aria-label="Vorheriges Zitat"
                  className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 hover:text-[#1C1410] hover:border-stone-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Nächstes Zitat"
                  className="w-11 h-11 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 hover:text-[#1C1410] hover:border-stone-400 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Right: Quote — click to advance */}
            <div
              role="button"
              tabIndex={0}
              onClick={next}
              onKeyDown={(e) => e.key === 'Enter' && next()}
              title="Klicken für nächste Stimme"
              className="min-h-[260px] flex flex-col justify-center transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer select-none"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <span className="font-serif text-6xl text-[#E8913A]/20 leading-none select-none mb-2">"</span>

              <p className="font-serif italic text-[#1C1410] leading-snug mb-8"
                style={{
                  fontSize: t.text.length < 100
                    ? 'clamp(1.75rem, 3.5vw, 2.75rem)'
                    : t.text.length < 300
                      ? 'clamp(1.35rem, 2.5vw, 2rem)'
                      : 'clamp(1.1rem, 1.8vw, 1.5rem)',
                }}>
                {t.text}
              </p>

              <div className="flex items-center gap-4">
                <span className="w-6 h-px bg-[#E8913A]" />
                <span className="font-semibold text-[#1C1410] text-sm">{t.author}</span>
                <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A]">{t.context}</span>
              </div>
            </div>

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
              Dein Einstieg
            </span>
            <p className="font-serif text-3xl md:text-5xl italic text-white leading-snug mb-4 max-w-2xl mx-auto">
              Überzeug dich selbst – ich freue mich auf dich.
            </p>
            <p className="text-white/75 text-base mb-12 tracking-wide max-w-md mx-auto leading-relaxed">
              Meditation, Coaching oder Training für dein Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/meditationstermine-in-frankfurt/"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
              >
                Meditationstermine
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

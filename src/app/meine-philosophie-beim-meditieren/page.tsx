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
    label: 'Offenheit',
    title: 'Konfessionslose Meditation',
    text: 'Meditation ist für jeden zugänglich, unabhängig von Religion oder Weltanschauung. Mein Fokus liegt darauf, dich zu unterstützen, im gegenwärtigen Moment anzukommen und die innere Stille in dir wahrzunehmen. Meine Kurse bieten dir einen neutralen und offenen Rahmen, um dich selbst besser kennenzulernen.',
  },
  {
    num: '02',
    label: 'Vielfalt',
    title: 'Vielfältige Einflüsse',
    text: 'In meiner Meditationspraxis habe ich eine Vielzahl unterschiedlicher Ansätze ausprobiert. Ob Achtsamkeit, Konzentration oder Atemübungen – jede Methode wird achtsam integriert, um dir ein breites Spektrum an Möglichkeiten zu bieten. So findest du genau die Methoden, die für dich stimmig sind.',
  },
  {
    num: '03',
    label: 'Bewusstsein',
    title: 'Achtsamkeit als Schlüssel',
    text: 'Meditation bedeutet, bewusster mit dem eigenen Leben und den eigenen Gedanken umzugehen. Statt automatisch zu reagieren, lernst du, bewusst zu agieren – ein wertvolles Werkzeug für den Alltag und darüber hinaus.',
  },
  {
    num: '04',
    label: 'Herz',
    title: 'Herzensverbindung',
    text: 'Besonders wichtig ist mir die Verbindung zum eigenen Herzen. In der Meditation geht es nicht nur um den Geist, sondern auch darum, die eigene Herzensenergie zu stärken. Die Praxis lädt dich ein, dich mit deiner inneren Wärme, Liebe und Mitgefühl zu verbinden.',
  },
  {
    num: '05',
    label: 'Echtheit',
    title: 'Authentizität',
    text: 'In meinen Kursen darf alles sein, was du gerade mitbringst – sei es Freude, Trauer, Wut, Unsicherheit oder Gelassenheit. Dieser Ansatz schafft Raum für Ehrlichkeit und Akzeptanz, was dir hilft, dein authentisches Selbst zu leben.',
  },
  {
    num: '06',
    label: 'Sicherheit',
    title: 'Ein sicherer Ort',
    text: 'Egal, ob du Anfänger bist oder schon länger meditierst – ich möchte, dass du dich in meinen Kursen wohl und getragen fühlst. Eine vertrauensvolle Umgebung, in der du dich entfalten kannst, ohne Druck oder Erwartungen.',
  },
];

export default function MeditationsPhilosophiePage() {
  useScrollReveal();

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
              Meditation · Frankfurt
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Meditations-<br />Philosophie
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Innere Ruhe, Klarheit und Verbindung — konfessionslos,
            offen und mit dem Herzen.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Meine Meditations-Philosophie
          </p>
        </div>
      </section>

      {/* ── DALAI LAMA QUOTE ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="reveal">
              <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50">
                <div className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.12)' }}>
                  <Image
                    src="/images/meditation-dalai-lama.jpg"
                    alt="Dalai Lama"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm font-medium">Dalai Lama</p>
                    <p className="text-white/60 text-xs tracking-wide">Tenzin Gyatso · 14. Dalai Lama</p>
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
                    „Wenn du willst, dass andere glücklich sind, dann übe Mitgefühl. Wenn du glücklich sein willst, praktiziere Mitgefühl."
                  </p>
                  <cite className="not-italic text-[11px] tracking-[0.15em] uppercase text-stone-400 font-medium">
                    — Dalai Lama
                  </cite>
                </div>
              </div>

              <div className="reveal reveal-delay-2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Meditation ist ein Weg, um innere Ruhe, Klarheit und Verbindung zu finden.
                  Meine Philosophie basiert darauf, dir einen sicheren Raum zu bieten,
                  in dem du dich frei entfalten kannst — unabhängig von Herkunft,
                  Religion oder Vorerfahrung.
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
          <p className="font-serif text-2xl md:text-4xl italic text-[#1C1410] leading-snug mb-6">
            „Innehalten, die Gedanken zur Ruhe kommen lassen und sich selbst auf einer tieferen Ebene begegnen."
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
              Was meine Meditation ausmacht
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

      {/* ── WARUM FRANKFURT (split) ── */}
      <section className="py-24 md:py-32 bg-white border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-6xl leading-none text-[#1C1410] opacity-[0.06] select-none">07</span>
                <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A]">Frankfurt</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1410] mb-6 leading-tight">
                Warum ich in Frankfurt meditiere
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  In unserer hektischen, ständig vernetzten Welt wird es zunehmend schwerer,
                  mit sich selbst in Kontakt zu bleiben. Durch Meditation und Achtsamkeit
                  möchte ich Menschen unterstützen, die Verbindung zu sich selbst zu stärken.
                </p>
                <p>
                  Indem wir unsere inneren Prozesse bewusster wahrnehmen, gewinnen wir nicht
                  nur Gelassenheit, sondern auch die Freiheit, aus eingefahrenen
                  Reaktionsmustern auszubrechen und neue Handlungsoptionen zu entwickeln.
                </p>
                <p>
                  Wenn ich in Frankfurt bin, biete ich wöchentliche Meditationen in Bornheim
                  an — kostenlos oder auf freiwilliger Spendenbasis.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="p-2 rounded-[1.5rem] ring-1 ring-black/5 bg-stone-50">
                <div className="relative aspect-[3/4] rounded-[calc(1.5rem-0.5rem)] overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 16px 48px rgba(14,11,9,0.10)' }}>
                  <Image
                    src="/images/meditation-frankfurt-1.jpg"
                    alt="Meditation in Frankfurt"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm font-medium">Johanniskirche Frankfurt-Bornheim</p>
                    <p className="text-white/60 text-xs tracking-wide">Wöchentliche Meditation · kostenlos</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MEINE ART (dark) ── */}
      <section className="py-24 md:py-32 bg-[#1C1410]">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="reveal mb-16">
            <span className="inline-flex items-center rounded-full border border-[#E8913A]/40 bg-[#E8913A]/10 px-3 py-1 text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-5">
              Hintergrund
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-2xl">
              Meine Art, Meditation zu leiten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5">
            {[
              {
                title: 'Vipassana-Lehrer',
                text: 'Als Vipassana-Meditationslehrer bringe ich Einflüsse aus verschiedenen Traditionen und wissenschaftlichen Erkenntnissen ein. Keine vorgegebenen „richtigen" oder „falschen" Wege.',
              },
              {
                title: 'Körper & Herz',
                text: 'In der Praxis geht es mir besonders darum, die Verbindung zum Körper und zum Herzen zu stärken. Durch bewusste Körperwahrnehmung wird es einfacher, sich selbst besser zu verstehen.',
              },
              {
                title: '200+ Tage Retreats',
                text: 'Seit 2008 habe ich über 200 Tage in Retreats verbracht — von Schweigeretreats in Thailand bis zu Meditations- und Yoga-Retreats in Mexiko, Spanien, Frankreich und Deutschland.',
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
              Wöchentliche Meditation
            </span>
            <p className="font-serif text-3xl md:text-5xl italic text-white leading-snug mb-4 max-w-2xl mx-auto">
              Ich freue mich darauf, dich auf deinem Weg zu begleiten.
            </p>
            <p className="text-white/75 text-base mb-12 tracking-wide max-w-md mx-auto leading-relaxed">
              Johanniskirche Frankfurt-Bornheim · kostenlos oder auf Spendenbasis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/meditationstermine-in-frankfurt/"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
              >
                Zu den Terminen
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/ueber-mich/"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/20 active:scale-[0.98]"
              >
                Über mich
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

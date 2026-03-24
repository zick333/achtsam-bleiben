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

export default function KontaktPage() {
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
              Frankfurt · Bornheim
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Schreib<br />mir
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Fragen zu Meditation, Coaching oder Training für Unternehmen —
            ich melde mich zeitnah bei dir.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Kontakt
          </p>
        </div>
      </section>

      {/* ── CONTACT + MAP ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Contact Info */}
            <div className="reveal flex flex-col gap-0">

              {/* Name / Address */}
              <div className="pb-10">
                <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-5">
                  Adresse
                </span>
                <img
                  src="/images/img-weiss.jpg"
                  alt="Holm Zickermann, Adresse"
                  className="max-w-[240px]"
                />
              </div>

              <div className="border-t border-stone-100" />

              {/* Email */}
              <div className="py-10">
                <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-4">
                  E-Mail
                </span>
                <a
                  href="mailto:holm@achtsam-bleiben.de"
                  className="font-serif text-2xl md:text-3xl text-[#1C1410] hover:text-[#E8913A] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  holm@achtsam-bleiben.de
                </a>
              </div>

              <div className="border-t border-stone-100" />

              {/* Meditationsort */}
              <div className="pt-10">
                <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-4">
                  Meditationsort
                </span>
                <p className="text-[#1C1410] text-lg leading-relaxed mb-6">
                  Johanniskirche Frankfurt-Bornheim<br />
                  Turmstraße 10, 60385 Frankfurt
                </p>
                <Link
                  href="/meditationstermine-in-frankfurt/"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-6 py-3.5 text-white font-medium text-sm tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
                >
                  Zu den Terminen
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>

            </div>

            {/* Right: Google Maps */}
            <div className="reveal reveal-delay-1">
              <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50">
                <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.10)' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Bornheim,+60385+Frankfurt+am+Main&output=embed&z=14"
                    width="100%"
                    height="580"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Frankfurt-Bornheim auf Google Maps"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </BaseLayout>
  );
}

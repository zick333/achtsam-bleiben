import { getEvents } from '@/lib/content';
import { BaseLayout } from '@/components/BaseLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Event } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = generatePageMetadata(
  'Meditationstermine in Frankfurt',
  'Aktuelle Meditationstermine in Frankfurt — Regelmäßige Meditationsabende in der Johanniskirche Bornheim',
  'meditationstermine-in-frankfurt'
);

function formatDay(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric' });
}

function formatWeekday(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { weekday: 'long' });
}

function formatMonthYear(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
}

function groupByMonth(events: Event[]): [string, Event[]][] {
  const map = new Map<string, Event[]>();
  for (const e of events) {
    const key = formatMonthYear(e.date);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  }
  return Array.from(map.entries());
}

export default function MeditationsterminePage() {
  const events = getEvents();

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = sortedEvents.filter(e => new Date(e.date) >= today);
  const monthGroups = groupByMonth(upcomingEvents);

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
              Termine · Frankfurt
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Meditations-<br />abende
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Regelmäßige Abende in der Johanniskirche Bornheim —
            für Anfänger und Erfahrene, kostenlos oder auf Spendenbasis.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Meditationstermine
          </p>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-[#1C1410] py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">

            <div className="flex items-start gap-5 px-6 py-8 md:py-10 md:first:pl-0">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8913A]/15 flex items-center justify-center mt-0.5">
                <svg className="w-4.5 h-4.5 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#E8913A] mb-2">Ort</p>
                <p className="font-serif text-white text-xl md:text-2xl leading-snug mb-1">Johanniskirche Bornheim</p>
                <p className="text-white/60 text-base">Turmstraße 10, 60385 Frankfurt</p>
              </div>
            </div>

            <div className="flex items-start gap-5 px-6 py-8 md:py-10 md:px-10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8913A]/15 flex items-center justify-center mt-0.5">
                <svg className="w-4.5 h-4.5 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#E8913A] mb-2">Zeit</p>
                <p className="font-serif text-white text-xl md:text-2xl leading-snug mb-1">Mittwoch, 19:00 Uhr</p>
                <p className="text-white/60 text-base">Ca. 60–75 Minuten</p>
              </div>
            </div>

            <div className="flex items-start gap-5 px-6 py-8 md:py-10 md:px-10">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8913A]/15 flex items-center justify-center mt-0.5">
                <svg className="w-4.5 h-4.5 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#E8913A] mb-2">Beitrag</p>
                <p className="font-serif text-white text-xl md:text-2xl leading-snug mb-1">Dana — Spende</p>
                <p className="text-white/60 text-base">Kostenlos oder freiwillige Spende</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EVENTS LIST ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="mb-14">
            <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-3">
              Kommende Termine
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1410] leading-tight">
              Nächste Meditationsabende
            </h2>
          </div>

          {upcomingEvents.length === 0 ? (
            <p className="text-gray-500 text-lg">Derzeit sind keine Termine geplant.</p>
          ) : (
            <div className="space-y-16">
              {monthGroups.map(([month, monthEvents]) => (
                <div key={month}>

                  {/* Month header */}
                  <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-stone-100">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1C1410]">{month}</h3>
                    <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-stone-300">
                      {monthEvents.length} {monthEvents.length === 1 ? 'Termin' : 'Termine'}
                    </span>
                  </div>

                  {/* Event cards with image */}
                  <div className="grid grid-cols-1 gap-4">
                    {monthEvents.map(event => {
                      const isSpecial = event.status === 'upcoming';
                      return (
                        <Link
                          key={event.slug}
                          href={`/meditation/${event.slug}/`}
                          className="group block"
                        >
                          <div className={`p-1.5 rounded-2xl ring-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isSpecial ? 'ring-[#E8913A]/40 bg-stone-50/80 group-hover:ring-[#E8913A]/70' : 'ring-black/[0.06] bg-stone-50/60 group-hover:ring-black/10'}`}>
                            <div className="rounded-[calc(1rem-0.375rem)] flex flex-col sm:flex-row overflow-hidden bg-white" style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)' }}>

                              {/* Image */}
                              <div className="relative w-full sm:w-28 md:w-32 flex-shrink-0 aspect-square sm:aspect-auto">
                                <Image
                                  src="/images/home-philosophy.jpg"
                                  alt=""
                                  fill
                                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                                />
                                {/* Date overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/70 via-transparent to-transparent sm:bg-gradient-to-r sm:from-[#0e0b09]/60 sm:via-[#0e0b09]/10 sm:to-transparent" />
                                <div className="absolute bottom-3 left-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2">
                                  <div className="font-serif text-4xl leading-none text-white">{formatDay(event.date)}</div>
                                  <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white/70 mt-1">{formatWeekday(event.date)}</div>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-5">
                                <div className="flex-1 min-w-0">
                                  {isSpecial && (
                                    <span className="inline-flex items-center rounded-full bg-[#E8913A] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] font-semibold text-white mb-2">
                                      Besonderer Abend
                                    </span>
                                  )}
                                  <p className="font-serif text-[#1C1410] text-xl leading-snug transition-colors duration-500 group-hover:text-[#E8913A]">
                                    {isSpecial ? event.title : 'Gemeinsam Meditieren in Bornheim'}
                                  </p>
                                  {isSpecial && event.description && (
                                    <p className="text-stone-500 text-sm leading-relaxed mt-1.5 max-w-lg">
                                      {event.description}
                                    </p>
                                  )}
                                  <p className="text-[12px] uppercase tracking-[0.12em] font-semibold text-stone-400 mt-2">
                                    {event.location}
                                  </p>
                                </div>

                                {/* Time + Arrow */}
                                <div className="flex items-center gap-4 flex-shrink-0">
                                  <span className="font-serif text-2xl text-[#1C1410]">{event.time} Uhr</span>
                                  <div className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#E8913A] group-hover:border-[#E8913A] group-hover:text-white flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#1C1410]">
        {/* Background image with strong overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/2023-07-Meditation-Johanniskirche-3-rotated.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#1C1410]/85" />

        <div className="relative max-w-[1400px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold text-white mb-6">
              Was dich erwartet
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight mb-6">
              Ein Abend der Stille<br />und des Miteinanders
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Offen für alle — ob Anfänger oder erfahrener Meditierender. Jeder Abend:
              kurze Einführung, angeleitete Meditation, Stille und Raum für Fragen.
            </p>
          </div>

          {/* 4 Feature tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { label: 'Für Anfänger geeignet', sub: 'Keinerlei Vorkenntnisse nötig', n: '01' },
              { label: 'Keine Anmeldung nötig', sub: 'Einfach vorbeikommen', n: '02' },
              { label: 'Auf Spendenbasis', sub: 'Dana — freiwillige Spende', n: '03' },
              { label: 'Konfessionsfrei', sub: 'Offen für alle Menschen', n: '04' },
            ].map(({ label, sub, n }) => (
              <div key={label} className="p-1.5 rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                <div className="rounded-[calc(1rem-0.375rem)] bg-white/[0.05] px-6 py-6" style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08)' }}>
                  <span className="text-[11px] font-bold text-[#E8913A] tracking-[0.1em] block mb-4">{n}</span>
                  <p className="font-serif text-white text-lg leading-snug mb-2">{label}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image strip */}
          <div className="p-1.5 rounded-2xl ring-1 ring-white/10 bg-white/[0.03]">
            <div className="relative aspect-[21/6] rounded-[calc(1rem-0.375rem)] overflow-hidden">
              <Image
                src="/images/20241204_184801-scaled.jpg"
                alt="Meditationsabend in der Johanniskirche Frankfurt"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1410]/60 via-transparent to-[#1C1410]/60" />
            </div>
          </div>
        </div>
      </section>


    </BaseLayout>
  );
}

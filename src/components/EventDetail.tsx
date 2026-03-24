import Link from 'next/link';
import Image from 'next/image';
import { BaseLayout } from './BaseLayout';
import { Event } from '@/lib/types';

interface EventDetailProps {
  event: Event;
}

function formatDay(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric' });
}

function formatWeekday(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { weekday: 'long' });
}

function formatMonthYear(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
}

function formatDateLong(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function EventDetail({ event }: EventDetailProps) {
  const special = event.status === 'upcoming';

  // Hero image: all events use this church interior photo
  const heroImage = '/images/IMG_8559-scaled.jpeg';

  // Content photo shown in body section
  const contentImage = special
    ? '/images/Brigitte-2.jpg'
    : '/images/20241204_184749-scaled.jpg';

  return (
    <BaseLayout>

      {/* ── HERO ── */}
      <section className="relative min-h-[75dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-contain object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/95 via-[#0e0b09]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b09]/60 via-transparent to-transparent" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-16 md:pb-24">

          {/* Breadcrumb */}
          <p className="text-[13px] tracking-[0.14em] uppercase text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <span className="mx-2 text-white/35">/</span>
            <Link href="/meditationstermine-in-frankfurt/" className="hover:text-white transition-colors duration-300">Meditationstermine</Link>
            <span className="mx-2 text-white/35">/</span>
            <span className="text-white/50">{formatMonthYear(event.date)}</span>
          </p>

          {/* Status badge */}
          <div className="mb-6">
            <span className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[13px] uppercase tracking-[0.14em] font-semibold backdrop-blur-sm ${
              special
                ? 'border-[#E8913A]/50 bg-[#E8913A]/20 text-[#E8913A]'
                : 'border-white/30 bg-white/15 text-white/85'
            }`}>
              {special ? 'Besonderer Abend' : 'Regelmäßiger Termin'}
            </span>
          </div>

          {/* Date badge */}
          <div className="flex items-baseline gap-5 mb-6">
            <span className="font-serif text-7xl md:text-8xl text-white leading-none">{formatDay(event.date)}</span>
            <div>
              <div className="text-white/85 text-lg font-medium">{formatWeekday(event.date)}</div>
              <div className="text-white/60 text-sm uppercase tracking-[0.14em] mt-0.5">{formatMonthYear(event.date)}</div>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight tracking-tight max-w-2xl">
            {special ? event.title : 'Gemeinsam Meditieren in der Johanniskirche in Bornheim'}
          </h1>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-[#1C1410] py-0">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]">

            <div className="flex items-center gap-4 px-0 sm:pr-8 py-7">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#E8913A]/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#E8913A]/80 mb-0.5">Datum</p>
                <p className="text-white text-base font-medium">{formatDateLong(event.date)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:px-8 py-7">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#E8913A]/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#E8913A]/80 mb-0.5">Uhrzeit</p>
                <p className="text-white text-base font-medium">{event.time} Uhr</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:pl-8 py-7">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#E8913A]/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8913A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#E8913A]/80 mb-0.5">Ort</p>
                <p className="text-white text-base font-medium leading-snug">{event.location}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#FDFBF8] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

            {/* Left: Content */}
            <div>

              {/* Content photo */}
              <div className="p-1.5 rounded-2xl ring-1 ring-black/[0.06] bg-stone-50 mb-12 max-w-sm">
                <div className="relative aspect-[4/3] rounded-[calc(1rem-0.375rem)] overflow-hidden">
                  <Image
                    src={contentImage}
                    alt={event.title}
                    fill
                    className={`object-cover ${special ? 'object-top' : 'object-center'}`}
                  />
                </div>
              </div>

              {/* Text content */}
              {special ? (
                <div className="prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#1C1410]
                  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-stone-600 prose-p:leading-relaxed prose-p:text-base
                  prose-strong:text-[#1C1410] prose-strong:font-semibold
                  prose-a:text-[#E8913A] prose-a:no-underline hover:prose-a:underline">
                  <h2>Über diesen Abend</h2>
                  <p>{event.description}</p>
                  <h2>Ablauf des Abends</h2>
                  <p>
                    Mae Chee Brigitte wird uns durch eine geleitete Meditation führen und
                    anschließend über ihre Erfahrungen als buddhistische Nonne sprechen.
                    Es gibt Raum für Fragen und einen offenen Austausch.
                  </p>
                  <ul>
                    <li>Geleitete Meditation</li>
                    <li>Vortrag über Meditation und das Leben als Nonne</li>
                    <li>Fragen und Antworten</li>
                  </ul>
                  <h2>Anmeldung</h2>
                  <p>
                    Für diesen besonderen Abend ist eine Anmeldung erforderlich.
                    Schreiben Sie bitte eine Mail an:{' '}
                    <a href="mailto:holm@achtsam-bleiben.de">holm@achtsam-bleiben.de</a>
                  </p>
                  <p>
                    Dieser Abend findet auf Dana-Basis statt — eine freiwillige Spende
                    ist herzlich willkommen.
                  </p>
                </div>
              ) : (
                <div className="prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#1C1410]
                  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-stone-600 prose-p:leading-relaxed prose-p:text-base
                  prose-strong:text-[#1C1410] prose-strong:font-semibold
                  prose-a:text-[#E8913A] prose-a:no-underline hover:prose-a:underline
                  prose-ul:text-stone-600 prose-li:leading-relaxed">
                  <h2>Über diesen Abend</h2>
                  <p>
                    Nach der positiven Resonanz auf die Meditationen der vergangenen Jahre
                    meditieren wir auch 2026 wieder gemeinsam in der Johanniskirche in Bornheim.
                  </p>
                  <p>
                    Jede:r, der/die Interesse an Meditation und Achtsamkeit hat, ist herzlich
                    willkommen. Die Meditation ist für Anfänger:innen und Fortgeschrittene
                    gleichermaßen geeignet — Vorkenntnisse sind nicht nötig.
                  </p>
                  <h2>Ablauf</h2>
                  <ul>
                    <li>Kurze Einführung in die Abendmeditation</li>
                    <li>Angeleitete Meditation (ca. 30–45 Minuten)</li>
                    <li>Stille Sitzung und Raum zur Besinnung</li>
                    <li>Möglichkeit für Fragen und Austausch</li>
                  </ul>
                  <h2>Der Meditationslehrer</h2>
                  <p>
                    Die Meditation wird geleitet von Holm Zickermann, der jahrelange
                    Meditationserfahrung hat und ausgebildeter Meditationslehrer nach der
                    Vipassana-Schule ist.
                  </p>
                  <p>
                    Bei Fragen im Vorfeld schreiben Sie gerne eine Mail an:{' '}
                    <a href="mailto:holm@achtsam-bleiben.de">holm@achtsam-bleiben.de</a>
                  </p>
                </div>
              )}

            </div>

            {/* Right: Sidebar */}
            <div className="lg:sticky lg:top-28 space-y-5">

              {/* Details card */}
              <div className="p-1.5 rounded-2xl ring-1 ring-black/[0.06] bg-stone-50">
                <div className="rounded-[calc(1rem-0.375rem)] bg-white px-6 py-7" style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)' }}>
                  <h3 className="font-serif text-2xl text-[#1C1410] mb-6">Details</h3>
                  <dl className="space-y-5">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-1">Datum</dt>
                      <dd className="text-stone-700 text-base leading-relaxed">{formatDateLong(event.date)}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-1">Zeit</dt>
                      <dd className="text-stone-700 text-base">{event.time} Uhr</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-1">Ort</dt>
                      <dd className="text-stone-700 text-base leading-relaxed">{event.location}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-1">Beitrag</dt>
                      <dd className="text-stone-700 text-base">Dana — freiwillige Spende</dd>
                    </div>
                    {special && (
                      <div>
                        <dt className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-1">Anmeldung</dt>
                        <dd className="text-stone-700 text-base">Erforderlich per E-Mail</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>

              {/* CTA card */}
              <div className="p-1.5 rounded-2xl ring-1 ring-[#E8913A]/30 bg-[#E8913A]/5">
                <div className="rounded-[calc(1rem-0.375rem)] bg-white px-6 py-7" style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)' }}>
                  <p className="font-serif text-[#1C1410] text-xl leading-snug mb-3">
                    {special ? 'Anmeldung erforderlich' : 'Einfach vorbeikommen'}
                  </p>
                  <p className="text-stone-500 text-base leading-relaxed mb-6">
                    {special
                      ? 'Bitte melden Sie sich per E-Mail an, um Ihren Platz zu reservieren.'
                      : 'Keine Voranmeldung nötig. Kommen Sie einfach vorbei — wir freuen uns auf Sie.'}
                  </p>
                  <Link
                    href="/kontakt/"
                    className="group flex items-center justify-between w-full px-5 py-4 rounded-xl bg-[#E8913A] text-white text-base font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
                  >
                    <span>{special ? 'Jetzt anmelden' : 'Frage stellen'}</span>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Back link */}
              <Link
                href="/meditationstermine-in-frankfurt/"
                className="group flex items-center gap-2.5 text-[12px] uppercase tracking-[0.16em] font-semibold text-stone-400 hover:text-[#E8913A] transition-colors duration-300 px-1.5"
              >
                <div className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center transition-all duration-300 group-hover:border-[#E8913A] group-hover:bg-[#E8913A]/5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                Alle Termine
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ── BACK TO EVENTS ── */}
      <section className="bg-[#1C1410] py-14 md:py-18">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] font-semibold text-[#E8913A] mb-2">Weitere Termine</p>
            <p className="font-serif text-2xl md:text-3xl text-white font-normal">
              Alle Meditationsabende in Frankfurt
            </p>
          </div>
          <Link
            href="/meditationstermine-in-frankfurt/"
            className="group inline-flex items-center gap-3 flex-shrink-0 px-7 py-4 rounded-full border border-white/20 text-white text-base font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 active:scale-[0.98]"
          >
            Alle Termine ansehen
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

    </BaseLayout>
  );
}

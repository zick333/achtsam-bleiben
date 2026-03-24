import { BaseLayout } from '@/components/BaseLayout';
import { generatePageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  'Kontakt',
  'Kontaktieren Sie mich für Meditation und Coaching in Frankfurt',
  'kontakt'
);

export default function KontaktPage() {
  return (
    <BaseLayout>

      {/* Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/meditation-hintergrundbild1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient: transparent top → warm dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-14 md:pb-20">
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/50 mb-3">
            <Link href="/" className="hover:text-white/80 transition-colors duration-200">
              Home
            </Link>
            <span className="mx-2 opacity-50">/</span>
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
            style={{ textWrap: 'balance' } as React.CSSProperties}>
            Kontakt
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Contact Info */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1C1410] mb-10 leading-tight">
                Schreib mir
              </h2>

              <div className="space-y-0">

                {/* Name / Address image */}
                <div className="pb-8">
                  <img
                    src="/images/img-weiss.jpg"
                    alt="Holm Zickermann, Adresse"
                    className="max-w-[220px]"
                  />
                </div>

                <div className="border-t border-stone-200" />

                {/* Email */}
                <div className="py-8">
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">
                    E-Mail
                  </p>
                  <a
                    href="mailto:holm@achtsam-bleiben.de"
                    className="text-[#E8913A] hover:text-[#d4822f] text-lg font-medium transition-colors duration-200 underline-offset-4 hover:underline"
                  >
                    holm@achtsam-bleiben.de
                  </a>
                </div>

                <div className="border-t border-stone-200" />

                {/* Location */}
                <div className="pt-8">
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-stone-400 mb-2">
                    Meditationsort
                  </p>
                  <p className="text-[#1C1410] text-lg leading-relaxed mb-5">
                    Johanniskirche Frankfurt-Bornheim<br />
                    Turmstraße 10, 60385 Frankfurt
                  </p>
                  <Link
                    href="/meditationstermine-in-frankfurt/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8913A] hover:bg-[#d4822f] text-white text-sm font-medium tracking-wide transition-colors duration-200 active:scale-[0.98]"
                  >
                    Zu den Terminen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>

            {/* Right: Google Maps */}
            <div className="overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(28,20,16,0.10)' }}>
              <iframe
                src="https://maps.google.com/maps?q=Bornheim,+60385+Frankfurt+am+Main&output=embed&z=14"
                width="100%"
                height="600"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Frankfurt-Bornheim auf Google Maps"
              />
            </div>

          </div>
        </div>
      </section>

    </BaseLayout>
  );
}

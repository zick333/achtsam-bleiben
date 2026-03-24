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
      <section className="relative bg-gray-700 py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/meditation-hintergrundbild1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kontakt
          </h1>
          <p className="text-sm text-gray-300">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Schreib mir
              </h2>

              <div className="space-y-6">
                <div>
                  <img
                    src="/images/img-weiss.jpg"
                    alt=""
                    className="max-w-[220px]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    E-Mail
                  </h3>
                  <a
                    href="mailto:holm@achtsam-bleiben.de"
                    className="text-[#E8913A] hover:text-[#d4822f] text-lg transition-colors"
                  >
                    holm@achtsam-bleiben.de
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
                    Meditationsort
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    Johanniskirche Frankfurt-Bornheim<br />
                    Turmstraße 10, 60385 Frankfurt
                  </p>
                  <Link
                    href="/meditationstermine-in-frankfurt/"
                    className="inline-block mt-3 text-sm font-bold uppercase tracking-wide px-4 py-2 bg-black hover:bg-[#E8913A] text-white transition-colors duration-200"
                  >
                    Zu den Terminen
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Google Maps */}
            <div>
              <iframe
                src="https://maps.google.com/maps?q=Bornheim,+60385+Frankfurt+am+Main&output=embed&z=14"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

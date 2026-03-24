import { BaseLayout } from '@/components/BaseLayout';
import { generatePageMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  'Über mich',
  'Über Holm Zickermann - Meditationslehrer und Coach in Frankfurt',
  'ueber-mich'
);

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-14 md:pb-20">
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/50 mb-3">
            <Link href="/" className="hover:text-white/80 transition-colors duration-200">
              Home
            </Link>
            <span className="mx-2 opacity-50">/</span>
            Über mich
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Über mich
          </h1>
        </div>
      </section>

      {/* Intro: Portrait + Text */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Portrait */}
            <div className="relative aspect-[3/4] overflow-hidden shadow-lg"
              style={{ boxShadow: '0 12px 40px rgba(28,20,16,0.12)' }}>
              <Image
                src="/images/20231012_164945-scaled.jpg"
                alt="Holm Zickermann – Meditationslehrer und Coach in Frankfurt"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center py-4">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 mb-3">
                Meditationslehrer & Coach
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1C1410] mb-6 leading-tight">
                Holm Zickermann
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Meditation und Achtsamkeit begleiten mich nun seit über 15 Jahren und haben
                mein Leben auf tiefgreifende Weise bereichert. Was als erste intensive Begegnung
                Anfang 2008 mit einem mehrtägigen Meditationsretreat in Thailand begann, hat sich
                zu einer tiefen und erfüllenden Praxis entwickelt, die mich sowohl privat als auch
                beruflich prägt.
              </p>

              {/* Quote */}
              <blockquote className="border-l-2 border-[#E8913A] pl-6">
                <p className="text-xl md:text-2xl font-serif italic text-[#1C1410] leading-relaxed mb-3">
                  „Es ist schwer das Glück in uns zu finden, aber es ist ganz unmöglich es woanders zu finden."
                </p>
                <cite className="not-italic text-sm text-stone-400 tracking-wide">
                  — Nicolas Chamfort
                </cite>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 md:py-28 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 space-y-16">

          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1C1410] mb-5 leading-tight">
              Mein Weg zur Meditation
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Meine Meditationsreise begann 2008, als ich das erste Mal über mehrere Tage
                intensiv meditierte. Heute bin ich selbst Meditationslehrer und gebe mein Wissen
                weiter. Besonders inspiriert hat mich dabei meine Meditationslehrerin und über die
                Jahre auch gute Freundin, Mae Chee Brigitte – eine Österreicherin, die als
                buddhistische Nonne seit über 30 Jahren in Thailand lebt und für ihre Arbeit von der
                UN und dem thailändischen Königshaus geehrt wurde.
              </p>
              <p>
                Meine weiteren Erfahrungen basieren auf vielfältigen Einflüssen: von
                buddhistischen Meditationsretreats und Yoga-Retreats über psychologische
                Fortbildungen bis hin zu intensiven Schweigeretreats in Thailand, Mexiko,
                Spanien, Frankreich und Deutschland. Ich habe über die Jahre mehr als 200 Tage
                in Retreats verbracht und biete heute wöchentliche Meditationsabende in
                Frankfurt-Bornheim an.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1C1410] mb-5 leading-tight">
              Meditation als tägliche Praxis
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Auch wenn Meditation für mich heute die Basis meines Alltags ist, war das nicht
              immer so. Es hat Jahre gedauert, bis ich die Disziplin und Klarheit fand, sie in
              meinen Alltag zu integrieren. Diese tägliche Praxis hilft mir, achtsamer zu leben,
              meine eigenen Grenzen zu respektieren und die Signale meines Körpers wahrzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1C1410] mb-5 leading-tight">
              Offenheit und Neugier
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ich habe das Glück, in meinem Leben viele besondere Menschen kennenzulernen, die
              meine Perspektiven erweitern und mir immer wieder neue Inspiration schenken. Diese
              Offenheit und Neugier prägen auch meine eigene Entwicklung – ich lerne gerne und
              bin überzeugt davon, dass jeder Moment eine neue Erkenntnis mit sich bringen kann.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1C1410] mb-5 leading-tight">
              Beruflicher Hintergrund
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Beruflich verbinde ich meine langjährige Erfahrung im Management und in der
              Geschäftsentwicklung mit meiner Meditationspraxis. Nach meinem BWL-Studium
              arbeite ich seit vielen Jahren im Projektmanagement eines Großunternehmens – mit
              Kontakt zu allen Managementebenen vom Vorstand bis zu den Mitarbeitenden. Diese
              Verbindung ermöglicht es mir, Menschen auf allen Ebenen dabei zu unterstützen,
              achtsamer zu arbeiten und in eine bessere Balance zu finden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1C1410] mb-5 leading-tight">
              Persönliches
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Neben der Meditation verbringe ich gerne Zeit in der Natur, praktiziere Yoga und
              treibe regelmäßig Sport. Diese Aktivitäten helfen mir, geerdet zu bleiben und mich
              immer wieder mit mir selbst zu verbinden.
            </p>
          </div>

        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-28 bg-white border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C1410] mb-12 text-center">
            Aus- und Weiterbildung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {credentials.map((block) => (
              <div key={block.category}>
                <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#E8913A] mb-4">
                  {block.category}
                </p>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 w-1 h-1 rounded-full bg-stone-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Ich freue mich darauf, meine Erfahrungen und mein Wissen mit dir zu teilen.
          </p>
          <Link
            href="/kontakt/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#E8913A] hover:bg-[#d4822f] text-white font-medium tracking-wide transition-colors duration-200 active:scale-[0.98]"
          >
            Kontakt aufnehmen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </BaseLayout>
  );
}

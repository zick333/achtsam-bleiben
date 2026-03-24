import { BaseLayout } from '@/components/BaseLayout';
import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = generatePageMetadata(
  'Empfohlene Meditationslehrer',
  'Persönliche Empfehlungen für Meditationslehrer und Retreat-Zentren, die meinen eigenen Weg geprägt haben',
  'empfehlungen-meditationslehrer'
);

const teachers = [
  {
    name: 'Mae Chee Brigitte',
    image: '/images/Brigitte-2.jpg',
    role: 'Buddhistische Nonne · Thailand',
    link: 'https://www.meditationthailand.org/de/',
    linkLabel: 'meditationthailand.org',
    text: [
      'Mae Chee Brigitte Schrottenbacher ist eine österreichische buddhistische Nonne, die seit 1990 in Thailand lebt. Sie studierte bei renommierten Meistern Vipassana- und Samatha-Meditation und wurde für ihre besondere Arbeit vielfach geehrt. So zeichnete sie die UN als „Herausragende Frau im Buddhismus" aus, und auch das thailändische Königshaus ehrte sie für ihre friedensstiftenden Taten.',
      'Ich habe Brigitte 2008 während eines Meditationsretreats in Thailand kennengelernt. Über die Jahre ist sie nicht nur meine Lehrerin, sondern auch eine gute Freundin geworden. Ihre Tiefe an Wissen, ihre geistige Klarheit und ihre authentische Art beeindrucken mich immer wieder. Unter ihrer Anleitung habe ich auch meine Ausbildung zum Vipassana-Meditationslehrer abgeschlossen.',
      'Meine eigene Achtsamkeits- und Meditationspraxis wurde von ihr geprägt wie von niemand anderem. Deshalb kann ich die Teilnahme an ihren Meditationsabenden oder Retreats von Herzen empfehlen.',
    ],
  },
  {
    name: 'Tenzin Peljor',
    image: '/images/tenzin-peljor.jpg',
    role: 'Buddhistischer Mönch · Berlin',
    link: 'https://tenzinpeljor.de/',
    linkLabel: 'tenzinpeljor.de',
    text: [
      'Tenzin Peljor ist ein vollordinierter buddhistischer Mönch (Gelong) aus Berlin. Seit 1998 leitet er Meditations- und Studienkurse sowie Vorträge zum Buddhismus. Sein Engagement reicht von Gefängnis- und Kinderprojekten über Sterbebegleitung und interreligiösen Dialog bis hin zu Schulworkshops. Darüber hinaus ist er zertifizierter Achtsamkeitslehrer, Informatiker und Theaterpädagoge.',
      'Ich habe an vielen Meditationswochenenden mit Tenzin teilgenommen. Seine tiefe Kenntnis der Meditation und die Freude, mit der er sein Wissen vermittelt, sind spürbar und wirken ansteckend. Besonders beeindruckt mich, dass er nicht nur bei buddhistischen Lehrern gelernt hat, sondern sich auch intensiv mit westlichen Ansätzen beschäftigt hat — etwa im renommierten „Mindfulness Meditation Teacher Certification Program" bei Jack Kornfield und Tara Brach.',
      'Seine Lehrweise verbindet spirituelle Tiefe mit wissenschaftlichem Hintergrund. Die Teilnahme an seinen Kursen war für mich stets bereichernd, inspirierend und eine große Freude.',
    ],
  },
  {
    name: 'Hridaya Yoga',
    image: '/images/yoga (1).jpg',
    role: 'Spirituelles Zentrum · Mexiko & Frankreich',
    link: 'https://hridaya-yoga.com/',
    linkLabel: 'hridaya-yoga.com',
    text: [
      'Hridaya Yoga ist ein spirituelles Zentrum mit Standorten in Mazunte (Mexiko) und in der Nähe von Lyon (Frankreich). Ich habe dort mehrfach an Schweige- und Yoga-Retreats teilgenommen — sowohl in Frankreich als auch in Mexiko.',
      'Die Tiefe der Praxis, die Qualität der Lehrer*innen und die besondere Atmosphäre an beiden Orten haben mich nachhaltig beeindruckt und begleiten mich bis heute.',
      'Wer ein spirituelles Zentrum sucht, um mehrwöchige Yoga- und Meditationserfahrungen zu machen, dem kann ich Hridaya Yoga von Herzen empfehlen.',
    ],
  },
];

export default function EmpfehlungenPage() {
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
              Empfehlungen · Lehrer & Zentren
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Menschen,<br />die mich prägten
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Lehrer und Orte, die meinen eigenen Weg tief beeinflusst haben —
            persönliche Empfehlungen aus Überzeugung.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Empfehlungen
          </p>
        </div>
      </section>

      {/* ── TEACHERS ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="space-y-28 md:space-y-36">
            {teachers.map((teacher, i) => (
              <div
                key={teacher.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >

                {/* Image */}
                <div className={`p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50 ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <div
                    className="relative aspect-[3/4] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                    style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.08)' }}
                  >
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover object-top"
                    />
                    {/* Caption */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0e0b09]/70 to-transparent px-5 pb-5 pt-8">
                      <p className="text-white font-serif text-lg leading-tight">{teacher.name}</p>
                      <p className="text-white/50 text-[12px] uppercase tracking-[0.1em] font-semibold mt-1">{teacher.role}</p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] mb-4 block">
                    Empfehlung {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#1C1410] leading-tight mb-6">
                    {teacher.name}
                  </h2>
                  <div className="space-y-4">
                    {teacher.text.map((para, j) => (
                      <p key={j} className="text-gray-500 text-base md:text-lg leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-stone-100">
                    <a
                      href={teacher.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-full bg-[#E8913A] px-7 py-3.5 text-white font-semibold text-sm tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
                    >
                      {teacher.linkLabel}
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
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
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[13px] uppercase tracking-[0.14em] font-semibold text-white mb-8">
            Praxis erleben
          </span>
          <p className="font-serif text-3xl md:text-4xl italic text-white leading-snug mb-4 max-w-xl mx-auto">
            Dein eigener Weg beginnt mit dem ersten Schritt.
          </p>
          <p className="text-white/75 text-base mb-10 tracking-wide max-w-md mx-auto leading-relaxed">
            Wöchentliche Meditation in Frankfurt — kostenlos oder auf Spendenbasis.
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
              href="/meine-philosophie-beim-meditieren/"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/20 active:scale-[0.98]"
            >
              Meine Philosophie
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

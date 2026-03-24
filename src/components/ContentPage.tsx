import Image from 'next/image';
import Link from 'next/link';
import { BaseLayout } from './BaseLayout';
import { ContentRenderer } from './ContentRenderer';

interface ContentPageProps {
  title: string;
  description?: string;
  heroImage?: string;
  content: string;
}

export function ContentPage({ title, description, heroImage, content }: ContentPageProps) {
  return (
    <BaseLayout>

      {/* ── HERO ── */}
      {heroImage ? (
        <section className="relative min-h-[75dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/95 via-[#0e0b09]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b09]/50 via-transparent to-transparent" />

          <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-16 md:pb-24">
            <p className="text-[11px] tracking-[0.18em] uppercase text-white/50 mb-6">
              <Link href="/" className="hover:text-white/80 transition-colors duration-300">Home</Link>
              <span className="mx-2 text-white/30">/</span>
              <span className="text-white/35">{title}</span>
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.0] tracking-tight mb-6 max-w-3xl">
              {title}
            </h1>
            {description && (
              <p className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </section>
      ) : (
        <section className="bg-[#1C1410] pt-28 md:pt-32 pb-14 md:pb-18">
          <div className="max-w-[1400px] mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-white/60 text-lg mt-3 max-w-xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── CONTENT ── */}
      <section className="bg-[#FDFBF8] py-16 md:py-24">
        <div className="max-w-[780px] mx-auto px-4">

          {/* Back link */}
          <div className="mb-10 pb-8 border-b border-stone-200/60">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-semibold text-stone-400 hover:text-[#E8913A] transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>

          <div className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#1C1410]
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#3d2e24]
            prose-p:text-stone-600 prose-p:leading-relaxed prose-p:text-base
            prose-strong:text-[#1C1410] prose-strong:font-semibold
            prose-a:text-[#E8913A] prose-a:no-underline hover:prose-a:underline
            prose-ul:text-stone-600 prose-ol:text-stone-600
            prose-li:leading-relaxed prose-li:marker:text-[#E8913A]
            prose-hr:border-stone-200">
            <ContentRenderer content={content} />
          </div>

        </div>
      </section>

    </BaseLayout>
  );
}

import { BaseLayout } from './BaseLayout';
import { ContentRenderer } from './ContentRenderer';
import { getAdjacentPosts } from '@/lib/content';
import { BlogFrontmatter } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  frontmatter: BlogFrontmatter;
  content: string;
  slug: string;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
}

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function BlogPost({ frontmatter, content, slug }: BlogPostProps) {
  const date = frontmatter.date ? formatDate(frontmatter.date) : null;
  const minutes = readingTime(content);
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <BaseLayout>

      {/* ── HERO ── */}
      <section className="relative min-h-[85dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {frontmatter.featuredImage ? (
            <Image
              src={frontmatter.featuredImage}
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
          ) : (
            <div className="w-full h-full bg-[#1C1410]" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/95 via-[#0e0b09]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b09]/50 via-transparent to-transparent" />

        <div className="relative w-full max-w-[1400px] mx-auto px-4 pb-16 md:pb-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[13px] uppercase tracking-[0.14em] font-semibold text-white backdrop-blur-sm">
              Meditationswissen
            </span>
            {date && (
              <span className="text-[14px] text-white/85 tracking-wide">{date}</span>
            )}
            <span className="text-[14px] text-white/75 tracking-wide">· {minutes} min Lesezeit</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.0] tracking-tight mb-8 max-w-4xl">
            {frontmatter.title}
          </h1>

          {frontmatter.description && (
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              {frontmatter.description}
            </p>
          )}

          <p className="text-[12px] tracking-[0.16em] uppercase text-white/70">
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <span className="mx-2 text-white/40">/</span>
            <Link href="/meditationswissen/" className="hover:text-white transition-colors duration-300">Meditationswissen</Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white/50">Artikel</span>
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="bg-[#FDFBF8] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12 pb-10 border-b border-stone-200/60">
              {frontmatter.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-[0.12em] font-semibold text-stone-400 border border-stone-200 rounded-full px-3 py-1 bg-white"
                >
                  {tag.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
          )}

          {/* Prose content */}
          <div className="article-drop-cap prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#1C1410] prose-headings:font-normal
            prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-16 prose-h2:mb-5
            prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-10 prose-h3:mb-4
            prose-p:text-gray-600 prose-p:text-lg prose-p:leading-[1.85]
            prose-strong:text-[#1C1410] prose-strong:font-semibold
            prose-a:text-[#E8913A] prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-4 prose-blockquote:border-[#E8913A] prose-blockquote:bg-stone-100/60 prose-blockquote:not-italic prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-10
            prose-blockquote:font-serif prose-blockquote:text-[#1C1410] prose-blockquote:text-xl prose-blockquote:italic
            prose-ul:text-gray-600 prose-ol:text-gray-600
            prose-li:leading-relaxed prose-li:marker:text-[#E8913A]
            prose-img:rounded-2xl prose-img:shadow-none prose-img:my-10">
            <ContentRenderer content={content} />
          </div>

        </div>
      </section>

      {/* ── PREV / NEXT NAVIGATION ── */}
      <section className="bg-[#FDFBF8] border-t border-stone-200/80 pb-10">
        <div className="max-w-[1400px] mx-auto divide-y divide-stone-200/60 md:divide-y-0 md:grid md:grid-cols-[1fr_1px_auto_1px_1fr]">

          {/* Prev (older) */}
          {prev ? (
            <Link
              href={`/${prev.slug}/`}
              className="group flex flex-col gap-4 px-8 py-8 md:pr-12 hover:bg-stone-50/80 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#E8913A] flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-[14px] uppercase tracking-[0.14em] font-semibold text-[#E8913A]">Vorheriger Artikel</span>
              </div>
              <p className="font-serif text-[#1C1410] text-lg md:text-xl leading-snug transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#E8913A]">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div className="px-8 py-8" />
          )}

          {/* Vertical divider */}
          <div className="hidden md:block bg-stone-200/60" />

          {/* Center: back to overview */}
          <Link
            href="/meditationswissen/"
            className="group flex flex-col items-center justify-center gap-2.5 px-10 py-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E8913A] px-5 py-2.5 text-[12px] uppercase tracking-[0.16em] font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#d4822f] active:scale-[0.98]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Alle Artikel
            </span>
          </Link>

          {/* Vertical divider */}
          <div className="hidden md:block bg-stone-200/60" />

          {/* Next (newer) */}
          {next ? (
            <Link
              href={`/${next.slug}/`}
              className="group flex flex-col items-end gap-4 px-8 py-8 md:pl-12 text-right hover:bg-stone-50/80 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[14px] uppercase tracking-[0.14em] font-semibold text-[#E8913A]">Nächster Artikel</span>
                <svg className="w-4 h-4 text-[#E8913A] flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="font-serif text-[#1C1410] text-lg md:text-xl leading-snug transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#E8913A]">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="px-8 py-8" />
          )}

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
          <p className="font-serif text-3xl md:text-4xl italic text-white leading-snug mb-5 max-w-xl mx-auto">
            Vom Lesen zur Erfahrung.
          </p>
          <p className="text-white/75 text-base mb-10 tracking-wide max-w-md mx-auto leading-relaxed">
            Wöchentliche Meditation in Frankfurt — kostenlos oder auf Spendenbasis.
          </p>
          <Link
            href="/meditationstermine-in-frankfurt/"
            className="group inline-flex items-center gap-4 rounded-full bg-[#E8913A] px-8 py-4 text-white font-semibold text-base tracking-wide transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#d4822f] active:scale-[0.98]"
          >
            Zu den Terminen
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

    </BaseLayout>
  );
}

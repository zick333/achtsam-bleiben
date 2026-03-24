import { getAllBlogPosts } from '@/lib/content';
import { BaseLayout } from '@/components/BaseLayout';
import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = generatePageMetadata(
  'Wissen über Meditation',
  'Artikel und Wissenswertes über Meditation, Achtsamkeit und Meditationstechniken',
  'meditationswissen'
);

export default function MeditationswissenPage() {
  const posts = getAllBlogPosts();
  const [featured, ...rest] = posts;

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
              Wissen · {posts.length} Artikel
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 max-w-3xl">
            Meditations-<br />wissen
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed mb-8">
            Hintergründe, Techniken und Impulse rund um Meditation
            und Achtsamkeit — zum Lesen und Vertiefen.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">
            <Link href="/" className="hover:text-white/60 transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            Meditationswissen
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="mb-10">
              <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A]">
                Aktueller Artikel
              </span>
            </div>
            <Link href={`/${featured.slug}/`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Image */}
                <div className="p-2 rounded-[2rem] ring-1 ring-black/5 bg-stone-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-black/10">
                  <div className="relative aspect-[4/3] rounded-[calc(2rem-0.5rem)] overflow-hidden"
                    style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), 0 20px 60px rgba(14,11,9,0.10)' }}>
                    {featured.frontmatter.featuredImage && (
                      <Image
                        src={featured.frontmatter.featuredImage}
                        alt={featured.frontmatter.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02]"
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1410] leading-tight group-hover:text-[#E8913A] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    {featured.frontmatter.title}
                  </h2>
                  {featured.frontmatter.description && (
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {featured.frontmatter.description}
                    </p>
                  )}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="inline-flex items-center gap-2 text-[#E8913A] font-medium text-sm tracking-wide">
                      Artikel lesen
                      <svg className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── POSTS GRID ── */}
      <section className="py-16 md:py-24 bg-stone-50 border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="mb-12">
            <span className="text-[13px] uppercase tracking-[0.14em] font-semibold text-[#E8913A] block mb-3">
              Alle Artikel
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1410] leading-tight">
              Weitere Beiträge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {rest.map(({ frontmatter, slug }) => (
              <Link
                key={slug}
                href={`/${slug}/`}
                className="group block"
              >
                <article>
                  {/* Image */}
                  <div className="p-1.5 rounded-[1.5rem] ring-1 ring-black/5 bg-white mb-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:ring-black/10">
                    <div className="relative aspect-[4/3] rounded-[calc(1.5rem-0.375rem)] overflow-hidden"
                      style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)' }}>
                      {frontmatter.featuredImage ? (
                        <Image
                          src={frontmatter.featuredImage}
                          alt={frontmatter.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="w-full h-full bg-stone-100" />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-[#1C1410] leading-snug mb-3 group-hover:text-[#E8913A] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    {frontmatter.title}
                  </h3>

                  {/* Read link */}
                  <span className="inline-flex items-center gap-1.5 text-[13px] uppercase tracking-[0.12em] font-semibold text-stone-400 group-hover:text-[#E8913A] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    Lesen
                    <svg className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </BaseLayout>
  );
}

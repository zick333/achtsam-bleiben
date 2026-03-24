import { getAllBlogPosts, getPageContent } from '@/lib/content';
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
  const page = getPageContent('meditationswissen');
  const posts = getAllBlogPosts();

  return (
    <BaseLayout>
      <section className="relative py-24 md:py-32" style={{ backgroundColor: '#282828' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={page?.frontmatter.featuredImage || '/images/meditation-hintergrundbild1.jpg'}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(128,128,128,0.1)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Alle Beiträge
          </h1>
          <p className="text-sm text-gray-300">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(({ frontmatter, slug }, index) => {
            const textLeft = Math.floor(index / 2) % 2 === 0;
            return (
              <article key={slug} className="flex overflow-hidden" style={{ minHeight: '240px' }}>
                <div className={`w-1/2 flex flex-col justify-center p-6 bg-white ${textLeft ? 'order-1' : 'order-2'}`}>
                  <h2 className="text-[20px] mb-4 leading-snug">
                    <Link href={`/${slug}/`} className="text-[#282828] hover:text-[#f16f23] no-underline hover:no-underline transition-colors duration-200">
                      {frontmatter.title}
                    </Link>
                  </h2>
                  <Link
                    href={`/${slug}/`}
                    className="inline-block self-start text-[16px] font-bold uppercase tracking-wide px-4 py-2 bg-black hover:bg-[#f16f23] text-white transition-colors duration-200"
                  >
                    ERFAHRE MEHR
                  </Link>
                </div>
                <div className={`w-1/2 ${textLeft ? 'order-2' : 'order-1'}`}>
                  {frontmatter.featuredImage && (
                    <Link href={`/${slug}/`} className="block h-full">
                      <img
                        src={frontmatter.featuredImage}
                        alt={frontmatter.title}
                        className="w-full h-full object-cover block"
                        style={{ minHeight: '240px' }}
                      />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </BaseLayout>
  );
}

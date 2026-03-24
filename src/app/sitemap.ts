import { MetadataRoute } from 'next';
import { getAllBlogSlugs, getAllEventSlugs } from '@/lib/content';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.achtsam-bleiben.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const pages = [
    { slug: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { slug: 'meditationstermine-in-frankfurt', priority: 0.9, changeFrequency: 'weekly' as const },
    { slug: 'meditationswissen', priority: 0.9, changeFrequency: 'weekly' as const },
    { slug: 'meine-philosophie-beim-meditieren', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'empfehlungen-meditationslehrer', priority: 0.7, changeFrequency: 'monthly' as const },
    { slug: 'rueckmeldungen', priority: 0.7, changeFrequency: 'monthly' as const },
    { slug: 'meine-coaching-philosophie', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'persoenlichkeits-coaching-in-frankfurt', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'resilienz-coaching-in-frankfurt', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'resilienz-training-fuer-unternehmen', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'achtsamkeitstraining-fuer-unternehmen', priority: 0.8, changeFrequency: 'monthly' as const },
    { slug: 'ueber-mich', priority: 0.7, changeFrequency: 'monthly' as const },
    { slug: 'kontakt', priority: 0.7, changeFrequency: 'monthly' as const },
    { slug: 'impressum', priority: 0.3, changeFrequency: 'yearly' as const },
    { slug: 'datenschutzerklaerung', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const pageEntries: MetadataRoute.Sitemap = pages.map(({ slug, priority, changeFrequency }) => ({
    url: slug === '' ? BASE_URL + '/' : `${BASE_URL}/${slug}/`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Blog posts
  const blogSlugs = getAllBlogSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Events
  const eventSlugs = getAllEventSlugs();
  const eventEntries: MetadataRoute.Sitemap = eventSlugs.map((slug) => ({
    url: `${BASE_URL}/meditation/${slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...pageEntries, ...blogEntries, ...eventEntries];
}

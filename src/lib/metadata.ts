import { Metadata } from 'next';

const BASE_URL = 'https://achtsam-bleiben.de';
const SITE_NAME = 'Achtsam Bleiben';
const DEFAULT_DESCRIPTION = 'Meditation und Achtsamkeit in Frankfurt - Meditationskurse, Coaching und Workshops mit Holm Zickermann';

interface MetadataOptions {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

export function generateMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image,
  type = 'website',
  publishedTime,
  author,
}: MetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const imageUrl = image ? `${BASE_URL}${image}` : `${BASE_URL}/images/logo-desktop.jpg`;

  return {
    title: `${title} - ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} - ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime && {
        publishedTime,
        authors: author ? [author] : undefined,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
  };
}

export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string,
  date?: string,
  author?: string
): Metadata {
  return generateMetadata({
    title,
    description,
    path: `/${slug}/`,
    image,
    type: 'article',
    publishedTime: date,
    author,
  });
}

export function generatePageMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string
): Metadata {
  const path = slug === '' ? '/' : `/${slug}/`;
  return generateMetadata({
    title,
    description,
    path,
    image,
  });
}

export function generateEventMetadata(
  title: string,
  description: string,
  slug: string,
  date?: string
): Metadata {
  return generateMetadata({
    title,
    description,
    path: `/meditation/${slug}/`,
    type: 'website',
    publishedTime: date,
  });
}

export { BASE_URL, SITE_NAME, DEFAULT_DESCRIPTION };

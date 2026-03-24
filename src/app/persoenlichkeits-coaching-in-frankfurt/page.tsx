import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Persönlichkeits-Coaching in Frankfurt',
  'Achtsamkeitsbasiertes Persönlichkeits-Coaching in Frankfurt',
  'persoenlichkeits-coaching-in-frankfurt'
);

export default function CoachingPage() {
  const page = getPageContent('persoenlichkeits-coaching-in-frankfurt');

  if (!page) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = page;

  return (
    <ContentPage
      title={frontmatter.title}
      description={frontmatter.description}
      heroImage={frontmatter.featuredImage}
      content={content}
    />
  );
}

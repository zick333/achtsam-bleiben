import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Meine Coaching-Philosophie',
  'Meine Coaching-Philosophie für achtsamkeitsbasiertes Coaching in Frankfurt',
  'meine-coaching-philosophie'
);

export default function Page() {
  const page = getPageContent('meine-coaching-philosophie');

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

import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Resilienz-Coaching in Frankfurt',
  'Achtsamkeitsbasiertes Resilienz-Coaching in Frankfurt',
  'resilienz-coaching-in-frankfurt'
);

export default function Page() {
  const page = getPageContent('resilienz-coaching-in-frankfurt');

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

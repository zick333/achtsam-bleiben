import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Achtsamkeitstraining für Unternehmen',
  'Achtsamkeitstraining und Meditation für Unternehmen und Teams in Frankfurt',
  'achtsamkeitstraining-fuer-unternehmen'
);

export default function Page() {
  const page = getPageContent('achtsamkeitstraining-fuer-unternehmen');

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

import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Empfohlene Meditationslehrer',
  'Empfehlungen für andere Meditationslehrer und Meditationsangebote',
  'empfehlungen-meditationslehrer'
);

export default function Page() {
  const page = getPageContent('empfehlungen-meditationslehrer');

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

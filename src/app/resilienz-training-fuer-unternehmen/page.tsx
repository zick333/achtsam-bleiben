import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Resilienz-Training für Unternehmen',
  'Resilienz-Training und Achtsamkeitstraining für Unternehmen in Frankfurt',
  'resilienz-training-fuer-unternehmen'
);

export default function Page() {
  const page = getPageContent('resilienz-training-fuer-unternehmen');

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

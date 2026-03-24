import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Meine Philosophie beim Meditieren',
  'Meine Meditationsphilosophie und warum ich Meditationen in Frankfurt anbiete',
  'meine-philosophie-beim-meditieren'
);

export default function Page() {
  const page = getPageContent('meine-philosophie-beim-meditieren');

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

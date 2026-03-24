import { getPageContent } from '@/lib/content';
import { ContentPage } from '@/components/ContentPage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Was sagen die Teilnehmer?',
  'Rückmeldungen und Erfahrungen der Teilnehmer von Meditationskursen',
  'rueckmeldungen'
);

export default function Page() {
  const page = getPageContent('rueckmeldungen');

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

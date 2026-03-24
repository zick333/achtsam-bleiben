import { getPageContent } from '@/lib/content';
import { HomePage } from '@/components/HomePage';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Meditieren in Frankfurt',
  'Meditation und Achtsamkeit in Frankfurt - Meditationskurse, Coaching und Workshops mit Holm Zickermann',
  '',
  '/images/logo-desktop.jpg'
);

export default function HomePageRoute() {
  const page = getPageContent('index');

  if (!page) {
    return <div>Content not found</div>;
  }

  return <HomePage frontmatter={page.frontmatter} />;
}

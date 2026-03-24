import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Meditation leicht gemacht: Übungen für Anfänger, Kinder und Menschen unter Stress',
  'Einfache Meditationsübungen für verschiedene Zielgruppen',
  'meditation-leicht-gemacht-uebungen-fuer-anfaenger-kinder-und-menschen-unter-stress',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('meditation-leicht-gemacht-uebungen-fuer-anfaenger-kinder-und-menschen-unter-stress');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

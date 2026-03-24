import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Finde deine Ruhe: Wie einfache Hilfsmittel deine Meditation vertiefen',
  'Entdecke Meditationshilfsmittel wie Kissen, Mala-Perlen und Klangschalen',
  'finde-deine-ruhe-wie-einfache-hilfsmittel-deine-meditation-vertiefen',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const slug = 'finde-deine-ruhe-wie-einfache-hilfsmittel-deine-meditation-vertiefen';
  const post = getBlogPost(slug);
  if (!post) return <div>Content not found</div>;
  const { frontmatter, content } = post;
  return <BlogPost frontmatter={frontmatter} content={content} slug={slug} />;
}

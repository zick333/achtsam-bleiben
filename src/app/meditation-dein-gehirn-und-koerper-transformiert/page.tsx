import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Wie Meditation dein Gehirn und deinen Körper nachhaltig transformiert',
  'Wissenschaftliche Erkenntnisse über die Auswirkungen von Meditation auf Gehirn und Körper',
  'meditation-dein-gehirn-und-koerper-transformiert',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('meditation-dein-gehirn-und-koerper-transformiert');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

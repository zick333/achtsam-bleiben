import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Mögliche Gefahren von Achtsamkeit und Meditation',
  'Erfahre über mögliche Risiken und Gefahren von Meditation und Achtsamkeitspraktiken',
  'moegliche-gefahren-von-achtsamkeit-und-meditation',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('moegliche-gefahren-von-achtsamkeit-und-meditation');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

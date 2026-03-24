import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Technologie trifft Achtsamkeit: So verändert die moderne Welt die Meditation',
  'Wie Technologie und Apps die Meditationspraxis verändern',
  'technologie-trifft-achtsamkeit-so-veraendert-die-moderne-welt-die-meditation',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('technologie-trifft-achtsamkeit-so-veraendert-die-moderne-welt-die-meditation');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

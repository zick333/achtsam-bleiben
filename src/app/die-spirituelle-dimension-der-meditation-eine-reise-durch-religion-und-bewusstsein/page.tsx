import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Die spirituelle Dimension der Meditation: Eine Reise durch Religion und Bewusstsein',
  'Entdecke die spirituellen Aspekte der Meditation in verschiedenen religiösen Traditionen',
  'die-spirituelle-dimension-der-meditation-eine-reise-durch-religion-und-bewusstsein',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('die-spirituelle-dimension-der-meditation-eine-reise-durch-religion-und-bewusstsein');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

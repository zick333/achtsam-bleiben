import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Meditationstechniken: Ein Leitfaden zu den effektivsten Methoden',
  'Entdecke die effektivsten Meditationstechniken und finde die richtige Methode für dich',
  'meditationstechniken-leitfaden-effektivste-meditationsmethoden',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('meditationstechniken-leitfaden-effektivste-meditationsmethoden');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'FAQ & Einsteigertipps zur Meditation',
  'Häufige Fragen und Tipps für Meditationsanfänger',
  'faq-einsteigertipps-zur-meditation',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('faq-einsteigertipps-zur-meditation');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

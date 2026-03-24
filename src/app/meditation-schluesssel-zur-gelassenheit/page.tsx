import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Der Schlüssel zu Gelassenheit: Was du über Meditation wissen solltest',
  'Ein umfassender Leitfaden über Meditation, ihre Geschichte und wissenschaftliche Vorteile',
  'meditation-schluesssel-zur-gelassenheit',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('meditation-schluesssel-zur-gelassenheit');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

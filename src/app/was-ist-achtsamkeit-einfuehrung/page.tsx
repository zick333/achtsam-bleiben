import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Was ist Achtsamkeit?',
  'Achtsamkeit bedeutet, den gegenwärtigen Moment bewusst wahrzunehmen, ohne zu urteilen.',
  'was-ist-achtsamkeit-einfuehrung',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('was-ist-achtsamkeit-einfuehrung');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return (
    <BlogPost
      frontmatter={frontmatter}
      content={content}
    />
  );
}

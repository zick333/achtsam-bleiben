import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Kann Meditation zu mehr Egoismus führen?',
  'Eine kritische Betrachtung der Frage, ob Meditation zu mehr Egoismus führen kann',
  'kann-meditation-zu-mehr-egoismus-fuehren',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const slug = 'kann-meditation-zu-mehr-egoismus-fuehren';
  const post = getBlogPost(slug);
  if (!post) return <div>Content not found</div>;
  const { frontmatter, content } = post;
  return <BlogPost frontmatter={frontmatter} content={content} slug={slug} />;
}

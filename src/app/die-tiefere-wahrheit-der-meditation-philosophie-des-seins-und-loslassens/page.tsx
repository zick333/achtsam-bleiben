import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Die tiefere Wahrheit der Meditation: Philosophie des Seins und Loslassens',
  'Philosophische Grundlagen der Meditation und das Konzept des Loslassens',
  'die-tiefere-wahrheit-der-meditation-philosophie-des-seins-und-loslassens',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const slug = 'die-tiefere-wahrheit-der-meditation-philosophie-des-seins-und-loslassens';
  const post = getBlogPost(slug);
  if (!post) return <div>Content not found</div>;
  const { frontmatter, content } = post;
  return <BlogPost frontmatter={frontmatter} content={content} slug={slug} />;
}

import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Fortgeschrittene Meditationspraktiken: Tiefere Ebenen des Bewusstseins erforschen',
  'Fortgeschrittene Techniken wie Samadhi, Trance und luzides Träumen',
  'fortgeschrittene-meditationspraktiken-tiefere-ebenen-des-bewusstseins-erforschen',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const slug = 'fortgeschrittene-meditationspraktiken-tiefere-ebenen-des-bewusstseins-erforschen';
  const post = getBlogPost(slug);
  if (!post) return <div>Content not found</div>;
  const { frontmatter, content } = post;
  return <BlogPost frontmatter={frontmatter} content={content} slug={slug} />;
}

import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Eintauchen in die Welt der Meditation: Die besten Bücher, Podcasts und Apps im Überblick',
  'Die besten Ressourcen für Meditation: Bücher, Podcasts und Apps',
  'eintauchen-in-die-welt-der-meditation-die-besten-buecher-podcasts-und-apps-im-ueberblick',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const slug = 'eintauchen-in-die-welt-der-meditation-die-besten-buecher-podcasts-und-apps-im-ueberblick';
  const post = getBlogPost(slug);
  if (!post) return <div>Content not found</div>;
  const { frontmatter, content } = post;
  return <BlogPost frontmatter={frontmatter} content={content} slug={slug} />;
}

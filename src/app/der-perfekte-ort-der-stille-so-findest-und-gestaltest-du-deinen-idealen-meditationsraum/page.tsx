import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Der perfekte Ort der Stille: So findest und gestaltest du deinen idealen Meditationsraum',
  'Tipps zur Gestaltung deines idealen Meditationsraums',
  'der-perfekte-ort-der-stille-so-findest-und-gestaltest-du-deinen-idealen-meditationsraum',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const slug = 'der-perfekte-ort-der-stille-so-findest-und-gestaltest-du-deinen-idealen-meditationsraum';
  const post = getBlogPost(slug);
  if (!post) return <div>Content not found</div>;
  const { frontmatter, content } = post;
  return <BlogPost frontmatter={frontmatter} content={content} slug={slug} />;
}

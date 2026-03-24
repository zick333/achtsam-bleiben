import { getBlogPost } from '@/lib/content';
import { BlogPost } from '@/components/BlogPost';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata = generateBlogMetadata(
  'Vom Chaos zur inneren Ruhe: Wie du typische Meditationsblockaden meisterst',
  'Strategien zur Überwindung von Meditationshindernissen und Blockaden',
  'vom-chaos-zur-inneren-ruhe-wie-du-typische-meditationsblockaden-meisterst',
  'Holm Zickermann'
);

export default function BlogPostPage() {
  const post = getBlogPost('vom-chaos-zur-inneren-ruhe-wie-du-typische-meditationsblockaden-meisterst');

  if (!post) {
    return <div>Content not found</div>;
  }

  const { frontmatter, content } = post;

  return <BlogPost frontmatter={frontmatter} content={content} />;
}

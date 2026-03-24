import { BaseLayout } from './BaseLayout';
import { ContentRenderer } from './ContentRenderer';
import { BlogFrontmatter } from '@/lib/types';

interface BlogPostProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogPost({ frontmatter, content }: BlogPostProps) {
  return (
    <BaseLayout>
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{frontmatter.title}</h1>

          {/* Description */}
          {frontmatter.description && (
            <p className="text-lg text-gray-600 mb-4">{frontmatter.description}</p>
          )}

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map(tag => (
                <span key={tag} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {frontmatter.featuredImage && (
        <div className="max-w-[1400px] mx-auto px-4 -mt-4 mb-8">
          <img
            src={frontmatter.featuredImage}
            alt={frontmatter.title}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Content */}
      <article className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          <ContentRenderer content={content} />
        </div>
      </article>
    </BaseLayout>
  );
}

'use client';

import { marked } from 'marked';

interface ContentRendererProps {
  content: string;
}

// Custom image renderer for WordPress-style figure/figcaption support
// Note: marked v5+ passes token object instead of separate parameters
const customRenderer = {
  image(token: { href: string; title: string | null; text: string }): string {
    const href = token.href || '';
    const title = token.title;
    const text = token.text || '';

    // Parse alignment from alt text (e.g., "alignleft: description")
    let alignment = '';
    let altText = text;

    if (altText.startsWith('alignleft:')) {
      alignment = 'alignleft';
      altText = altText.replace('alignleft:', '').trim();
    } else if (altText.startsWith('alignright:')) {
      alignment = 'alignright';
      altText = altText.replace('alignright:', '').trim();
    } else if (altText.startsWith('aligncenter:')) {
      alignment = 'aligncenter';
      altText = altText.replace('aligncenter:', '').trim();
    }

    // Escape special characters for safe HTML output
    const safeHref = href.replace(/"/g, '&quot;');
    const safeAlt = altText.replace(/"/g, '&quot;');
    const safeTitle = title ? title.replace(/"/g, '&quot;') : '';

    // If there's a title (caption), wrap in figure/figcaption
    if (title) {
      const figureClass = alignment ? `wp-caption ${alignment}` : 'wp-caption aligncenter';
      return `<figure class="${figureClass}">
        <img src="${safeHref}" alt="${safeAlt}" />
        <figcaption class="wp-caption-text">${safeTitle}</figcaption>
      </figure>`;
    }

    // No caption - return img, with alignment class only if specified
    if (alignment) {
      return `<img src="${safeHref}" alt="${safeAlt}" class="${alignment}" />`;
    }

    // Plain image - backward compatible default
    return `<img src="${safeHref}" alt="${safeAlt}" />`;
  }
};

// Configure marked with custom renderer
marked.use({
  breaks: true,
  gfm: true,
  renderer: customRenderer
});

export function ContentRenderer({ content }: ContentRendererProps) {
  const html = marked.parse(content) as string;

  return (
    <div
      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-amber-700 hover:prose-a:text-amber-800 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-img:rounded-lg prose-img:shadow-md"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

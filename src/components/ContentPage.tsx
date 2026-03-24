import Image from 'next/image';
import { BaseLayout } from './BaseLayout';
import { ContentRenderer } from './ContentRenderer';

interface ContentPageProps {
  title: string;
  description?: string;
  heroImage?: string;
  content: string;
}

export function ContentPage({ title, description, heroImage, content }: ContentPageProps) {
  return (
    <BaseLayout>
      {/* Conditional hero: full banner if heroImage exists, minimal header if not */}
      {heroImage ? (
        /* Hero - WordPress-style full background image with overlay */
        <section className="relative bg-gray-700 py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay - matches WordPress rgba(128,128,128,0.1) style */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative max-w-[1400px] mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </section>
      ) : (
        /* Minimal header - no hero image, simple title like WordPress pages without banner */
        <section className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-gray-600 mt-2">
                {description}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Content - less top padding when no hero */}
      <section className={`max-w-[1400px] mx-auto px-4 ${heroImage ? 'py-12 md:py-16' : 'pt-6 pb-12 md:pt-8 md:pb-16'}`}>
        <ContentRenderer content={content} />
      </section>
    </BaseLayout>
  );
}

import { getEvents, getPageContent } from '@/lib/content';
import { BaseLayout } from '@/components/BaseLayout';
import { ContentRenderer } from '@/components/ContentRenderer';
import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = generatePageMetadata(
  'Meditationstermine in Frankfurt',
  'Aktuelle Meditationstermine in Frankfurt - Regelmäßige Meditationsabende und besondere Veranstaltungen',
  'meditationstermine-in-frankfurt'
);

export default function MeditationsterminePage() {
  const page = getPageContent('meditationstermine-in-frankfurt');
  const events = getEvents();

  const sortedEvents = [...events].sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = sortedEvents.filter(e => new Date(e.date) >= today);
  const pastEvents = sortedEvents.filter(e => new Date(e.date) < today && e.status === 'archive');

  const statusColors = {
    upcoming: 'bg-purple-100 text-purple-800',
    recurring: 'bg-green-100 text-green-800',
    archive: 'bg-gray-100 text-gray-600',
  };

  const statusLabels = {
    upcoming: 'Kommend',
    recurring: 'Regelmäßig',
    archive: 'Archiv',
  };

  return (
    <BaseLayout>
      <section className="relative bg-gray-700 py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={page?.frontmatter.featuredImage || '/images/meditation-hintergrundbild1.jpg'}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {page?.frontmatter.title || 'Meditationstermine in Frankfurt'}
          </h1>
          {page?.frontmatter.description && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{page.frontmatter.description}</p>
          )}
        </div>
      </section>

      {page?.content && (
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-lg max-w-none">
            <ContentRenderer content={page.content} />
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Kommende Termine</h2>

        {upcomingEvents.length === 0 ? (
          <p className="text-gray-600">Derzeit sind keine Termine geplant.</p>
        ) : (
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <Link
                key={event.slug}
                href={`/meditation/${event.slug}/`}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs ${statusColors[event.status]}`}>
                        {statusLabels[event.status]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{event.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-gray-900">{event.date}</div>
                    <div className="text-gray-500">{event.time} Uhr</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {pastEvents.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Archiv</h2>
          <div className="space-y-4">
            {pastEvents.map(event => (
              <Link
                key={event.slug}
                href={`/meditation/${event.slug}/`}
                className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">{event.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </BaseLayout>
  );
}

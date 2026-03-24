import { BaseLayout } from './BaseLayout';
import { Event } from '@/lib/types';

interface EventDetailProps {
  event: Event;
}

export function EventDetail({ event }: EventDetailProps) {
  const statusLabel = {
    upcoming: 'Kommend',
    recurring: 'Regelmäßig',
    archive: 'Archiv',
  }[event.status] || event.status;

  return (
    <BaseLayout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              {statusLabel}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {event.images?.featured && (
              <img
                src={event.images.featured}
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
            )}
            <div className="prose prose-lg">
              <p>{event.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details Card */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Datum</dt>
                  <dd className="font-medium text-gray-900">{event.date}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Uhrzeit</dt>
                  <dd className="font-medium text-gray-900">{event.time}</dd>
                </div>
                {event.cost && (
                  <div>
                    <dt className="text-gray-500">Kosten</dt>
                    <dd className="font-medium text-gray-900">{event.cost}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-gray-500">Ort</dt>
                  <dd className="font-medium text-gray-900">{event.location}</dd>
                </div>
                {event.organizer && (
                  <div>
                    <dt className="text-gray-500">Veranstalter</dt>
                    <dd className="font-medium text-gray-900">{event.organizer}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {event.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

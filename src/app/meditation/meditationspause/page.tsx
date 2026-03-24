import { getEvent } from '@/lib/content';
import { EventDetail } from '@/components/EventDetail';
import { generateEventMetadata } from '@/lib/metadata';

export const metadata = generateEventMetadata(
  'Meditationspause',
  'Information zur aktuellen Meditationspause',
  'meditationspause'
);

export default function EventPage() {
  const event = getEvent('meditationspause');

  if (!event) {
    return <div>Event not found</div>;
  }

  return <EventDetail event={event} />;
}

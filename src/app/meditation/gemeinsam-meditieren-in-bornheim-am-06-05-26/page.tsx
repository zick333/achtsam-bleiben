import { getEvent } from '@/lib/content';
import { EventDetail } from '@/components/EventDetail';
import { generateEventMetadata } from '@/lib/metadata';

export const metadata = generateEventMetadata(
  'Gemeinsam Meditieren in Bornheim',
  'Geleitete Meditation für Anfänger und Erfahrene in Frankfurt-Bornheim',
  'gemeinsam-meditieren-in-bornheim-am-06-05-26',
  '2026-05-06'
);

export default function EventPage() {
  const event = getEvent('gemeinsam-meditieren-in-bornheim-am-06-05-26');

  if (!event) {
    return <div>Event not found</div>;
  }

  return <EventDetail event={event} />;
}

import { getEvent } from '@/lib/content';
import { EventDetail } from '@/components/EventDetail';
import { generateEventMetadata } from '@/lib/metadata';

export const metadata = generateEventMetadata(
  'Meditationsabend mit Mae Chee Brigitte',
  'Besonderer Meditationsabend mit der buddhistischen Nonne Mae Chee Brigitte Schrottenbacher',
  'meditationsabend-mcbrigitte-27-05-26',
  '2026-05-27'
);

export default function EventPage() {
  const event = getEvent('meditationsabend-mcbrigitte-27-05-26');

  if (!event) {
    return <div>Event not found</div>;
  }

  return <EventDetail event={event} />;
}

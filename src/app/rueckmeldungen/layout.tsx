import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Was sagen die Teilnehmer?',
  'Rückmeldungen und Erfahrungen der Teilnehmer von Meditationskursen und Coaching',
  'rueckmeldungen'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

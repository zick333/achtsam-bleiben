import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Meine Coaching-Philosophie',
  'Achtsamkeitsbasiertes Coaching mit Kopf, Herz und Körper – Frankfurt',
  'meine-coaching-philosophie'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

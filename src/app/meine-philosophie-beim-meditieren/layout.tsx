import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Meine Meditations-Philosophie',
  'Konfessionslose Meditation mit Herz und Achtsamkeit – Frankfurt',
  'meine-philosophie-beim-meditieren'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

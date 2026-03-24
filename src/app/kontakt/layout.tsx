import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Kontakt',
  'Kontaktieren Sie mich für Meditation und Coaching in Frankfurt',
  'kontakt'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

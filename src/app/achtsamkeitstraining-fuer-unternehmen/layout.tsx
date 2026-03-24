import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Achtsamkeitstraining für Unternehmen',
  'Achtsamkeitstraining und Meditation für Unternehmen und Teams in Frankfurt',
  'achtsamkeitstraining-fuer-unternehmen'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

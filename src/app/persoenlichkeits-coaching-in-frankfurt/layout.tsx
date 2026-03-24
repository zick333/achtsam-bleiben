import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Persönlichkeits-Coaching in Frankfurt',
  'Achtsamkeitsbasiertes Persönlichkeits-Coaching in Frankfurt',
  'persoenlichkeits-coaching-in-frankfurt'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

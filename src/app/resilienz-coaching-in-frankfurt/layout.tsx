import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Resilienz-Coaching in Frankfurt',
  'Achtsamkeitsbasiertes Resilienz-Coaching in Frankfurt – innere Widerstandskraft aufbauen',
  'resilienz-coaching-in-frankfurt'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

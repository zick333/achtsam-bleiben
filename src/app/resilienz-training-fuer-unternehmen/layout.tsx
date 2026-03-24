import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata(
  'Resilienz-Training für Unternehmen',
  'Resilienz-Training für Teams und Führungskräfte in Frankfurt – praxisnah, nachhaltig, wirkungsvoll.',
  'resilienz-training-fuer-unternehmen'
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

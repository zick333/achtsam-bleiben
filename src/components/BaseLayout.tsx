import { Header } from './Header';
import { Footer } from './Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

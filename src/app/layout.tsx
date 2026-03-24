import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://achtsam-bleiben.de'),
  title: {
    default: 'Achtsam Bleiben - Meditation und Achtsamkeit in Frankfurt',
    template: '%s - Achtsam Bleiben',
  },
  description: 'Meditation und Achtsamkeit in Frankfurt - Meditationskurse, Coaching und Workshops mit Holm Zickermann',
  keywords: ['Meditation', 'Achtsamkeit', 'Frankfurt', 'Coaching', 'Mindfulness', 'Resilienz'],
  authors: [{ name: 'Holm Zickermann' }],
  creator: 'Holm Zickermann',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Achtsam Bleiben',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

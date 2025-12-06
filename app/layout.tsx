import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Rechtsanwalt Andreas Kienast | Insolvenzrecht Hamburg',
  description:
    'Kanzlei für Insolvenzrecht, Sanierungen und Restrukturierungen in Hamburg. Beratung für Unternehmen und Geschäftsleitungen.',
  metadataBase: new URL('https://www.kanzlei-kienast.de'),
  openGraph: {
    title: 'Rechtsanwalt Andreas Kienast | Insolvenzrecht Hamburg',
    description:
      'Beratung für Unternehmen in Krisensituationen: Insolvenzverfahren, Schutzschirm, Sanierungskonzepte.',
    url: 'https://www.kanzlei-kienast.de',
    siteName: 'Kanzlei Kienast',
    locale: 'de_DE',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanzlei Kienast',
    description: 'Insolvenzrechtliche Beratung für Unternehmen in Hamburg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-stone-light">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

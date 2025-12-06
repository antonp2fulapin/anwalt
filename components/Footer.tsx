import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-10 mt-12">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="heading-serif text-2xl mb-3">Rechtsanwalt Andreas Kienast</h3>
          <p className="text-sm text-stone-light/90 leading-relaxed">
            Insolvenzrechtliche Beratung, Sanierungen und Restrukturierungen mit hanseatischer Gelassenheit und klarer Struktur.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Kontakt</p>
          <p>Alte Rabenstraße 12B</p>
          <p>20148 Hamburg</p>
          <p>Telefon: +49 0000 00000</p>
          <p>E-Mail: kontakt@kanzlei-kienast.de</p>
          <Link href="/kontakt" className="underline text-gold">
            Kontaktformular
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Rechtliches</p>
          <div className="flex flex-col gap-2">
            <Link href="/impressum" className="hover:underline">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:underline">
              Datenschutzerklärung
            </Link>
            <Link href="/agb" className="hover:underline">
              AGB
            </Link>
            <Link href="/widerruf" className="hover:underline">
              Widerrufsbelehrung
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

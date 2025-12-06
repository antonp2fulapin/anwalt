import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <Container className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="uppercase tracking-[0.2em] text-gold text-sm">Rechtsanwalt Andreas Kienast</p>
          <h1 className="heading-serif text-4xl md:text-5xl font-semibold leading-tight">
            Insolvenzrecht, Sanierung und Restrukturierung für Unternehmen in Hamburg
          </h1>
          <p className="text-lg text-stone-light/90 max-w-2xl">
            Diskrete, pragmatische Begleitung von Geschäftsführern und Gesellschaftern in anspruchsvollen wirtschaftlichen
            Situationen. Klare Kommunikation, belastbare Strategien und verantwortungsvolle Umsetzung.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-primary">Termin anfragen</Link>
            <Link href="/leistungen" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
              Leistungen im Überblick
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-stone-light/80">
            <div>
              <p className="font-semibold text-white">Standort</p>
              <p>Alte Rabenstraße 12B · 20148 Hamburg</p>
            </div>
            <div>
              <p className="font-semibold text-white">Schwerpunkte</p>
              <p>Insolvenzverfahren · Schutzschirm · Sanierungskonzepte</p>
            </div>
          </div>
        </div>
        <div className="flex-1 grid gap-4">
          <div className="card bg-white/95 text-primary">
            <h3 className="heading-serif text-2xl mb-2">Verlässliche Beratung</h3>
            <p className="text-muted leading-relaxed">
              Individuelle Begleitung von der Krisenfrüherkennung über Verhandlungen mit Gläubigern bis hin zu gerichtlichen
              Verfahren. Klar strukturierte Abstimmung mit Geschäftsführung und Stakeholdern.
            </p>
          </div>
          <div className="relative h-48 md:h-56 rounded-lg overflow-hidden border border-white/20 shadow-subtle">
            <Image src="/images/hamburg-office.jpg" alt="Hamburger Kanzlei" fill className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}

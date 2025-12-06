import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Für Unternehmen | Kanzlei Kienast',
  description: 'Checklisten, Maßnahmen und Ansprechpartner für Unternehmen in der Krise.'
};

const checklist = [
  'Aktuelle Liquiditätsrechnung und Finanzierungsbedarf dokumentieren.',
  'Gesellschafter und Beirat über die Lage informieren und Beschlüsse vorbereiten.',
  'Vertragsbestand (Mieten, Leasing, Lieferanten) strukturieren und priorisieren.',
  'Fristen für Insolvenzantrag oder Schutzschirm prüfen.',
  'Gesprächsleitfäden für Banken und Hauptlieferanten vorbereiten.'
];

export default function UnternehmenPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading
          title="Für Unternehmen"
          subtitle="Pragmatische Hilfen für Geschäftsleitungen, die kurzfristig Struktur und Klarheit benötigen."
        />
        <div className="relative h-56 rounded-lg overflow-hidden border border-stone shadow-subtle">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80&sat=-8"
            alt="Arbeitsplatz mit Checkliste und Kalender"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-3">
            <p className="font-semibold text-primary">Checkliste</p>
            <ul className="list-disc list-inside text-muted space-y-2 text-sm">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card space-y-3">
            <p className="font-semibold text-primary">Downloads</p>
            <p className="text-muted text-sm">Beispielhafte Unterlagen stehen als Platzhalter bereit.</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="#" className="underline text-primary">
                Muster-Checkliste (PDF)
              </Link>
              <Link href="#" className="underline text-primary">
                Gesprächsvorbereitung Banken (PDF)
              </Link>
              <Link href="#" className="underline text-primary">
                Übersicht Fristen & Organpflichten (PDF)
              </Link>
            </div>
          </div>
        </div>
        <div className="card space-y-3">
          <p className="font-semibold text-primary">Kontakt</p>
          <p className="text-muted text-sm leading-relaxed">
            Für eine kurzfristige Abstimmung steht ein kurzer Telefontermin oder Videokonferenz zur Verfügung. Bitte halten Sie
            Basiszahlen und Ansprechpartner bereit.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex w-fit">
            Termin anfragen
          </Link>
        </div>
      </Container>
    </Section>
  );
}

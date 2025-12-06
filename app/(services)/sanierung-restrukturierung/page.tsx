import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import Image from 'next/image';

export const metadata = {
  title: 'Sanierungen & Restrukturierung | Kanzlei Kienast',
  description: 'Turnaround-Management, Neuaufstellung und Schutzschirmverfahren für mittelständische Unternehmen.'
};

const highlights = [
  {
    title: 'Turnaround-Management',
    description: 'Strukturierte Maßnahmenplanung, Priorisierung von Liquidität und Stabilisierung der Kernprozesse.'
  },
  {
    title: 'Neuaufstellung',
    description: 'Anpassung der Gesellschafts- und Finanzierungsstruktur, Vorbereitung von Investorenprozessen.'
  },
  {
    title: 'Begleitung von Schutzschirmverfahren',
    description: 'Antragsreife, Gläubigerkommunikation und Steuerung der Umsetzung mit dem Sachwalter.'
  }
];

export default function SanierungPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading
          title="Sanierungen & Restrukturierung"
          subtitle="Stabilisierung, Neuordnung und verantwortungsvolle Umsetzung mit enger Einbindung der Geschäftsleitung."
        />
        <div className="relative h-56 rounded-lg overflow-hidden border border-stone shadow-subtle">
          <Image
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1600&q=80&sat=-5"
            alt="Diagramme und Laptop für Restrukturierungskonzept"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="card space-y-2">
              <p className="font-semibold text-primary">{item.title}</p>
              <p className="text-muted leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="card space-y-3">
          <p className="font-semibold text-primary">Beispielhafter Ablauf</p>
          <ol className="list-decimal list-inside text-muted space-y-2 text-sm">
            <li>Analyse der Ausgangslage, Liquiditätsplanung und Stakeholder-Karte.</li>
            <li>Festlegung eines 100-Tage-Plans mit Verantwortlichkeiten.</li>
            <li>Einbindung von Finanzierungspartnern und Begleitung von Verhandlungen.</li>
            <li>Controlling der Umsetzung und laufende Berichterstattung an Gremien.</li>
          </ol>
        </div>
      </Container>
    </Section>
  );
}

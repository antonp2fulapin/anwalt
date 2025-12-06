import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { ServiceCard } from '@/components/ServiceCard';
import Image from 'next/image';

export const metadata = {
  title: 'Leistungen | Insolvenzrecht, Sanierung, Restrukturierung',
  description: 'Überblick über die Leistungen der Kanzlei Kienast für Unternehmen in Krisensituationen.'
};

const offers = [
  {
    title: 'Insolvenzverfahren',
    description: 'Begleitung von Insolvenzanträgen, Kommunikation mit Insolvenzverwaltern und Sicherung der Organpflichten.',
    href: '/insolvenzverfahren',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80&sat=-9',
    alt: 'Besprechungstisch mit Geschäftsführung während einer Beratung'
  },
  {
    title: 'Sanierungen & Restrukturierungen',
    description: 'Schutzschirmverfahren, Eigenverwaltung und operative Maßnahmen zur Stabilisierung des Unternehmens.',
    href: '/sanierung-restrukturierung',
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80&sat=-5',
    alt: 'Finanzberichte und Laptop für Restrukturierungsplanung'
  },
  {
    title: 'Liquiditätsengpässe',
    description: 'Sofortmaßnahmen zur Sicherung der Zahlungsfähigkeit, Erstellung von Liquiditätsplänen und Cash-Management.',
    href: '/unternehmen',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80&sat=-8',
    alt: 'Handschriftliche Notizen zu Liquiditätsplanung auf einem Tisch'
  },
  {
    title: 'Verhandlungen mit Gläubigern',
    description: 'Vorbereitung und Moderation von Gesprächen mit Banken, Lieferanten und Investoren.',
    href: '/unternehmen',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80&sat=-9',
    alt: 'Vertragsunterzeichnung und Handschlag in formellem Setting'
  },
  {
    title: 'Sanierungskonzepte',
    description: 'Erarbeitung tragfähiger Konzepte nach IDW S6-Grundsätzen und Umsetzungskontrolle.',
    href: '/sanierung-restrukturierung',
    image: 'https://images.unsplash.com/photo-1508387024700-9fe5c0b79c82?auto=format&fit=crop&w=1400&q=80&sat=-8',
    alt: 'Berichtsdokumente und Brille für Konzeptarbeit'
  },
  {
    title: 'Schutzschirmverfahren',
    description: 'Beratung zur Antragsreife, Verfahrenskoordination und Kommunikation mit dem Gericht.',
    href: '/insolvenzverfahren',
    image: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&w=1400&q=80&sat=-8',
    alt: 'Gerichtssaalbänke als Symbol für gerichtliche Verfahren'
  }
];

export default function LeistungenPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <Heading
              title="Leistungen"
              subtitle="Strukturiertes Vorgehen für Unternehmen in wirtschaftlich angespannten Situationen."
            />
            <p className="text-muted leading-relaxed">
              Jede Maßnahme wird mit klaren Verantwortlichkeiten, Terminen und Dokumentationspflichten hinterlegt. Der Fokus
              liegt auf rechtssicheren Entscheidungen und belastbaren Finanzgrundlagen.
            </p>
          </div>
          <div className="relative h-56 rounded-lg overflow-hidden border border-stone shadow-subtle">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80&sat=-9"
              alt="Besprechungstisch in einer Kanzlei"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { ServiceCard } from '@/components/ServiceCard';

export const metadata = {
  title: 'Leistungen | Insolvenzrecht, Sanierung, Restrukturierung',
  description: 'Überblick über die Leistungen der Kanzlei Kienast für Unternehmen in Krisensituationen.'
};

const offers = [
  {
    title: 'Insolvenzverfahren',
    description: 'Begleitung von Insolvenzanträgen, Kommunikation mit Insolvenzverwaltern und Sicherung der Organpflichten.',
    href: '/insolvenzverfahren'
  },
  {
    title: 'Sanierungen & Restrukturierungen',
    description: 'Schutzschirmverfahren, Eigenverwaltung und operative Maßnahmen zur Stabilisierung des Unternehmens.',
    href: '/sanierung-restrukturierung'
  },
  {
    title: 'Liquiditätsengpässe',
    description: 'Sofortmaßnahmen zur Sicherung der Zahlungsfähigkeit, Erstellung von Liquiditätsplänen und Cash-Management.',
    href: '/unternehmen'
  },
  {
    title: 'Verhandlungen mit Gläubigern',
    description: 'Vorbereitung und Moderation von Gesprächen mit Banken, Lieferanten und Investoren.',
    href: '/unternehmen'
  },
  {
    title: 'Sanierungskonzepte',
    description: 'Erarbeitung tragfähiger Konzepte nach IDW S6-Grundsätzen und Umsetzungskontrolle.',
    href: '/sanierung-restrukturierung'
  },
  {
    title: 'Schutzschirmverfahren',
    description: 'Beratung zur Antragsreife, Verfahrenskoordination und Kommunikation mit dem Gericht.',
    href: '/insolvenzverfahren'
  }
];

export default function LeistungenPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading
          title="Leistungen"
          subtitle="Strukturiertes Vorgehen für Unternehmen in wirtschaftlich angespannten Situationen."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';

export const metadata = {
  title: 'Impressum | Kanzlei Kienast',
  description: 'Impressum der Kanzlei Rechtsanwalt Andreas Kienast in Hamburg.'
};

export default function ImpressumPage() {
  return (
    <Section>
      <Container className="space-y-6">
        <Heading title="Impressum" />
        <div className="card space-y-3 text-muted text-sm">
          <p className="font-semibold text-primary">Verantwortlich</p>
          <p>Rechtsanwalt Andreas Kienast</p>
          <p>Alte Rabenstraße 12B</p>
          <p>20148 Hamburg</p>
          <p>Telefon: +49 0000 00000</p>
          <p>E-Mail: kontakt@kanzlei-kienast.de</p>
          <p className="font-semibold text-primary pt-2">Berufsbezeichnung</p>
          <p>Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)</p>
          <p className="font-semibold text-primary pt-2">Kammerzugehörigkeit</p>
          <p>Hanseatische Rechtsanwaltskammer Hamburg, Valentinskamp 88, 20355 Hamburg</p>
          <p className="font-semibold text-primary pt-2">Aufsichtsbehörde</p>
          <p>Hanseatische Rechtsanwaltskammer Hamburg</p>
          <p className="font-semibold text-primary pt-2">Umsatzsteuer-ID</p>
          <p>DE000000000 (Platzhalter)</p>
          <p className="font-semibold text-primary pt-2">Berufshaftpflichtversicherung</p>
          <p>Allianz Versicherungs-AG, 10900 Berlin, räumlicher Geltungsbereich: EU-Mitgliedsstaaten.</p>
          <p className="font-semibold text-primary pt-2">Verantwortlich für den Inhalt</p>
          <p>Rechtsanwalt Andreas Kienast</p>
        </div>
      </Container>
    </Section>
  );
}

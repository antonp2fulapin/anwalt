import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';

export const metadata = {
  title: 'AGB | Kanzlei Kienast',
  description: 'Allgemeine Geschäftsbedingungen als Platzhalter.'
};

export default function AgbPage() {
  return (
    <Section>
      <Container className="space-y-6">
        <Heading title="Allgemeine Geschäftsbedingungen" />
        <div className="card space-y-2 text-sm text-muted">
          <p>Die nachfolgenden AGB gelten als Platzhalter und werden im Mandatsverhältnis konkretisiert.</p>
          <p>1. Gegenstand: Rechtsberatungsleistungen im Bereich Insolvenzrecht, Sanierung und Restrukturierung.</p>
          <p>2. Vergütung: Nach individueller Vergütungsvereinbarung, mindestens gemäß RVG.</p>
          <p>3. Haftung: Beschränkt auf die Deckungssumme der Berufshaftpflichtversicherung, soweit gesetzlich zulässig.</p>
          <p>4. Vertraulichkeit: Sämtliche Informationen werden vertraulich behandelt.</p>
          <p>5. Gerichtsstand: Hamburg, sofern gesetzlich zulässig.</p>
        </div>
      </Container>
    </Section>
  );
}

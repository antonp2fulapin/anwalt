import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';

export const metadata = {
  title: 'Widerrufsbelehrung | Kanzlei Kienast',
  description: 'Widerrufsrecht für Verbraucher als Platzhalter.'
};

export default function WiderrufPage() {
  return (
    <Section>
      <Container className="space-y-6">
        <Heading title="Widerrufsbelehrung" />
        <div className="card space-y-2 text-sm text-muted">
          <p>Verbraucher haben das Recht, binnen 14 Tagen ohne Angabe von Gründen einen geschlossenen Vertrag zu widerrufen.</p>
          <p>
            Die Frist beginnt mit Vertragsschluss. Zur Ausübung genügt eine eindeutige Erklärung per Post oder E-Mail an die
            Kanzlei.
          </p>
          <p>Folgen des Widerrufs: Bereits erhaltene Zahlungen werden innerhalb von 14 Tagen erstattet.</p>
          <p>
            Vor Ablauf der Widerrufsfrist erbrachte Leistungen sind zu vergüten, wenn der Mandant ausdrücklich verlangt hat, dass
            die Tätigkeit vor Ablauf der Frist beginnen soll.
          </p>
        </div>
      </Container>
    </Section>
  );
}

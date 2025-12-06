import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import Image from 'next/image';

export const metadata = {
  title: 'Über die Kanzlei | Rechtsanwalt Andreas Kienast',
  description: 'Profil, Werte und Arbeitsweise der Kanzlei Kienast in Hamburg.'
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading title="Über die Kanzlei" subtitle="Hanseatische Kanzlei mit Schwerpunkt Insolvenzrecht und Restrukturierung." />
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Rechtsanwalt Andreas Kienast berät Unternehmen in Krisensituationen seit vielen Jahren. Grundlage sind eine klare
              Analyse, strukturierte Dokumentation und die enge Abstimmung mit der Geschäftsführung sowie Gesellschaftern.
            </p>
            <p>
              Die Kanzlei arbeitet bewusst schlank und bindet bei Bedarf steuerliche oder betriebswirtschaftliche Expertise ein.
              Ziel ist stets eine pragmatische Lösung, die Risiken minimiert und verlässliche Entscheidungsgrundlagen schafft.
            </p>
            <p>
              Werte: Unabhängigkeit, Vertraulichkeit, Zuverlässigkeit und respektvoller Umgang mit allen Beteiligten. Termine
              finden nach Vereinbarung in der Kanzlei an der Außenalster oder digital statt.
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-subtle border border-stone">
              <Image src="/images/kanzlei-portrait.jpg" alt="Rechtsanwalt Andreas Kienast" fill className="object-cover" />
            </div>
            <div className="card text-sm text-muted">
              <p className="font-semibold text-primary">Adresse</p>
              <p>Alte Rabenstraße 12B · 20148 Hamburg</p>
              <p>Telefon: +49 0000 00000</p>
              <p>E-Mail: kontakt@kanzlei-kienast.de</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

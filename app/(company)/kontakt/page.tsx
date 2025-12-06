import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { ContactForm } from '@/components/ContactForm';
import { MapEmbed } from '@/components/MapEmbed';

export const metadata = {
  title: 'Kontakt | Kanzlei Kienast',
  description: 'Kontaktformular, Öffnungszeiten und Anfahrt der Kanzlei Kienast in Hamburg.'
};

export default function KontaktPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading
          title="Kontakt"
          subtitle="Diskrete Erstberatung nach Terminvereinbarung. Termine in der Kanzlei an der Außenalster oder digital."
        />
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <ContactForm />
          <div className="space-y-4">
            <div className="card text-sm text-muted space-y-2">
              <p className="font-semibold text-primary">Kanzlei</p>
              <p>Rechtsanwalt Andreas Kienast</p>
              <p>Alte Rabenstraße 12B</p>
              <p>20148 Hamburg</p>
              <p>Telefon: +49 0000 00000</p>
              <p>E-Mail: kontakt@kanzlei-kienast.de</p>
              <p className="pt-2 font-semibold text-primary">Öffnungszeiten</p>
              <p>Montag bis Freitag: 9:00 – 18:00 Uhr</p>
              <p>Termine nach Vereinbarung</p>
            </div>
            <MapEmbed />
          </div>
        </div>
      </Container>
    </Section>
  );
}

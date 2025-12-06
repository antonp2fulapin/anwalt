import { Hero } from '@/components/Hero';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { ServiceCard } from '@/components/ServiceCard';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Kanzlei Kienast | Insolvenzrecht und Restrukturierung in Hamburg',
  description:
    'Seriöse insolvenzrechtliche Beratung für Unternehmen: Schutzschirmverfahren, Sanierungen und Restrukturierungen.',
  openGraph: {
    title: 'Kanzlei Kienast | Insolvenzrecht und Restrukturierung',
    description: 'Begleitung von Unternehmen in Krisenlagen mit klaren Strukturen und hanseatischer Ruhe.'
  }
};

const services = [
  {
    title: 'Insolvenzverfahren',
    description: 'Begleitung von Insolvenzanträgen, Abstimmung mit Insolvenzverwaltern und Sicherung der Geschäftsleitung.',
    href: '/insolvenzverfahren',
    image:
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=80&sat=-8',
    alt: 'Geordnete Aktenordner und Vertragsunterlagen auf einem Schreibtisch'
  },
  {
    title: 'Sanierungen & Restrukturierung',
    description: 'Stabilisierung, Schutzschirmverfahren und tragfähige Sanierungskonzepte für mittelständische Unternehmen.',
    href: '/sanierung-restrukturierung',
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80&sat=-5',
    alt: 'Geschäftsunterlagen mit Finanzdiagrammen für Restrukturierungsplanung'
  },
  {
    title: 'Beratung für Unternehmen',
    description: 'Checklisten, Liquiditätsmanagement und Verhandlungen mit Gläubigern zur Sicherung der Handlungsfähigkeit.',
    href: '/unternehmen',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80&sat=-9',
    alt: 'Besprechungstisch mit Führungskräften in seriöser Atmosphäre'
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section background="light">
        <Container>
          <Heading
            title="Verlässlicher Partner in Krisenzeiten"
            subtitle="Andreas Kienast unterstützt Hamburger Unternehmen bei Insolvenzverfahren, Sanierungen und Restrukturierungen. Ziel ist die geordnete Fortführung oder bestmögliche Abwicklung mit klaren Entscheidungsgrundlagen."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <Heading title="Diskrete Beratung auf Augenhöhe" />
            <p className="text-muted leading-relaxed">
              Die Kanzlei legt Wert auf klare Zuständigkeiten, verlässliche Zeitpläne und nachvollziehbare Kommunikation. Jede
              Mandatsannahme erfolgt erst nach einer Vorprüfung der wirtschaftlichen Ausgangslage und der strategischen Ziele.
            </p>
            <ul className="space-y-3 text-muted">
              <li>· Individuelle Einschätzung von Haftungsrisiken und Organpflichten</li>
              <li>· Vorbereitung von Schutzschirm- und Eigenverwaltungsanträgen</li>
              <li>· Moderation von Gesprächen mit wesentlichen Gläubigern</li>
              <li>· Erstellung pragmatischer Sanierungsfahrpläne</li>
            </ul>
            <div className="flex gap-3">
              <Link href="/kontakt" className="btn-primary">
                Erstgespräch vereinbaren
              </Link>
              <Link href="/ueber-die-kanzlei" className="btn-outline">
                Zur Kanzlei
              </Link>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-subtle border border-stone">
            <Image src="/images/hanseatisch.jpg" alt="Hansekontor" fill className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section background="light">
        <Container>
          <Heading title="Mitgliedschaften & Vertrauen" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card text-center">
              <p className="heading-serif text-xl mb-2">Hanseatische Rechtsanwaltskammer</p>
              <p className="text-muted text-sm">Zugelassener Rechtsanwalt mit Berufsaufsicht gemäß BRAO.</p>
            </div>
            <div className="card text-center">
              <p className="heading-serif text-xl mb-2">Mitglied im Arbeitskreis Sanierung</p>
              <p className="text-muted text-sm">Teilnahme an Facharbeitskreisen zu Restrukturierung und Insolvenzrecht.</p>
            </div>
            <div className="card text-center">
              <p className="heading-serif text-xl mb-2">Diskrete Zusammenarbeit</p>
              <p className="text-muted text-sm">Vertrauliche Abstimmung mit Geschäftsleitung, Beirat und Kapitalgebern.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <Heading title="Für Geschäftsführungen und Beiräte" />
            <p className="text-muted leading-relaxed">
              Frühzeitige Beratung hilft, Handlungsoptionen zu erweitern und persönliche Haftungsrisiken zu begrenzen. Die Kanzlei
              bietet strukturierte Checklisten, kurze Entscheidungswege und klare Dokumentation für Gremien.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted">
              <div className="card">
                <p className="font-semibold text-primary">Krisenfrüherkennung</p>
                <p>Analyse von Liquiditätsreichweite und Finanzierungsbedarf.</p>
              </div>
              <div className="card">
                <p className="font-semibold text-primary">Stakeholder-Management</p>
                <p>Vorbereitung von Gesprächen mit Banken, Lieferanten und Investoren.</p>
              </div>
            </div>
          </div>
          <div className="card bg-white">
            <h3 className="heading-serif text-2xl text-primary mb-3">Kurzberatung anfragen</h3>
            <p className="text-muted mb-4">Unverbindliche Abstimmung zum weiteren Vorgehen in vertraulicher Atmosphäre.</p>
            <div className="space-y-3 text-sm text-muted">
              <p>· Telefonischer Austausch (20 Minuten)</p>
              <p>· Erste Einschätzung zu Sanierungsoptionen</p>
              <p>· Hinweise zu Fristen und Organpflichten</p>
            </div>
            <Link href="/kontakt" className="btn-primary mt-4 inline-flex">
              Kontakt aufnehmen
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

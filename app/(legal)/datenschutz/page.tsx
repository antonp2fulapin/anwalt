import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';

export const metadata = {
  title: 'Datenschutzerklärung | Kanzlei Kienast',
  description: 'Datenschutzhinweise gemäß DSGVO für die Website der Kanzlei Kienast.'
};

const sections = [
  {
    title: 'Verantwortlicher',
    text: 'Rechtsanwalt Andreas Kienast, Alte Rabenstraße 12B, 20148 Hamburg, E-Mail: kontakt@kanzlei-kienast.de.'
  },
  {
    title: 'Zwecke der Verarbeitung',
    text: 'Betrieb der Website, Beantwortung von Kontaktanfragen, Terminvereinbarungen sowie Sicherheitsmaßnahmen.'
  },
  {
    title: 'Rechtsgrundlagen',
    text: 'Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb), Art. 6 Abs. 1 lit. a DSGVO (Einwilligung für optionale Cookies).'
  },
  {
    title: 'Hosting',
    text: 'Bereitstellung über Vercel (Vercel Inc., USA). Es gelten die Standardvertragsklauseln; Serverstandorte EU/EEA, mögliche Übermittlung in Drittländer.'
  },
  {
    title: 'Logfiles',
    text: 'Beim Aufruf der Seiten werden technische Informationen (IP-Adresse in gekürzter Form, Browser, Datum, Uhrzeit) verarbeitet. Speicherung maximal 14 Tage.'
  },
  {
    title: 'Cookies & Einwilligungen',
    text: 'Technisch notwendige Cookies sichern den Betrieb. Optionale Analyse-Cookies werden nur nach Einwilligung gesetzt und können jederzeit widerrufen werden.'
  },
  {
    title: 'Kontaktformular',
    text: 'Daten aus dem Formular (Name, Kontaktdaten, Nachricht) werden ausschließlich zur Bearbeitung der Anfrage genutzt und nach Abschluss des Vorgangs gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.'
  },
  {
    title: 'Google Maps',
    text: 'Beim Anzeigen der Karte werden Daten (u. a. IP-Adresse) an Google Ireland Ltd. übertragen. Grundlage ist Ihre Einwilligung über den Cookie-Hinweis oder ein berechtigtes Interesse an einer nutzerfreundlichen Anfahrtbeschreibung.'
  },
  {
    title: 'Schriften',
    text: 'Es werden systemeigene Schriftarten verwendet; keine Datenübertragung an externe Dienste.'
  },
  {
    title: 'Speicherdauer',
    text: 'Personenbezogene Daten werden gelöscht, sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.'
  },
  {
    title: 'Ihre Rechte',
    text: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie Widerspruch gegen Verarbeitungen. Beschwerden können bei der zuständigen Datenschutzaufsichtsbehörde eingereicht werden.'
  }
];

export default function DatenschutzPage() {
  return (
    <Section>
      <Container className="space-y-6">
        <Heading title="Datenschutzerklärung" />
        <div className="space-y-4">
          {sections.map((item) => (
            <div key={item.title} className="card space-y-2 text-sm text-muted">
              <p className="font-semibold text-primary">{item.title}</p>
              <p className="leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="card space-y-2 text-sm text-muted">
          <p className="font-semibold text-primary">Cookie-Banner</p>
          <p className="leading-relaxed">
            Die Cookie-Einstellungen können über den Hinweis am Seitenende angepasst werden. Die Entscheidung wird in einem
            technisch notwendigen Cookie gespeichert.
          </p>
        </div>
      </Container>
    </Section>
  );
}

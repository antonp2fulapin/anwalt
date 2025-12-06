import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';

export const metadata = {
  title: 'Insolvenzverfahren | Kanzlei Kienast',
  description: 'Ablauf, Pflichten und Chancen von Insolvenzverfahren für Unternehmen in Deutschland.'
};

const timeline = [
  { phase: 'Vorbereitung', details: 'Finanzstatus, Insolvenzantragsreife, Abstimmung mit Geschäftsführung.' },
  { phase: 'Antrag & Gericht', details: 'Einreichung, vorläufiger Gläubigerausschuss, Bestellung eines Sachwalters.' },
  { phase: 'Fortführung', details: 'Erhalt des Geschäftsbetriebs, Sanierungsplan, Kommunikation mit Stakeholdern.' },
  { phase: 'Planverfahren', details: 'Insolvenzplan, Abstimmung mit Gläubigern, gerichtliche Bestätigung.' }
];

const faqs = [
  {
    question: 'Welche Pflichten hat die Geschäftsführung?',
    answer:
      'Geschäftsleiter müssen bei Zahlungsunfähigkeit oder Überschuldung unverzüglich einen Insolvenzantrag stellen und sämtliche Unterlagen vollständig bereitstellen.'
  },
  {
    question: 'Wie lange dauert ein Verfahren?',
    answer: 'Die Dauer hängt vom Umfang des Betriebs und vom gewählten Verfahren ab. Eine enge Abstimmung beschleunigt Abläufe.'
  },
  {
    question: 'Welche Vorteile bietet ein Schutzschirm?',
    answer: 'Das Management behält Einfluss, während ein vorläufiger Sachwalter überwacht. Frühzeitige Vorbereitung ist entscheidend.'
  }
];

export default function InsolvenzverfahrenPage() {
  return (
    <Section>
      <Container className="space-y-10">
        <Heading
          title="Insolvenzverfahren"
          subtitle="Transparente Darstellung des Ablaufs, der Pflichten und der Handlungsmöglichkeiten für Unternehmensleitungen."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card space-y-3">
            <p className="font-semibold text-primary">Vorgehensweise</p>
            <p className="text-muted leading-relaxed">
              Zu Beginn steht eine sachliche Analyse der Liquidität und der Insolvenzantragsgründe. Anschließend erfolgt die
              Vorbereitung des Antrags und die Koordination mit dem Gericht. Während des Verfahrens wird der Geschäftsbetrieb
              stabilisiert und ein Insolvenzplan vorbereitet.
            </p>
          </div>
          <div className="card space-y-3">
            <p className="font-semibold text-primary">Rollenklärung</p>
            <p className="text-muted leading-relaxed">
              Die Kanzlei unterstützt die Geschäftsleitung bei der Erfüllung der Organpflichten, bereitet Gespräche mit dem
              Sachwalter oder Insolvenzverwalter vor und stellt eine geordnete Informationslage für Gläubiger her.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-stone bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-light/70 text-primary uppercase tracking-wide text-xs">
              <tr>
                <th className="px-4 py-3">Phase</th>
                <th className="px-4 py-3">Inhalte</th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((row) => (
                <tr key={row.phase} className="border-t border-stone/60">
                  <td className="px-4 py-3 font-semibold text-primary">{row.phase}</td>
                  <td className="px-4 py-3 text-muted">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="card space-y-2">
              <p className="font-semibold text-primary">{faq.question}</p>
              <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

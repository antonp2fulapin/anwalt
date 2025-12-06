'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      setSubmitted(true);
      event.currentTarget.reset();
    } catch (err) {
      setError('Die Nachricht konnte nicht übermittelt werden. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="heading-serif text-2xl text-primary">Kontakt aufnehmen</h3>
        <span className="text-xs text-muted">Antwort werktags innerhalb von 24 Stunden</span>
      </div>
      {submitted && <p className="text-green-800 bg-green-50 border border-green-200 p-3 rounded-md mb-4">Nachricht versendet.</p>}
      {error && <p className="text-red-800 bg-red-50 border border-red-200 p-3 rounded-md mb-4">{error}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col text-sm gap-2">
          Ihr Name
          <input
            name="name"
            required
            className="border border-stone/70 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
          />
        </label>
        <label className="flex flex-col text-sm gap-2">
          Unternehmen
          <input name="company" className="border border-stone/70 rounded-md px-3 py-2 focus:outline-none focus:border-primary" />
        </label>
        <label className="flex flex-col text-sm gap-2">
          E-Mail
          <input
            type="email"
            name="email"
            required
            className="border border-stone/70 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
          />
        </label>
        <label className="flex flex-col text-sm gap-2">
          Telefon
          <input name="phone" className="border border-stone/70 rounded-md px-3 py-2 focus:outline-none focus:border-primary" />
        </label>
      </div>
      <label className="flex flex-col text-sm gap-2 mt-4">
        Anliegen
        <textarea
          name="message"
          rows={5}
          required
          className="border border-stone/70 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
        />
      </label>
      <div className="mt-4 flex items-center justify-between text-xs text-muted">
        <p>
          Mit dem Absenden erkläre ich mich mit der Verarbeitung meiner Daten entsprechend der{' '}
          <a href="/datenschutz" className="underline">
            Datenschutzerklärung
          </a>{' '}
          einverstanden.
        </p>
        <button type="submit" className="btn-primary text-sm">
          Nachricht senden
        </button>
      </div>
    </form>
  );
}

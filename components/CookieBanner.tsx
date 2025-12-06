'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-preferences';

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setOpen(true);
      return;
    }
    }, []);

  const handleSave = (analytics: boolean) => {
    const prefs = { necessary: true, analytics };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white border-t border-stone/60 shadow-subtle">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="heading-serif text-xl text-primary mb-1">Cookie-Hinweis</p>
          <p className="text-sm text-muted max-w-2xl">
            Diese Website nutzt nur technisch erforderliche Cookies sowie optional anonymisierte Nutzungsanalysen. Die
            Einstellungen können jederzeit in der Datenschutzerklärung angepasst werden.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            className="btn-outline"
            onClick={() => handleSave(false)}
            aria-label="Nur notwendige Cookies akzeptieren"
          >
            Nur notwendige
          </button>
          <button className="btn-primary" onClick={() => handleSave(true)} aria-label="Alle Cookies akzeptieren">
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

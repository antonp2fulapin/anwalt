'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Startseite' },
  { href: '/ueber-die-kanzlei', label: 'Über die Kanzlei' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/unternehmen', label: 'Für Unternehmen' },
  { href: '/kontakt', label: 'Kontakt' }
];

export function NavBar() {
  const pathname = usePathname();
  return (
    <header className="bg-white border-b border-stone/60">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col">
          <Link href="/" className="heading-serif text-2xl font-semibold text-primary">
            RA Andreas Kienast
          </Link>
          <span className="text-sm text-stone-dark">Insolvenzrecht · Sanierung · Restrukturierung</span>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm md:text-base">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'px-3 py-2 rounded-md border border-transparent hover:border-stone-dark/40 transition',
                pathname === link.href && 'border-stone-dark/40 bg-stone-light/70'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

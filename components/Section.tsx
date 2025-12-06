import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'light' | 'white';
}

export function Section({ children, className, background = 'white' }: SectionProps) {
  const backgroundClass = background === 'light' ? 'bg-stone-light/70' : 'bg-white';
  return (
    <section className={clsx('py-12 md:py-16', backgroundClass, className)}>
      {children}
    </section>
  );
}

import { ReactNode } from 'react';
import clsx from 'clsx';

interface HeadingProps {
  title: string;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}

export function Heading({ title, subtitle, align = 'left' }: HeadingProps) {
  return (
    <div className={clsx('mb-8', align === 'center' && 'text-center max-w-3xl mx-auto')}>
      <h2 className="heading-serif text-3xl md:text-4xl font-semibold text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-base text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}

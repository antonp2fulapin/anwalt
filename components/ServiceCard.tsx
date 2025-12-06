import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <div className="card h-full flex flex-col gap-4">
      <div>
        <h3 className="heading-serif text-2xl text-primary mb-2">{title}</h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">
        <Link href={href} className="text-primary font-semibold hover:underline">
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
}

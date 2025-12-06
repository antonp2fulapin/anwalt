import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}

export function ServiceCard({ title, description, href, image, alt }: ServiceCardProps) {
  return (
    <div className="card h-full flex flex-col gap-4">
      <div className="relative h-40 w-full overflow-hidden rounded-md border border-stone">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 768px) 320px, 100vw" />
      </div>
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

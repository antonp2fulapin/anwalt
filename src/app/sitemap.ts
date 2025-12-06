import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kanzlei-kienast.de';
  const routes = [
    '',
    '/ueber-die-kanzlei',
    '/leistungen',
    '/insolvenzverfahren',
    '/sanierung-restrukturierung',
    '/unternehmen',
    '/kontakt',
    '/impressum',
    '/datenschutz',
    '/agb',
    '/widerruf'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changefreq: 'monthly',
    priority: route === '' ? 1 : 0.8
  }));
}

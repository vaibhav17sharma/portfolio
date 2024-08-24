import type { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: [
          '/_next/',
          '/api/',
          '/checkout/',
          '/static/',
          '/private/',
          '/admin/',
          '/auth/'
        ],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
        disallow: [
          '/_next/',
          '/api/',
          '/checkout/',
          '/static/',
          '/private/',
          '/admin/',
          '/auth/'
        ],
      }
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
}
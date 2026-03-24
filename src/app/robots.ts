import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/wp-admin/',
        '/wp-content/',
        '/wp-includes/',
        '/wp-login.php',
        '/xmlrpc.php',
        '/wp-cron.php',
        '/wp-json/',
        '/tag/',
        '/category/',
        '/author/',
        '/feed/',
        '/trackback/',
        '/page/',
        '/attachment/',
      ],
    },
    sitemap: 'https://achtsam-bleiben.de/sitemap.xml',
  };
}

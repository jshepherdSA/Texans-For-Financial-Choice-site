import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { pressItems } from '@/lib/press';

/**
 * Only the live pages. /about, /key-facts and /real-vs-fake-news are
 * deliberately absent — they remain reachable by direct link but are hidden
 * from navigation and search (see `hiddenRoutes` in lib/site.ts).
 */
const routes = [
  { path: '', priority: 1 },
  { path: '/access-matters', priority: 0.8 },
  { path: '/consumer-protections', priority: 0.8 },
  { path: '/cost-of-restriction', priority: 0.8 },
  { path: '/resources', priority: 0.7 },
  { path: '/press', priority: 0.6 },
  { path: '/action', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    // The 50 republished articles are real pages now, not outbound links.
    ...pressItems.map((item) => ({
      url: `${site.url}/press/${item.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}

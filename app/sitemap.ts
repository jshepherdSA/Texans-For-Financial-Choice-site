import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

/**
 * Only the live pages. /about, /key-facts and /real-vs-fake-news are
 * deliberately absent — they remain reachable by direct link but are hidden
 * from navigation and search (see `hiddenRoutes` in lib/site.ts).
 */
const routes = [
  { path: '', priority: 1 },
  { path: '/economic-reality', priority: 0.8 },
  { path: '/preserve-financial-choice', priority: 0.8 },
  { path: '/consequences', priority: 0.8 },
  { path: '/resources', priority: 0.7 },
  { path: '/press', priority: 0.6 },
  { path: '/action', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}

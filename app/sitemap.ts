import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const routes = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/key-facts', priority: 0.8 },
  { path: '/resources', priority: 0.8 },
  { path: '/press', priority: 0.6 },
  { path: '/real-vs-fake-news', priority: 0.8 },
  { path: '/action', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}

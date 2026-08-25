import type { NextConfig } from 'next';

/**
 * The three content pages were renamed — Economic Reality → Access Matters,
 * Preserve Financial Choice → Consumer Protections, Consequences → Cost of
 * Restriction — and their routes moved with them.
 *
 * Nothing in the app points at the old paths any more, so these redirects are
 * for links that live outside it: anything already sent to a reviewer, and the
 * in-page anchors (`/consequences#rate-caps`) that were quoted in the content
 * document. `permanent: true` because the move is not provisional; the hash
 * survives a redirect, so a deep link lands on the right section.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/economic-reality',
        destination: '/access-matters',
        permanent: true,
      },
      {
        source: '/preserve-financial-choice',
        destination: '/consumer-protections',
        permanent: true,
      },
      {
        source: '/consequences',
        destination: '/cost-of-restriction',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

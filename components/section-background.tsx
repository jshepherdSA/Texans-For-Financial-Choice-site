import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Full-bleed photographic section background.
 *
 * The overlay is not a taste decision. Measured against the worst case — the
 * overlay sitting on a pure-white region of the photo, which both the Capitol
 * sky and the rural sky get close to — white text needs a 70% navy-900 wash to
 * clear WCAG AA, and sky-100 body text needs the same. 55% and 60% fail
 * outright. The default here is 75%, which holds AA with margin as the image
 * is swapped for another.
 *
 * A second bottom-weighted gradient deepens the lower half, where text
 * normally sits, without flattening the image entirely.
 */
export function SectionBackground({
  src,
  /** Describes the photo for screen readers; pass "" when purely atmospheric. */
  alt = '',
  overlay = 75,
  priority = false,
  className,
  children,
}: {
  src: string;
  alt?: string;
  /** Navy-900 wash opacity as a percentage. Do not go below 70. */
  overlay?: number;
  priority?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('relative isolate overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy-900"
        style={{ opacity: Math.max(overlay, 70) / 100 }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
      />
      {children}
    </div>
  );
}

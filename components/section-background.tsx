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
  edgeFade,
  className,
  imageClassName,
  children,
}: {
  src: string;
  alt?: string;
  /** Navy-900 wash opacity as a percentage. Do not go below 70. */
  overlay?: number;
  priority?: boolean;
  /**
   * Deepens one edge to solid navy-900, fading to nothing by mid-band. Use it
   * when the photo has been pushed sideways far enough to leave bare canvas,
   * or when the copy column needs a flat field to sit on.
   */
  edgeFade?: 'left' | 'right';
  className?: string;
  /**
   * Framing overrides for the photo itself — `object-*` positioning, a scale,
   * or a horizontal flip. Bands are usually far wider than the source photo's
   * aspect, so the full width is already visible and `object-position` alone
   * shifts nothing horizontally; moving a subject sideways needs a transform.
   */
  imageClassName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden',
        // The base colour only shows where a shifted photo no longer reaches;
        // without it that strip would fall through to the page background.
        edgeFade && 'bg-navy-900',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className={cn('-z-20 object-cover', imageClassName)}
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
      {edgeFade ? (
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 -z-10 from-navy-900 from-6% via-navy-900/55 via-38% to-transparent to-66%',
            edgeFade === 'left' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
          )}
        />
      ) : null}
      {children}
    </div>
  );
}

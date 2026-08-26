import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Source } from '@/lib/sources';

type CiteTone = 'light' | 'dark';

/**
 * Citations are set small — 12px, a step under body copy. They are supporting
 * apparatus: present and checkable on every claim, but never competing with
 * the claim itself for attention.
 *
 * Small text has to clear 4.5:1 whatever its size, so shrinking them came with
 * a colour change. The plain-text variant moved off `muted-foreground`, which
 * sat at 4.55:1 on the sunken surface — legal, but no margin at all, and
 * thinner type is where that bites. ink-600 is 7.24:1 and still reads as
 * recessive grey beside `foreground`.
 */
const toneStyles: Record<CiteTone, { plain: string; link: string }> = {
  light: {
    plain: 'text-ink-600',
    // 5.72:1 on the sunken surface.
    link: 'text-sky-700 decoration-sky-300 hover:text-primary hover:decoration-navy-400',
  },
  dark: {
    plain: 'text-sky-200',
    // sky-700 is 2.32:1 on navy-900 — the light link colour is unreadable
    // here. sky-200 is 10.26:1.
    link: 'text-sky-200 decoration-sky-200/50 hover:text-white hover:decoration-white/70',
  },
};

/**
 * Inline source attribution.
 *
 * The whole argument on this site rests on being checkable, so citations are
 * treated as content rather than as fine print: always visible, always
 * clickable when a target exists. Sources the content document named without
 * linking render as plain text instead of a dead link.
 */
export function Cite({
  source,
  tone = 'light',
}: {
  source: Source;
  /** `dark` when the citation sits on an inverse surface or a photo band. */
  tone?: CiteTone;
}) {
  const t = toneStyles[tone];
  if (!source.href) {
    return <span className={cn('text-xs', t.plain)}>{source.label}</span>;
  }
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-baseline gap-1 rounded-sm text-xs underline underline-offset-2 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
        t.link
      )}
    >
      {source.label}
      {/* Scaled with the type: a 12px icon beside 12px text reads as an
          oversized affordance. */}
      <ArrowUpRight
        className="size-2.5 shrink-0 self-center"
        aria-hidden="true"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/** Source line beneath a statistic or claim. */
export function SourceNote({
  children,
  source,
  tone = 'light',
}: {
  children?: React.ReactNode;
  source: Source;
  tone?: CiteTone;
}) {
  return (
    <p className={cn('mt-3 text-xs', toneStyles[tone].plain)}>
      {children ? <>{children} </> : 'Source: '}
      <Cite source={source} tone={tone} />
    </p>
  );
}

import { ArrowUpRight } from 'lucide-react';
import type { Source } from '@/lib/sources';

/**
 * Inline source attribution.
 *
 * The whole argument on this site rests on being checkable, so citations are
 * treated as content rather than as fine print: always visible, always
 * clickable when a target exists. Sources the content document named without
 * linking render as plain text instead of a dead link.
 */
export function Cite({ source }: { source: Source }) {
  if (!source.href) {
    return (
      <span className="text-sm text-muted-foreground">{source.label}</span>
    );
  }
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-1 rounded-sm text-sm text-sky-700 underline decoration-sky-300 underline-offset-2 transition-colors hover:text-primary hover:decoration-navy-400 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {source.label}
      <ArrowUpRight
        className="size-3 shrink-0 self-center"
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
}: {
  children?: React.ReactNode;
  source: Source;
}) {
  return (
    <p className="mt-3 text-sm text-muted-foreground">
      {children ? <>{children} </> : 'Source: '}
      <Cite source={source} />
    </p>
  );
}

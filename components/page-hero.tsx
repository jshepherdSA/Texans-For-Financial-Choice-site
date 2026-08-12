import type { ReactNode } from 'react';
import { Container } from '@/components/layout-primitives';
import { PlaceholderImage } from '@/components/placeholder-image';
import { cn } from '@/lib/utils';

type HeroTone = 'navy' | 'light' | 'sky';

const toneStyles: Record<
  HeroTone,
  { section: string; eyebrow: string; title: string; lede: string }
> = {
  navy: {
    section: 'bg-surface-inverse',
    eyebrow: 'text-sky-300',
    title: 'text-white',
    lede: 'text-sky-100',
  },
  light: {
    section: 'bg-background border-b border-border',
    eyebrow: 'text-sky-700',
    title: 'text-primary',
    lede: 'text-foreground',
  },
  sky: {
    section: 'bg-sky-50 border-b border-sky-200',
    eyebrow: 'text-sky-700',
    title: 'text-primary',
    lede: 'text-foreground',
  },
};

/**
 * Inner-page opening band.
 *
 * `tone` exists so consecutive pages don't all open with the same navy slab —
 * moving between them should feel like moving, not like a page refresh. Pair
 * with `image` to run the heading beside artwork instead of over full width.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  tone = 'navy',
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  tone?: HeroTone;
  /** Seed for the placeholder artwork; omit for a text-only hero. */
  image?: string;
  children?: ReactNode;
}) {
  const t = toneStyles[tone];

  return (
    <section className={t.section}>
      <Container>
        <div
          className={cn(
            'py-16 lg:py-20',
            image &&
              'grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16'
          )}
        >
          <div>
            <p className={cn('text-eyebrow uppercase', t.eyebrow)}>{eyebrow}</p>
            <h1
              className={cn(
                'mt-4 max-w-[44ch] font-heading text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-5xl',
                t.title
              )}
            >
              {title}
            </h1>
            {lede ? (
              <div
                className={cn(
                  'mt-6 max-w-[62ch] text-lg leading-relaxed',
                  t.lede
                )}
              >
                {lede}
              </div>
            ) : null}
            {children}
          </div>
          {image ? (
            <PlaceholderImage
              seed={image}
              ratio="5/4"
              tone={tone === 'navy' ? 3 : undefined}
              className="rounded-lg"
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

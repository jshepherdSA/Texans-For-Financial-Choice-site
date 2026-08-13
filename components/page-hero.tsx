import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container } from '@/components/layout-primitives';
import { PlaceholderImage } from '@/components/placeholder-image';
import { SectionBackground } from '@/components/section-background';
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
  photo,
  backgroundPhoto,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  tone?: HeroTone;
  /** Seed for the placeholder artwork; omit for a text-only hero. */
  image?: string;
  /** A real photograph, set beside the text. */
  photo?: { src: string; alt: string };
  /**
   * A photograph filling the whole band behind the text. Takes precedence over
   * everything else and forces the light-on-dark palette, since the copy then
   * sits on the overlay rather than on a surface colour.
   */
  backgroundPhoto?: { src: string; alt?: string };
  children?: ReactNode;
}) {
  const t = toneStyles[tone];
  const hasMedia = Boolean(photo ?? image);

  if (backgroundPhoto) {
    return (
      <SectionBackground
        src={backgroundPhoto.src}
        alt={backgroundPhoto.alt ?? ''}
        overlay={76}
        priority
        className="border-b border-navy-800"
      >
        <Container>
          {/* Min-height rather than padding alone: the photo fills whatever
              height the band has, so the band needs a height worth filling. */}
          <div className="flex min-h-[30rem] flex-col justify-center py-20 lg:min-h-[34rem] lg:py-24">
            <p className="text-eyebrow text-sky-300 uppercase">{eyebrow}</p>
            <h1 className="mt-4 max-w-[44ch] font-heading text-3xl leading-[1.12] font-bold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {lede ? (
              <div className="mt-6 max-w-[62ch] text-lg leading-relaxed text-sky-100">
                {lede}
              </div>
            ) : null}
            {children}
          </div>
        </Container>
      </SectionBackground>
    );
  }

  return (
    <section className={t.section}>
      <Container>
        <div
          className={cn(
            'py-16 lg:py-20',
            hasMedia &&
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
          {photo ? (
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 46vw, 92vw"
                priority
                className="object-cover"
              />
            </div>
          ) : image ? (
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

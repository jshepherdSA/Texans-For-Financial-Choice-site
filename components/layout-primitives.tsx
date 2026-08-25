import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** 1200px max-width container with the design system's gutters. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto max-w-[1200px] px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}

type SectionTone = 'default' | 'sunken' | 'muted' | 'inverse';

const toneClasses: Record<SectionTone, string> = {
  default: 'bg-background',
  sunken: 'bg-surface-sunken',
  muted: 'bg-muted',
  inverse: 'bg-surface-inverse text-sky-100',
};

/**
 * Section vertical rhythm per design-system.md: py-20 mobile, py-24/32 desktop.
 * Adjacent sections must not share a tone.
 */
export function Section({
  children,
  tone = 'default',
  className,
  id,
  as: Tag = 'section',
  'aria-labelledby': ariaLabelledBy,
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  id?: string;
  as?: ElementType;
  'aria-labelledby'?: string;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('py-20 lg:py-28', toneClasses[tone], className)}
    >
      {children}
    </Tag>
  );
}

/** Uppercase letterspaced label that sits above a section heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-eyebrow text-sky-700 uppercase', className)}>
      {children}
    </p>
  );
}

/**
 * Two-part section heading: a short title, and the sentence that was once
 * joined to it by a colon set beneath in the surface's light blue.
 *
 * A colon-joined heading reads as one long line and buries the short, memorable
 * half in the middle of it. Splitting the two lets the title carry the section
 * and the deck carry the argument.
 *
 * The deck is a <p>. It is a subtitle of the heading above it, not a new
 * subsection, so promoting it to the next heading level would add a rung to the
 * document outline that the content does not have.
 *
 * Deck colour is the lightest blue that clears WCAG AA on each surface —
 * computed, not eyeballed. On light: sky-700, 5.72:1 on surface-sunken
 * (sky-600 is 4.00:1, large-text only). On dark: sky-300, 4.50:1 against the
 * worst case of an 80% navy-900 overlay sitting on a white region of the photo,
 * which clears the 3:1 this size requires with margin to spare.
 */
export function SectionHeading({
  id,
  title,
  deck,
  tone = 'light',
  as: Tag = 'h2',
  className,
}: {
  id?: string;
  title: ReactNode;
  deck?: ReactNode;
  /** `dark` for headings over a photo band or an inverse surface. */
  tone?: 'light' | 'dark';
  as?: ElementType;
  className?: string;
}) {
  const dark = tone === 'dark';
  return (
    <div className={className}>
      <Tag
        id={id}
        className={cn(
          'font-heading text-3xl leading-tight font-bold lg:text-4xl',
          dark ? 'text-white' : 'text-primary'
        )}
      >
        {title}
      </Tag>
      {deck ? (
        <p
          className={cn(
            'mt-3 max-w-[54ch] font-heading text-2xl leading-snug font-bold lg:text-[1.75rem]',
            dark ? 'text-sky-300' : 'text-sky-700'
          )}
        >
          {deck}
        </p>
      ) : null}
    </div>
  );
}

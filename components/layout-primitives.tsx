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

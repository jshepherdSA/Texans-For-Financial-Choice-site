import Image from 'next/image';
import { Download } from 'lucide-react';
import type { FactSheet } from '@/lib/site';

/**
 * Fact-sheet card. The whole card is one link; the cover image is decorative
 * (alt="") because the title next to it already names the document.
 */
export function FactSheetCard({
  sheet,
  priority = false,
}: {
  sheet: FactSheet;
  /** Set on cards that render above the fold — on /resources the grid starts
      directly under the hero, so the leading cards are the LCP candidate. */
  priority?: boolean;
}) {
  return (
    <a
      href={sheet.file}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-navy-300 hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div className="relative aspect-[695/900] overflow-hidden border-b border-border bg-muted">
        <Image
          src={sheet.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          priority={priority}
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-base leading-snug font-semibold text-primary">
          {sheet.title}
        </h3>
        <p className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-sky-700 group-hover:text-primary">
          <Download className="size-4" aria-hidden="true" />
          Download PDF Version
          <span className="sr-only"> — {sheet.title} (opens in a new tab)</span>
        </p>
      </div>
    </a>
  );
}

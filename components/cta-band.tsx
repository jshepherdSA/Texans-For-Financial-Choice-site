import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout-primitives';

/**
 * Closing call to action. Every page in the content document terminates in
 * TAKE ACTION / TAKE ACTION NOW, so this is the shared tail for all of them.
 * Button label is passed in because the source copy varies between the two.
 */
export function CtaBand({
  label = 'TAKE ACTION NOW',
  heading = 'Make Sure Your Voice Is Heard In Austin',
  body,
}: {
  label?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-border bg-sky-50"
    >
      <Container>
        <div className="flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2
              id="cta-heading"
              className="font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
            >
              {heading}
            </h2>
            {body ? (
              <p className="mt-3 max-w-[55ch] leading-relaxed text-foreground">
                {body}
              </p>
            ) : null}
          </div>
          <Button
            render={<Link href="/action" />}
            nativeButton={false}
            size="lg"
            className="shrink-0 tracking-wide"
          >
            {label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

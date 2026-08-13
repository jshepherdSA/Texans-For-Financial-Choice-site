import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout-primitives';
import { SectionBackground } from '@/components/section-background';

/**
 * Closing call to action. Every page in the content document terminates in
 * TAKE ACTION / TAKE ACTION NOW, so this is the shared tail for all of them.
 *
 * The Capitol sits behind it because the ask is specifically about Austin —
 * the building is the thing the reader is being asked to influence, so the
 * image is doing argumentative work rather than decorating.
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
    <SectionBackground
      src="/images/texas-state-capitol.jpg"
      alt=""
      overlay={78}
      className="border-t border-border"
    >
      <section aria-labelledby="cta-heading">
        <Container>
          <div className="flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
            <div>
              <h2
                id="cta-heading"
                className="font-heading text-2xl leading-tight font-bold text-white lg:text-3xl"
              >
                {heading}
              </h2>
              {body ? (
                <p className="mt-3 max-w-[55ch] leading-relaxed text-sky-100">
                  {body}
                </p>
              ) : null}
            </div>
            <Button
              render={<Link href="/action" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="shrink-0 tracking-wide"
            >
              {label}
            </Button>
          </div>
        </Container>
      </section>
    </SectionBackground>
  );
}

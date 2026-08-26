import type { Metadata } from 'next';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { ActionForm } from '@/components/action-form';
import { headlineStats } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Take Action Now',
  description:
    'Make sure your voice is heard in Austin. Texans are smart enough to make their own financial decisions without government intervention.',
};

export default function ActionPage() {
  return (
    <>
      <PageHero
        splitPhoto={{
          src: '/images/parents-toddler-laptop.jpg',
          alt: 'Two parents at a dining table with a laptop and paperwork, one on the phone, their toddler beside them.',
        }}
        eyebrow="Make Sure Your Voice Is Heard In Austin"
        title="Take Action Now"
        lede="Don't let out of touch Austin politicians and activists - who have never been through a financial emergency - mandate what credit services hard-working Texans can choose. Texans are smart enough to make their own financial decisions without government intervention."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            {/* The stats sit beside the form rather than above it: this is the
                conversion page, so the reasons to sign stay visible while
                you're filling it in. */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-eyebrow text-sky-700 uppercase">
                Why It Matters
              </h2>
              <dl className="mt-6 space-y-7">
                {headlineStats.map((stat) => (
                  <div
                    key={stat.value}
                    className="border-l-2 border-sky-200 pl-5"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <p className="tabular font-heading text-3xl leading-none font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-2 leading-relaxed text-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Source: {stat.source}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 lg:p-9">
              <h2 className="font-heading text-2xl leading-tight font-bold text-primary">
                Add Your Name
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Tell Austin that Texans deserve the right to choose what is best
                for them and their families.
              </p>
              <div className="mt-8">
                <ActionForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

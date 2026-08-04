import Link from 'next/link';
import { ArrowRight, FileText, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Eyebrow, Section } from '@/components/layout-primitives';
import { FactSheetCard } from '@/components/fact-sheet-card';
import { StatBand } from '@/components/stat-band';
import { SubscribeForm } from '@/components/subscribe-form';
import { factSheets } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero — "We Are Hard-Working Texans"
          Static and text-first. Replaces the legacy Slider Revolution
          carousel that baked its copy into low-res JPEGs
          (teardown.md anti-pattern #1).
          --------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-sky-50 lg:block"
        />
        <Container className="relative">
          <div className="grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
            <div>
              <Eyebrow>Texans For Financial Choice</Eyebrow>
              <h1 className="mt-4 font-heading text-4xl leading-[1.1] font-bold text-primary sm:text-5xl lg:text-6xl">
                We Are Hard-Working Texans
              </h1>
              <div className="mt-7 max-w-[60ch] space-y-5 text-lg leading-relaxed text-foreground">
                <p>
                  We are neighbors, friends, and hard-working Texans from all
                  walks of life who are dedicated to sharing information about
                  making smart, reasonable choices when faced with a financial
                  emergency.
                </p>
                <p>
                  Many of us have few realistic options, but we are committed to
                  understanding the fundamentals of consumer choices, new
                  financial products and services, and &ldquo;making our voices
                  heard&rdquo; about simple and sustainable policy options.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  render={<Link href="/action" />}
                  nativeButton={false}
                  size="lg"
                  className="tracking-wide"
                >
                  TAKE ACTION NOW
                </Button>
                <Button
                  render={<Link href="/key-facts" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                >
                  See the key facts
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* The three pillars the site's argument rests on. The heading is
                visually hidden: the cards need to sit under a section heading
                so the outline stays h1 -> h2 -> h3, but showing it would
                duplicate what the cards already say. */}
            <div className="relative">
              <h2 id="pillars-heading" className="sr-only">
                Why this matters
              </h2>
              <ul aria-labelledby="pillars-heading" className="grid gap-4">
                {[
                  {
                    icon: Users,
                    title: 'Texans deserve the choice',
                    body: '34 percent of Texans are underbanked, and 40 percent of Americans could not handle a $400 emergency.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'The industry is heavily regulated',
                    body: 'Credit Access Businesses comply with more than 26 federal and state laws and are examined by the OCCC.',
                  },
                  {
                    icon: FileText,
                    title: 'The record is public',
                    body: 'Complaints against CABs are the lowest of any business the OCCC regulates — one per 21,000 transactions.',
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-lg border border-border bg-card p-5"
                  >
                    <item.icon
                      className="mt-0.5 size-6 shrink-0 text-navy-600"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <StatBand />

      {/* ---------------------------------------------------------------
          Access To Credit
          --------------------------------------------------------------- */}
      <Section id="access" aria-labelledby="access-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            {/* Sticks alongside the prose on tall viewports so the column
                doesn't read as dead space. */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>The Issue</Eyebrow>
              <h2
                id="access-heading"
                className="mt-4 font-heading text-3xl leading-tight font-semibold text-primary lg:text-4xl"
              >
                Access To Credit
              </h2>
              <span
                aria-hidden="true"
                className="mt-6 block h-1 w-16 rounded-full bg-sky-300"
              />
            </div>
            <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed text-foreground">
              <p>
                For years, far-left activists and media organizations have
                distorted the truth about Credit Access Businesses (CABs) and
                hard working Texans that need access to credit during financial
                emergencies. Despite high demand for credit, these activists
                wish to eliminate more than $2 billion in credit in Texas
                without providing reasonable alternatives outside of
                government-subsidized banking through places such as the US
                Postal Service.
              </p>
              <p>
                Texans deserve the right to choose - without government mandates
                - what is best for them and their families. Learn the truth
                about our issue below:
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  render={<Link href="/action" />}
                  nativeButton={false}
                  size="lg"
                  className="tracking-wide"
                >
                  TAKE ACTION NOW
                </Button>
                <Button
                  render={<Link href="/about" />}
                  nativeButton={false}
                  size="lg"
                  variant="ghost"
                >
                  About the issue
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------
          Hear From Real Customers
          Rendered ONCE — the legacy DOM duplicated this block for mobile
          (teardown.md anti-pattern #6).
          --------------------------------------------------------------- */}
      <Section tone="sunken" id="customers" aria-labelledby="customers-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Satisfaction</Eyebrow>
            <h2
              id="customers-heading"
              className="mt-4 font-heading text-3xl leading-tight font-semibold text-primary lg:text-4xl"
            >
              Hear From Real Customers
            </h2>
            <div className="mx-auto mt-7 max-w-[65ch] space-y-5 text-lg leading-relaxed text-foreground">
              <p>
                While many liberal media organizations have created a false
                narrative about our industry, an overwhelming majority of
                short-term borrowing clients value the services and are
                satisfied with the product offerings.
              </p>
              <p>
                The short-term borrowing industry has the least complaints of
                all financial services companies in Texas and nationally with
                the Consumer Financial Protection Bureau (CFPB).
              </p>
            </div>
          </div>

          <ul className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                value: '98%',
                label: 'were satisfied with their most recent loan experience',
              },
              {
                value: '93%',
                label:
                  'carefully weighed the risks and benefits before borrowing',
              },
              {
                value: '95%',
                label: 'value having the option to take out a short-term loan',
              },
            ].map((item) => (
              <li
                key={item.value}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <p className="tabular font-heading text-4xl font-bold text-primary">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Source: Harris Interactive poll of short-term lending customers.
          </p>

          <div className="mt-10 text-center">
            <Button
              render={<Link href="/action" />}
              nativeButton={false}
              size="lg"
              className="tracking-wide"
            >
              TAKE ACTION NOW
            </Button>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------
          Fact Sheets
          --------------------------------------------------------------- */}
      <Section id="factsheets" aria-labelledby="factsheets-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The Evidence</Eyebrow>
              <h2
                id="factsheets-heading"
                className="mt-4 font-heading text-3xl leading-tight font-semibold text-primary lg:text-4xl"
              >
                Fact Sheets
              </h2>
              <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
                Download and share the research behind our position on
                short-term borrowing in Texas.
              </p>
            </div>
            <Button
              render={<Link href="/resources" />}
              nativeButton={false}
              variant="outline"
              size="lg"
            >
              View all resources
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {factSheets.slice(0, 8).map((sheet) => (
              <li key={sheet.file} className="h-full">
                <FactSheetCard sheet={sheet} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------
          Subscribe
          --------------------------------------------------------------- */}
      <Section tone="sunken" id="subscribe" aria-labelledby="subscribe-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Stay Informed &amp; In-The-Know</Eyebrow>
              <h2
                id="subscribe-heading"
                className="mt-4 font-heading text-3xl leading-tight font-semibold text-primary lg:text-4xl"
              >
                Subscribe Now
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-foreground">
                Protect your right to make your own financial decisions. Sign up
                to our newsletter now and make sure your voice is heard in
                Austin. You&apos;ll receive the latest news and updates directly
                to your inbox.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
              <SubscribeForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

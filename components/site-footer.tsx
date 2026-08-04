import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon, XIcon } from '@/components/brand-icons';
import { navLinks, site, socialLinks } from '@/lib/site';

const socialIcons = {
  Facebook: FacebookIcon,
  Twitter: XIcon,
  Instagram: InstagramIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-surface-inverse text-sky-200">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-4 rounded-lg bg-white px-5 py-4">
              <Image
                src="/logo-mark.png"
                alt={`${site.name} logo`}
                width={921}
                height={675}
                className="h-16 w-auto"
              />
              <span className="font-heading leading-tight text-primary">
                <span className="block text-2xl font-bold tracking-tight uppercase">
                  Texans
                </span>
                <span className="block text-xs font-semibold tracking-[0.16em] uppercase">
                  For Financial Choice
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sky-200/90">
              {site.description}
            </p>
          </div>

          <div>
            <h2 className="text-eyebrow text-sky-300 uppercase">Explore</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="rounded-sm text-sm transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:outline-none"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-sm transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-eyebrow text-sky-300 uppercase">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-sm text-sm break-all transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:outline-none"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>

            <h2 className="text-eyebrow mt-8 text-sky-300 uppercase">Follow</h2>
            <ul className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-10 items-center justify-center rounded-md border border-sky-200/25 transition-colors hover:border-sky-300 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:outline-none"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-sky-200/20 pt-8">
          <p className="text-sm text-sky-200/80">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

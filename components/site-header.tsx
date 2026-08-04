'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navLinks, site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-6 px-6 lg:h-24 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3.5 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {/* Symbol only. The full lockup already contains the wordmark, so
              pairing it with the text below would set the name twice — and its
              built-in sub-line is illegible at header sizes. Splitting them
              lets the mark run much larger. */}
          <Image
            src="/logo-mark.png"
            alt=""
            width={921}
            height={675}
            priority
            className="h-12 w-auto shrink-0 lg:h-14"
          />
          <span className="font-heading leading-tight text-primary">
            <span className="block text-xl font-bold tracking-tight uppercase sm:text-2xl">
              Texans
            </span>
            <span className="block text-[0.625rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:text-[0.75rem]">
              For Financial Choice
            </span>
          </span>
          <span className="sr-only">{site.name} — home</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={cn(
                    'relative rounded-sm py-1 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
                    isActive(link.href)
                      ? 'text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-primary'
                      : 'text-foreground hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/action" />}
            nativeButton={false}
            size="lg"
            className="hidden tracking-wide sm:inline-flex"
          >
            TAKE ACTION
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-primary">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-4 pb-8">
                <ul className="flex flex-col gap-1">
                  <li>
                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href="/"
                          className="block rounded-md px-3 py-3 text-lg font-medium text-foreground hover:bg-muted hover:text-primary"
                        />
                      }
                    >
                      Home
                    </SheetClose>
                  </li>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            href={link.href}
                            aria-current={
                              isActive(link.href) ? 'page' : undefined
                            }
                            className={cn(
                              'block rounded-md px-3 py-3 text-lg font-medium hover:bg-muted hover:text-primary',
                              isActive(link.href)
                                ? 'text-primary'
                                : 'text-foreground'
                            )}
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Button
                      render={<Link href="/action" />}
                      nativeButton={false}
                      size="lg"
                      className="mt-6 w-full tracking-wide"
                    />
                  }
                >
                  TAKE ACTION
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

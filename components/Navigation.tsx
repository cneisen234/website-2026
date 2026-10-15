'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

// The menu follows Pilot Light's navigation convention: up to 6 items; past that, a category is a button that
// opens its links (never a link itself). About groups the pages about Kindling.
type NavLink = { label: string; href: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pilot Light', href: '/pilot-light' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'About',
    children: [
      { label: 'About us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

/** The phone menu's category steps, in milliseconds: the others fade, it slides, then its links appear. */
const FADE_MS = 300;
const SLIDE_MS = 380;
const LINKS_MS = 240;

const isGroup = (item: NavItem): item is { label: string; children: NavLink[] } => 'children' in item;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  // The phone menu's category runs in steps, each after the last has finished (navigation convention,
  // docs/site-conventions.md §4): 1 the other items fade away, 2 it slides to the top, 3 its links appear.
  // Closing runs 3, 2, 1 backward.
  const [step, setStep] = useState(0);
  // How far the chosen category slides up to reach the top of the phone menu.
  const [shift, setShift] = useState(0);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const menuRef = useRef<HTMLUListElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const run = (steps: [number, () => void][]) => {
    timers.current.forEach(clearTimeout);
    timers.current = steps.map(([at, fn]) => setTimeout(fn, at));
  };

  const openMobileGroup = (label: string | null) => {
    if (label) {
      setShift(itemRefs.current[label]?.offsetTop ?? 0);
      setMobileGroup(label);
      setStep(1);
      run([
        [FADE_MS, () => setStep(2)],
        [FADE_MS + SLIDE_MS, () => setStep(3)],
      ]);
    } else {
      setStep(2);
      run([
        [LINKS_MS, () => setStep(1)],
        [LINKS_MS + SLIDE_MS, () => setStep(0)],
        [LINKS_MS + SLIDE_MS + FADE_MS, () => setMobileGroup(null)],
      ]);
    }
  };
  const resetMobileGroup = () => {
    timers.current.forEach(clearTimeout);
    setStep(0);
    setMobileGroup(null);
  };
  const pathname = usePathname();

  // A category's links close on a click elsewhere or Escape.
  useEffect(() => {
    if (!openGroup) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenGroup(null);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [openGroup]);

  // Detect scroll to add a subtle backdrop blur when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 transition-all"
        style={{
          backgroundColor: scrolled
            ? 'rgba(245, 241, 235, 0.85)'
            : 'var(--warm-cream)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(194, 65, 12, 0.12)'
            : '1px solid transparent',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo / wordmark */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/transparent_logo.webp"
                alt="Kindling Digital"
                width={1024}
                height={1536}
                className="h-10 w-auto transition-transform group-hover:rotate-6"
                priority
              />
              <span
                className="text-xl tracking-tight"
                style={{
                  color: 'var(--charcoal)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Kindling Digital
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul ref={menuRef} className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                if (isGroup(item)) {
                  const isActive = item.children.some((c) => c.href === pathname);
                  const isOpenGroup = openGroup === item.label;
                  return (
                    <li key={item.label} className="relative">
                      <button
                        type="button"
                        aria-expanded={isOpenGroup}
                        onClick={() => setOpenGroup(isOpenGroup ? null : item.label)}
                        className="relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
                        style={{ color: isActive ? 'var(--ember-deep)' : 'var(--charcoal)' }}
                      >
                        {item.label}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform" style={{ transform: isOpenGroup ? 'rotate(180deg)' : 'none' }}>
                          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpenGroup ? (
                        <ul
                          className="absolute right-0 top-full mt-2 min-w-[180px] rounded-2xl py-2"
                          style={{ backgroundColor: 'white', border: '2px solid var(--charcoal)', boxShadow: '6px 7px 0 rgba(194, 65, 12, 0.85)' }}
                        >
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpenGroup(null)}
                                className="block px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[rgba(194,65,12,0.08)]"
                                style={{ color: pathname === child.href ? 'var(--ember-deep)' : 'var(--charcoal)' }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                }
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-sm font-medium transition-colors group"
                      style={{
                        color: isActive ? 'var(--ember-deep)' : 'var(--charcoal)',
                      }}
                    >
                      {item.label}
                      <span
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full transition-opacity"
                        style={{
                          backgroundColor: 'var(--ember-deep)',
                          opacity: isActive ? 1 : 0,
                        }}
                      />
                      <span
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full opacity-0 group-hover:opacity-50 transition-opacity"
                        style={{
                          backgroundColor: 'var(--ember-deep)',
                        }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="btn-fun group hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm"
              style={{
                backgroundColor: 'var(--ember-deep)',
                color: 'var(--bone)',
              }}
            >
              Let&apos;s Talk
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              style={{
                backgroundColor: isOpen
                  ? 'var(--charcoal)'
                  : 'rgba(194, 65, 12, 0.1)',
              }}
              onClick={() => {
                setIsOpen(!isOpen);
                resetMobileGroup();
              }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className="block h-0.5 w-full transition-all origin-center"
                  style={{
                    backgroundColor: isOpen ? 'var(--bone)' : 'var(--charcoal)',
                    transform: isOpen
                      ? 'rotate(45deg) translate(4px, 5px)'
                      : 'none',
                  }}
                />
                <span
                  className="block h-0.5 w-full transition-all"
                  style={{
                    backgroundColor: isOpen ? 'var(--bone)' : 'var(--charcoal)',
                    opacity: isOpen ? 0 : 1,
                  }}
                />
                <span
                  className="block h-0.5 w-full transition-all origin-center"
                  style={{
                    backgroundColor: isOpen ? 'var(--bone)' : 'var(--charcoal)',
                    transform: isOpen
                      ? 'rotate(-45deg) translate(4px, -5px)'
                      : 'none',
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        {/* Ambient glow inside overlay */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        <div className="relative h-full flex flex-col pt-24 pb-12 px-6">
          {/* Mobile nav links */}
          <nav className="flex-1 flex flex-col justify-center">
            {/*
              A category (navigation convention, docs/site-conventions.md §4): opening it fades the other items, slides
              it to the top, then shows its links under it; closing runs the same steps backward. Nothing below moves.
            */}
            <ul className="relative space-y-2">
              {navItems.map((item, idx) => {
                const chosen = isGroup(item) && mobileGroup === item.label;
                const shown = chosen && step >= 3;
                // The others fade away with a slight drift down, so it reads as a fade, not a cut.
                const faded = mobileGroup !== null && !chosen && step >= 1;
                const fade = {
                  opacity: faded ? 0 : 1,
                  transform: faded ? 'translateY(10px)' : 'none',
                  pointerEvents: faded ? ('none' as const) : undefined,
                  transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
                };
                if (isGroup(item)) {
                  const isActive = item.children.some((c) => c.href === pathname);
                  return (
                    <li
                      key={item.label}
                      ref={(el) => {
                        itemRefs.current[item.label] = el;
                      }}
                      className="relative"
                      style={{
                        ...fade,
                        transform: chosen && step >= 2 ? `translateY(-${shift}px)` : fade.transform,
                        transition: chosen ? `transform ${SLIDE_MS}ms cubic-bezier(.2,.8,.2,1)` : fade.transition,
                      }}
                    >
                      {/* The menu's entrance animation sits on a wrapper: an animation would override this item's own fade and slide. */}
                      <div className={isOpen ? 'fade-in-up' : ''} style={{ animationDelay: `${idx * 60}ms` }}>
                      <button
                        type="button"
                        aria-expanded={chosen}
                        onClick={() => openMobileGroup(chosen ? null : item.label)}
                        className="flex items-center gap-3 py-3 cursor-pointer"
                      >
                        <span
                          className="text-4xl tracking-tight transition-colors"
                          style={{ color: isActive || chosen ? 'var(--ember-orange)' : 'var(--bone)', fontFamily: 'var(--font-heading)', fontStyle: isActive ? 'italic' : 'normal' }}
                        >
                          {item.label}
                        </span>
                        <svg width="22" height="22" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform duration-300" style={{ color: 'var(--bone)', transform: chosen ? 'rotate(180deg)' : 'none' }}>
                          <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      </div>
                      <ul
                        aria-hidden={!shown}
                        className="absolute left-0 top-full w-full pl-5 space-y-1"
                        style={{
                          borderLeft: '2px solid rgba(251, 146, 60, 0.35)',
                          opacity: shown ? 1 : 0,
                          transform: shown ? 'translateY(0)' : 'translateY(-8px)',
                          visibility: shown ? 'visible' : 'hidden',
                          pointerEvents: shown ? 'auto' : 'none',
                          transition: `opacity ${LINKS_MS}ms ease, transform ${LINKS_MS}ms ease, visibility 0ms linear ${shown ? 0 : LINKS_MS}ms`,
                        }}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              tabIndex={shown ? 0 : -1}
                              onClick={() => {
                                setIsOpen(false);
                                resetMobileGroup();
                              }}
                              className="block py-2 text-2xl tracking-tight"
                              style={{ color: pathname === child.href ? 'var(--ember-orange)' : 'var(--bone)', fontFamily: 'var(--font-heading)', opacity: pathname === child.href ? 1 : 0.85 }}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} style={fade}>
                    <div className={isOpen ? 'fade-in-up' : ''} style={{ animationDelay: `${idx * 60}ms` }}>
                    <Link
                      href={item.href}
                      tabIndex={faded ? -1 : 0}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 py-3"
                    >
                      <span
                        className="text-4xl tracking-tight transition-colors"
                        style={{
                          color: isActive ? 'var(--ember-orange)' : 'var(--bone)',
                          fontFamily: 'var(--font-heading)',
                          fontStyle: isActive ? 'italic' : 'normal',
                        }}
                      >
                        {item.label}
                      </span>
                    </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA at bottom of mobile menu */}
          <div className="pt-8" style={{ borderTop: '1px solid rgba(251, 146, 60, 0.2)' }}>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-fun btn-fun-dark group flex items-center justify-center gap-2 w-full px-6 py-4 text-lg"
              style={{
                backgroundColor: 'var(--ember-orange)',
                color: 'var(--midnight)',
              }}
            >
              Let&apos;s Talk
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Contact info inside mobile menu */}
            <div className="mt-6 space-y-2 text-center">
              <a
                href="mailto:chris@kindlingdigital.org"
                className="block text-sm"
                style={{ color: 'var(--bone)', opacity: 0.7 }}
              >
                chris@kindlingdigital.org
              </a>
              <a
                href="tel:+17014294837"
                className="block text-sm"
                style={{ color: 'var(--bone)', opacity: 0.7 }}
              >
                (701) 429-4837
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
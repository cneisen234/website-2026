'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12"
                style={{ backgroundColor: 'rgba(194, 65, 12, 0.12)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z"
                    fill="var(--ember-deep)"
                  />
                </svg>
              </div>
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
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium transition-colors group"
                      style={{
                        color: isActive ? 'var(--ember-deep)' : 'var(--charcoal)',
                      }}
                    >
                      {link.label}
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
              Let's Talk
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
              onClick={() => setIsOpen(!isOpen)}
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
            <ul className="space-y-2">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <li
                    key={link.href}
                    className={isOpen ? 'fade-in-up' : ''}
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 py-3"
                    >
                      <span
                        className="text-sm tracking-[0.15em] uppercase shrink-0 w-8"
                        style={{
                          color: 'var(--ember-orange)',
                          opacity: isActive ? 0.9 : 0.5,
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className="text-4xl tracking-tight transition-colors"
                        style={{
                          color: isActive ? 'var(--ember-orange)' : 'var(--bone)',
                          fontFamily: 'var(--font-heading)',
                          fontStyle: isActive ? 'italic' : 'normal',
                        }}
                      >
                        {link.label}
                      </span>
                    </Link>
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
              Let's Talk
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
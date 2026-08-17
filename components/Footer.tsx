import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden mt-auto"
      style={{ backgroundColor: 'var(--midnight)' }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-20 relative">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            {/* Stacked logo lockup — flame above the wordmark */}
            <div className="mb-6">
              <Image
                src="/transparent_logo.png"
                alt="Kindling Digital"
                width={1024}
                height={1536}
                className="h-16 w-auto mb-3"
              />
              <span
                className="block text-3xl tracking-tight leading-none"
                style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
              >
                Kindling Digital
              </span>
            </div>

            <p
              className="text-lg mb-8 max-w-md"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}
            >
              The{' '}
              <em
                style={{
                  color: 'var(--ember-orange)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                tech guy
              </em>
              {' '}in your back pocket. Digital marketing that gives your brand a  <em
                style={{
                  color: 'var(--ember-orange)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                spark
              </em>, plus a hand with your everyday tech needs.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:chris@kindlingdigital.org"
                className="group flex items-center gap-3 transition-colors"
                style={{ color: 'var(--bone)', opacity: 0.85 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path
                    d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2"
                    stroke="var(--ember-orange)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="group-hover:opacity-100 transition-opacity">
                  chris@kindlingdigital.org
                </span>
              </a>
              <a
                href="tel:+17014294837"
                className="group flex items-center gap-3 transition-colors"
                style={{ color: 'var(--bone)', opacity: 0.85 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="var(--ember-orange)"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>(701) 429-4837</span>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Explore column */}
          <div className="md:col-span-3">
            <h3
              className="text-xs font-medium tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
            >
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Pricing', href: '/pricing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition-all hover:translate-x-1"
                    style={{ color: 'var(--bone)', opacity: 0.85 }}
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch column */}
          <div className="md:col-span-3">
            <h3
              className="text-xs font-medium tracking-[0.2em] uppercase mb-5"
              style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
            >
              Get In Touch
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Contact', href: '/contact' },
                { label: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition-all hover:translate-x-1"
                    style={{ color: 'var(--bone)', opacity: 0.85 }}
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini CTA */}
            <Link
              href="/contact"
              className="btn-fun btn-fun-dark group mt-8 inline-flex items-center gap-2 px-5 py-3 text-sm"
              style={{
                backgroundColor: 'var(--ember-orange)',
                color: 'var(--midnight)',
              }}
            >
              Let's Talk
              <svg
                width="16"
                height="16"
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
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(251, 146, 60, 0.15)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'var(--bone)', opacity: 0.5 }}
          >
            © {new Date().getFullYear()} Kindling Digital. All rights reserved.
          </p>
          <p
            className="text-sm"
            style={{ color: 'var(--bone)', opacity: 0.5 }}
          >
            Built locally, with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
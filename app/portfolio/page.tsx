import type { CSSProperties } from 'react';
import Image from 'next/image';

const built = [
  'Custom website',
  'Logo & branding',
  'Brand colors & fonts',
  'Built from scratch',
  'Works on any device',
];

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--warm-cream)' }}>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(20%, -30%)',
          }}
        />
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        <svg className="floaty absolute top-24 right-[12%] hidden lg:block pointer-events-none" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">

            <h1
              className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95]"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Work I&apos;m{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                proud of
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="draw-stroke"
                    pathLength={1}
                    d="M2 8 Q 75 2, 150 6 T 298 4"
                    stroke="var(--ember-deep)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
              
            </h1>

            <p
              className="text-xl md:text-2xl fade-in-up stagger-2 max-w-3xl"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              Custom sites, built from scratch and branded to match the business
              behind them. Take a look.
            </p>
          </div>
        </div>
      </section>

      {/* Particular Notions — DARK case study */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--forest-green) 0%, transparent 70%)', transform: 'translate(-30%, 0)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-16 md:gap-12 items-center">
            {/* Text */}
            <div className="md:col-span-5">
              <span
                className="badge badge-on-dark badge-tilt mb-4"
                style={{ color: 'var(--forest-green)', backgroundColor: 'rgba(95, 167, 119, 0.16)' }}
              >
                <span className="badge-dot" />
                Particular Notions
              </span>
              <h2
                className="text-4xl md:text-5xl mb-6 leading-[1.05]"
                style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
              >
                Handmade charms, a brand to match.
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.75' }}>
                Particular Notions is a handmade craft vendor — beaded charms and
                keychains, each one made by hand. It needed a site that felt as
                personal as the work. I built the whole thing from scratch and put
                the branding together to match: the sage-and-gold palette, the fox
                logo, the fonts. From the homepage to the last product card, it all looks
                like one business.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {built.map((item) => (
                  <span
                    key={item}
                    className="chip-fun chip-fun-dark inline-flex items-center gap-2 text-sm px-4 py-2"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--bone)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--forest-green)' }} />
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="https://www.particularnotions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-8 py-4 text-lg"
                style={{ backgroundColor: 'var(--forest-green)', color: 'white' }}
              >
                Visit the site
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Screenshots */}
            <div className="md:col-span-7">
              <div className="relative mx-auto max-w-xl md:mr-0">
                {/* Desktop in a browser frame */}
                <div
                  className="rounded-2xl overflow-hidden bg-white"
                  style={{
                    border: '2px solid var(--charcoal)',
                    boxShadow: '12px 14px 0 rgba(95, 167, 119, 0.8)',
                    transform: 'rotate(-1.5deg)',
                  }}
                >
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#ece7db' }}>
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#d98b6a' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#e8c069' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9cb5a3' }} />
                  </div>
                  <Image
                    src="/particularnotions2.png"
                    alt="The Particular Notions website on desktop"
                    width={1720}
                    height={892}
                    className="w-full h-auto"
                  />
                </div>

                {/* Mobile overlapping */}
                <div
                  className="absolute -bottom-8 left-2 md:-bottom-10 md:-left-6 w-24 sm:w-28 md:w-40 rounded-2xl overflow-hidden bg-white"
                  style={{
                    border: '2px solid var(--charcoal)',
                    boxShadow: '6px 8px 0 rgba(240, 185, 73, 0.85)',
                    transform: 'rotate(5deg)',
                  }}
                >
                  <Image
                    src="/particularnotions1.png"
                    alt="The Particular Notions website on mobile"
                    width={373}
                    height={810}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-tilt mb-6">
              <span className="badge-dot" />
              Get Started
            </span>
            <h2
              className="text-5xl md:text-7xl mb-8 leading-[1.05]"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Want something like this?
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              Tell me about your business and we&apos;ll build you one.
            </p>
            <a
              href="/contact"
              className="btn-fun group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
            >
              Get in Touch
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
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

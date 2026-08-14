import type { CSSProperties } from 'react';

const pieces = [
  {
    id: 'website',
    num: '01',
    eyebrow: 'The Website',
    dark: true,
    accent: 'var(--ember-orange)',
    tint: 'rgba(251, 146, 60, 0.14)',
    heading: 'Your site, built from scratch.',
    body: "I build every site by hand with the same tools the big companies use. It's made to match your brand and quick to load, and because it's built from scratch, you can keep adding to it later.",
    included: [
      'Up to 5 or 10 pages, depending on your package',
      'Custom design that matches your brand',
      'Fast, and works on any device',
      'Built so you can add to it later',
    ],
  },
  {
    id: 'branding',
    num: '02',
    eyebrow: 'Branding',
    dark: false,
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    heading: 'A brand that holds together.',
    body: "If you don't have colors, fonts, or a logo yet, I'll put them together for you. You get a brand document that spells it all out, so when you order business cards, fliers, or anything else, everything matches and looks like the same business.",
    included: [
      'Logo design',
      'Brand colors & fonts',
      'A brand guide document',
      'A look that stays consistent everywhere',
    ],
  },
  {
    id: 'social',
    num: '03',
    eyebrow: 'Social',
    dark: true,
    accent: 'var(--honey-gold)',
    tint: 'rgba(240, 185, 73, 0.16)',
    heading: 'Social media, off your plate.',
    body: "I post to your social every month so you don't have to think about it. It stays active, it looks like the rest of your brand, and it's one more thing you can cross off your list.",
    included: [
      '1 to 2 posts a month with your package',
      'Posts that match your branding',
      'More posts anytime',
    ],
  },
  {
    id: 'get-found',
    num: '04',
    eyebrow: 'Get Found',
    dark: false,
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    heading: 'Show up where people look.',
    body: "On the $200 package, I get you set up on Google Business so you turn up in local searches and maps. You also get business email on your own domain, so your emails look like they come from a real company instead of a random Gmail.",
    included: [
      'Google Business registration',
      'Up to 3 business email accounts on your domain',
      'Included on the $200 package',
    ],
  },
];

const jumpLinks = [
  { label: 'The Website', href: '#website' },
  { label: 'Branding', href: '#branding' },
  { label: 'Social', href: '#social' },
  { label: 'Get Found', href: '#get-found' },
  { label: 'Everything Else', href: '#hourly' },
];

const hourlyServices = [
  'Contact forms',
  'Blogs',
  'Online payments',
  'Online stores',
  'Booking forms',
  'Surveys',
  'Automation',
  'Software integrations',
  'Computer troubleshooting',
  'Wi-Fi & networking',
  'Software setup & training',
  'Equipment setup',
];

export default function Services() {
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

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">
            <div className="badge badge-tilt mb-8 fade-in-up">
              <span className="badge-dot" />
              What I Do
            </div>

            <h1
              className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95]"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              The package, and{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                everything else
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
              .
            </h1>

            <p
              className="text-xl md:text-2xl fade-in-up stagger-2 max-w-3xl"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              The digital marketing package covers your whole presence online —
              site, branding, social, the works. Anything past that, I&apos;m the
              tech guy you call.
            </p>

            <div className="mt-10 flex flex-wrap gap-2 fade-in-up stagger-3">
              {jumpLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="badge font-rounded text-sm transition-transform hover:-translate-y-0.5"
                  style={{ border: '2px solid var(--charcoal)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PACKAGE — broken into its pieces */}
      {pieces.map((piece) => (
        <section
          key={piece.id}
          id={piece.id}
          className="py-20 md:py-32 relative overflow-hidden scroll-mt-20"
          style={{ backgroundColor: piece.dark ? 'var(--midnight)' : 'var(--warm-cream)' }}
        >
          <div
            className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(circle, ${piece.accent} 0%, transparent 70%)` }}
          />

          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <div className="md:sticky md:top-8">
                  <span
                    className="text-7xl md:text-8xl leading-none block mb-6"
                    style={{ color: piece.accent, opacity: 0.6, fontFamily: 'var(--font-heading)' }}
                  >
                    {piece.num}
                  </span>
                  <span
                    className={`badge badge-tilt mb-4 ${piece.dark ? 'badge-on-dark' : ''}`}
                    style={{ color: piece.accent, backgroundColor: piece.tint }}
                  >
                    <span className="badge-dot" />
                    {piece.eyebrow}
                  </span>
                  <h2
                    className="text-4xl md:text-5xl mb-6 leading-[1.05]"
                    style={{ color: piece.dark ? 'var(--bone)' : 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                  >
                    {piece.heading}
                  </h2>
                  <p
                    className="text-lg"
                    style={{
                      color: piece.dark ? 'var(--bone)' : 'var(--ash-gray)',
                      opacity: piece.dark ? 0.75 : 1,
                      lineHeight: '1.7',
                    }}
                  >
                    {piece.body}
                  </p>
                </div>
              </div>

              <div className="md:col-span-7">
                <div
                  className={`card-fun ${piece.dark ? 'card-fun-dark' : ''} tilt-r p-8 md:p-10`}
                  style={{
                    backgroundColor: piece.dark ? 'rgba(255, 255, 255, 0.05)' : 'white',
                    ['--shadow-color' as string]: piece.accent,
                  } as CSSProperties}
                >
                  <div
                    className="font-rounded text-sm mb-6"
                    style={{ color: piece.accent, fontWeight: 500 }}
                  >
                    What&apos;s included
                  </div>
                  <ul className="space-y-4">
                    {piece.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: piece.tint }}
                        >
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 8l3 3 7-7"
                              stroke={piece.accent}
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          style={{
                            color: piece.dark ? 'var(--bone)' : 'var(--charcoal)',
                            opacity: piece.dark ? 0.85 : 1,
                            lineHeight: '1.5',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* It all comes in the package — quick nudge to pricing */}
      <section className="py-16 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <p
              className="text-2xl md:text-3xl leading-[1.3]"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              It all comes in one monthly package — $100 or $200.{' '}
              <a href="/pricing" className="italic underline decoration-2 underline-offset-4" style={{ color: 'var(--ember-deep)' }}>
                See the pricing
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* EVERYTHING ELSE — $50/HR — DARK */}
      <section
        id="hourly"
        className="py-20 md:py-32 relative overflow-hidden scroll-mt-20"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, -20%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-8">
                <span className="badge badge-on-dark badge-tilt mb-4">
                  <span className="badge-dot" />
                  A Guy in Your Pocket
                </span>
                <h2
                  className="text-4xl md:text-6xl mb-6 leading-[1.05]"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Anything else,{' '}
                  <em className="italic" style={{ color: 'var(--ember-orange)' }}>
                    I&apos;m a call away.
                  </em>
                </h2>
                <p
                  className="text-lg"
                  style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}
                >
                  Your site&apos;s a springboard. Once it&apos;s up, I can add
                  just about anything to it. And if a computer at the shop starts
                  giving you trouble, that&apos;s me too.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {hourlyServices.map((item) => (
                  <div
                    key={item}
                    className="chip-fun chip-fun-dark p-4 flex items-center gap-3"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <span
                      className="inline-block w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--ember-orange)' }}
                    />
                    <span className="text-sm md:text-base" style={{ color: 'var(--bone)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-base mt-6" style={{ color: 'var(--bone)', opacity: 0.7 }}>
                Basically anything you see online, I can probably build.
              </p>
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
              Let&apos;s get you set up.
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              Tell me a bit about your business and I&apos;ll walk you through
              what makes sense.
            </p>
            <a
              href="/contact"
              className="btn-fun group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
            >
              Get In Touch
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

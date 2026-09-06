import type { CSSProperties } from 'react';

const pieces = [
  {
    id: 'website',
    num: '01',
    eyebrow: 'Websites',
    dark: true,
    accent: 'var(--ember-orange)',
    tint: 'rgba(251, 146, 60, 0.14)',
    heading: 'Your site, built from scratch.',
    body: "Maybe you don't have a site yet, or the one you've got doesn't look like the quality of your work. We build every site by hand — no templates — made to match your brand, quick to load, and working on any device. Because it's custom, it can keep growing with your business.",
    included: [
      'Custom design that matches your brand',
      'Fast, and works on any device',
      'Redesigns of an existing site',
      'Business email & Google Business setup',
      'Built so you can add to it later',
    ],
  },
  {
    id: 'the-brand',
    num: '02',
    eyebrow: 'Branding',
    dark: false,
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    heading: 'A brand that holds together.',
    body: "If you don't have colors, fonts, or a logo yet, we'll put them together for you. You get a brand guide that spells it all out, so your website, business cards, and anything else all look like the same business.",
    included: [
      'Logo design',
      'Brand colors & fonts',
      'A brand guide document',
      'Business cards & email signature design',
      'Custom graphics, flyers & branded swag',
    ],
  },
  {
    id: 'sell-and-book',
    num: '03',
    eyebrow: 'Sell & Book',
    dark: true,
    accent: 'var(--honey-gold)',
    tint: 'rgba(240, 185, 73, 0.16)',
    heading: 'Take orders and bookings online.',
    body: "When every order or booking runs through a phone call, a text, or waiting until morning, you lose customers who wanted to buy right then. Let people browse, buy, pay, and book appointments themselves — around the clock, built right into your site so it's one smooth experience.",
    included: [
      'Online payments & checkout',
      'Online stores & ecommerce',
      'Booking & scheduling',
      'Contact & intake forms',
      'Reviews, galleries & newsletter signup',
    ],
  },
  {
    id: 'software',
    num: '04',
    eyebrow: 'Software & Automation',
    dark: false,
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    heading: 'Custom software that does the busywork.',
    body: "Sometimes what you need doesn't exist in an off-the-shelf tool — or you're stuck doing the same job by hand every week. This is where we go past a website: custom software, web apps, and automations built around how your business actually runs, connecting the tools you already use.",
    included: [
      'Custom software & web applications',
      'Business automation',
      'Integrations between your tools',
      'Internal tools & dashboards',
      'Custom digital solutions of all kinds',
    ],
  },
  {
    id: 'support',
    num: '05',
    eyebrow: 'Ongoing Support',
    dark: true,
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    heading: 'A tech guy in your back pocket.',
    body: "We don't disappear once you're live. We keep your site updated and we're around for whatever else comes up on the tech side — no employee to hire, no new company to track down every time. Just a real person who already knows your business, on call as your needs change.",
    included: [
      'Ongoing website updates',
      'Computer & tech troubleshooting',
      'Wi-Fi & networking',
      'Software setup & training',
      'Email & account help',
    ],
  },
];

const jumpLinks = [
  { label: 'Websites', href: '#website' },
  { label: 'Branding', href: '#the-brand' },
  { label: 'Sell & Book', href: '#sell-and-book' },
  { label: 'Software', href: '#software' },
  { label: 'Support', href: '#support' },
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
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-7">

            <h1
              className="mb-8 fade-in-up stagger-1"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              <span className="block text-4xl md:text-6xl leading-[1.05]">Everything we</span>
              <span
                className="block italic text-6xl md:text-8xl leading-[0.95] mt-1"
                style={{ color: 'var(--ember-deep)' }}
              >
                <span className="relative inline-block">
                 can build
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="14"
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
                </span>
              </span>
            </h1>

            <p
              className="text-lg md:text-xl max-w-lg fade-in-up stagger-2"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
            >
              Most businesses come to us for a website. Then they find out that if
              it&apos;s digital and it&apos;s slowing them down, we can probably build the fix —
              and stick around to keep it running. You don&apos;t have to know what you need;
              tell us the problem and we&apos;ll sort out the technology.
            </p>
          </div>
          <div className="md:col-span-5 w-full fade-in-up stagger-3">
          <div className="flex flex-wrap md:mb-10 md:flex-col gap-2 fade-in-up stagger-3">
            {jumpLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="badge md:ml-30 md:w-30 md:items-center justify-center font-rounded text-sm transition-transform hover:-translate-y-0.5"
                  style={{ border: '2px solid var(--charcoal)' }}
                >
                  {item.label}
                </a>
              ))}
                </div>
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

      {/* CTA — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
        />
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-tilt mb-6">
              <span className="badge-dot" />
              Get Started
            </span>
            <h2 className="text-4xl md:text-6xl mb-8 leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Not sure what you need? That&apos;s fine.
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
              Tell us what you&apos;re trying to do and we&apos;ll figure out the right way to
              get there — no jargon, no pressure.
            </p>
            <a
              href="/contact"
              className="btn-fun group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
            >
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

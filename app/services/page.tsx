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
    body: "We build every site by hand with the same tools the big companies use. It's made to match your brand and quick to load, and because it's built from scratch, you can keep adding to it later.",
    included: [
      'Up to 5 or 10 pages, depending on your package',
      'Custom design that matches your brand',
      'Fast, and works on any device',
      'Built so you can add to it later',
    ],
  },
  {
    id: 'the-brand',
    num: '02',
    eyebrow: 'The Brand',
    dark: false,
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    heading: 'A brand that holds together.',
    body: "If you don't have colors, fonts, or a logo yet, we'll put them together for you. You get a brand document that spells it all out, so when you order business cards, fliers, or anything else, everything matches and looks like the same business.",
    included: [
      'Logo design',
      'Brand colors & fonts',
      'A brand guide document',
      'Business cards & email signature design',
      'A look that stays consistent everywhere',
    ],
  },
  {
    id: 'the-socials',
    num: '03',
    eyebrow: 'The Socials',
    dark: true,
    accent: 'var(--honey-gold)',
    tint: 'rgba(240, 185, 73, 0.16)',
    heading: 'Social media, off your plate.',
    body: "Want your social handled? We'll write and post for you so it stays active and looks like the rest of your brand — add it whenever you want, and only pay for the posts you use.",
    included: [
      'Simple flat rate per post',
      'Posts that match your brand',
      'As many or as few as you want',
    ],
  },
  {
    id: 'and-more',
    num: '04',
    eyebrow: 'And More',
    dark: false,
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    heading: 'And so much more.',
    body: "",
    included: [
      'Contact forms',
      'Blogs',
      'E-commerce',
      'Booking forms',
      'Software integrations',
      'Computer troubleshooting',
      'Wi-Fi & networking',
      'Software setup & training',
    ],
  },
];

const jumpLinks = [
  { label: 'The Website', href: '#website' },
  { label: 'The Brand', href: '#the-brand' },
  { label: 'The Socials', href: '#the-socials' },
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
              <span className="block text-4xl md:text-6xl leading-[1.05]">The package and</span>
              <span
                className="block italic text-6xl md:text-8xl leading-[0.95] mt-1"
                style={{ color: 'var(--ember-deep)' }}
              >
                <span className="relative inline-block">
                 the works
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

            <div>
           
            </div>
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
    </main>
  );
}

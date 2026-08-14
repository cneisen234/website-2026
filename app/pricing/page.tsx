import type { CSSProperties } from 'react';

const plans = [
  {
    price: '$100',
    cadence: '/month',
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    features: [
      'Up to a 5-page custom-built website',
      'Custom domain registration or transfer',
      'Logo design',
      'Brand packaging & defining',
      '3 minor site changes a month (text & photo updates)',
      '1 social media post a month',
    ],
  },
  {
    price: '$200',
    cadence: '/month',
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    features: [
      'Up to a 10-page custom-built website',
      'Custom domain registration or transfer',
      'Logo design',
      'Brand packaging & defining',
      '5 minor site changes a month (text & photo updates)',
      '2 social media posts a month',
      'Google Business registration',
      'Up to 3 business email accounts on your domain (name@yoursite.com)',
    ],
  },
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

export default function Pricing() {
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
              Pricing
            </div>

            <h1
              className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95]"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Your website, branding, and social.{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                One monthly price
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
              className="text-xl md:text-2xl fade-in-up stagger-2 max-w-3xl mb-8"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              Everything&apos;s custom-built from scratch and made to match your
              brand. Once you&apos;re set up, you&apos;ve got a tech guy in your
              pocket for anything else that comes up.
            </p>

            <div className="flex flex-wrap items-center gap-3 fade-in-up stagger-3">
              {[
                'Custom built from scratch',
                'Branding included',
                'One flat monthly price',
              ].map((item) => (
                <div
                  key={item}
                  className="chip-fun flex items-center gap-2 text-sm px-4 py-2"
                  style={{ color: 'var(--ash-gray)', backgroundColor: 'white' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8l3 3 7-7"
                      stroke="var(--ember-deep)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PACKAGES — DARK */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--forest-green) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              Digital Marketing
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Here&apos;s what you get every month.
            </h2>
            <p
              className="text-lg mt-6 max-w-2xl"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
            >
              Every site is custom-built from scratch, the kind that usually runs
              a few thousand on its own. It comes with the package. Pick your
              size and the rest is standard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl">
            {plans.map((plan) => (
              <div
                key={plan.price}
                className="card-fun tilt-none flex flex-col p-8 md:p-10"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: plan.accent } as CSSProperties}
              >
                <div className="flex items-baseline gap-2 mb-8">
                  <span
                    className="text-6xl md:text-7xl leading-none"
                    style={{ color: plan.accent, fontFamily: 'var(--font-heading)' }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-lg font-rounded"
                    style={{ color: 'var(--stone)' }}
                  >
                    {plan.cadence}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: plan.tint }}
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 8l3 3 7-7"
                            stroke={plan.accent}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span style={{ color: 'var(--ash-gray)', lineHeight: '1.5' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="btn-fun group mt-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: plan.accent, color: 'white' }}
                >
                  Get Started
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
            ))}
          </div>
        </div>
      </section>

      {/* EVERYTHING ELSE — $50/HR — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-8">
                <span className="badge badge-tilt mb-4">
                  <span className="badge-dot" />
                  A Guy in Your Pocket
                </span>
                <h2
                  className="text-4xl md:text-6xl mb-6 leading-[1.05]"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  Everything else is{' '}
                  <em className="italic" style={{ color: 'var(--ember-deep)' }}>
                    $50 an hour.
                  </em>
                </h2>
                <p
                  className="text-lg"
                  style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
                >
                  Once your site&apos;s up, it&apos;s a springboard. Add online
                  payments, a booking system, whatever you can think of. And if
                  the computer at the shop starts acting up, call me and
                  I&apos;ll probably figure it out.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {hourlyServices.map((item) => (
                  <div
                    key={item}
                    className="chip-fun p-4 flex items-center gap-3"
                    style={{ backgroundColor: 'white' }}
                  >
                    <span
                      className="inline-block w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--ember-deep)' }}
                    />
                    <span className="text-sm md:text-base" style={{ color: 'var(--charcoal)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-base mt-6" style={{ color: 'var(--stone)' }}>
                Basically anything you see online, I can probably build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — DARK */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Floating spark doodle */}
        <svg className="floaty-slow absolute top-16 left-[16%] hidden md:block pointer-events-none opacity-80" width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
        </svg>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-on-dark badge-tilt mb-6">
              <span className="badge-dot" />
              Get Started
            </span>
            <h2
              className="text-5xl md:text-7xl mb-8 leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Ready to get set up?
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}
            >
              Tell me a bit about your business and we&apos;ll figure out what
              you need.
            </p>
            <a
              href="/contact"
              className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-orange)', color: 'var(--midnight)' }}
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

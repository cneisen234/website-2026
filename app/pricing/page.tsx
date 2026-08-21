import type { CSSProperties } from 'react';

const plans = [
  {
    name: 'Brand in a Box',
    price: '$100',
    cadence: '/month',
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    features: [
      { label: 'Up to a 5-page custom-built website' },
      { label: 'Custom domain registration or transfer' },
      { label: 'Logo design' },
      { label: 'Brand packaging' },
      { label: '4 minor site changes a month', note: 'Text & photo updates' },
      {
        label: 'Member rates on add-on services',
        note: 'Social posts from $25, branded swag from $50, extra updates $15',
      },
    ],
  },
  {
    name: 'Business in a Box',
    price: '$250',
    cadence: '/month',
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    features: [
      { label: 'Up to a 10-page custom-built website' },
      { label: 'Custom domain registration or transfer' },
      { label: 'Logo design' },
      { label: 'Brand packaging' },
      { label: '8 minor site changes a month', note: 'Text & photo updates, also includes google business updates' },
      { label: 'Google Business registration' },
      {
        label: 'Up to 3 business email accounts on your domain',
        note: (
          <>
            name<span>@</span>yoursite.com
          </>
        ),
      },
      { label: 'Business card design & ordering', note: '50 cards a month, automatically ordered' },
      { label: 'Custom email signature design' },
      {
        label: 'Member rates on add-on services',
        note: 'Social posts from $25, branded swag from $50, extra updates $15',
      },
    ],
  },
];

const addOns = [
  {
    price: '$15',
    unit: '/ update',
    title: 'Extra minor update',
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    description:
      'Every text or photo update beyond what your package includes. Same quick turnaround, small flat price.',
  },
  {
    price: '$25',
    unit: '/ post',
    title: 'Minor social media post',
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    description:
      'Text only, or with a photo or graphic you provide. We write it up and get it posted where you want it.',
  },
  {
    price: '$50',
    unit: '/ post',
    title: 'Major social media post',
    accent: 'var(--ember-orange)',
    tint: 'rgba(234, 88, 12, 0.12)',
    description:
      'We take the photo or design a custom graphic from scratch, then write and publish the post.',
  },
  {
    price: '$50',
    unit: '/ item + cost',
    title: 'Branded swag',
    accent: 'var(--honey-gold)',
    tint: 'rgba(240, 185, 73, 0.16)',
    description:
      'Custom-designed tees, mugs, posters, flyers & more — $50 to design each item, plus whatever it costs to print and ship.',
  },
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
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-7">

            <h1
              className="mb-8 fade-in-up stagger-1"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              <span className="block text-4xl md:text-6xl leading-[1.05]">Your brand,</span>
              <span
                className="block italic text-6xl md:text-8xl leading-[0.95] mt-1"
                style={{ color: 'var(--ember-deep)' }}
              >
                <span className="relative inline-block">
                  one price
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
          </div>
          <div className="md:col-span-5 w-full md:mb-8 fade-in-up stagger-3">
          <div className="flex flex-wrap flex-col gap-3 fade-in-up stagger-3">
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
             We custom build your website using the same tools and design principles large firms charge thousands for. It comes with the package. Pick the plan that works for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl">
            {plans.map((plan) => (
              <div
                key={plan.price}
                className="card-fun tilt-none flex flex-col p-8 md:p-10"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: plan.accent } as CSSProperties}
              >
                <h3
                  className="text-2xl md:text-3xl mb-3"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  {plan.name}
                </h3>
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
                    <li key={feature.label} className="flex items-start gap-3">
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
                      <span className="flex flex-col">
                        <span style={{ color: 'var(--ash-gray)', lineHeight: '1.5' }}>
                          {feature.label}
                        </span>
                        {feature.note && (
                          <span
                            className="text-sm mt-0.5"
                            style={{ color: 'var(--stone)', lineHeight: '1.4' }}
                          >
                            {feature.note}
                          </span>
                        )}
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

      {/* ADD-ONS — FOR SUBSCRIBERS — CREAM */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--forest-green) 0%, transparent 70%)',
            transform: 'translate(-30%, -20%)',
          }}
        />
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              Add-ons for members
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] mb-6"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Need a little{' '}
              <em className="italic" style={{ color: 'var(--ember-deep)' }}>
                extra?
              </em>
            </h2>
            <p className="text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
              These flat-rate add-ons are available to anyone on a paid monthly plan — social
              posts, branded swag, extra site updates, and the odds and ends that come up along the
              way. Not a subscriber yet? No problem, these services are billed at the hourly rate
              below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {addOns.map((addOn) => (
              <div
                key={addOn.title}
                className="card-fun tilt-none flex flex-col p-8"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: addOn.accent } as CSSProperties}
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: addOn.tint }}
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 4v12M4 10h12"
                      stroke={addOn.accent}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span
                    className="text-5xl leading-none"
                    style={{ color: addOn.accent, fontFamily: 'var(--font-heading)' }}
                  >
                    {addOn.price}
                  </span>
                  <span className="text-base font-rounded" style={{ color: 'var(--stone)' }}>
                    {addOn.unit}
                  </span>
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  {addOn.title}
                </h3>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>{addOn.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVERYTHING ELSE — $75/HR — DARK */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, -10%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--forest-green) 0%, transparent 70%)',
            transform: 'translate(-20%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              In Your Back Pocket
            </span>
            <h2
              className="text-4xl md:text-6xl mb-6 leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Everything else is only{' '}
              <em className="italic" style={{ color: 'var(--ember-orange)' }}>
                $75 an hour.
              </em>
            </h2>
            <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
              Anything past the package is a flat $75 an hour — from handy tools bolted onto your
              site to being the tech guy in your back pocket for whatever else comes up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-12 max-w-4xl">
            {[
              {
                label: 'Add-ons for your site',
                accent: 'var(--ember-orange)',
                items: [
                  'Booking & scheduling',
                  'Online payments & checkout',
                  'Contact & intake forms',
                  'Reviews & testimonials',
                  'Photo galleries',
                  'Email newsletter signup',
                  'New pages & features',
                ],
              },
              {
                label: 'The tech guy in your back pocket',
                accent: 'var(--honey-gold)',
                items: [
                  'Computer troubleshooting',
                  'Wi-Fi & networking',
                  'Printer & device setup',
                  'Email & account help',
                  'Software setup & training',
                  'Point-of-sale (POS) setup',
                  'Virus & malware cleanup',
                ],
              },
            ].map((group) => (
              <div key={group.label}>
                <h3
                  className="text-sm font-rounded uppercase tracking-wide mb-5"
                  style={{ color: group.accent }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-4 py-2 rounded-full font-rounded"
                      style={{
                        color: 'var(--bone)',
                        border: '1.5px solid rgba(245, 241, 235, 0.25)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

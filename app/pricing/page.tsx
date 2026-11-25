import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import PilotFlame from '@/components/PilotFlame';
import { integrationPrice, integrations } from '@/lib/integrations';

export const metadata: Metadata = {
  title: 'Pricing | Kindling Digital',
  description:
    "Flat monthly plans from $100, Business in a Box with Pilot Light at $300, and $100 an hour for custom software and tech help.",
};

const plans = [
  {
    name: 'Brand in a Box',
    price: '$100',
    cadence: '/month',
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    tagline: 'A custom website and a full brand, kept up to date for you.',
    features: [
      { label: 'Up to a 10-page custom-built website' },
      { label: 'Custom domain registration or transfer' },
      { label: 'Logo design' },
      { label: 'Brand packaging' },
      { label: '10 updates a week', note: 'Text & photo updates only. Anything else is $100 an hour.' },
      { label: 'Integrations with your other services', note: integrationPrice },
    ],
  },
  {
    name: 'Business in a Box',
    price: '$300',
    cadence: '/month',
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    tagline: 'Everything in Brand in a Box, run from Pilot Light.',
    features: [
      { label: 'Pilot Light, set up for your business', note: 'A custom integration with your website and tools, Lena, and the iPhone app' },
      { label: '2 Pilot Light add-ons of your choice', note: 'More add-ons are $500 setup + $50/month each' },
      { label: 'Unlimited updates & support', note: 'For everything you already have, including your add-ons' },
      { label: 'Up to a 10-page custom-built website' },
      { label: 'Custom domain, logo design & brand packaging' },
    ],
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
              <span className="block text-6xl md:text-8xl leading-[0.95]">
                One monthly{' '}
                <span className="relative inline-block italic" style={{ color: 'var(--ember-deep)' }}>
                  price
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
              A professional, custom-built website and a full brand — the kind of work that usually costs thousands upfront, and that you&apos;d otherwise have to manage yourself. With us, it&apos;s one flat monthly price, built and handled for you. Business in a Box adds Pilot Light, so your whole business runs from one place and every update and fix is covered. Anything new on top is an add-on or $100 an hour, so you always know the cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="card-fun tilt-none flex flex-col p-8 md:p-10"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: plan.accent } as CSSProperties}
              >
                <h3
                  className="text-2xl md:text-3xl mb-2"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  {plan.name}
                </h3>
                <p className="mb-5" style={{ color: 'var(--stone)', lineHeight: '1.5' }}>
                  {plan.tagline}
                </p>
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

      {/* PILOT LIGHT ADD-ONS — ORANGE ON DARK */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)', borderTop: '1px solid rgba(251, 146, 60, 0.2)' }}>
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #fb923c 0%, transparent 70%)', transform: 'translate(30%, -50%)' }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <PilotFlame size={28} />
                <span className="text-sm font-rounded uppercase tracking-wide" style={{ color: '#fb923c' }}>
                  Pilot Light add-ons
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl leading-[1.08] mb-5" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                Two come with Business in a Box.{' '}
                <em className="italic" style={{ color: '#fb923c' }}>
                  Add more any time.
                </em>
              </h2>
              <p className="text-lg mb-6" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}>
                Add-ons are what Pilot Light runs for your business: online orders, bookings, business email, reviews and
                more. Pick two to start; every add-on after that is <strong style={{ color: 'var(--bone)' }}>$500 to set up and $50 a month</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['E-commerce', 'Google Workspace & email', 'Lena on your website', 'Reviews', 'Bookings', 'Events', 'Google Business Profile', 'Text notifications', 'Smart Scanner'].map((a) => (
                  <span key={a} className="text-sm px-4 py-2 rounded-full font-rounded" style={{ color: 'var(--bone)', border: '1.5px solid rgba(251, 146, 60, 0.4)' }}>
                    {a}
                  </span>
                ))}
              </div>
              <a href="/pilot-light" className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-7 py-3.5 text-base" style={{ backgroundColor: '#fb923c', color: 'var(--midnight)' }}>
                See Pilot Light
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-8" style={{ backgroundColor: 'rgba(251, 146, 60, 0.1)', border: '1.5px solid rgba(251, 146, 60, 0.45)' }}>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl leading-none" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                    $500
                  </span>
                  <span className="text-lg font-rounded" style={{ color: 'var(--bone)', opacity: 0.7 }}>
                    setup
                  </span>
                </div>
                <div className="mt-2 text-2xl" style={{ color: '#fb923c', fontFamily: 'var(--font-heading)' }}>
                  + $50/month each
                </div>
                <p className="mt-4 text-sm" style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}>
                  For each add-on beyond the two included with Business in a Box. Prices can vary by add-on, depending on how
                  much you use it and whether it needs another add-on to work.
                </p>
                <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(251, 146, 60, 0.3)' }}>
                  <div className="text-sm font-rounded uppercase tracking-wide mb-3" style={{ color: '#f0b949' }}>
                    Lena&apos;s monthly usage
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--bone)' }}>
                    {[
                      ['Standard', 'Included'],
                      ['Plus', '+$20/month'],
                      ['Pro', '+$50/month'],
                    ].map(([level, price]) => (
                      <li key={level} className="flex justify-between gap-4">
                        <span>{level}</span>
                        <span style={{ opacity: 0.8 }}>{price}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs" style={{ color: 'var(--bone)', opacity: 0.6, lineHeight: '1.5' }}>
                    Each level has a clear monthly limit, and we&apos;ll let you know well before you get close. Busier add-ons,
                    like email and texting, come in the same three levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD-PARTY INTEGRATIONS — FOR SITES WITHOUT PILOT LIGHT — CREAM */}
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
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl">
            <div className="lg:col-span-6">
              <span className="badge badge-tilt mb-4">
                <span className="badge-dot" />
                Integrations
              </span>
              <h2
                className="text-4xl md:text-6xl leading-[1.05] mb-6"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                Connect the services{' '}
                <em className="italic" style={{ color: 'var(--ember-deep)' }}>
                  you already use.
                </em>
              </h2>
              <p className="text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                We connect your custom website to the other services your business uses, from payments and bookkeeping to
                newsletters and shipping. Each connection is $500 to set up and $50 a month. On Business in a Box, Pilot
                Light handles these through its add-ons instead.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div
                className="card-fun tilt-none flex flex-col p-8 md:p-10"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: 'var(--ember-deep)' } as CSSProperties}
              >
                <h3 className="text-2xl md:text-3xl mb-3" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                  Integration
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl leading-none" style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-heading)' }}>
                    $500
                  </span>
                  <span className="text-lg font-rounded" style={{ color: 'var(--stone)' }}>
                    setup
                  </span>
                </div>
                <div className="mt-2 mb-8 text-2xl" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                  + $50/month each
                </div>

                <ul className="space-y-4 mb-6">
                  {integrations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(194, 65, 12, 0.1)' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3 3 7-7" stroke="var(--ember-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ color: 'var(--ash-gray)', lineHeight: '1.5' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm mb-8" style={{ color: 'var(--stone)', lineHeight: '1.5' }}>
                  For custom websites without Pilot Light. Don&apos;t see yours? Ask about it.
                </p>

                <a
                  href="/contact"
                  className="btn-fun group mt-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--ember-deep)', color: 'white' }}
                >
                  Get in Touch
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREFER TO BUY OUT? — ONE-TIME — PAPER */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--paper)' }}>
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--honey-gold) 0%, transparent 70%)',
            transform: 'translate(30%, -20%)',
          }}
        />
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl">
            <div className="lg:col-span-6">
              <span className="badge badge-tilt mb-4">
                <span className="badge-dot" />
                Prefer to own it?
              </span>
              <h2
                className="text-4xl md:text-6xl leading-[1.05] mb-6"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                Rather buy it out than{' '}
                <em className="italic" style={{ color: 'var(--ember-deep)' }}>
                  subscribe?
                </em>
              </h2>
              <p className="text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                Not everyone wants a monthly bill, and that&apos;s fair. Pay once and the site is yours: the custom-built
                website and all the files, handed straight to you. It&apos;s a one-time build, separate from
                the monthly plans, so it doesn&apos;t include Pilot Light or ongoing support. After handoff, any changes are
                $100 an hour, or take the wheel yourself.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div
                className="card-fun tilt-none flex flex-col p-8 md:p-10"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: 'var(--honey-deep)' } as CSSProperties}
              >
                <h3 className="text-2xl md:text-3xl mb-3" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                  Site buyout
                </h3>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-6xl md:text-7xl leading-none" style={{ color: 'var(--honey-deep)', fontFamily: 'var(--font-heading)' }}>
                    $6,000
                  </span>
                  <span className="text-lg font-rounded" style={{ color: 'var(--stone)' }}>
                    one-time
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Up to a 10-page custom-built website',
                    'You own the site & files outright',
                    'Custom features quoted separately',
                    'No Pilot Light and no ongoing support',
                    'Changes after handoff at $100 an hour',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(240, 185, 73, 0.18)' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3 3 7-7" stroke="var(--honey-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ color: 'var(--ash-gray)', lineHeight: '1.5' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="btn-fun group mt-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--honey-deep)', color: 'white' }}
                >
                  Buy It Out
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING ELSE — $100/HR — DARK */}
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
                $100 an hour.
              </em>
            </h2>
            <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
              Anything past your plan is a flat $100 an hour, from custom features on your site to
              being the tech guy in your back pocket for whatever else comes up. Bigger custom builds,
              like software, web apps, and automations, are scoped and quoted up front, so you always
              know the cost before we start. On Business in a Box, new business features usually come
              as Pilot Light add-ons instead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-12 max-w-4xl">
            {[
              {
                label: 'Custom work on your site',
                accent: 'var(--ember-orange)',
                items: [
                  'New features & pages',
                  'Contact & intake forms',
                  'Photo galleries',
                  'Email newsletter signup',
                  'Redesigns',
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
                <div className="flex flex-col items-start sm:flex-row sm:flex-wrap gap-3">
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

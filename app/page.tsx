import type { CSSProperties } from 'react';
import Image from 'next/image';

const capabilities = [
  {
    title: 'Get online',
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    body: 'When people search for you and come up empty — or the site they find undersells how good you really are. A custom site, branding, business email, and Google Business that put your best foot forward.',
    items: ['Custom websites', 'Website redesigns', 'Branding & logo', 'Business email', 'Google Business'],
  },
  {
    title: 'Sell & book',
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    body: 'When every order or booking means a phone call, a text, or waiting until morning. Let customers browse, buy, pay, and book on their own — right from your site, any time of day.',
    items: ['Online payments', 'Ecommerce', 'Booking & scheduling', 'Contact & intake forms'],
  },
  {
    title: 'Work smarter',
    accent: 'var(--honey-gold)',
    tint: 'rgba(240, 185, 73, 0.16)',
    body: 'When you are retyping the same information, doing everything by hand, or juggling tools that refuse to talk to each other. Custom software and automation that take the busywork off your plate.',
    items: ['Custom software', 'Web applications', 'Business automation', 'Integrations', 'Internal tools'],
  },
  {
    title: 'And a hand with the rest',
    accent: 'var(--ember-orange)',
    tint: 'rgba(234, 88, 12, 0.12)',
    body: 'When something breaks, needs an update, or you just do not know who to call. A real person who knows your business and handles the tech side as things come up.',
    items: ['Website updates', 'Tech support', 'Software setup & training', 'Wi-Fi & networking'],
  },
];

const work = [
  {
    name: 'Soady Poppers',
    tag: 'Soda shop · online ordering',
    image: '/soadypopperdesktop.webp',
    width: 1703,
    height: 853,
    shadow: 'rgba(214, 106, 60, 0.85)',
    tilt: '1.5deg',
    href: 'https://www.soadypoppers.com/',
  },
  {
    name: 'Particular Notions',
    tag: 'Handmade goods · storefront',
    image: '/particularnotions2.webp',
    width: 1720,
    height: 892,
    shadow: 'rgba(95, 167, 119, 0.8)',
    tilt: '-1.5deg',
    href: 'https://www.particularnotions.com/',
  },
];

export default function Home() {
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
        <div
          className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--honey-gold) 0%, transparent 70%)',
            transform: 'translate(-25%, 30%)',
          }}
        />
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        <svg className="floaty absolute top-24 right-[10%] hidden lg:block pointer-events-none" width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="badge badge-tilt mb-6 fade-in-up">
                <span className="badge-dot" />
                Your small-business tech partner
              </span>

              <h1
                className="mb-6 fade-in-up stagger-1"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                <span className="block text-4xl md:text-6xl leading-[1.05]">
                  Something in your business getting in the way?
                </span>
                <span
                  className="block italic text-6xl md:text-8xl leading-[0.95] mt-1"
                  style={{ color: 'var(--ember-deep)' }}
                >
                  <span className="relative inline-block">
                    We&apos;ll fix it.
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
                className="text-lg md:text-xl max-w-xl mb-8 fade-in-up stagger-2"
                style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
              >
                You don&apos;t need to know whether the answer is a website, an app, some
                automation, or a custom system that doesn&apos;t exist yet. Tell us what&apos;s not
                working in your business — we figure out the technology and build it, at a
                price a small business can actually afford.
              </p>

              <div className="flex flex-wrap items-center gap-4 fade-in-up stagger-3">
                <a
                  href="/contact"
                  className="btn-fun group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
                >
                  Tell Us What You Need
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/portfolio"
                  className="btn-fun inline-flex items-center justify-center px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--paper)', color: 'var(--charcoal)' }}
                >
                  See Our Work
                </a>
              </div>

              <p className="mt-5 text-sm fade-in-up stagger-4" style={{ color: 'var(--stone)' }}>
                Websites &amp; branding from <strong style={{ color: 'var(--ember-deep)' }}>$100/month</strong>. No big upfront bill.
              </p>
            </div>

            {/* Snapshot of a recent build */}
            <div className="md:col-span-5 w-full fade-in-up stagger-3">
              <div className="relative mx-auto max-w-md">
                <div
                  className="rounded-2xl overflow-hidden bg-white"
                  style={{
                    border: '2px solid var(--charcoal)',
                    boxShadow: '10px 12px 0 rgba(214, 106, 60, 0.85)',
                    transform: 'rotate(1.8deg)',
                  }}
                >
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#ece7db' }}>
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#d98b6a' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#e8c069' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9cb5a3' }} />
                  </div>
                  <Image
                    src="/soadypopperdesktop.webp"
                    alt="A recent custom website built by Kindling Digital"
                    width={1703}
                    height={853}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <span
                  className="absolute -bottom-4 -left-3 badge badge-tilt"
                  style={{ backgroundColor: 'white', border: '2px solid var(--charcoal)', color: 'var(--ember-deep)' }}
                >
                  <span className="badge-dot" />
                  Recent build
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we can build — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              What We Do
            </span>
            <h2 className="text-4xl md:text-6xl leading-[1.05] mb-6" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Whatever&apos;s getting in the way, there&apos;s probably a fix.
            </h2>
            <p className="text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
              Most people find us for a website — but that&apos;s just where it starts.
              Customers who can&apos;t find you. Orders taken by hand. The same question
              answered five times a day. Tools that won&apos;t talk to each other. If it&apos;s
              digital and it&apos;s slowing you down, there&apos;s a good chance we can fix it — and
              stick around to keep it running.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 max-w-6xl tilt-alt">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="card-fun group p-8 md:p-10"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: cap.accent } as CSSProperties}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-12"
                    style={{ backgroundColor: cap.tint }}
                  >
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: cap.accent }} />
                  </div>
                  <h3 className="text-2xl md:text-3xl" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                    {cap.title}
                  </h3>
                </div>
                <p className="mb-6" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>{cap.body}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: cap.tint, color: 'var(--ash-gray)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <a href="/services" className="group inline-flex items-center gap-2 font-medium text-lg transition-all" style={{ color: 'var(--ember-deep)' }}>
              See everything we can do
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* The work — DARK */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              The Work
            </span>
            <h2
              className="text-4xl md:text-6xl mb-6 leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Take a look for yourself.
            </h2>
            <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}>
              Every site is built by hand and made to match the business behind it. These
              are real, live businesses we&apos;ve worked with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-10 max-w-6xl mb-14">
            {work.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="rounded-2xl overflow-hidden bg-white transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    border: '2px solid var(--charcoal)',
                    boxShadow: `10px 12px 0 ${project.shadow}`,
                    transform: `rotate(${project.tilt})`,
                  }}
                >
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#ece7db' }}>
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#d98b6a' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#e8c069' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9cb5a3' }} />
                  </div>
                  <Image
                    src={project.image}
                    alt={`The ${project.name} website built by Kindling Digital`}
                    width={project.width}
                    height={project.height}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-8 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-2xl" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                      {project.name}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--bone)', opacity: 0.55 }}>
                      {project.tag}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm shrink-0"
                    style={{ color: 'var(--ember-orange)' }}
                  >
                    Visit
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <a
            href="/portfolio"
            className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-8 py-4 text-lg"
            style={{ backgroundColor: 'var(--ember-orange)', color: 'var(--midnight)' }}
          >
            See the full portfolio
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Pricing contrast — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--honey-gold) 0%, transparent 70%)', transform: 'translate(20%, 20%)' }}
        />
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl">
            <div className="md:col-span-6">
              <span className="badge badge-tilt mb-4">
                <span className="badge-dot" />
                Pricing
              </span>
              <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                Professional and custom, without the big upfront bill.
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                A custom website and full branding usually means one of two things:
                thousands of dollars up front at an agency, or piecing it together
                yourself on a DIY builder. We do it a third way — one flat monthly price,
                built and handled for you, so a professional presence is something an
                ordinary small business can actually afford. Prefer to own it outright?
                You can buy it out, too.
              </p>
              <a
                href="/pricing"
                className="btn-fun group inline-flex items-center gap-2 px-8 py-4 text-lg"
                style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
              >
                See pricing
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="md:col-span-6 grid sm:grid-cols-2 gap-6 tilt-alt">
              {[
                { name: 'Brand in a Box', price: '$100', accent: 'var(--ember-deep)', desc: 'Custom 5-page site, logo & branding, monthly updates.' },
                { name: 'Business in a Box', price: '$250', accent: 'var(--forest-green)', desc: 'A 10-page site, branding, business email, Google Business & more.' },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className="card-fun p-8 flex flex-col"
                  style={{ backgroundColor: 'white', ['--shadow-color' as string]: plan.accent } as CSSProperties}
                >
                  <span className="text-sm font-rounded mb-2" style={{ color: 'var(--stone)' }}>{plan.name}</span>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl leading-none" style={{ color: plan.accent, fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
                    <span className="text-base font-rounded" style={{ color: 'var(--stone)' }}>/mo</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing partner — DARK */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              A Partner, Not a Project
            </span>
            <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
              The tech guy in your back pocket.
            </h2>
            <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}>
              A lot of clients start with a website and come back when they need
              something more — online payments, a booking system, a tool to save them
              time, a hand with the computer at the shop. You don&apos;t have to hire anyone
              or track down a new company every time. We already know your business, and
              we&apos;re here for whatever comes next.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-tilt mb-6">
              <span className="badge-dot" />
              Get Started
            </span>
            <h2 className="text-5xl md:text-7xl mb-8 leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Tell us what you&apos;re working on.
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
              Whatever the digital or tech problem, tell us about your business and
              we&apos;ll figure out how we can help.
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

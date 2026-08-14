import type { CSSProperties } from 'react';

const compare = [
  {
    label: 'Built around you',
    body: 'Consistent colors, uniform fonts, a logo that makes sense — it tells them you are the real deal before they read a single word. That is exactly why it works, and done right, it pays for itself.',
    accent: 'var(--ember-orange)',
    good: true,
  },
];

const packageBits = [
  {
    title: 'A custom website',
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    body: 'Built from scratch and matched to your brand. The kind of site that usually runs a few thousand, included.',
  },
  {
    title: 'Logo & branding',
    accent: 'var(--forest-green)',
    tint: 'rgba(95, 167, 119, 0.14)',
    body: 'Colors, fonts, and a logo, plus a brand guide so everything you print matches.',
  },
  {
    title: 'Social, handled',
    accent: 'var(--honey-gold)',
    tint: 'rgba(240, 185, 73, 0.16)',
    body: 'I post for you every month so it stays active and looks like your brand.',
  },
  {
    title: 'And so much more...',
    accent: 'var(--ember-deep)',
    tint: 'rgba(194, 65, 12, 0.1)',
    body: 'A custom domain, Google Business, business email, and plenty more — all part of the package.',
  },
];

const pocketBits = [
  'Contact forms',
  'Online payments',
  'Online stores',
  'Computer help',
  'Wi-Fi & networking',
  'Blogs',
  'Software integrations',
  'Software setup & training',
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

              <h1
                className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95]"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                The tech guy in your{' '}
                <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                  back pocket
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
                className="text-xl md:text-2xl mb-10 fade-in-up stagger-2 max-w-2xl"
                style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
              >
                I build your whole online presence — your website, your branding, your
                social — for one flat monthly price. 
              </p>

              <div className="flex flex-col sm:flex-row gap-5 fade-in-up stagger-3">
                <a
                  href="/pricing"
                  className="btn-fun group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
                >
                  See the Packages
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="btn-fun inline-flex items-center justify-center px-8 py-4 text-lg"
                  style={{ backgroundColor: 'var(--paper)', color: 'var(--charcoal)' }}
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* What you get card */}
            <div className="md:col-span-5 fade-in-up stagger-3">
              <div
                className="card-fun tilt-r relative p-8"
                style={{ backgroundColor: 'var(--paper)', ['--shadow-color' as string]: 'var(--ember-deep)' } as CSSProperties}
              >
                <div className="badge badge-tilt mb-5">What you get</div>
                <ul className="space-y-4">
                  {[
                    { label: 'A custom website', color: 'var(--ember-deep)' },
                    { label: 'Logo & branding', color: 'var(--forest-green)' },
                    { label: 'Your social, handled', color: 'var(--honey-gold)' },
                    { label: 'And so much more...', color: 'var(--ember-deep)' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="font-medium" style={{ color: 'var(--charcoal)' }}>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters — DARK */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-14">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              Why It Matters
            </span>
            <h2
              className="text-4xl md:text-6xl mb-6 leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              People pick the business that looks the part.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl tilt-alt">
            {compare.map((c) => (
              <div
                key={c.label}
                className="card-fun card-fun-dark p-8"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', ['--shadow-color' as string]: c.accent } as CSSProperties}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: c.good ? 'var(--ember-orange)' : 'rgba(255,255,255,0.1)' }}
                  >
                    {c.good ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3 3 7-7" stroke="var(--midnight)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--stone)' }} />
                    )}
                  </span>
                  <span className="text-xl" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                    {c.label}
                  </span>
                </div>
                <p style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the package — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              The Package
            </span>
            <h2 className="text-4xl md:text-6xl leading-[1.05]" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
              Your whole presence, one package.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 max-w-6xl tilt-alt">
            {packageBits.map((bit) => (
              <div
                key={bit.title}
                className="card-fun group p-10"
                style={{ backgroundColor: 'white', ['--shadow-color' as string]: bit.accent } as CSSProperties}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-12"
                    style={{ backgroundColor: bit.tint }}
                  >
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: bit.accent }} />
                  </div>
                  <h3 className="text-3xl" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
                    {bit.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>{bit.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href="/services" className="group inline-flex items-center gap-2 font-medium text-lg transition-all" style={{ color: 'var(--ember-deep)' }}>
              See what&apos;s in a package
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/pricing" className="group inline-flex items-center gap-2 font-medium text-lg transition-all" style={{ color: 'var(--ember-deep)' }}>
              See pricing
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* In your back pocket — DARK */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <span className="badge badge-on-dark badge-tilt mb-4">
                <span className="badge-dot" />
                In Your Back Pocket
              </span>
              <h2 className="text-4xl md:text-6xl mb-6 leading-[1.05]" style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}>
                And a tech guy for everything else.
              </h2>
              <p className="text-lg" style={{ color: 'var(--bone)', opacity: 0.75, lineHeight: '1.7' }}>
                The package gets you online and looking sharp. After that,
                I&apos;m still around. Want a booking form, online payments, or a
                blog? I&apos;ll build it. Computer at the shop acting up? Call me.
                Basically anything techy, I'm your guy.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {pocketBits.map((item) => (
                  <div
                    key={item}
                    className="chip-fun chip-fun-dark p-4 flex items-center gap-3"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--ember-orange)' }} />
                    <span className="text-sm md:text-base" style={{ color: 'var(--bone)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
              Ready to look the part?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
              Tell me about your business and we&apos;ll figure out what you
              need.
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

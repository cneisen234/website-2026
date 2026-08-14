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
              className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Fair prices,
              <br />
              no{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                surprises
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
              Every business is different, so I don't believe in one-size-fits-all
              packages. Below are starting prices to give you an idea. After we
              talk, I'll give you a clear, honest quote with no hidden fees.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 fade-in-up stagger-3">
              {[
                'Honest quotes',
                'Payment plans available',
                'No hidden fees',
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

      {/* BUILD SOMETHING NEW — DARK */}
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
            background: 'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              Build Something New
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              One-time builds.
            </h2>
          </div>

          {/* Websites */}
          <div
            className="card-fun card-fun-dark tilt-none mb-8 p-8 md:p-12"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <div className="grid md:grid-cols-12 gap-8 mb-10">
              <div className="md:col-span-5">
                <span
                  className="text-6xl md:text-7xl leading-none block mb-4"
                  style={{ color: 'var(--ember-orange)', opacity: 0.5, fontFamily: 'var(--font-heading)' }}
                >
                  01
                </span>
                <h3
                  className="text-3xl md:text-4xl mb-4 tracking-tight"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Websites
                </h3>
                <p style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
                  Professional sites that work hard for your business — fast,
                  mobile-friendly, and built to actually get results.
                </p>
              </div>

              <div className="md:col-span-7 space-y-1">
                {[
                  { label: 'Basic Business Website', detail: '3–5 pages', price: '$1,500', from: true },
                  { label: 'Full Business Website', detail: '5–10 pages', price: '$2,400', from: true },
                  { label: 'Additional Pages', detail: 'per page', price: '$175–275' },
                  { label: 'Special Features', detail: 'booking, integrations, custom tools', price: 'Custom' },
                ].map((row, idx, arr) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                    style={{
                      borderBottom:
                        idx < arr.length - 1
                          ? '1px solid rgba(251, 146, 60, 0.15)'
                          : 'none',
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-base md:text-lg"
                        style={{ color: 'var(--bone)' }}
                      >
                        {row.label}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--bone)', opacity: 0.55 }}
                      >
                        {row.detail}
                      </div>
                    </div>
                    <div
                      className="text-xl md:text-2xl whitespace-nowrap"
                      style={{
                        color: 'var(--ember-orange)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {row.from && (
                        <span
                          className="text-xs tracking-[0.15em] uppercase mr-2"
                          style={{
                            color: 'var(--bone)',
                            opacity: 0.5,
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          from
                        </span>
                      )}
                      {row.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Applications */}
          <div
            className="card-fun card-fun-dark tilt-none p-8 md:p-12"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <span
                  className="text-6xl md:text-7xl leading-none block mb-4"
                  style={{ color: 'var(--honey-gold)', opacity: 0.65, fontFamily: 'var(--font-heading)' }}
                >
                  02
                </span>
                <h3
                  className="text-3xl md:text-4xl mb-4 tracking-tight"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Custom Applications
                </h3>
                <p style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
                  Custom tools built specifically for your business — booking
                  systems, inventory management, customer portals, or whatever
                  you need.
                </p>
              </div>

              <div className="md:col-span-7">
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
                  style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
                >
                  Pricing
                </div>
                <div
                  className="text-3xl md:text-5xl mb-4 tracking-tight"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Let's talk about what you need.
                </div>
                <p
                  className="text-sm md:text-base"
                  style={{ color: 'var(--bone)', opacity: 0.65, lineHeight: '1.7' }}
                >
                  Every custom application is different. We'll discuss your
                  needs, figure out what makes sense, and I'll give you an
                  honest quote based on the scope of work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEEP THINGS RUNNING — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              Keep Things Running
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Monthly services.
            </h2>
          </div>

          {/* Maintenance */}
          <div
            className="card-fun tilt-none mb-8 p-8 md:p-12"
            style={{ backgroundColor: 'white' }}
          >
            <div className="grid md:grid-cols-12 gap-8 mb-6">
              <div className="md:col-span-5">
                <span
                  className="text-6xl md:text-7xl leading-none block mb-4"
                  style={{ color: 'var(--forest-green)', opacity: 0.55, fontFamily: 'var(--font-heading)' }}
                >
                  03
                </span>
                <h3
                  className="text-3xl md:text-4xl mb-4 tracking-tight"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  Maintenance & Support
                </h3>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  Keep your site and tools running smoothly without thinking
                  about it. Monthly hours work for updates, support, or
                  whatever needs doing.
                </p>
              </div>

              <div className="md:col-span-7 space-y-1">
                {[
                  { label: 'Basic', detail: 'Updates + security, 1 hour/month', price: '$110', unit: '/mo' },
                  { label: 'Standard', detail: 'Content updates, 2 hours/month', price: '$165', unit: '/mo' },
                  { label: 'Plus', detail: 'Content updates, 4 hours/month', price: '$275', unit: '/mo' },
                  { label: 'As-Needed Support', detail: 'No commitment, billed hourly', price: '$135', unit: '/hr' },
                ].map((row, idx, arr) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                    style={{
                      borderBottom:
                        idx < arr.length - 1
                          ? '1px solid rgba(194, 65, 12, 0.12)'
                          : 'none',
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-base md:text-lg"
                        style={{ color: 'var(--charcoal)' }}
                      >
                        {row.label}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--stone)' }}
                      >
                        {row.detail}
                      </div>
                    </div>
                    <div
                      className="whitespace-nowrap"
                      style={{
                        color: 'var(--ember-deep)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      <span className="text-xl md:text-2xl">{row.price}</span>
                      <span
                        className="text-sm ml-1"
                        style={{ opacity: 0.7, fontFamily: 'var(--font-body)' }}
                      >
                        {row.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-sm pt-4"
              style={{ color: 'var(--stone)', borderTop: '1px solid rgba(194, 65, 12, 0.12)' }}
            >
              <strong style={{ color: 'var(--charcoal)' }}>Note:</strong> Monthly
              hours can be used for website updates, technical support, on-site tech work, or really anything else (except for social media updates). Unused hours don't roll
              over.
            </p>
          </div>

          {/* Social Media */}
          <div
            className="card-fun tilt-none p-8 md:p-12"
            style={{ backgroundColor: 'white' }}
          >
            <div className="grid md:grid-cols-12 gap-8 mb-6">
              <div className="md:col-span-5">
                <span
                  className="text-6xl md:text-7xl leading-none block mb-4"
                  style={{ color: 'rgba(194, 65, 12, 0.3)', fontFamily: 'var(--font-heading)' }}
                >
                  04
                </span>
                <h3
                  className="text-3xl md:text-4xl mb-4 tracking-tight"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  Social Media
                </h3>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  Stay active and professional online without spending your
                  whole week on it. Pick the level that fits your business.
                </p>
              </div>

              <div className="md:col-span-7 space-y-1">
                {[
                  { label: 'Bi-Weekly', detail: '2 posts per month', price: '$125', unit: '/mo' },
                  { label: 'Weekly', detail: '4 posts per month', price: '$195', unit: '/mo' },
                  { label: 'Twice Weekly', detail: '8–10 posts per month', price: '$295', unit: '/mo' },
                  { label: 'Three Times a Week', detail: '9–12 posts per month', price: '$395', unit: '/mo' },
                  { label: 'Full Management', detail: 'Daily posting + comment engagement', price: '$795', unit: '/mo' },
                ].map((row, idx, arr) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                    style={{
                      borderBottom:
                        idx < arr.length - 1
                          ? '1px solid rgba(194, 65, 12, 0.12)'
                          : 'none',
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-base md:text-lg"
                        style={{ color: 'var(--charcoal)' }}
                      >
                        {row.label}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--stone)' }}
                      >
                        {row.detail}
                      </div>
                    </div>
                    <div
                      className="whitespace-nowrap"
                      style={{
                        color: 'var(--ember-deep)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      <span className="text-xl md:text-2xl">{row.price}</span>
                      <span
                        className="text-sm ml-1"
                        style={{ opacity: 0.7, fontFamily: 'var(--font-body)' }}
                      >
                        {row.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-sm pt-4"
              style={{ color: 'var(--stone)', borderTop: '1px solid rgba(194, 65, 12, 0.12)' }}
            >
              <strong style={{ color: 'var(--charcoal)' }}>Platforms:</strong>{' '}
              Prices based on posting to 1–2 platforms (Facebook, Instagram,
              etc.). We'll figure out which platforms make the most sense for
              your business. Additional platforms available for extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* ONE-OFF HELP — DARK */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
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
          <div className="max-w-3xl mb-16">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              One-Off Help
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              When you just need a hand.
            </h2>
          </div>

          <div
            className="card-fun card-fun-dark tilt-none p-8 md:p-12"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          >
            <div className="grid md:grid-cols-12 gap-8 mb-6">
              <div className="md:col-span-5">
                <span
                  className="text-6xl md:text-7xl leading-none block mb-4"
                  style={{ color: 'var(--ember-orange)', opacity: 0.5, fontFamily: 'var(--font-heading)' }}
                >
                  05
                </span>
                <h3
                  className="text-3xl md:text-4xl mb-4 tracking-tight"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Tech Services
                </h3>
                <p style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
                  On-site visits, remote help, equipment setup, training —
                  whatever tech problem needs solving.
                </p>
              </div>

              <div className="md:col-span-7 space-y-1">
                {[
                  { label: 'On-Site Tech Help', detail: 'First hour, per visit', price: '$135' },
                  { label: 'Additional On-Site Hours', detail: 'After the first hour', price: '$105', unit: '/hr' },
                  { label: 'Remote Tech Support', detail: 'Video call or screen share', price: '$105', unit: '/hr' },
                  { label: 'Larger Projects', detail: 'Setup, migrations, etc.', price: 'Custom' },
                ].map((row, idx, arr) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 py-4"
                    style={{
                      borderBottom:
                        idx < arr.length - 1
                          ? '1px solid rgba(251, 146, 60, 0.15)'
                          : 'none',
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-base md:text-lg"
                        style={{ color: 'var(--bone)' }}
                      >
                        {row.label}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--bone)', opacity: 0.55 }}
                      >
                        {row.detail}
                      </div>
                    </div>
                    <div
                      className="whitespace-nowrap"
                      style={{
                        color: 'var(--ember-orange)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      <span className="text-xl md:text-2xl">{row.price}</span>
                      {row.unit && (
                        <span
                          className="text-sm ml-1"
                          style={{ opacity: 0.7, fontFamily: 'var(--font-body)' }}
                        >
                          {row.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-sm pt-4"
              style={{ color: 'var(--bone)', opacity: 0.6, borderTop: '1px solid rgba(251, 146, 60, 0.15)' }}
            >
              <strong style={{ color: 'var(--bone)', opacity: 1 }}>Includes:</strong>{' '}
              troubleshooting, equipment setup, Wi-Fi and networking, software
              help, system migrations, and one-on-one training. Travel fees may
              apply for clients outside the local area.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Plans + CTA — CREAM */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(-50%, -30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="badge badge-tilt mb-4">
                <span className="badge-dot" />
                Payment Plans
              </span>
              <h2
                className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                Budgets can be tight. Let's work something out.
              </h2>
              <p
                className="text-lg"
                style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
              >
                I'd rather help you find a way to make it work than lose the
                opportunity to help. Here are the most common arrangements —
                we'll figure out what fits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16 tilt-alt">
              {[
                {
                  title: 'Split payments',
                  body: 'Pay in installments as we hit project milestones. Typically 50% to start, 50% at completion.',
                },
                {
                  title: 'Monthly retainers',
                  body: 'For ongoing work like social media or maintenance, a simple monthly plan keeps things predictable.',
                },
                {
                  title: 'Custom arrangements',
                  body: 'Need something more flexible? We can discuss a payment plan that works for your specific situation.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-fun p-6"
                  style={{ backgroundColor: 'white' }}
                >
                  <h3
                    className="text-xl mb-3"
                    style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
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
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-on-dark badge-tilt mb-6">
              <span className="badge-dot" />
              Want An Exact Quote
            </span>
            <h2
              className="text-5xl md:text-7xl mb-8 leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Let's talk numbers.
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}
            >
              Tell me what you're trying to do and I'll give you a clear,
              honest quote — no hidden fees, no pressure to commit.
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
                className="transition-transform group-hover:translate-x-0.5"
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
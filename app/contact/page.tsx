import type { CSSProperties } from 'react';

export default function Contact() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--warm-cream)' }}>
      {/* Hero Section */}
      <section className="relative">
        {/* Ambient background glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(20%, -30%)',
          }}
        />

        {/* Warm dotted texture */}
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        {/* Floating spark doodle */}
        <svg className="floaty absolute top-24 right-[12%] hidden lg:block pointer-events-none" width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--ember-orange)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">
        

          <h1
              className="mb-8 fade-in-up stagger-1"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              <span className="block text-4xl md:text-6xl leading-[1.05]">Let's give your brand</span>
              <span
                className="block italic text-6xl md:text-8xl leading-[0.95] mt-1"
                style={{ color: 'var(--ember-deep)' }}
              >
                <span className="relative inline-block">
                 a spark
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
        </div>
      </section>

      {/* Contact Methods — DARK */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-4xl md:text-6xl mb-16 leading-[1.05]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Pick what works for you.
            </h2>

            {/* Email — large prominent block */}
            <a
              href="mailto:chris@kindlingdigital.org"
              className="card-fun card-fun-dark tilt-l group block mb-8 p-8 md:p-10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-1">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: 'rgba(251, 146, 60, 0.15)' }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2"
                        stroke="var(--ember-orange)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div
                    className="text-xs font-medium tracking-[0.2em] uppercase mb-2"
                    style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
                  >
                    Email
                  </div>
                  <div
                    className="text-2xl md:text-4xl tracking-tight break-all md:break-normal"
                    style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                  >
                    chris@kindlingdigital.org
                  </div>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <span
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ color: 'var(--bone)', opacity: 0.6 }}
                  >
                    Best for detailed questions
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
                  </span>
                </div>
              </div>
            </a>

            {/* Phone — large prominent block */}
            <a
              href="tel:+17014294837"
              className="card-fun card-fun-dark tilt-r group block mb-12 p-8 md:p-10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', ['--shadow-color' as string]: 'var(--honey-gold)' } as CSSProperties}
            >
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-1">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: 'rgba(251, 146, 60, 0.15)' }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                        stroke="var(--ember-orange)"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div
                    className="text-xs font-medium tracking-[0.2em] uppercase mb-2"
                    style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
                  >
                    Call or Text
                  </div>
                  <div
                    className="text-3xl md:text-5xl tracking-tight"
                    style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                  >
                    (701) 429-4837
                  </div>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <span
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ color: 'var(--bone)', opacity: 0.6 }}
                  >
                    Quick questions? Just text
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
                  </span>
                </div>
              </div>
            </a>

            {/* Meeting style strip */}
            <div
              className="card-fun card-fun-dark tilt-none p-6 md:p-8"
              style={{ backgroundColor: 'rgba(251, 146, 60, 0.05)' }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    label: 'In Person',
                    detail: 'A coffee shop or your place',
                    icon: (
                      <path
                        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                        stroke="var(--ember-orange)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    ),
                  },
                  {
                    label: 'Video Call',
                    detail: 'For when distance is a factor',
                    icon: (
                      <>
                        <polygon
                          points="23 7 16 12 23 17 23 7"
                          stroke="var(--ember-orange)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="1"
                          y="5"
                          width="15"
                          height="14"
                          rx="2"
                          stroke="var(--ember-orange)"
                          strokeWidth="2"
                          fill="none"
                        />
                      </>
                    ),
                  },
                  {
                    label: 'On Site',
                    detail: 'I come to you for tech help',
                    icon: (
                      <>
                        <path
                          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                          stroke="var(--ember-orange)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="3"
                          stroke="var(--ember-orange)"
                          strokeWidth="2"
                          fill="none"
                        />
                      </>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                      {item.icon}
                    </svg>
                    <div>
                      <div
                        className="font-medium mb-1"
                        style={{ color: 'var(--bone)' }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--bone)', opacity: 0.6 }}
                      >
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 mb-12">
              <div className="md:col-span-5">
                <h2
                  className="text-4xl md:text-5xl leading-[1.05]"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  What Happens Next
                </h2>
                <p
                  className="text-lg mt-6"
                  style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
                >
                  We&apos;ll talk through what you&apos;re after and whether
                  we&apos;re a good fit. That&apos;s it.
                </p>
              </div>

              <div className="md:col-span-7 space-y-8 tilt-alt">
                {[
                  {
                    num: '01',
                    title: "I'll get back to you within 24 hours",
                    body: "Usually much faster. If you're in a hurry, just text.",
                  },
                  {
                    num: '02',
                    title: "We'll set up a time to talk",
                    body: 'Phone, video, or in person if you\'re local. Whatever\'s easiest.',
                  },
                  {
                    num: '03',
                    title: 'We\'ll figure out if I can help',
                    body: "You'll walk me through what you're trying to do, and I'll be straight with you about whether I'm the right person for it.",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.num}
                    className="card-fun group relative p-6"
                    style={{ backgroundColor: 'white' }}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className="text-4xl leading-none shrink-0"
                        style={{
                          color: ['var(--ember-deep)', 'var(--honey-gold)', 'var(--forest-green)'][idx],
                          opacity: 0.75,
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {item.num}
                      </span>
                      <div className="flex-1">
                        <h3
                          className="text-xl mb-2"
                          style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser — DARK closing strip */}
      <section
        className="py-20 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-on-dark badge-tilt mb-4">
              <span className="badge-dot" />
              Still Curious
            </span>
            <h2
              className="text-3xl md:text-5xl mb-6 leading-[1.1]"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Have questions first?
            </h2>
            <p
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}
            >
              Common questions about pricing, timelines, and how everything
              works — all answered on the FAQ page.
            </p>
            <a
              href="/faq"
              className="btn-fun btn-fun-dark group inline-flex items-center gap-2 px-8 py-4 text-lg"
              style={{ backgroundColor: 'var(--bone)', color: 'var(--midnight)' }}
            >
              View FAQ
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
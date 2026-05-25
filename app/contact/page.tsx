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

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--charcoal) 1px, transparent 1px), linear-gradient(90deg, var(--charcoal) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-8 fade-in-up">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--ember-deep)' }}
              />
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
              >
                Get In Touch
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Let's{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                talk
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q 50 2, 100 6 T 198 4"
                    stroke="var(--ember-deep)"
                    strokeWidth="2.5"
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
              Ready for a website that works for your business? Have questions?
              Want to grab coffee and talk through some ideas? Pick whatever
              way's easiest for you.
            </p>
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
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
            >
              — Reach Out
            </span>
            <h2
              className="text-4xl md:text-6xl mb-16 leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Pick what works for you.
            </h2>

            {/* Email — large prominent block */}
            <a
              href="mailto:chris@kindlingdigital.org"
              className="group block mb-6 p-8 md:p-10 rounded-3xl transition-all hover:-translate-y-1"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
              }}
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
              className="group block mb-12 p-8 md:p-10 rounded-3xl transition-all hover:-translate-y-1"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(251, 146, 60, 0.2)',
              }}
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
              className="p-6 md:p-8 rounded-2xl"
              style={{
                backgroundColor: 'rgba(251, 146, 60, 0.05)',
                border: '1px solid rgba(251, 146, 60, 0.15)',
              }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    label: 'In Person',
                    detail: 'Coffee shop, your office, or mine',
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
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
                  style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
                >
                  — What Happens Next
                </span>
                <h2
                  className="text-4xl md:text-5xl leading-[1.05] tracking-tight"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  No pressure, no sales pitch.
                </h2>
                <p
                  className="text-lg mt-6"
                  style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}
                >
                  Just an honest conversation about what makes sense for your
                  business — and whether we're a good fit to work together.
                </p>
              </div>

              <div className="md:col-span-7 space-y-5">
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
                ].map((item) => (
                  <div
                    key={item.num}
                    className="group relative p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid rgba(194, 65, 12, 0.12)',
                    }}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className="text-4xl leading-none shrink-0"
                        style={{
                          color: 'rgba(194, 65, 12, 0.35)',
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
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
            >
              — Still Curious
            </span>
            <h2
              className="text-3xl md:text-5xl mb-6 leading-[1.1] tracking-tight"
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
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all hover:-translate-y-0.5"
              style={{
                color: 'var(--bone)',
                border: '1.5px solid rgba(245, 241, 235, 0.4)',
              }}
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
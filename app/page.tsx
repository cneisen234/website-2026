export default function Home() {
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
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 mb-8 fade-in-up">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--ember-deep)' }}
                />
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
                >
                  Local Web & Tech Professional
                </span>
              </div>

              <h1
                className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95] tracking-tight"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                A{' '}
                <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                  spark
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
                {' '}for your business.
              </h1>

              <p
                className="text-xl md:text-2xl mb-10 fade-in-up stagger-2 max-w-2xl"
                style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
              >
                Websites, custom tools, automation, and on-site tech help for
                local businesses. Tech that doesn't just sit there — it works
                for you, saves you time, and helps your business grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'var(--charcoal)',
                    color: 'var(--bone)',
                    boxShadow: '0 10px 30px -10px rgba(28, 25, 23, 0.4)',
                  }}
                >
                  Let's Talk About Your Business
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
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-white/40"
                  style={{
                    color: 'var(--charcoal)',
                    border: '1.5px solid var(--charcoal)',
                  }}
                >
                  See What I Can Build
                </a>
              </div>
            </div>

            {/* Right side: services overview card */}
            <div className="md:col-span-5 fade-in-up stagger-3">
              <div
                className="relative p-8 rounded-2xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(194, 65, 12, 0.15)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-5"
                  style={{ color: 'var(--stone)', fontFamily: 'var(--font-body)' }}
                >
                  Here's what I do
                </div>
                <ul className="space-y-4">
                  {[
                    { label: 'Websites', detail: 'that bring in customers' },
                    { label: 'Custom features', detail: 'built for your workflow' },
                    { label: 'Smart automations', detail: 'that save you hours' },
                    { label: 'On-site tech help', detail: 'for everything else' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-baseline gap-3">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]"
                        style={{ backgroundColor: 'var(--ember-deep)' }}
                      />
                      <div>
                        <span
                          className="font-medium"
                          style={{ color: 'var(--charcoal)' }}
                        >
                          {item.label}
                        </span>
                        <span style={{ color: 'var(--ash-gray)' }}>
                          {' '}{item.detail}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-6 pt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
                  style={{ borderTop: '1px solid rgba(194, 65, 12, 0.15)' }}
                >
                  {['Local meetings', 'No corporate runaround', 'Built to last'].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: 'var(--stone)' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
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
        </div>
      </section>

      {/* Why Work With Me — DARK */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="sticky top-8">
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
                  style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
                >
                  — Why Me
                </span>
                <h2
                  className="text-4xl md:text-6xl mb-6 leading-[1.05] tracking-tight"
                  style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                >
                  Your tech should work as hard as you do.
                </h2>
                <p
                  className="text-lg"
                  style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
                >
                  Most small business tech is either too complicated, too
                  expensive, or just sits there doing nothing. I build the kind
                  that actually pulls its weight — handling bookings, answering
                  questions, automating busywork, and showing up when you need
                  a hand in person.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              {[
                {
                  num: '01',
                  title: 'Built to do work',
                  body: 'Online booking, automated reminders, customer portals, smart forms — tech should be a tool that gets things done, not just a sign in a digital window.',
                },
                {
                  num: '02',
                  title: 'Local & personal',
                  body: 'Meet in person, work on your schedule, and actually talk through what makes sense for your business. No corporate runaround, no big-city prices.',
                },
                {
                  num: '03',
                  title: 'More done, less effort',
                  body: 'The right tools and automation handle the repetitive stuff for you — scheduling, follow-ups, answering common questions — so you get more done without adding hours to your day.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="group relative p-8 rounded-2xl transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(251, 146, 60, 0.15)',
                  }}
                >
                  <div className="flex items-start gap-6">
                    <span
                      className="text-5xl leading-none shrink-0"
                      style={{ color: 'var(--ember-orange)', opacity: 0.6, fontFamily: 'var(--font-heading)' }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-2xl mb-3"
                        style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How I Can Help */}
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
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
            >
              — How I Help
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Here's what I do.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px max-w-6xl rounded-3xl overflow-hidden"
            style={{ backgroundColor: 'rgba(194, 65, 12, 0.15)' }}>
            {[
              {
                icon: (
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="var(--ember-deep)"
                  />
                ),
                title: 'Websites that get found',
                body: 'Professional sites that show up in searches and turn visitors into customers. Mobile-friendly, fast, and built to actually get results.',
              },
              {
                icon: (
                  <path
                    d="M12 2l2 4 4-1-1 4 4 2-4 2 1 4-4-1-2 4-2-4-4 1 1-4-4-2 4-2-1-4 4 1z"
                    stroke="var(--ember-deep)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinejoin="round"
                  />
                ),
                title: 'Features built for your business',
                body: "Need something specific? Online booking, custom quote forms, member-only content, inventory tracking — whatever your business actually needs. If you can describe it, I can probably build it.",
              },
              {
                icon: (
                  <>
                    <path
                      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                      stroke="var(--ember-deep)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="var(--ember-deep)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </>
                ),
                title: 'Automate the busywork',
                body: "Smart automations that handle scheduling, follow-ups, lead capture, and the repetitive stuff that eats your time — bringing in AI where it actually helps, not just because it's trendy.",
              },
              {
                icon: (
                  <path
                    d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
                    stroke="var(--ember-deep)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinejoin="round"
                  />
                ),
                title: 'On-site tech help',
                body: "Computer setups, Wi-Fi headaches, picking the right software, training your team on tools you already have — sometimes you just need a tech person nearby without hiring one full-time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-10 transition-all hover:bg-[var(--paper)]"
                style={{ backgroundColor: 'white' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: 'rgba(194, 65, 12, 0.1)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    {item.icon}
                  </svg>
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--ash-gray)', lineHeight: '1.7' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/services"
              className="group inline-flex items-center gap-2 font-medium text-lg transition-all"
              style={{ color: 'var(--ember-deep)' }}
            >
              See all services
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

      {/* CTA Section — full-bleed dark */}
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
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-6 block"
              style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
            >
              — Let's Build Something
            </span>
            <h2
              className="text-5xl md:text-7xl mb-8 leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Ready for tech that actually{' '}
              <em style={{ color: 'var(--ember-orange)', fontStyle: 'italic' }}>works</em>?
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}
            >
              Whether you need a new website, want to automate the busywork, or
              just need someone local who knows tech — let's talk about what
              would actually help your business.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 rounded-full font-medium text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--ember-orange)',
                color: 'var(--midnight)',
                boxShadow: '0 10px 40px -10px rgba(251, 146, 60, 0.5)',
              }}
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

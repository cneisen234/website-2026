export default function About() {
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
                About Kindling Digital
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
              className="text-xl md:text-2xl fade-in-up stagger-2 max-w-3xl"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              Your area's local web and tech expert. I build websites and tools
              that don't just sit there — they work for you, save you time, and
              help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* My Story — DARK with photo */}
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
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="md:col-span-5">
              <div className="relative">
                {/* Decorative orange offset frame behind photo */}
                <div
                  className="absolute -inset-3 rounded-3xl"
                  style={{
                    border: '1px solid rgba(251, 146, 60, 0.4)',
                    transform: 'translate(12px, 12px)',
                  }}
                />

                {/*
                  PHOTO PLACEHOLDER
                  ─────────────────
                  To swap in your real photo:
                  1. Replace the inner <div> below with an <Image> component
                  2. Recommended dimensions: 800x1000 (4:5 portrait)
                  3. Keep the outer rounded-3xl wrapper for the styled frame
                */}
                <div
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(251, 146, 60, 0.2)',
                  }}
                >
                  {/* Subtle ember glow inside placeholder */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 40%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)',
                    }}
                  />

                  {/* Placeholder icon */}
                  <div className="relative text-center">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      className="mx-auto mb-4 opacity-40"
                    >
                      <circle
                        cx="40"
                        cy="30"
                        r="14"
                        stroke="var(--ember-orange)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M14 68 C 14 54, 26 48, 40 48 C 54 48, 66 54, 66 68"
                        stroke="var(--ember-orange)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    <p
                      className="text-xs tracking-[0.2em] uppercase opacity-50"
                      style={{ color: 'var(--bone)', fontFamily: 'var(--font-body)' }}
                    >
                      Photo of Chris
                    </p>
                    <p
                      className="text-xs mt-1 opacity-30"
                      style={{ color: 'var(--bone)', fontFamily: 'var(--font-body)' }}
                    >
                      coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div className="md:col-span-7">
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
                style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
              >
                — A Little About Me
              </span>
              <h2
                className="text-4xl md:text-6xl mb-8 leading-[1.05] tracking-tight"
                style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
              >
                Hi, I'm Chris.
              </h2>

              <div className="space-y-6 text-lg" style={{ color: 'var(--bone)', opacity: 0.8, lineHeight: '1.75' }}>
                <p>
                  I'm the person behind Kindling Digital. I've spent over 5
                  years building websites, custom applications, and the kind of
                  behind-the-scenes tech that helps businesses run better.
                </p>

                <p>
                  The tech side? I know it inside and out. But that's not really
                  the point. The point is helping local businesses do more with
                  less effort — websites that take bookings while you sleep,
                  tools that handle the busywork, smart automation that does the
                  things you don't have time for.
                </p>

                <p>
                  Maybe you've thought about getting a real website — or
                  upgrading the one you have — but weren't sure where to start.
                  Maybe you've wondered if there's a better way to handle
                  bookings, customer questions, or the same repetitive tasks
                  eating up your week. Maybe you're just tired of doing things
                  the hard way.
                </p>

                <p>
                  That's where I come in. I help local businesses with websites
                  that bring in customers, custom tools that save you time, and
                  the kind of smart integrations — booking systems, automated
                  follow-ups, whatever fits — that make your business run
                  smoother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Good At */}
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
              — What I'm Good At
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              The things I do best.
            </h2>
          </div>

          <div
            className="grid md:grid-cols-2 gap-px max-w-6xl rounded-3xl overflow-hidden"
            style={{ backgroundColor: 'rgba(194, 65, 12, 0.15)' }}
          >
            {[
              {
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" stroke="var(--ember-deep)" strokeWidth="2" fill="none" />
                    <path
                      d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                      stroke="var(--ember-deep)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </>
                ),
                title: 'Websites that work for you',
                body: "Fast, professional sites that aren't just digital brochures. They take bookings, capture leads, answer questions, and turn visitors into customers — automatically.",
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
                title: 'Custom tools & integrations',
                body: "Booking systems, client portals, inventory tracking, internal dashboards — if there's a part of your business eating up too much time, there's probably a tool that can handle it.",
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
                    <circle cx="12" cy="12" r="3" stroke="var(--ember-deep)" strokeWidth="2" fill="none" />
                  </>
                ),
                title: 'Automated workflows',
                body: "Automated emails and reminders, follow-ups that happen on their own, and behind-the-scenes processes that handle the repetitive stuff. Tech that does the work so you don't have to.",
              },
              {
                icon: (
                  <>
                    <path
                      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                      stroke="var(--ember-deep)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinejoin="round"
                    />
                  </>
                ),
                title: 'Explaining things clearly',
                body: "I talk about your business and what the tech actually does for you — no jargon, no condescension. You'll always understand what we're building and why it matters.",
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
        </div>
      </section>

      {/* How We'll Work Together — DARK timeline */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: 'var(--midnight)' }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(30%, -20%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-orange) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mb-16">
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
            >
              — How It Works
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              How we'll work together.
            </h2>
          </div>

          <div className="max-w-5xl">
            {[
              {
                num: '01',
                title: "Let's talk about your business",
                body: "We'll sit down and talk about what you're trying to accomplish. More customers? Less time spent on busywork? A website that actually does something? Let's figure out what success looks like for you.",
              },
              {
                num: '02',
                title: "I'll recommend what makes sense",
                body: "Based on what you need and your budget, I'll lay out what's worth doing. Maybe that's a new website with online booking. Maybe it's a custom tool to handle a specific pain point. Maybe it's both. We'll figure it out together.",
              },
              {
                num: '03',
                title: "I'll handle the execution",
                body: "I'll build what needs building, set up the integrations, and handle all the technical details. You approve the direction, I take care of making it happen.",
              },
              {
                num: '04',
                title: "We'll keep it going",
                body: "Good tech isn't a one-time thing. I'll keep working with you to improve, adjust, and add new tools as your business grows.",
              },
            ].map((step, idx, arr) => (
              <div key={step.num} className="relative">
                <div className="grid md:grid-cols-12 gap-8 py-8">
                  {/* Number column */}
                  <div className="md:col-span-3 flex md:justify-end items-start">
                    <span
                      className="text-7xl md:text-8xl leading-none"
                      style={{
                        color: 'var(--ember-orange)',
                        opacity: 0.7,
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Content column */}
                  <div className="md:col-span-9 md:pl-4">
                    <h3
                      className="text-2xl md:text-3xl mb-4"
                      style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-lg max-w-2xl"
                      style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.7' }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>

                {/* Divider between steps */}
                {idx < arr.length - 1 && (
                  <div
                    className="h-px w-full"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.2) 20%, rgba(251, 146, 60, 0.2) 80%, transparent)',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Do This + CTA */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'var(--warm-cream)' }}>
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, var(--ember-deep) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--ember-deep)', fontFamily: 'var(--font-body)' }}
            >
              — Why I Do This
            </span>

            {/* Quote-style pull statement */}
            <div className="relative pl-8 mb-12">
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                style={{ backgroundColor: 'var(--ember-deep)' }}
              />
              <p
                className="text-2xl md:text-4xl leading-[1.3] tracking-tight"
                style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
              >
                Local businesses should have the same access to good tech as the
                big guys — without needing a huge budget or a tech team to run
                it.
              </p>
            </div>

            <p
              className="text-lg mb-12 max-w-3xl"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.75' }}
            >
              Good websites and smart tools shouldn't be complicated or out of
              reach. I'm here to make them accessible, effective, and actually
              worth the investment.
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 rounded-full font-medium text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--charcoal)',
                color: 'var(--bone)',
                boxShadow: '0 10px 30px -10px rgba(28, 25, 23, 0.4)',
              }}
            >
              Let's Talk
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
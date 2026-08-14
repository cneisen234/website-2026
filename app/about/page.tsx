import Image from "next/image";

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

        {/* Warm dotted texture */}
        <div className="dot-texture absolute inset-0 opacity-[0.04] pointer-events-none" />

        {/* Floating spark doodle */}
        <svg className="floaty-slow absolute top-28 right-[14%] hidden lg:block pointer-events-none" width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--forest-green)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">
            <div className="badge badge-tilt mb-8 fade-in-up">
              <span className="badge-dot" />
              About Kindling Digital
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
                    className="draw-stroke"
                    pathLength={1}
                    d="M2 8 Q 50 2, 100 6 T 198 4"
                    stroke="var(--ember-deep)"
                    strokeWidth="3"
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
              Local web and tech help for the businesses that keep small-town
              Michigan running.
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
            {/* Photo */}
              <div className="md:col-span-5">
                <div className="relative mx-auto max-w-sm" style={{ transform: 'rotate(-2.5deg)' }}>
                  {/* A little strip of "tape" up top */}
                  <div
                    className="absolute left-1/2 -top-4 z-10 h-8 w-28 -translate-x-1/2 rotate-[-4deg]"
                    style={{
                      backgroundColor: 'rgba(240, 185, 73, 0.5)',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Polaroid frame */}
                  <div
                    className="rounded-2xl bg-white p-3 pb-6 transition-transform duration-300 hover:rotate-0"
                    style={{
                      border: '2px solid var(--charcoal)',
                      boxShadow: '10px 12px 0 rgba(251, 146, 60, 0.85)',
                    }}
                  >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                      <Image
                        src="/chris.png"
                        alt="Chris, founder of Kindling Digital"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

            {/* Story text */}
            <div className="md:col-span-7">
              <span className="badge badge-on-dark badge-tilt mb-4">
                <span className="badge-dot" />
                A Little About Me
              </span>
              <h2
                className="text-4xl md:text-6xl mb-8 leading-[1.05] tracking-tight"
                style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
              >
                Hi, I'm Chris.
              </h2>

              <div className="space-y-6 text-lg" style={{ color: 'var(--bone)', opacity: 0.8, lineHeight: '1.75' }}>
                <p>
                  I've spent the last six years building websites, custom tools,
                  and behind-the-scenes tech for small businesses — the kind of
                  work that helps a shop owner stop dreading their inventory
                  spreadsheet, or lets a service business take bookings without
                  playing phone tag all day.
                </p>

                <p>
                  Most of that time has been spent on the same kinds of problems
                  I help with now: websites that bring in customers, automations
                  that handle the repetitive stuff, and getting the right tools
                  in the right hands. I've worked with startups, established
                  shops, and everything in between, and I've seen what actually
                  moves the needle for a small business — and what's just
                  expensive distraction.
                </p>

                <p>
                  Kindling Digital is my way of bringing that work closer to
                  home. I live and work right here in small-town Michigan, and
                  I started this because too many local businesses are stuck
                  choosing between cookie-cutter templates that don't fit them
                  and big-city agencies that charge like it's New York.
                </p>

                <p>
                  Neither option is right for the businesses around here. So I
                  built a third one.
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
            <span className="badge badge-tilt mb-4" style={{ color: 'var(--forest-green)', backgroundColor: 'rgba(95, 167, 119, 0.14)' }}>
              <span className="badge-dot" />
              What I'm Good At
            </span>
            <h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              The things I do best.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl tilt-alt">
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
                body: "Fast, professional sites that don't just sit there. They bring in customers, capture leads, take bookings, and answer questions automatically.",
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
                title: 'Automating the busywork',
                body: "Automated emails and reminders, follow-ups that happen on their own, and behind-the-scenes processes that handle the repetitive stuff so you don't have to.",
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
                className="card-fun group p-10"
                style={{ backgroundColor: 'white' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:-rotate-12"
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
            <span className="badge badge-on-dark badge-tilt mb-4" style={{ color: 'var(--honey-gold)', backgroundColor: 'rgba(240, 185, 73, 0.16)' }}>
              <span className="badge-dot" />
              How It Works
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
                title: "We talk about your business",
                body: "First thing we do is sit down — coffee shop, your place, phone call, whatever works. I want to hear what you're trying to accomplish before I start suggesting anything.",
              },
              {
                num: '02',
                title: "I tell you what makes sense",
                body: "Based on what you need and your budget, I'll be straight with you about what's actually worth doing — and what isn't. No upsells, no kitchen sink. Just what fits.",
              },
              {
                num: '03',
                title: "I handle the work",
                body: "I'll build what needs building, set things up, and take care of all the technical details. You approve the direction, I take care of making it happen.",
              },
              {
                num: '04',
                title: "I stick around",
                body: "Good tech isn't a one-time thing. I'll keep working with you to make improvements, fix things when they break, and add new pieces as your business grows.",
              },
            ].map((step, idx, arr) => (
              <div key={step.num} className="relative">
                <div className="grid md:grid-cols-12 gap-8 py-8">
                  {/* Number column */}
                  <div className="md:col-span-3 flex md:justify-end items-start">
                    <span
                      className="text-7xl md:text-8xl leading-none"
                      style={{
                        color: ['var(--ember-orange)', 'var(--honey-gold)', 'var(--forest-green)', 'var(--ember-orange)'][idx],
                        opacity: 0.8,
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
                  <div className="w-full" style={{ borderTop: '2px dashed rgba(251, 146, 60, 0.3)' }} />
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
            <span className="badge badge-tilt mb-4">
              <span className="badge-dot" />
              Why I Do This
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
              worth the investment — for the businesses that make this place
              what it is.
            </p>

            <a
              href="/contact"
              className="btn-fun group inline-flex items-center gap-2 px-10 py-5 text-lg"
              style={{ backgroundColor: 'var(--ember-deep)', color: 'var(--bone)' }}
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
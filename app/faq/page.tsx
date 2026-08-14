'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqGroup = {
  label: string;
  title: string;
  items: FaqItem[];
};

const faqGroups: FaqGroup[] = [
  {
    label: '01',
    title: 'How it works',
    items: [
      {
        question: 'How does the monthly price work?',
        answer:
          "It's a flat monthly fee that covers everything in your plan — your website, branding, social posts, and the recurring stuff that keeps it all running, like your domain and hosting. Instead of paying a few thousand upfront for a site, you pay monthly and I keep it going. Anything outside the plan is handled separately at $50 an hour.",
      },
      {
        question: 'Is there a contract or minimum?',
        answer:
          "There's a 3-month minimum to start. After that it's month to month and you can cancel whenever you want.",
      },
      {
        question: 'Do I pay anything upfront?',
        answer:
          "There's no deposit. You sign on for the 3-month minimum, and you're not charged your first month until your website is actually live.",
      },
      {
        question: 'How do I know which plan to pick?',
        answer:
          "It mostly comes down to how much website you need — up to 5 pages on the $100 plan, up to 10 on the $200, which also adds Google Business and business email on your domain. If you're not sure, tell me what you're doing and I'll point you the right way.",
      },
    ],
  },
  {
    label: '02',
    title: 'Canceling & ownership',
    items: [
      {
        question: 'What happens if I cancel?',
        answer:
          "After your 3-month minimum you can cancel anytime. Your brand packet — the logo, colors, fonts, and brand guide — is yours to keep forever, and so is your domain, as long as you cover the renewal fees from there on. The website and the other services come down at the end of your last billing cycle, the same way any subscription works.",
      },
      {
        question: 'Can I keep my website if I stop?',
        answer:
          "Yes, there's a buyout. It starts at $1,500 and goes up from there depending on how big the site is and how many features and integrations were built into it. Once it's bought out, the site is yours.",
      },
      {
        question: 'Do I own my logo and branding?',
        answer:
          "Yes. Once your branding is defined, it's yours to keep whether you stay on or not. The website is the piece that needs a buyout if you want to hang onto it after canceling.",
      },
    ],
  },
  {
    label: '03',
    title: 'Building your site',
    items: [
      {
        question: "How long until my site's live?",
        answer:
          "The first draft usually takes just a few days. After that, how fast we wrap up mostly depends on how quickly your feedback comes back. And remember, your first month isn't charged until the site is live.",
      },
      {
        question: 'How do changes work while you build it?',
        answer:
          "We work closely on it. I put together a first draft, then we keep tweaking until it's where you want it. There's no clock on that first build — you aren't charged until it's live.",
      },
      {
        question: 'What if I already have a logo or branding?',
        answer:
          "Happy to use it, and the price is the same either way. I'd at least like to take a look, since branding is worth refreshing every so often and it's already part of the plan — a good chance to update it. But if you love what you've got, we'll build around it.",
      },
      {
        question: 'What if I only need a couple pages?',
        answer:
          "The page count is a ceiling, not a target. The price is flat whether you use two pages or all ten.",
      },
    ],
  },
  {
    label: '04',
    title: "Once you're up",
    items: [
      {
        question: 'What counts as one of my monthly changes?',
        answer:
          "Text and photo updates on your site — swapping wording, switching out images, that kind of thing. Anything bigger, like new features or integrations, is separate at $50 an hour.",
      },
      {
        question: 'How does the social posting work?',
        answer:
          "However you want it to. Hand it off completely and I'll decide what goes out and where, or tell me exactly what to post on which platform. You can give me as much or as little control as you like.",
      },
      {
        question: 'Can you help with computer or tech problems too?',
        answer:
          "That's the idea — you've got a tech guy in your back pocket. If you're in my area I'll come out in person; if you're farther off or just prefer it, we can hop on a call and I'll help remotely. Travel outside my area adds a travel fee.",
      },
      {
        question: "What if I'm not sure what I need?",
        answer:
          "Totally normal. Tell me what you're trying to do and I'll be straight with you about what makes sense — which plan fits, or whether it's really just a bit of hourly work.",
      },
    ],
  },
];

function FaqAccordion({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        backgroundColor: isOpen ? 'var(--warm-cream)' : 'white',
        border: `2px solid ${isOpen ? 'var(--ember-deep)' : 'rgba(28, 25, 23, 0.12)'}`,
        boxShadow: isOpen ? '5px 5px 0 rgba(194, 65, 12, 0.85)' : '3px 3px 0 rgba(28, 25, 23, 0.05)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 md:p-7 flex items-center gap-6 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3
          className="text-lg md:text-xl flex-1 transition-colors"
          style={{
            color: 'var(--charcoal)',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {item.question}
        </h3>
        <div
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{
            backgroundColor: isOpen ? 'var(--ember-deep)' : 'rgba(194, 65, 12, 0.1)',
            border: '2px solid var(--charcoal)',
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="transition-transform"
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <path
              d="M9 3v12M3 9h12"
              stroke={isOpen ? 'var(--bone)' : 'var(--ember-deep)'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
        }}
      >
        <div className="overflow-hidden">
          <div
            className="px-6 md:px-7 pb-6 md:pb-7 pt-0"
            style={{
              color: 'var(--ash-gray)',
              lineHeight: '1.75',
              maxWidth: '52rem',
            }}
          >
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

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
          <path d="M12 2l2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2z" fill="var(--honey-gold)" />
        </svg>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl">
            <div className="badge badge-tilt mb-8 fade-in-up">
              <span className="badge-dot" />
              Frequently Asked Questions
            </div>

            <h1
              className="text-6xl md:text-8xl mb-8 fade-in-up stagger-1 leading-[0.95] tracking-tight"
              style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
            >
              Got{' '}
              <em className="relative inline-block" style={{ color: 'var(--ember-deep)', fontStyle: 'italic' }}>
                questions
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
              ?
            </h1>

            <p
              className="text-xl md:text-2xl fade-in-up stagger-2 max-w-3xl"
              style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}
            >
              Common questions about pricing, timelines, and how we'll work
              together. Click any question to see the answer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 md:py-32 relative" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20 md:space-y-24">
            {faqGroups.map((group, gi) => (
              <div key={group.label} className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Group label column */}
                <div className="md:col-span-4">
                  <div className="md:sticky md:top-8">
                    <span
                      className="text-6xl md:text-7xl leading-none block mb-4"
                      style={{
                        color: ['var(--ember-deep)', 'var(--forest-green)', 'var(--honey-gold)', 'var(--ember-deep)'][gi],
                        opacity: 0.6,
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {group.label}
                    </span>
                    <h2
                      className="text-3xl md:text-4xl leading-[1.1] tracking-tight"
                      style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}
                    >
                      {group.title}
                    </h2>
                  </div>
                </div>

                {/* Questions column */}
                <div className="md:col-span-8 space-y-4">
                  {group.items.map((item, idx) => {
                    const id = `${group.label}-${idx}`;
                    return (
                      <FaqAccordion
                        key={id}
                        item={item}
                        isOpen={openId === id}
                        onToggle={() => setOpenId(openId === id ? null : id)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions — DARK CTA */}
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
              Still Curious
            </span>
            <h2
              className="text-5xl md:text-7xl mb-8 leading-[1.05] tracking-tight"
              style={{ color: 'var(--bone)', fontFamily: 'var(--font-heading)' }}
            >
              Didn't see your question?
            </h2>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: 'var(--bone)', opacity: 0.7, lineHeight: '1.6' }}
            >
              Just reach out — I'm happy to answer anything else you're wondering
              about, no commitment required.
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
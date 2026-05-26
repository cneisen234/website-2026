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
    title: 'Pricing & money',
    items: [
      {
        question: 'How much does a website cost?',
        answer:
          "It depends on what you need. A basic business website starts at $1,500, and a full business website (more pages, more features) starts at $2,400. Adding things like online booking, customer portals, or other custom features will adjust the price. I'll give you an honest, itemized quote after we talk so there are no surprises.",
      },
      {
        question: 'Do you offer payment plans?',
        answer:
          "Yes. I understand not every business can pay everything upfront. We can work out a payment plan that makes sense for your budget — typically split across project milestones, but I'm flexible. I'd rather help you find a way to make it work than lose the opportunity to help.",
      },
      {
        question: 'What about hosting and domain names?',
        answer:
          "I'll help you get set up with hosting (where your website lives) and a domain name (your web address). I can recommend reliable, affordable options and handle all the technical setup. Typical hosting costs are $10–30/month depending on your needs.",
      },
    ],
  },
  {
    label: '02',
    title: 'Process & timeline',
    items: [
      {
        question: 'How long does it take to build a website?',
        answer:
          "A typical business website takes 2–4 weeks from start to launch. More complex projects with custom tools, booking systems, or automation might take 4–8 weeks. I'll give you a realistic timeline upfront and keep you updated throughout.",
      },
      {
        question: "What if I'm not sure what I need?",
        answer:
          "That's completely normal — most people aren't sure exactly what they need when they start. That's what our first conversation is for. We'll talk about your business, your goals, and I'll tell you straight what I think makes sense. No commitment, no pressure to figure it all out on the spot.",
      },
      {
        question: "What if I already have a website but it's not working?",
        answer:
          "That's actually one of the most common situations I help with. We can talk about what isn't working — whether it's the design, the speed, the lack of customers, or something else — and figure out whether a rebuild makes sense or if some targeted improvements would get you there. Either way, I'll be honest about what I think the best path is.",
      },
    ],
  },
  {
    label: '03',
    title: 'What I build',
    items: [
      {
        question: "What's different about how you build things?",
        answer:
          "Most small business websites are just digital brochures — they sit there and look pretty. I build things that actually do work for you: take bookings, send confirmations, route quote requests, capture leads, automate the busywork. Your tech should be a tool that saves you time, not just a place people can find your phone number.",
      },
      {
        question: 'Do you do on-site tech help?',
        answer:
          "Yes — for clients in the local area, I make on-site visits for general tech help. That includes setting up computers and equipment, troubleshooting Wi-Fi issues, helping you pick the right software, migrating to new systems, or just sitting down with you to learn the tech you already have. If you need someone who knows tech to come take a look, I can do that.",
      },
      {
        question: 'How far will you travel for on-site visits?',
        answer:
          "I'm based in Fairview Michigan and happily serve the surrounding area without travel fees. For clients farther out, I can still come on-site — there may be a small travel fee depending on distance. If you're not local, I work with clients remotely all the time and that works great for most things outside of physical tech setup.",
      },
    ],
  },
  {
    label: '04',
    title: 'Ownership & after launch',
    items: [
      {
        question: 'Will I be able to update things myself?',
        answer:
          "If you want to, yes. I can set up your website and tools so you can make basic updates yourself — changing text, adding photos, posting news — and I'll walk you through how it works. If you'd rather not deal with it, I can handle updates for you through a maintenance plan. Your choice.",
      },
      {
        question: 'What if I need help after my website launches?',
        answer:
          "I'm not going anywhere. You can reach out anytime you need help, have questions, or want to make changes. I offer ongoing maintenance plans for regular updates and support, or we can work on an as-needed basis. Whatever fits your situation.",
      },
      {
        question: 'Do I own my website?',
        answer:
          "Yes. Once you've paid for the website, it's yours. You own the content, the design, and the code. You're not locked into working with me forever — though I hope you'll want to stick around.",
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
        border: `1px solid ${isOpen ? 'rgba(194, 65, 12, 0.25)' : 'rgba(194, 65, 12, 0.12)'}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 md:p-7 flex items-center gap-6 transition-colors"
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
                Frequently Asked Questions
              </span>
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
                    d="M2 8 Q 75 2, 150 6 T 298 4"
                    stroke="var(--ember-deep)"
                    strokeWidth="2.5"
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
            {faqGroups.map((group) => (
              <div key={group.label} className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Group label column */}
                <div className="md:col-span-4">
                  <div className="md:sticky md:top-8">
                    <span
                      className="text-6xl md:text-7xl leading-none block mb-4"
                      style={{
                        color: 'rgba(194, 65, 12, 0.35)',
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
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase mb-6 block"
              style={{ color: 'var(--ember-orange)', fontFamily: 'var(--font-body)' }}
            >
              — Still Curious
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
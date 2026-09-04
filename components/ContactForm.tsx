'use client';

import Script from 'next/script';
import { useState } from 'react';
import type { CSSProperties } from 'react';

// reCAPTCHA v3 runs invisibly: on submit we ask Google for a token tied to the
// "contact" action, then send it to /api/contact where the score is verified.
declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

const INTERESTS = [
  'New website',
  'Website redesign',
  'Branding & logo',
  'Online store / payments',
  'Booking system',
  'Custom software / automation',
  'Tech help & support',
  'Something else / not sure',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

function getToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    const g = window.grecaptcha;
    if (!g || !SITE_KEY) return reject(new Error('recaptcha-unavailable'));
    g.ready(() => g.execute(SITE_KEY, { action: 'contact' }).then(resolve).catch(reject));
  });
}

const fieldStyle: CSSProperties = {
  width: '100%',
  borderRadius: '0.9rem',
  border: '2px solid rgba(28, 25, 23, 0.15)',
  backgroundColor: 'var(--paper)',
  padding: '0.75rem 1rem',
  color: 'var(--charcoal)',
  fontSize: '1rem',
  fontFamily: 'var(--font-body)',
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setStatus('submitting');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest,
      message: data.message,
      company: data.company,
    };

    try {
      let token = '';
      try {
        token = await getToken();
      } catch {
        throw new Error('Spam protection isn’t ready yet. Please refresh and try again.');
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, token }),
      });
      const body = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !body.ok) throw new Error(body.error || 'Something went wrong. Please try again.');

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div
          className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
          style={{ backgroundColor: 'var(--ember-deep)', color: 'white' }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-3xl" style={{ color: 'var(--charcoal)', fontFamily: 'var(--font-heading)' }}>
          Message sent!
        </h3>
        <p className="mt-3 text-lg" style={{ color: 'var(--ash-gray)', lineHeight: '1.6' }}>
          Thanks for reaching out — we&apos;ll get back to you within 24 hours, usually much sooner.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-fun mt-8 inline-flex items-center justify-center px-6 py-3"
          style={{ backgroundColor: 'var(--paper)', color: 'var(--charcoal)' }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <>
      {SITE_KEY && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} strategy="afterInteractive" />
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <Label>Name</Label>
            <input name="name" type="text" required autoComplete="name" placeholder="Jane Smith" style={fieldStyle} />
          </label>
          <label className="block">
            <Label>Email</Label>
            <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" style={fieldStyle} />
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <Label>Phone (optional)</Label>
            <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" style={fieldStyle} />
          </label>
          <label className="block">
            <Label>What can we help with?</Label>
            <select name="interest" defaultValue={INTERESTS[0]} style={fieldStyle}>
              {INTERESTS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <Label>Tell us about your business</Label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="A little about your business and what you're trying to do..."
            style={fieldStyle}
          />
        </label>

        {/* Honeypot — visually hidden; bots fill it, humans don't. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
          <label>
            Company
            <input name="company" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {status === 'error' && (
          <p
            className="text-sm rounded-xl px-4 py-3"
            style={{ backgroundColor: 'rgba(234, 55, 2, 0.1)', color: 'var(--ember-deep)', fontWeight: 600 }}
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-fun group inline-flex items-center justify-center gap-2 w-full px-8 py-4 text-lg"
          style={{
            backgroundColor: 'var(--ember-deep)',
            color: 'var(--bone)',
            ...(status === 'submitting' ? { opacity: 0.7 } : {}),
          }}
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
          {status !== 'submitting' && (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {!SITE_KEY && (
          <p className="text-xs text-center" style={{ color: 'var(--stone)' }}>
            Spam protection keys not yet configured — the form won&apos;t send until they&apos;re set.
          </p>
        )}

        <p className="text-xs text-center leading-relaxed" style={{ color: 'var(--stone)' }}>
          Protected by reCAPTCHA. The Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a>{' '}
          apply.
        </p>
      </form>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block mb-1.5 text-sm font-rounded" style={{ color: 'var(--charcoal)', fontWeight: 500 }}>
      {children}
    </span>
  );
}

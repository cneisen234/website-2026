'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b sticky top-0 z-50" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'var(--warm-cream)' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--ember-orange)' }}>
            <Link href="/" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L8 12L16 20L24 12L16 4Z" fill="currentColor" opacity="0.6"/>
                <path d="M16 14L10 20L16 26L22 20L16 14Z" fill="currentColor"/>
                <circle cx="16" cy="10" r="2" fill="#D4A574"/>
              </svg>
              <span>Kindling Digital</span>
            </Link>
          </div>
          
          {/* Hamburger button - mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
            style={{ color: 'var(--charcoal)' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
            <span className={`block h-0.5 w-full bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
         </button>
          
          {/* Navigation links - desktop */}
          <ul className="hidden md:flex gap-6" style={{ color: 'var(--charcoal)' }}>
            <li>
              <Link href="/" className="hover:underline transition-all" style={{ textDecorationColor: 'var(--ember-orange)' }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline transition-all" style={{ textDecorationColor: 'var(--ember-orange)' }}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline transition-all" style={{ textDecorationColor: 'var(--ember-orange)' }}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline transition-all" style={{ textDecorationColor: 'var(--ember-orange)' }}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline transition-all" style={{ textDecorationColor: 'var(--ember-orange)' }}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline transition-all" style={{ textDecorationColor: 'var(--ember-orange)' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <ul className="flex flex-col gap-4 pb-4" style={{ color: 'var(--charcoal)' }}>
            <li>
              <Link href="/" className="block hover:underline" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block hover:underline" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block hover:underline" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block hover:underline" onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:underline" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
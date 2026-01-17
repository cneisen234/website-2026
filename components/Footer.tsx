import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-auto" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', backgroundColor: 'var(--warm-cream)' }}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick links */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: 'var(--charcoal)' }}>Quick Links</h3>
            <ul className="space-y-2" style={{ color: 'var(--charcoal)' }}>
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
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm" style={{ borderColor: 'rgba(232, 105, 76, 0.2)', color: 'var(--ash-gray)' }}>
          <p>&copy; {new Date().getFullYear()} Kindling Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
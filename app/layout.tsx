import type { Metadata, Viewport } from "next";
import { Fraunces, Fredoka, Inter_Tight } from "next/font/google";
import { connection } from "next/server";
import { LenaForCustomers } from "@/lib/pilot-light";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Warm, characterful serif for headlines — friendly where Instrument Serif was formal
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

// Rounded, approachable sans for the brand name, badges, and buttons
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-rounded",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kindling Digital — Your small business's tech partner",
  description:
    "Kindling Digital is the technology partner small businesses call when tech gets in the way. Custom websites and branding from $100/month, and Pilot Light, where your whole business is connected: ask, approve, done. Included with Business in a Box.",
  // Stop phones from auto-linking example emails/phone numbers into tappable links
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Business details for Google (not shown on the page). The home base is Fairview, Michigan;
// areaServed says we work with businesses anywhere in the US, so we aren't read as local-only.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kindling Digital",
  url: "https://www.kindlingdigital.org",
  logo: "https://www.kindlingdigital.org/transparent_logo.webp",
  email: "chris@kindlingdigital.org",
  telephone: "+1-701-429-4837",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fairview",
    addressRegion: "MI",
    postalCode: "48621",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F1EB",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Every page renders on request (docs/site-conventions.md §6, in Pilot Light), so Lena's chat follows
  // her add-on being on or off at once, not at the next deploy.
  await connection();
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${fraunces.variable} ${fredoka.variable} flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Navigation />
        {children}
        <Footer />
        <LenaForCustomers />
      </body>
    </html>
  );
}

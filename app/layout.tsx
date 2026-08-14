import type { Metadata, Viewport } from "next";
import { Fraunces, Fredoka, Inter_Tight } from "next/font/google";
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
  title: "Kindling Digital — The tech guy in your back pocket",
  description:
    "Digital marketing for a flat monthly price — a custom website, branding, and social, plus a tech guy for everything else.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F1EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${fraunces.variable} ${fredoka.variable} flex flex-col min-h-screen`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

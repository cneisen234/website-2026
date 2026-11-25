import type { Metadata } from 'next';

// The FAQ page is a client component, so its title lives here.
export const metadata: Metadata = {
  title: 'FAQ | Kindling Digital',
  description:
    "Answers about Kindling Digital's monthly plans, the 3-month minimum, updates, integrations and Pilot Light.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

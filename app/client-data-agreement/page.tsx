import type { Metadata } from 'next';
import LegalPage, { type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Client Data Agreement — Kindling Digital',
  description: 'How Kindling Digital handles the personal information it processes for its clients through Pilot Light.',
};

const sections: LegalSection[] = [
  {
    heading: 'What this covers',
    body: [
      'This agreement is part of our Terms of Service. It covers the personal information about your customers and other people that Kindling Digital ("Kindling", "we") handles for you, the client, through Pilot Light, its phone app, Lena and the websites we run for you ("client data").',
      'For client data, you decide what is collected and why (you are the "business" or "controller"); we handle it only on your behalf to provide our services (we are your "service provider" or "processor").',
    ],
  },
  {
    heading: 'How we handle client data',
    body: [
      [
        'Only to provide, secure and support our services to you, and as you instruct through Pilot Light or in writing.',
        'Never sold or shared for advertising, and never combined with other businesses’ information for our own purposes.',
        'Kept separate: each client’s business information lives in its own database.',
        'Only seen by people who need to: Kindling looks at your account to set it up, support you and fix problems, and keeps what it sees confidential.',
      ],
    ],
  },
  {
    heading: 'Service providers we use',
    body: [
      'We use service providers to run Pilot Light (listed in our Privacy Policy, such as hosting, databases, email delivery, file storage, the AI behind Lena and app notifications). Each handles client data only to provide its service, under terms that protect it at least as well as this agreement. We’ll tell you before we add a new provider that handles client data, so you can raise any concern.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'We protect client data with encrypted connections, encrypted storage of connected-account keys, a separate database per business, access limited to the business a person signs in to, protected sign-in, and a record of changes. Every change to your records is shown to a person and allowed before it runs (or follows a rule you turned on), and is checked afterward.',
    ],
  },
  {
    heading: 'If something goes wrong',
    body: [
      'If we learn that client data has been accessed or disclosed without permission, we’ll tell you without undue delay (and within 72 hours of confirming it), explain what we know, and help you with any notices you need to give.',
    ],
  },
  {
    heading: 'Your customers’ requests',
    body: [
      'Pilot Light lets you find, download, correct and delete a customer’s information. If a customer contacts us directly, we’ll pass the request to you, and we’ll help you respond to requests under the privacy laws that apply to you.',
    ],
  },
  {
    heading: 'When the service ends',
    body: [
      'You can download your business’s information from Pilot Light at any time. After the service ends, we delete client data from Pilot Light, except anything we must keep by law, which we keep protected and delete when we no longer need to keep it.',
    ],
  },
  {
    heading: 'Information about our practices',
    body: ['On reasonable request, we’ll answer your questions about how we protect client data, to help you show that you meet your own obligations.'],
  },
];

export default function ClientDataAgreementPage() {
  return (
    <LegalPage
      title="Client Data Agreement"
      updated="October 12, 2026"
      intro="How Kindling Digital handles your customers' personal information on your behalf when you use Pilot Light and the websites we run for you."
      sections={sections}
    />
  );
}

import type { Metadata } from 'next';
import LegalPage, { type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service — Kindling Digital',
  description: 'The terms for Kindling Digital’s services, including Pilot Light and its phone app.',
};

const sections: LegalSection[] = [
  {
    heading: 'These terms',
    body: [
      'These terms are an agreement between Kindling Digital ("Kindling", "we", "us"), a Michigan sole proprietorship, and the business that uses our services ("you", "the client"), including the people the client invites to Pilot Light. They cover our websites and software services, Pilot Light (the dashboard at pilotlight.kindlingdigital.org), the Pilot Light phone app, and Lena, the assistant inside them. By creating a Pilot Light account or using our services, you agree to them.',
      'Your plan (what it includes, its price and any minimum term) is described on our pricing page or agreed with you in writing. If your written agreement with us says something different from these terms, your written agreement wins.',
    ],
  },
  {
    heading: 'Pilot Light',
    body: [
      'Pilot Light lets you manage your business’s website and connected systems in one place, and gives you Lena to answer questions and suggest changes. Access is by invitation: we set up your business, and you invite the people who help you run it. You’re responsible for what happens in your account, so keep sign-in details private and remove people who should no longer have access.',
      'Add-ons, usage limits and Lena’s monthly allowance depend on your plan. We may change, improve or retire features over time; if a change takes away something you rely on, we’ll tell you first and work with you on it.',
    ],
  },
  {
    heading: 'Lena and AI',
    body: [
      'Lena uses AI to understand requests and write answers and suggestions. AI can make mistakes. Lena never changes your records on her own: every change is shown to you first and only happens when you (or someone you invited) allow it, or when a rule you turned on applies. Each change is checked before and after it runs, but you are responsible for reviewing what you allow.',
      'If you let Lena answer your customers (by email or on your website), she does so in your business’s name within the limits you set. You’re responsible for the answers you allow her to give, and you can turn this off at any time.',
    ],
  },
  {
    heading: 'Your responsibilities',
    body: [
      [
        'Use our services lawfully, and only for your own business.',
        'Have the right to the information you put into Pilot Light and to contact your customers, and follow the laws that apply to your business (including privacy and marketing laws).',
        'Don’t misuse the services: no attempts to break in, overload them, reach other businesses’ information, or use them to send spam or harmful content.',
        'Keep your connected accounts (such as Square, Stripe or Google Workspace) in good standing; their own terms apply to them.',
      ],
    ],
  },
  {
    heading: 'Your information',
    body: [
      'Your business’s information stays yours. You give us permission to use it only to provide and support our services to you. How we handle it, including your customers’ information, is described in our Privacy Policy and our Client Data Agreement, which are part of these terms.',
      'As part of our service, Kindling can see and work in your Pilot Light account to set it up, support you and fix problems.',
    ],
  },
  {
    heading: 'Payment',
    body: [
      'You pay the fees for your plan and any add-ons or hourly work as agreed. If a payment is late, we may pause services after letting you know. Fees don’t include taxes, which you pay where they apply.',
    ],
  },
  {
    heading: 'Ending the service',
    body: [
      'You can cancel as your plan allows (after any minimum term). We may end or suspend the service if you seriously break these terms or don’t pay, after notice where we reasonably can. When the service ends, you can download your business’s information from Pilot Light, and we then delete it as described in the Privacy Policy. What you keep after canceling (such as your branding or domain) is described in your plan.',
    ],
  },
  {
    heading: 'Availability and warranty',
    body: [
      'We work hard to keep our services running and your information safe, but we can’t promise they’ll always be available or error-free. Except as stated in these terms, the services are provided "as is", without other warranties, to the extent the law allows.',
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      'To the extent the law allows, Kindling is not liable for indirect or consequential losses (such as lost profits or lost data that could have been kept by reasonable care), and our total liability for any claim is limited to the fees you paid us in the 12 months before it arose. Nothing in these terms limits liability that can’t be limited by law.',
    ],
  },
  {
    heading: 'Changes to these terms',
    body: ['We may update these terms. We’ll update the date above and tell you about important changes before they take effect. If you keep using the services after that, the new terms apply.'],
  },
  {
    heading: 'Governing law',
    body: [
      'These terms are governed by the laws of the State of Michigan, without regard to its conflict-of-law rules. Any dispute will be handled in the state or federal courts located in Michigan, unless the law where you are requires otherwise. Before going to court, we both agree to try to resolve it by talking it through first.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="October 12, 2026"
      intro="The terms for working with Kindling Digital and using Pilot Light, its phone app and Lena."
      sections={sections}
    />
  );
}

import type { Metadata } from 'next';
import LegalPage, { type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Kindling Digital',
  description: 'How Kindling Digital and Pilot Light collect, use and protect information.',
};

const sections: LegalSection[] = [
  {
    heading: 'Who we are',
    body: [
      'Kindling Digital ("Kindling", "we", "us") is a small business based in Michigan that builds and runs websites and software for other small businesses. This policy covers this website (kindlingdigital.org), Pilot Light (the dashboard at pilotlight.kindlingdigital.org), the Pilot Light phone app, and the assistant called Lena that works inside them.',
      'Pilot Light is used by our clients (the businesses we work for) and the people they invite, such as an assistant. Pilot Light also holds information about our clients’ own customers. For that information, our client decides what is collected and why, and we handle it on their behalf (see section 5 and our Client Data Agreement).',
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'From visitors to this website:',
      ['What you send us through the contact form: your name, email address, phone number if you give it, and your message.'],
      'From the people who use Pilot Light (our clients and the people they invite):',
      [
        'Your name, email address, role, and a protected (hashed) version of your password. We never see or store your password itself.',
        'Your settings, such as which notifications you want, your quiet hours and your business’s choices in Pilot Light.',
        'What you write to Lena and any photos you send her, and the changes you allow, deny or schedule.',
        'A record of activity in your account (what changed, when, and by whom) so you can see your history.',
        'If you use the phone app: the name of your phone, the app version, and a push token so we can send you notifications. Signing out removes the token.',
        'To protect sign-in from abuse, we briefly keep the network address and email used for attempts, and delete them when the time window ends.',
      ],
      'About our clients’ customers (on our clients’ behalf):',
      [
        'What the client’s own website and systems hold: for example orders, purchases, bookings, reviews and the contact details that come with them.',
        'Emails and website chat messages between the client and their customers, when the client connects those to Pilot Light.',
        'Payment details as shown by the client’s own Square or Stripe account (amounts, status, refunds). Card numbers are handled by Square or Stripe and never stored by Pilot Light.',
      ],
    ],
  },
  {
    heading: 'How we use it',
    body: [
      [
        'To run Pilot Light and the client’s website: show and update records, carry out the changes a person allows, and check that they worked.',
        'To send notifications, by email, in Lena’s chat or on the phone app, according to each person’s settings.',
        'For Lena to answer questions, draft or send replies the client has turned on, and suggest changes. Lena never changes anything on her own: every change needs a person to allow it, or a rule the client turned on.',
        'To keep everything secure, fix problems and support our clients.',
        'To answer people who contact us.',
      ],
      'We do not sell personal information, and we do not use it for advertising.',
    ],
  },
  {
    heading: 'AI (Lena)',
    body: [
      'Lena uses an AI model provided by OpenAI to understand requests and write answers. To do that, the relevant information (for example, the question, the records it’s about, or a customer’s email) is sent to OpenAI through its business service, which does not use it to train its models. Lena only works with the information the client has connected to Pilot Light, and what she can share with a customer is limited to what the client allows.',
    ],
  },
  {
    heading: 'Our clients’ customers',
    body: [
      'If you are a customer of a business that uses Pilot Light, that business is responsible for your information and for this kind of request. We handle it only to provide Pilot Light to them. To see, correct, download or delete your information, contact the business directly; Pilot Light gives them the tools to do it, and we help them when asked.',
    ],
  },
  {
    heading: 'Who we share it with',
    body: [
      'We use a small number of service providers to run Pilot Light. They handle information only to provide their service to us:',
      [
        'Vercel (hosting) and Neon (databases), in the United States.',
        'OpenAI (the AI behind Lena).',
        'Twilio SendGrid (sending email).',
        'UploadThing (storing photos and files).',
        'Expo and Apple (delivering notifications to the phone app and updating the app).',
        'Google, Square and Stripe, only when a client connects their own account (to read their business email, or to see and refund their payments).',
      ],
      'We may also share information if the law requires it, to protect people’s safety, or as part of a sale or transfer of our business (in which case this policy continues to apply to it).',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'We keep account and business information for as long as a client uses Pilot Light. Customer email history in Pilot Light covers the most recent 12 months. When a client leaves, we delete their business’s information from Pilot Light, except anything we must keep by law, and they can download it first. A person’s own account is removed when the client removes them.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'Information travels over encrypted connections. Each client’s business information is kept in its own database, and Pilot Light only opens the database of the business a person signs in to. Keys for connected accounts (such as Square or Stripe) are stored encrypted. Sign-in is protected against repeated attempts, and phone sign-ins can be signed out from the dashboard at any time. No system is perfectly secure, but we work to protect what we hold and will tell affected clients promptly if something goes wrong.',
    ],
  },
  {
    heading: 'Your choices and rights',
    body: [
      'You can change your notification settings at any time in Pilot Light. You can ask us to see, correct, download or delete information about you by contacting us below; if it’s information we hold for one of our clients, we’ll pass the request to them and help them with it. Depending on where you live, you may have additional rights under your state’s privacy laws, and we will honor them.',
    ],
  },
  {
    heading: 'Children',
    body: ['Our services are for businesses and are not directed to children under 16. We do not knowingly collect information from children.'],
  },
  {
    heading: 'Changes to this policy',
    body: ['If we change this policy, we’ll update the date above, and we’ll tell our clients about any important change before it takes effect.'],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 12, 2026"
      intro="This explains what information Kindling Digital collects through this website, Pilot Light and its phone app, how we use it, and the choices you have."
      sections={sections}
    />
  );
}

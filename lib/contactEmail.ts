// Builds the notification email Chris receives for a contact-form inquiry —
// branded HTML plus a plain-text fallback.
//
// Email clients are not browsers: table layout, fully inlined styles, safe web
// fonts, and — critically — every piece of user input is HTML-escaped before it
// touches the markup. No shared CSS, no external assets (so nothing breaks in
// an inbox).

export type ContactFields = {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
};

// Brand palette (mirrors globals.css — hard-coded because email has no vars).
const C = {
  emberDeep: '#EA3702',
  emberOrange: '#FB923C',
  honey: '#F0B949',
  midnight: '#0F1419',
  cream: '#F5F1EB',
  paper: '#FAF7F2',
  charcoal: '#1C1917',
  ash: '#44403C',
  stone: '#78716C',
  border: '#E4DDD1',
};

const FONT = "'Segoe UI', Helvetica, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function field(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${C.border};">
        <p style="margin:0 0 3px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.stone};font-family:${FONT};">${label}</p>
        <p style="margin:0;font-size:16px;font-weight:700;color:${C.charcoal};font-family:${FONT};">${value}</p>
      </td>
    </tr>`;
}

function messageBlock(label: string, html: string): string {
  return `
    <p style="margin:24px 0 8px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.stone};font-family:${FONT};">${label}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background-color:${C.cream};border-left:4px solid ${C.emberDeep};border-radius:0 8px 8px 0;padding:16px 18px;">
          <p style="margin:0;font-size:15px;line-height:1.65;color:${C.charcoal};font-family:${FONT};">${html}</p>
        </td>
      </tr>
    </table>`;
}

function replyButton(email: string, name: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0 0;">
      <tr>
        <td style="border-radius:9999px;background-color:${C.emberDeep};">
          <a href="mailto:${email}?subject=Re:%20Your%20message%20to%20Kindling%20Digital" style="display:inline-block;padding:13px 28px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;font-family:${FONT};">Reply to ${name}</a>
        </td>
      </tr>
    </table>`;
}

// Full HTML document wrapper: brand header, ember accent, body, footer.
function emailShell(opts: { preheader: string; eyebrow: string; heading: string; intro: string; body: string; footer: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="light only" />
<title>${opts.heading}</title>
</head>
<body style="margin:0;padding:0;background-color:${C.cream};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${opts.preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${C.cream};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${C.border};">
          <tr>
            <td style="background-color:${C.midnight};padding:28px 32px;">
              <p style="margin:0;font-size:22px;font-weight:700;letter-spacing:-0.3px;color:#ffffff;font-family:${SERIF};">Kindling Digital</p>
              <p style="margin:6px 0 0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${C.emberOrange};font-family:${FONT};">Custom digital &amp; tech for small business</p>
            </td>
          </tr>
          <tr><td style="height:5px;background-color:${C.emberDeep};line-height:5px;font-size:0;">&nbsp;</td></tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:${C.emberDeep};font-family:${FONT};">${opts.eyebrow}</p>
              <h1 style="margin:0 0 8px;font-size:24px;line-height:1.2;font-weight:700;color:${C.charcoal};font-family:${SERIF};">${opts.heading}</h1>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:${C.ash};font-family:${FONT};">${opts.intro}</p>
              ${opts.body}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid ${C.border};">
              <p style="margin:0;font-size:12px;line-height:1.6;color:${C.stone};font-family:${FONT};">${opts.footer}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactText(p: ContactFields): string {
  return [
    'New contact form submission — Kindling Digital',
    '',
    `Name:     ${p.name}`,
    `Email:    ${p.email}`,
    `Phone:    ${p.phone || '—'}`,
    `Interest: ${p.interest || '—'}`,
    '',
    'Message:',
    p.message,
    '',
    '—',
    'Sent from the contact form at kindlingdigital.org',
    'Reply directly to this email to respond to the sender.',
  ].join('\n');
}

export function buildContactHtml(p: ContactFields): string {
  const name = escapeHtml(p.name);
  const email = escapeHtml(p.email);
  const phone = p.phone ? escapeHtml(p.phone) : '—';
  const interest = p.interest ? escapeHtml(p.interest) : '—';
  const message = escapeHtml(p.message).replace(/\r?\n/g, '<br />');

  const body = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${field('Name', name)}
      ${field('Email', `<a href="mailto:${email}" style="color:${C.emberDeep};text-decoration:none;">${email}</a>`)}
      ${field('Phone', phone)}
      ${field('Interested in', interest)}
    </table>
    ${messageBlock('Their message', message)}
    ${replyButton(email, name)}`;

  return emailShell({
    preheader: `New inquiry from ${name}${p.interest ? ` — ${interest}` : ''}`,
    eyebrow: 'New contact inquiry',
    heading: 'You&rsquo;ve got a new message',
    intro: 'Someone reached out through the website. Here are their details:',
    body,
    footer: `Sent from the contact form at kindlingdigital.org. You can reply directly to this email &mdash; it goes straight to ${name}.`,
  });
}

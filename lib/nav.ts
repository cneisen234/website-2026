// The site's links, shared by the header and footer. They follow Pilot Light's navigation convention: up to 6
// items; past that, links group into categories. In the header a category is a button that opens its links (never
// a link itself); in the footer the plain links sit under "Explore" and each category is its own column.

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pilot Light', href: '/pilot-light' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'About',
    children: [
      { label: 'About us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export const isGroup = (item: NavItem): item is { label: string; children: NavLink[] } => 'children' in item;

/** The footer's link columns: "Explore" for the plain links, then one per category. */
export const footerColumns: { title: string; links: NavLink[] }[] = [
  { title: 'Explore', links: navItems.filter((i): i is NavLink => !isGroup(i)) },
  ...navItems.filter(isGroup).map((g) => ({ title: g.label, links: g.children })),
];

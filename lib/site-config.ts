export const site = {
  name: "Trinity Evangelical Lutheran Church",
  shortName: "Trinity Lutheran",
  tagline: "A traditional, liturgical congregation of the Lutheran Church Missouri Synod",
  url: "https://trinitywaterville.org",
  address: {
    line1: "415 Lake Street West",
    line2: "Waterville, MN 56096",
  },
  phone: "507.362.4454",
  phoneHref: "tel:+15073624454",
  email: "tlchurch@frontiernet.net",
  emailHref: "mailto:tlchurch@frontiernet.net",
  copyrightYear: new Date().getFullYear(),
};

export const serviceTimes = [
  {
    label: "Divine Service",
    schedule: "Sundays, 9:00 AM",
  },
  {
    label: "Adult Bible Class & Sunday School",
    schedule: "Sundays 10:15 AM · Tuesdays 3:00 PM",
  },
];

export type NavLink = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavLink[] };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "What We Believe", href: "/what-we-believe" },
      { label: "Staff", href: "/staff" },
    ],
  },
  {
    label: "Worship",
    children: [
      { label: "Worship Schedule", href: "/worship-schedule" },
      { label: "What To Expect", href: "/what-to-expect" },
      { label: "Catechesis", href: "/catechesis" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Sacred Art", href: "/sacred-art" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Links", href: "/links" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export type Play = {
  number: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  visual: "photo" | "search-mockup";
  image?: string;
  alt?: string;
  imageFit?: "cover" | "contain";
  tone: "on-light" | "on-dark";
};

export const plays: Play[] = [
  {
    number: "01",
    title: "Know Your Number",
    copy: "Get a quick, data-backed estimate of what your home is worth in today's market — the opening move for any seller.",
    cta: "Get my estimate",
    href: "https://tamara.martysmayda.ca/HomeWorth",
    visual: "photo",
    image: "/playbook/key-handover.jpg",
    alt: "A hand holding a house-shaped keychain with keys",
    tone: "on-light",
  },
  {
    number: "02",
    title: "Move Smarter",
    copy: "Still searching for homes the old way? The Home Locator app puts instant alerts, saved searches, and one-tap showings in your pocket.",
    cta: "Get the app",
    href: "https://play.google.com/store/apps/details?id=com.agentlocator.homesearch&hl=en&_branch_match_id=1607786860197827575&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MvIz03NyU9OLMkvAnGT83P1PT0snC0cKwqDDJPs64pS01KLijLz0uOTivLLi1OLbJ0zioB6AHwfqClEAAAA",
    visual: "photo",
    image: "/playbook/home-locator-app.png",
    alt: "The Home Locator app shown on a phone, in front of a modern home",
    imageFit: "contain",
    tone: "on-dark",
  },
  {
    number: "03",
    title: "Search Live",
    copy: "Browse current listings the moment they hit the market, wherever you're looking — no stale data, no middlemen.",
    cta: "Search listings",
    href: "https://tamara.martysmayda.ca/home",
    visual: "search-mockup",
    tone: "on-light",
  },
  {
    number: "04",
    title: "Price It Right",
    copy: "A professional market value consultation goes beyond an algorithm — a thorough analysis grounded in real comparables.",
    cta: "Book a consultation",
    href: "/contact",
    visual: "photo",
    image: "/playbook/price-value.jpg",
    alt: "House models, a key, and a calculator laid out with currency, representing a home valuation",
    tone: "on-dark",
  },
  {
    number: "05",
    title: "Watch Your Street",
    copy: "Nosey Neighbour tells you the moment a home nearby goes up for sale — so you always know what's happening on your block.",
    cta: "Set an alert",
    href: "https://tamara.martysmayda.ca/NoseyNeighbour",
    visual: "photo",
    image: "/playbook/street-aerial.jpg",
    alt: "An aerial view of a residential cul-de-sac street lined with houses",
    tone: "on-light",
  },
];

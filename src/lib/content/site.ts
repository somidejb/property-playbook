export const site = {
  name: "The Property Playbook",
  tagline: "Built on Experience. Driven by Strategy.",
  subTagline: "Two perspectives. One strategy.",
  positioningLine:
    "Our team brings both insight and edge to every move. We don't just follow the market, we position you to win in it.",
  description:
    "REALTORS® combining real data with real strategy.",
  brokerage: {
    name: "RE/MAX Real Estate",
    address: "200, 10835 124 Street NW, Edmonton, Alberta T5M 0H4",
    officePhone: "780-488-4000",
    mapCoordinates: { lat: 53.5541, lng: -113.5274 },
  },
  neighbourhoods: [
    "Downtown",
    "Oliver",
    "Glenora",
    "North Glenora",
    "Grovenor",
    "Laurier Heights",
    "Forest Heights",
    "Crestwood",
    "Parkview",
    "Westmount",
  ],
  referral: {
    amount: "$250",
    copy: "Offering a $250 referral fee upon closing if you refer to us.",
    fineprint:
      "Referral fees are paid only on completed transactions that successfully close. One referral fee is paid per transaction. The referred client must not already be actively working with our team.",
  },
  legal:
    "The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA.",
  // The live site's social icons point to Wix's own placeholder accounts
  // (instagram.com/wix, facebook.com/wix, etc.) rather than real client
  // handles — omitted here rather than replaced with a guess. Swap in the
  // client's real profile URLs when provided.
  social: undefined as
    | { instagram?: string; facebook?: string; youtube?: string; tiktok?: string }
    | undefined,
} as const;

export type Agent = {
  name: string;
  role: string;
  teaser: string;
  phone: string;
  email: string;
  bio: string[];
  facts: string[];
};

export const teamIntro = {
  eyebrow: "The Team Advantage",
  heading: "Proven Experience. Modern Edge.",
  lead: "Real estate is too important to approach from one perspective alone. Our partnership blends over 1,000 successful transactions and decades of market insight with entrepreneurial creativity, strategic marketing, and fresh energy. One of us sees the numbers before they move. The other sees the opportunity before it's obvious.",
  sub: "We combine data with design. Strategy with personality. Experience with innovation.",
};

export const agents: Agent[] = [
  {
    name: "Marty Smayda",
    role: "Experience You Can Rely On",
    teaser: "Over 1,000 transactions and decades of market experience, approached with preparation and discipline.",
    phone: "(780) 695-9030",
    email: "ziomarty7@gmail.com",
    bio: [
      "I've spent my career helping clients navigate what is often the most significant financial decision of their lives. With over 1,000 transactions completed and decades of market experience, I approach every opportunity with preparation, discipline, and a deep understanding of economic trends.",
      "I believe informed decisions create stronger outcomes. Through regular market updates and analysis, I help buyers and sellers understand not just what is happening, but why it matters.",
      "Outside of real estate, I enjoy creative projects, including producing animated shorts inspired by my pets. It's a reminder that while the work is serious, the relationships are personal.",
    ],
    facts: ["22 years in real estate", "RE/MAX since 2000", "1,000+ transactions"],
  },
  {
    name: "Tamara Konopelky",
    role: "Fresh Perspective. Real Strategy.",
    teaser: "An entrepreneur's eye for positioning and presentation, brought to every listing and every deal.",
    phone: "(780) 887-2056",
    email: "TeeinYeg@gmail.com",
    bio: [
      "Before entering real estate, I spent over 12 years building and operating an award-winning landscape construction and design company. That experience taught me how thoughtful presentation, careful planning, and small details can significantly influence value.",
      "I later founded and grew an international mineral business, mining and selling Canadian amethyst to clients around the world. Building that brand strengthened my understanding of positioning, buyer psychology, and how to create meaningful demand.",
      "My role is to listen carefully, think creatively, and ensure your property stands out for the right reasons.",
    ],
    facts: ["12+ years, landscape design & construction", "Founder, Canadian amethyst export business", "Modern marketing & positioning"],
  },
];

// Edit everything about the site here.
export const site = {
  name: "Your Name",
  tagline: "Property, crypto and fresh pairs.",
  intro:
    "I’m Your Name, a Lagos-based entrepreneur running three businesses. Whether you want to buy land, understand crypto or find a clean pair of sneakers, you’re in the right place.",
  about: [
    "I started with one business and kept building. Today I work across property, crypto and sneakers, and the common thread is simple: be honest, be useful and deliver what I promise.",
    "Replace this paragraph with your own story, your years of experience and a line about why clients trust you.",
  ],
  contact: {
    whatsapp: "https://wa.me/234XXXXXXXXXX",
    email: "mailto:you@example.com",
    instagram: "https://instagram.com/yourhandle",
    x: "https://x.com/yourhandle",
  },
};

export type Venture = {
  id: string;
  title: string;
  blurb: string;
  cta: string;
  // Full class strings so Tailwind can detect them
  theme: string;
  focus: string;
  items: { title: string; text: string }[];
};

export const ventures: Venture[] = [
  {
    id: "estate",
    title: "Real estate",
    blurb:
      "I help buyers, renters and investors find verified properties and avoid costly mistakes. Every listing is checked before I show it to you.",
    cta: "Ask about a property",
    theme: "bg-[#1F4D3A] text-white",
    focus: "focus-visible:outline-white",
    items: [
      { title: "Land and houses for sale", text: "Plots and homes in growing areas, with documents checked." },
      { title: "Rentals", text: "Apartments for individuals and families." },
      { title: "Property investment advice", text: "Where to buy, what to expect and how to plan." },
    ],
  },
  {
    id: "crypto",
    title: "Crypto",
    blurb:
      "I explain crypto in plain language and help people get started safely, from setting up a wallet to knowing what to avoid.",
    cta: "Start learning",
    theme: "bg-[#3B3FD8] text-white",
    focus: "focus-visible:outline-white",
    items: [
      { title: "Beginner guidance", text: "Wallets, exchanges and security basics." },
      { title: "Market updates", text: "What’s moving and why it matters." },
      { title: "Trading and investing", text: "Share ideas, learn together and manage risk." },
    ],
  },
  {
    id: "shoes",
    title: "Sneakers",
    blurb:
      "Quality sneakers at fair prices. Message me what you’re looking for and I’ll send photos, sizes and prices.",
    cta: "Order a pair",
    theme: "bg-[#E8472B] text-[#16100E]",
    focus: "focus-visible:outline-[#16100E]",
    items: [
      { title: "New and pre-owned pairs", text: "Clean, authentic and honestly described." },
      { title: "Custom requests", text: "Tell me the brand, size and colour and I’ll source it." },
      { title: "Delivery", text: "Within Lagos and to other states." },
    ],
  },
];
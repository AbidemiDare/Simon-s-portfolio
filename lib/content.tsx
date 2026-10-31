// Edit everything about the site here.
export const site = {
  name: "Thompson Consult",
  year: 2026,
  tagline: "Property, crypto and fresh pairs.",
  intro:
    "I’m Simon Awojinrin, a Lagos-based entrepreneur running three businesses. Whether you want to buy land, understand crypto or find a clean pair of sneakers, you’re in the right place.",
  // Put the file at public/images/me.jpg (portrait works best)
  photo: { src: "/images/me.jpg", alt: "Portrait of Your Name" },
  aboutLead: "Three businesses, one standard: do it properly.",
  about: [
    "I run three businesses in Lagos that share one idea: people should deal with someone they can trust. In real estate I help clients buy, rent and invest in verified properties. In crypto I run a fast exchange that is open 24 hours. In fashion I bring in quality sneakers and premium men’s wear.",
    "Whether you’re a first-time buyer, a new trader or just looking for your next pair, I keep things simple, explain the details and stay available after the deal is done.",
  ],
  values: [
    { title: "Honest", text: "Clear prices, real details and no surprises." },
    { title: "Useful", text: "Advice you can act on, whether it’s land, crypto or sneakers." },
    { title: "Reliable", text: "I reply, I deliver and I keep my word." },
  ],
  contact: {
     whatsapp: "https://wa.me/2349071913903",
    email: "mailto:simonawojinrin@gmail.com",
    instagram: "https://instagram.com/thompson_consult001",
    x: "https://x.com/yourhandle",
  },
};

type Img = { src: string; alt: string };

export type Venture = {
  id: string;
  title: string;
  blurb: string;
  cta: string;
  // Full class strings so Tailwind can detect them
  band: string; // section background
  accent: string; // heading colour
  bar: string; // small bar above the heading
  items: { title: string; text: string }[];
  images?: Img[]; // optional gallery, files in public/images
  flier?: Img & { width: number; height: number }; // optional flier
};

export const ventures: Venture[] = [
  {
    id: "estate",
    title: "Real estate",
    blurb:
      "I help buyers, renters and investors find verified properties and avoid costly mistakes. Every listing is checked before I show it to you.",
    cta: "Ask about a property",
    band: "bg-[var(--soft)]",
    accent: "text-[#C8F169]",
    bar: "bg-[#C8F169]",
    items: [
      { title: "Land and houses for sale", text: "Plots and homes in growing areas, with documents checked." },
      { title: "Rentals", text: "Apartments for individuals and families." },
      { title: "Property investment advice", text: "Where to buy, what to expect and how to plan." },
    ],
    // images: [{ src: "/images/estate-1.jpg", alt: "Describe the property" }],
    // flier: { src: "/images/estate-flier.jpg", alt: "Flier: ...", width: 1080, height: 1350 },
  },
  {
    id: "crypto",
    title: "Crypto",
    blurb:
      "Trade your digital assets with a fast, reliable exchange that is open 24 hours a day, with rates you’ll like.",
    cta: "Trade with me",
    band: "bg-[var(--bg)]",
    accent: "text-[#9DBBFF]",
    bar: "bg-[#9DBBFF]",
    items: [
      { title: "Bitcoin, Ethereum and Tether (USDT)", text: "Buy and sell the major digital assets." },
      { title: "PayPal, Zelle, CashApp and Venmo", text: "Trade your payment-app balances." },
      { title: "Gift cards", text: "Turn your gift cards into cash." },
      { title: "Open 24 hours", text: "Fast, reliable and sweet rates, any time of day." },
    ],
    flier: {
      src: "/images/crypto-flier.jpg",
      alt: "Thompson Exchange flier: trade Bitcoin, Ethereum, Tether, PayPal, Zelle, CashApp, Venmo and gift cards, 24 hours a day",
      width: 1080,
      height: 1080,
    },
  },
  {
    id: "shoes",
    title: "Sneakers",
    blurb:
      "Trendy sneakers from Shoebox, plus premium men’s shirts and polos from F3RNS. Message me what you’re looking for and I’ll send photos, sizes and prices.",
    cta: "Shop now",
    band: "bg-[var(--soft)]",
    accent: "text-[#FF9A73]",
    bar: "bg-[#FF9A73]",
    items: [
      { title: "Sneakers", text: "From classic kicks to the latest pairs, with comfort and quality." },
      { title: "Shirts and polos", text: "Premium men’s wear from F3RNS." },
      { title: "Delivery", text: "Within Lagos and to other states." },
    ],
    flier: {
      src: "/images/shoes-flier.jpg",
      alt: "Shoebox x F3RNS flier: trendy sneakers and premium men’s shirts and polos",
      width: 1080,
      height: 1080,
    },
  },
];

// // Edit everything about the site here.
// export const site = {
//   name: "Thompson Consult",
//   year: 2026,
//   tagline: "Property, crypto and fresh pairs.",
//   intro:
//     "I’m Simon Awojinrin, a Lagos-based entrepreneur running three businesses. Whether you want to buy land, understand crypto or find a clean pair of sneakers, you’re in the right place.",
//   // Put the file at public/images/me.jpg (portrait works best)
//   photo: { src: "/images/me.jpg", alt: "Portrait of Your Name" },
//   about: [
//     "I run three businesses in Lagos that share one idea: people should deal with someone they can trust. In real estate I help clients buy, rent and invest in verified properties. In crypto I run a fast exchange that is open 24 hours. In fashion I bring in quality sneakers and premium men’s wear.",
//     "Whether you’re a first-time buyer, a new trader or just looking for your next pair, I keep things simple, explain the details and stay available after the deal is done.",
//   ],
//   contact: {
//     whatsapp: "https://wa.me/2349071913903",
//     email: "mailto:simonawojinrin@gmail.com",
//     instagram: "https://instagram.com/thompson_consult001",
//     x: "https://x.com/yourhandle",
//   },
// };

// type Img = { src: string; alt: string };

// export type Venture = {
//   id: string;
//   title: string;
//   blurb: string;
//   cta: string;
//   // Full class strings so Tailwind can detect them
//   band: string; // section background
//   accent: string; // heading colour
//   bar: string; // small bar above the heading
//   items: { title: string; text: string }[];
//   images?: Img[]; // optional gallery, files in public/images
//   flier?: Img & { width: number; height: number }; // optional flier
// };

// export const ventures: Venture[] = [
//   {
//     id: "estate",
//     title: "Real estate",
//     blurb:
//       "I help buyers, renters and investors find verified properties and avoid costly mistakes. Every listing is checked before I show it to you.",
//     cta: "Ask about a property",
//     band: "bg-[var(--soft)]",
//     accent: "text-[#C8F169]",
//     bar: "bg-[#C8F169]",
//     items: [
//       { title: "Land and houses for sale", text: "Plots and homes in growing areas, with documents checked." },
//       { title: "Rentals", text: "Apartments for individuals and families." },
//       { title: "Property investment advice", text: "Where to buy, what to expect and how to plan." },
//     ],
//     // images: [{ src: "/images/estate-1.jpg", alt: "Describe the property" }],
//     // flier: { src: "/images/estate-flier.jpg", alt: "Flier: ...", width: 1080, height: 1350 },
//   },
//   {
//     id: "crypto",
//     title: "Crypto",
//     blurb:
//       "Trade your digital assets with a fast, reliable exchange that is open 24 hours a day, with rates you’ll like.",
//     cta: "Trade with me",
//     band: "bg-[var(--bg)]",
//     accent: "text-[#9DBBFF]",
//     bar: "bg-[#9DBBFF]",
//     items: [
//       { title: "Bitcoin, Ethereum and Tether (USDT)", text: "Buy and sell the major digital assets." },
//       { title: "PayPal, Zelle, CashApp and Venmo", text: "Trade your payment-app balances." },
//       { title: "Gift cards", text: "Turn your gift cards into cash." },
//       { title: "Open 24 hours", text: "Fast, reliable and sweet rates, any time of day." },
//     ],
//     flier: {
//       src: "/images/crypto-flier.jpg",
//       alt: "Thompson Exchange flier: trade Bitcoin, Ethereum, Tether, PayPal, Zelle, CashApp, Venmo and gift cards, 24 hours a day",
//       width: 1080,
//       height: 1080,
//     },
//   },
//   {
//     id: "shoes",
//     title: "Sneakers",
//     blurb:
//       "Trendy sneakers from Shoebox, plus premium men’s shirts and polos from F3RNS. Message me what you’re looking for and I’ll send photos, sizes and prices.",
//     cta: "Shop now",
//     band: "bg-[var(--soft)]",
//     accent: "text-[#FF9A73]",
//     bar: "bg-[#FF9A73]",
//     items: [
//       { title: "Sneakers", text: "From classic kicks to the latest pairs, with comfort and quality." },
//       { title: "Shirts and polos", text: "Premium men’s wear from F3RNS." },
//       { title: "Delivery", text: "Within Lagos and to other states." },
//     ],
//     flier: {
//       src: "/images/shoes-flier.jpg",
//       alt: "Shoebox x F3RNS flier: trendy sneakers and premium men’s shirts and polos",
//       width: 1080,
//       height: 1080,
//     },
//   },
// ];
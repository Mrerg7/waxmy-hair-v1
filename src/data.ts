export const SITE = "https://waxmy.hair";
export const DOMAIN = "waxmy.hair";
export const BRAND = "Desert Rich";
export const SALES = "sales@desertrich.com";
export const VERIFY = "cBnSviQzySwpp5fM6WMygbjJbYPJQptKFn2U0jY2AYs";

export const nav = [
  { href: "/why", label: "Why this name" },
  { href: "/uses", label: "Uses" },
  { href: "/guide", label: "Guide" },
  { href: "/faq", label: "FAQ" },
];

export const facts = [
  { label: "String", value: "waxmy + .hair" },
  { label: "Phrase", value: "wax my hair" },
  { label: "Fit", value: "Studios, kits, booking" },
  { label: "Close", value: "Escrow or direct" },
];

export const reasons = [
  {
    title: "People already say it",
    body: "“Wax my hair” is a request, not a coined brand. A client can repeat it after hearing it once, and a receptionist can spell it.",
  },
  {
    title: "The words are in the name",
    body: "The string holds wax and hair together. That does not buy rankings. It does make the name match the search a buyer hopes to earn later.",
  },
  {
    title: "One spelling",
    body: "There is no plural, no hyphen fight, and no second .hair with this exact phrase. The name is either yours or it is not.",
  },
  {
    title: "The extension is the aisle",
    body: ".hair puts the name in the category before the logo loads. Useful for a studio, a kit line, or a booking brand that does not want a generic .com scramble.",
  },
  {
    title: "It can stay small or widen",
    body: "A single-room studio can wear it. So can a kit brand, a training channel, or a marketplace that books waxing. The tone is direct, not clinical.",
  },
  {
    title: "Transfer is ordinary",
    body: "This is a domain acquisition, not a franchise. Terms, then an auth-code transfer. Escrow.com is welcome if you want a third party holding funds.",
  },
];

export const phrases = ["wax my hair", "hair waxing", "wax hair removal", "my hair wax"];

export const uses = [
  {
    id: "salon",
    label: "Salon",
    title: "Studio or small chain",
    body: "A front-desk name that sounds like the appointment. Works on a window, a booking link, and a Google Business Profile.",
  },
  {
    id: "kits",
    label: "Kits",
    title: "At-home wax and aftercare",
    body: "Hard wax, strips, and oil as a product line. The name tells a shopper what the box is for without a tagline.",
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "On-call or suite service",
    body: "“Come wax my hair” is the job. The domain reads like the text a client would send.",
  },
  {
    id: "booking",
    label: "Booking",
    title: "A place to book the service",
    body: "A directory or studio software front door. Friendly enough for consumers, plain enough for pros.",
  },
  {
    id: "lessons",
    label: "Lessons",
    title: "Training and how-to",
    body: "A school, a channel, or a course about technique. The phrase is already the lesson title.",
  },
  {
    id: "brand",
    label: "Brand",
    title: "A wider grooming label",
    body: "Start with waxing, then brow, body, and aftercare. The name stays human if the line grows.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Write",
    body: "Send an offer or ask for the range. Include who you are and how you plan to use the name. Serious notes get a reply.",
  },
  {
    n: "02",
    title: "Agree",
    body: "Price, timeline, and whether funds sit with escrow. Nothing is charged on this site.",
  },
  {
    n: "03",
    title: "Transfer",
    body: "You receive the auth code and move the name at your registrar. Typical pushes finish in a few days, not a quarter.",
  },
];

export const faqs = [
  {
    q: "Is waxmy.hair for sale?",
    a: "Yes. The domain is available for acquisition. This website is the sales page. It is not a waxing studio and it does not take appointments.",
  },
  {
    q: "What is the price?",
    a: "Price is on request. Send a number or ask for the range. Terms can be a single payment. Escrow is available for qualified buyers.",
  },
  {
    q: "What do I actually receive?",
    a: "The domain name, transferred to the registrar account you control. You do not receive a built website, a customer list, a trademark, or a promise of search rankings.",
  },
  {
    q: "How does payment work?",
    a: "Not on this page. After terms are agreed, buyers may pay directly or through an escrow service such as Escrow.com. Do not wire anyone who is not confirmed in the thread with sales@desertrich.com.",
  },
  {
    q: "How long does a transfer take?",
    a: "Most .hair transfers complete within a few days after the auth code is issued and you approve it. Your registrar’s lock and any 60-day rule after a recent change can add time.",
  },
  {
    q: "Will the name rank by itself?",
    a: "No. An exact phrase helps people remember and type the brand. Rankings still depend on the site, the location, and the reputation you build after you own it.",
  },
  {
    q: "Can I use it outside hair removal?",
    a: "You can point it anywhere the registry allows. It is a poor fit for unrelated industries. The value is the phrase, and the phrase is about waxing hair.",
  },
  {
    q: "Who is selling it?",
    a: "Desert Rich, via sales@desertrich.com. Inquiries on this site open an email draft. The form is not stored on a server.",
  },
];

export function pageTitle(page = "") {
  if (!page) return `${DOMAIN} | Premium Domain for Sale | ${BRAND}`;
  return `${page} | ${DOMAIN} | Premium Domain for Sale | ${BRAND}`;
}

export const homeDescription =
  "waxmy.hair is for sale. Exact phrase for hair waxing, price on request, escrow welcome. Make an offer to Desert Rich at sales@desertrich.com.";

export const blankMailto = `mailto:${SALES}?subject=${encodeURIComponent("Acquisition Inquiry - waxmy.hair")}&body=${encodeURIComponent("Hello,\n\nI am interested in acquiring waxmy.hair.\n\nPlease share the asking range and next steps.\n\nBest regards,\n")}`;

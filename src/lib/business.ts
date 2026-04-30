// Single source of truth for FACELINES Beauty Studio business data.
// All confirmed by the studio owner (April 2026).

export const BUSINESS = {
  name: "FACELINES Beauty Studio",
  shortName: "FACELINES",
  tagline: "Beauty Studio · Auburn / Kent",
  founder: {
    name: "Ekaterina Belousova",
    role: "Founder & Lead Artist",
  },
  address: {
    line: "14 S Division St",
    cityStateZip: "Auburn, WA 98001",
    city: "Auburn",
    region: "WA",
    postal: "98001",
    country: "US",
  },
  serviceAreas: [
    "Auburn",
    "Kent",
    "Renton",
    "Tukwila",
    "Federal Way",
    "Seattle Area",
  ],
  phone: "(253) 294-8854",
  phoneTel: "+12532948854",
  email: "facelinesbeautystudio@gmail.com",
  instagram: {
    handle: "@facelines_studio",
    url: "https://www.instagram.com/facelines_studio",
  },
  vagaroProfile: "https://www.vagaro.com/facelinesbeautystudio",
  vagaroBook: "https://www.vagaro.com/facelinesbeautystudio/services",
  googleMaps:
    "https://www.google.com/maps/place/Facelines+Beauty+Studio/@47.306782,-122.2296791,17z",
  geo: { lat: 47.306782, lng: -122.2296791 },
  googleRating: 4.7,
  hours: [
    { day: "Sunday", open: null, close: null, label: "Closed" },
    { day: "Monday", open: "09:00", close: "19:00" },
    { day: "Tuesday", open: "09:00", close: "19:00" },
    { day: "Wednesday", open: "09:00", close: "19:00" },
    { day: "Thursday", open: "09:00", close: "19:00" },
    { day: "Friday", open: "09:00", close: "19:00" },
    { day: "Saturday", open: "09:00", close: "18:00" },
  ] as const,
  hoursSummary: "Mon–Fri 9:00–19:00 · Sat 9:00–18:00 · Sun closed",
  languages: ["English", "Русский", "Українська"],
  payments: [
    "Cash",
    "Visa",
    "MasterCard",
    "American Express",
    "Discover",
    "Apple Pay",
    "Google Pay",
  ],
  amenities: [
    "Free parking",
    "Walk-ins welcome",
    "Kid friendly",
    "WiFi",
  ],
  cancellationPolicy:
    "24-hour notice required. Late cancellations or no-shows are charged 50% of the service cost.",
};

export const SERVICES = [
  {
    slug: "permanent-makeup",
    title: "Permanent Makeup",
    priceFrom: 150,
    short:
      "Our signature service — natural powder brows and eyelash line enhancement. Wake up polished every day.",
    includes: [
      "Powder brows",
      "Eyelash line enhancement",
      "Touch-up appointment",
    ],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    priceFrom: 40,
    short:
      "Medical-grade laser hair removal at competitive Seattle-area rates.",
    includes: [
      "Consultation & skin assessment",
      "Medical-grade laser device",
      "Aftercare guidance",
    ],
  },
  {
    slug: "laser-tattoo-removal",
    title: "Laser Tattoo Removal",
    priceFrom: 100,
    priceNote: "consultation",
    short:
      "Safe, gradual tattoo fading with professional laser technology.",
    includes: [
      "Personal evaluation",
      "Multi-session plan",
      "Healing & aftercare support",
    ],
  },
  {
    slug: "russian-manicure",
    title: "Russian Manicure & Nails",
    priceFrom: 55,
    short:
      "Meticulous Russian-technique manicures for flawless, long-lasting nails.",
    includes: [
      "Russian-technique manicure",
      "Gel & long-wear options",
      "Pedicure available",
    ],
  },
  {
    slug: "skincare",
    title: "Skincare",
    priceFrom: 80,
    short:
      "Personalized facial treatments to refresh, balance, and care for your skin.",
    includes: [
      "Skin consultation",
      "Cleansing & treatment",
      "Home-care guidance",
    ],
  },
  {
    slug: "lash-extensions",
    title: "Lash Extensions",
    priceFrom: 75,
    short:
      "Classic, hybrid, and volume lash sets — applied with precision for a soft, natural look.",
    includes: [
      "Classic, hybrid & volume sets",
      "Lash lift & tint",
      "Refills available",
    ],
  },
  {
    slug: "makeup",
    title: "Makeup",
    priceFrom: 120,
    short:
      "Professional makeup for events, photoshoots, and special occasions.",
    includes: [
      "Event & bridal makeup",
      "Soft glam & natural looks",
      "Trial sessions on request",
    ],
  },
  {
    slug: "eyebrows",
    title: "Eyebrows",
    priceFrom: 20,
    short:
      "Brow shaping, tinting, and lamination for clean, defined, everyday-ready brows.",
    includes: [
      "Brow shaping",
      "Tinting & lamination",
      "Henna brows",
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    priceFrom: 10,
    short:
      "Gentle face and body waxing for silky-smooth, refreshed skin.",
    includes: [
      "Face waxing",
      "Body waxing",
      "Sensitive-skin formulas",
    ],
  },
];

export const REVIEWS = [
  {
    name: "Liana Avakimova",
    rating: 5,
    when: "5 months ago",
    text: "I had such a wonderful experience here. The salon is spotless and cozy, everyone is very welcoming, and the quality of work is truly impressive. My gel manicure turned out perfect, and my permanent makeup was done with so much care and precision. I feel so confident with my eyebrows now! Definitely coming back.",
  },
  {
    name: "Ava, Anna & Elijah",
    rating: 5,
    when: "3 months ago",
    text: "I've been getting a Russian manicure here for a while now. Love it every time! Irina always does an awesome job! She shapes my nails to the gods and they honestly last me for about 6 weeks. Love this cozy little spot!",
  },
  {
    name: "Macey Tursunova",
    rating: 5,
    when: "10 months ago",
    text: "I've had such a great experience here! After just 4 sessions of laser therapy (with Kate), I've seen amazing results, way better than I expected. The staff is professional, kind, and makes you feel completely comfortable. The place is super clean and well-organized too. Highly recommend if you're considering laser hair removal!",
  },
  {
    name: "Arina Opeshko",
    rating: 5,
    when: "1 year ago",
    text: "I recommend this salon. I have been visiting for a year and the service is always top notch. I do pedicure and laser hair removal. The staff is friendly and attentive.",
  },
];

// Maps internal hours array to schema.org openingHoursSpecification
export const openingHoursSchema = BUSINESS.hours
  .filter((h) => h.open && h.close)
  .map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${h.day}`,
    opens: h.open,
    closes: h.close,
  }));

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: BUSINESS.name,
  image: "https://facelinesbeautystudio.com/og-image.jpg",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  url: "https://facelinesbeautystudio.com/",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.line,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postal,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  areaServed: BUSINESS.serviceAreas,
  openingHoursSpecification: openingHoursSchema,
  sameAs: [
    BUSINESS.instagram.url,
    BUSINESS.vagaroProfile,
    BUSINESS.googleMaps,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.googleRating,
    ratingCount: 4,
  },
  paymentAccepted: BUSINESS.payments.join(", "),
  knowsLanguage: ["en", "ru", "uk"],
};

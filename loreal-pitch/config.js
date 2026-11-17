/*
  ChatGPT Ads x Sampling: L'Oréal pitch (Kérastase, CeraVe, L'Oréal Professionnel).

  Same deck as ../sampling-pitch, with three real L'Oréal brands. Logos, site icons and pack shots
  in assets/brands/ come from the brands' own India websites (kerastase.in, ceraveindia.com,
  lorealprofessionnel.in). They are L'Oréal trademarks and copyrighted images, used here only to
  pitch L'Oréal. Product claims in the ads are taken from the packs and the brands' India sites.

  Per scenario:
    brand, colour, product, domain  -> ad card, microsite, notification
    image, imageBg                  -> real pack shot and its background colour
    favicon                         -> real site icon shown in the ad's advertiser row
    logo, logoHeight, headerLight   -> real logo in the microsite header (headerLight = white header)
    query, answer                   -> what she asks and what the AI says (keep it brand-neutral)
    headline (max 32), description (max 54): Ads Manager's limits (walkthrough step 15).
                                      The ad has no button, so put the free offer in the headline.
    questions                       -> 3 qualifying questions, options, and which option gets tapped

  Copy rules: no em dashes, no medical wording, nothing that targets under-18s.
*/
window.DEMO = {
  setupTime: "15 minutes",
  contact: "hello@freestand.in",

  logo: "assets/freestand-logo.png",
  logoWhite: "assets/freestand-logo-white.png",

  // Slide 5 links to the Kérastase campaign walkthrough in this repo. Set to null if the deck is hosted on its own.
  walkthrough: { back: null, full: "../kerastase-sampling.html#s1" },

  // Slide 4, "Zero-waste targeting"
  copy: { zeroWaste: "She told you her hair type or skin concern before the sample ships." },

  network: "Jio",

  persona: {
    name: "Priya S.",
    first: "Priya",
    age: "28",
    email: "priya@example.com",
    phone: "98XXX XXX21",
    otp: "482916",
    flat: "Flat 12B, Sea Breeze Apartments",
    area: "Bandra West",
    city: "Mumbai",
    pin: "400050"
  },

  notification: "Hi {first}, your {brand} sample has been dispatched. We will check in after you try it.",

  pitch: {
    scenario: "kerastase",
    question: "What serum should I use for weak hair that breaks easily?",
    answer: [
      { p: "Hair that breaks easily needs strength at the root and gentler handling:" },
      { li: [
        "**Serum:** a fortifying scalp serum, massaged into a clean scalp daily.",
        "**Washing:** detangle gently with a wide-tooth comb while hair is wet.",
        "**Styling:** lower the heat settings and skip tight ponytails."
      ] }
    ]
  },

  order: ["kerastase", "cerave", "lorealpro"],

  scenarios: {
    kerastase: {
      tab: "Kérastase",
      brand: "Kérastase", colour: "#161616", product: "Genesis serum",
      domain: "sample.kerastase.in", glyph: "drop",
      image: "assets/brands/kerastase-genesis-serum.jpg", imageBg: "#F5F7F2",
      favicon: "assets/brands/kerastase-favicon.png",
      logo: "assets/brands/kerastase-logo-white.png", logoHeight: 26,
      query: "serum for weak hair that breaks easily",
      answer: [
        { p: "Hair that snaps easily usually needs strength at the root and less stress on the lengths. A few things help:" },
        { li: [
          "**Use a fortifying scalp serum.** Apply it to a clean scalp daily and massage it in, rather than putting it on the lengths.",
          "**Be gentle when it is wet.** Hair is weakest when wet, so detangle with a wide-tooth comb from the ends up.",
          "**Cut back on heat.** Lower the dryer and straightener settings, and use a heat protectant.",
          "**Loosen tight styles.** Tight ponytails and buns pull at the root over time."
        ] },
        { p: "Give any new routine six to eight weeks before you judge it." }
      ],
      headline: "Free Kérastase Genesis sample",
      description: "Fortifying scalp serum for hair prone to breakage.",
      questions: [
        { q: "Hair type?", options: ["Fine", "Medium", "Thick", "Curly"], pick: 1 },
        { q: "What bothers you most?", options: ["Breakage", "Split ends", "Dryness", "Frizz"], pick: 0 },
        { q: "Where do you usually buy hair care?", options: ["My salon", "Online stores", "Beauty store", "Pharmacy"], pick: 0 }
      ]
    },

    cerave: {
      tab: "CeraVe",
      brand: "CeraVe", colour: "#0070CE", product: "Moisturising Cream",
      domain: "sample.ceraveindia.com", glyph: "drop",
      image: "assets/brands/cerave-moisturising-cream.jpg", imageBg: "#FFFFFF",
      favicon: "assets/brands/cerave-favicon.png",
      logo: "assets/brands/cerave-logo.svg", logoHeight: 26, headerLight: true,
      query: "best moisturiser for very dry skin this winter",
      answer: [
        { p: "Winter air pulls moisture out of the skin fast, so very dry skin needs a richer cream that supports the skin barrier." },
        { li: [
          "**Look for ceramides.** They are part of the skin's natural barrier and help it hold on to moisture.",
          "**Add a humectant.** Hyaluronic acid or glycerin draws water into the skin.",
          "**Go fragrance-free.** Fragrance can feel harsh on skin that already feels tight.",
          "**Apply on damp skin.** Right after a bath, then again before bed."
        ] },
        { p: "Keep showers short and lukewarm, since hot water strips natural oils." }
      ],
      headline: "Free CeraVe Moisturising Cream",
      description: "With 3 essential ceramides and hyaluronic acid.",
      questions: [
        { q: "Skin type?", options: ["Dry", "Very dry", "Combination", "Normal"], pick: 1 },
        { q: "Biggest concern?", options: ["Tightness", "Flaky patches", "Dullness", "Rough texture"], pick: 0 },
        { q: "Where do you usually buy skincare?", options: ["Pharmacy", "Online stores", "Beauty store", "Supermarket"], pick: 0 }
      ]
    },

    lorealpro: {
      tab: "L'Oréal Pro",
      brand: "L'Oréal Professionnel", colour: "#111111", product: "Absolut Repair shampoo",
      domain: "sample.lorealprofessionnel.in", glyph: "drop",
      image: "assets/brands/loreal-pro-absolut-repair-shampoo.png", imageBg: "#FFFFFF",
      favicon: "assets/brands/loreal-pro-favicon.png",
      logo: "assets/brands/loreal-pro-logo-white.png", logoHeight: 30,
      query: "salon shampoo for dry damaged hair after colouring",
      answer: [
        { p: "Colouring and heat lift the hair's outer layer, which is why it starts to feel dry and rough. A repairing routine helps:" },
        { li: [
          "**Use a repairing shampoo.** Look for proteins and lipids that smooth rough, damaged spots along the hair.",
          "**Condition every wash.** Focus on the mid-lengths and ends, where damage builds up.",
          "**Add a weekly mask.** Leave it on for five to ten minutes for a deeper treatment.",
          "**Protect from heat.** Use a heat protectant and keep tools off the highest setting."
        ] },
        { p: "Rinsing with cool water also helps colour last longer." }
      ],
      headline: "Free Absolut Repair shampoo",
      description: "Protein and Omega-9 for dry, damaged hair.",
      questions: [
        { q: "Is your hair coloured?", options: ["Yes, regularly", "Sometimes", "Highlights only", "No"], pick: 0 },
        { q: "Biggest concern?", options: ["Dryness", "Breakage", "Dullness", "Frizz"], pick: 0 },
        { q: "Where do you get salon products?", options: ["My salon", "Online stores", "Beauty store", "Supermarket"], pick: 0 }
      ]
    }
  },

  // Slide 1 background feed: skin and hair questions only
  feedQueries: [
    "serum for weak hair that breaks easily",
    "best moisturiser for very dry skin this winter",
    "salon shampoo for dry damaged hair after colouring",
    "moisturiser for oily skin in Mumbai humidity",
    "light makeup for a day sangeet under ₹2000",
    "sunscreen with no white cast on brown skin",
    "shampoo for hard water in Bengaluru",
    "lipstick shade for dusky skin, for office",
    "kajal that doesn't smudge in humid weather",
    "best face wash for oily skin under ₹500",
    "hair oil for dry ends, coconut or argan?",
    "body lotion for Delhi winters",
    "matte foundation that lasts all day",
    "conditioner for curly hair that isn't heavy",
    "lip balm that actually works in winter",
    "heat protectant before straightening hair",
    "vitamin C serum for dull skin, worth it?",
    "night cream in your 30s, what to look for",
    "perfume under ₹1500 that lasts a wedding",
    "hair mask after a keratin treatment",
    "how to stop frizz after monsoon",
    "ceramide cream or hyaluronic acid serum?",
    "best hair serum for colour-treated hair",
    "is a scalp serum worth it?",
    "what shampoo do salons actually use?",
    "fragrance-free cream for sensitive skin",
    "how often should I use a hair mask?",
    "gentle cleanser for dry skin in winter",
    "bond repair or protein treatment?",
    "deodorant that lasts a Chennai summer"
  ]
};

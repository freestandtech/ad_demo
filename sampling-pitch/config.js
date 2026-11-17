/*
  ChatGPT Ads x Sampling demo: everything brand-specific lives here.

  To pitch a real prospect, edit one scenario (or all four):
    brand, colour, product, domain  -> ad card, microsite, product pack, notification
    pack                            -> drawn SVG pack shape: "tub" | "bag" | "pouch" | "bottle"
    glyph                           -> favicon shape: "leaf" | "paw" | "fish" | "drop"
    image, imageBg                  -> optional real pack shot in assets/ (replaces the drawn pack) and its background colour
    favicon                         -> optional real site icon for the ad's advertiser row (replaces the glyph)
    logo, logoHeight, headerLight   -> optional real logo for the microsite header; headerLight = white header for a dark logo
    query, answer                   -> what she asks and what the AI says (keep it brand-neutral)
    headline (max 32), description (max 54): Ads Manager's limits (walkthrough step 15).
                                      The ad has no button, so put the free offer in the headline.
    questions                       -> 3 qualifying questions, options, and which option gets tapped

  Copy rules: no em dashes, no medical wording, nothing that targets under-18s.
*/
window.DEMO = {
  setupTime: "15 minutes",
  contact: "hello@freestand.in",

  // FreeStand logo. If a file is missing, the demo shows a placeholder card instead.
  logo: "assets/freestand-logo.png",
  logoWhite: "assets/freestand-logo-white.png",

  // Links into the Ads Manager walkthrough this pitch extends (set to null when hosting the pitch on its own).
  // "back": where Back goes from the very first build. "full": the link on slide 5.
  walkthrough: { back: "../index.html#s17", full: "../index.html#s1" },

  // Phone status bar
  network: "Jio",

  // Clearly fake sampler used on every scenario
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

  // {first} and {brand} are filled in per scenario
  notification: "Hi {first}, your {brand} sample has been dispatched. We will check in after you try it.",

  // Slide 2 uses one scenario's ad card with a shorter answer
  pitch: {
    scenario: "dog",
    question: "What should I feed my 3 month old lab puppy?",
    answer: [
      { p: "A 3 month old Labrador grows fast, so aim for steady, balanced growth:" },
      { li: [
        "**Food:** a large-breed puppy formula, not adult food.",
        "**Meals:** three to four small portions a day, as per the pack's chart.",
        "**Changes:** switch foods slowly over a week, with fresh water always out."
      ] }
    ]
  },

  // Slide 3 tab order
  order: ["skin", "dog", "cat", "hair"],

  scenarios: {
    skin: {
      tab: "Skin",
      brand: "GlowLeaf", colour: "#2E8B6E", product: "Gel Moisturiser",
      domain: "sample.glowleaf.in", pack: "tub", glyph: "leaf",
      query: "best moisturiser for oily skin in Mumbai humidity",
      headline: "Free GlowLeaf moisturiser sample",
      description: "Non-sticky hydration for humid days, delivered free.",
      answer: [
        { p: "In Mumbai's humidity, oily skin usually does best with a light, water-based layer rather than a rich cream." },
        { li: [
          "**Pick a gel texture.** Gel or water-based moisturisers sink in fast and do not feel heavy.",
          "**Look for non-comedogenic.** It means the formula is designed not to clog pores.",
          "**Useful ingredients.** Niacinamide for shine control, hyaluronic acid for oil-free hydration.",
          "**Keep it to one thin layer.** Apply on damp skin morning and night, with SPF in the day."
        ] },
        { p: "Give any new moisturiser about two weeks in the same weather before you judge it." }
      ],
      questions: [
        { q: "Skin type?", options: ["Oily", "Combination", "Normal", "Dry"], pick: 0 },
        { q: "Biggest concern?", options: ["Shine by noon", "Large pores", "Dullness", "Uneven tone"], pick: 0 },
        { q: "Where do you usually buy skincare?", options: ["Online stores", "Pharmacy", "Beauty store", "Supermarket"], pick: 0 }
      ]
    },

    dog: {
      tab: "Dog",
      brand: "Tailwell", colour: "#C8102E", product: "Puppy Starter Kit",
      domain: "sample.tailwell.in", pack: "bag", glyph: "paw",
      query: "what should I feed my 3 month old lab puppy",
      headline: "Free Tailwell puppy starter kit",
      description: "Complete nutrition for growing large-breed pups.",
      answer: [
        { p: "At 3 months, a Labrador is growing fast, so the goal is steady, balanced growth rather than quick weight gain." },
        { li: [
          "**Choose a large-breed puppy food.** It is balanced for how big breeds grow.",
          "**Three to four small meals a day.** Split the daily portion and keep meal times regular.",
          "**Follow the pack's feeding chart.** Adjust by body shape: you should feel the ribs, not see them.",
          "**Fresh water, always.** Skip chocolate, grapes, onions and cooked bones."
        ] },
        { p: "Switch foods gradually over about a week by mixing old and new." }
      ],
      questions: [
        { q: "Puppy's age?", options: ["Under 3 months", "3 to 6 months", "6 to 12 months", "Over a year"], pick: 1 },
        { q: "What does he eat today?", options: ["Dry kibble", "Home-cooked", "Wet food", "A mix"], pick: 1 },
        { q: "Which shop do you trust?", options: ["Local pet shop", "Online pet store", "Vet clinic", "Supermarket"], pick: 0 }
      ]
    },

    cat: {
      tab: "Cat",
      brand: "Purrfect Bowl", colour: "#6B2C91", product: "Wet Food Trial Pack",
      domain: "sample.purrfectbowl.in", pack: "pouch", glyph: "fish",
      query: "my cat ignores dry food, what should I try",
      headline: "Free wet food for fussy cats",
      description: "Tender chunks in gravy. A free trial pack, delivered.",
      answer: [
        { p: "Plenty of cats lose interest in dry food, especially fussy eaters. A few changes usually help." },
        { li: [
          "**Try wet food.** The aroma and texture are more tempting, and it adds to her daily water intake.",
          "**Test textures.** Some cats prefer pâté, others chunks in gravy. Offer one at a time.",
          "**Serve at room temperature.** Food straight from the fridge smells less inviting.",
          "**Switch slowly.** Mix a little into the current food and increase it over 7 to 10 days."
        ] },
        { p: "Keep the bowl clean and shallow, with fresh water nearby." }
      ],
      questions: [
        { q: "Cat's age?", options: ["Kitten", "1 to 7 years", "7 years plus"], pick: 1 },
        { q: "What does she eat today?", options: ["Dry food only", "Mostly dry", "Home food", "A mix"], pick: 0 },
        { q: "Which shop do you trust?", options: ["Online pet store", "Local pet shop", "Supermarket", "Vet clinic"], pick: 0 }
      ]
    },

    hair: {
      tab: "Hair",
      brand: "Silkroot", colour: "#B5651D", product: "Anti-Frizz Serum",
      domain: "sample.silkroot.in", pack: "bottle", glyph: "drop",
      query: "serum for frizzy hair after monsoon",
      headline: "Free anti-frizz serum sample",
      description: "Smooths monsoon frizz without the grease.",
      answer: [
        { p: "Monsoon humidity lifts the outer layer of the hair, which is what makes it frizz. A light serum helps seal it back down." },
        { li: [
          "**Go lightweight.** Argan or other light oils, or a silicone blend that does not weigh hair down.",
          "**Apply on damp hair.** Two or three drops, mid-lengths to ends only, never at the roots.",
          "**Dry gently.** A microfibre towel or cotton T-shirt causes less frizz than a rough towel.",
          "**Wash smart.** A mild, sulphate-free shampoo and conditioner keep the ends calmer."
        ] },
        { p: "Go easy on heat styling until the weather settles." }
      ],
      questions: [
        { q: "Hair type?", options: ["Straight", "Wavy", "Curly", "Coily"], pick: 1 },
        { q: "Biggest concern?", options: ["Frizz", "Dryness", "Flat hair", "Split ends"], pick: 0 },
        { q: "Where do you usually buy hair care?", options: ["Online stores", "Salon", "Beauty store", "Supermarket"], pick: 0 }
      ]
    }
  },

  // Slide 1 background feed. Real-sounding questions, cosmetic and pet care only.
  feedQueries: [
    "best moisturiser for oily skin in Mumbai humidity",
    "what should I feed my 3 month old lab puppy",
    "my cat ignores dry food, what should I try",
    "serum for frizzy hair after monsoon",
    "light makeup for a day sangeet under ₹2000",
    "is wet food better than dry food for persian cats",
    "sunscreen with no white cast on brown skin",
    "how often should I bathe my indie dog",
    "shampoo for hard water in Bengaluru",
    "lipstick shade for dusky skin, for office",
    "healthy treats for a beagle puppy",
    "kajal that doesn't smudge in humid weather",
    "best face wash for oily skin under ₹500",
    "how much should a 2 month old kitten eat",
    "hair oil for dry ends, coconut or argan?",
    "toy ideas for a bored indoor cat",
    "body lotion for Delhi winters",
    "which dry food for a golden retriever puppy",
    "matte foundation that lasts all day",
    "how do I stop my cat scratching the sofa",
    "conditioner for curly hair that isn't heavy",
    "gentle shampoo for a shih tzu",
    "lip balm that actually works in winter",
    "what to pack for a puppy's first car trip",
    "deodorant that lasts a Chennai summer",
    "heat protectant before straightening hair",
    "vitamin C serum for dull skin, worth it?",
    "cat litter that controls smell in a small flat",
    "night cream in your 30s, what to look for",
    "grooming kit for a long-haired cat",
    "perfume under ₹1500 that lasts a wedding",
    "best first food for a new kitten"
  ]
};

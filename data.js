// ============================================================
// data.js — all content for paul's personal archive
// ============================================================
// EDIT THIS FILE TO ADD CONTENT. The site reads it on every page load.
//
// Status values you can use on cards:
//   building | idea | paused | finished | planning | booked
//
// After editing: save, commit, push. GitHub Pages rebuilds in ~30 seconds.
// ============================================================

window.SITE_DATA = {

  // ----------------------------------------------------------
  // IDENTITY
  // ----------------------------------------------------------
  identity: {
    name: "Paul",
    bio: "Maths student at Imperial College London. This is where I track projects, trips, notes, and half-formed ideas while figuring out what I want to build next.",
    bioHighlight: "Imperial College London",
    typewriter: [
      "Curious by default. Uncertain by choice.",
      "Half-formed ideas. Fully-formed curiosity.",
      "Travelling outside. Travelling inside.",
      "Personal operating system, not a portfolio."
    ],
    email: "paul.zhang25@imperial.ac.uk",
    github: "Ambitrix",
    instagram: "" // leave empty to hide instagram link
  },

  // ----------------------------------------------------------
  // STATS BAR (intro page)
  // ----------------------------------------------------------
  stats: [
    { n: 16, l: "countries" },
    { n: 4,  l: "continents" },
    { n: 6,  l: "projects started" },
    { n: 2,  l: "projects finished" },
    { n: 43, l: "leetcode solved" },
    { n: 12, l: "notes written" }
  ],

  // ----------------------------------------------------------
  // DASHBOARD (intro page — three cards)
  // ----------------------------------------------------------
  dashboard: {
    currentFocus: [
      "Building coding projects",
      "Preparing for quant interviews",
      "Learning probability, algorithms, and markets",
      "Travelling when I get the chance"
    ],
    recently: [
      "Built this personal website",
      "Planned a Los Angeles route without a car",
      "Worked on market-making simulation ideas",
      "Practised quant probability questions"
    ],
    next: [
      "Add project cards",
      "Add trip logs and photos",
      "Build a coding progress tracker",
      "Write short notes on things I learn"
    ]
  },

  // ----------------------------------------------------------
  // TERMINAL — goals command output
  // ----------------------------------------------------------
  goals: [
    "Build 3 serious projects",
    "Get better at Python and algorithms",
    "Travel more intentionally",
    "Become sharper at probability and decision-making"
  ],

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  // To add: append a new {...} block to this array.
  // sections is a list of [label, value] pairs.
  projects: [
    {
      title: "Mini Orderbook Market Making Game",
      status: "building",
      meta: "started May 2026 · python / fastapi",
      sections: [
        ["why", "I wanted to understand market making through code, not just theory."],
        ["what it does", "Simulates a simple orderbook where bots quote bid and ask prices around a hidden fair value."],
        ["learned", "Fair-value estimation, inventory risk, spread setting, PnL calculation."],
        ["next step", "Better visualisation of trades and inventory over time."]
      ],
      tags: ["python", "fastapi", "microstructure", "simulation"]
    },
    {
      title: "Poker Bot",
      status: "idea",
      meta: "queued · probability / game theory",
      sections: [
        ["why", "Sits at the intersection of coding, probability, game theory, and decision-making under uncertainty."],
        ["scope", "Heads-up no-limit Texas Hold'em. Start with a rule-based bot, then layer in equity calculations and a simple opponent model."],
        ["next step", "Write the hand evaluator and a Monte Carlo equity function."]
      ],
      tags: ["python", "monte-carlo", "game-theory"]
    },
    {
      title: "Options Pricing Visualizer",
      status: "idea",
      meta: "queued · quant / interactive",
      sections: [
        ["why", "To turn Black-Scholes from a formula into something I can feel by dragging sliders."],
        ["what it does", "Live payoff and Greeks chart that reacts to spot, strike, volatility, time, and interest rate."],
        ["next step", "Pick stack — probably vanilla JS + Chart.js so it runs in the browser with no backend."]
      ],
      tags: ["javascript", "black-scholes", "greeks"]
    },
    {
      title: "LeetCode Progress Tracker",
      status: "building",
      meta: "started Apr 2026 · personal tool",
      sections: [
        ["why", "I want to see what I've actually covered vs. what I keep avoiding."],
        ["what it does", "Tracks problems by topic — Arrays, Two Pointers, Sliding Window, Stack, Binary Search, Trees, DP — with a heatmap of frequency vs. difficulty."],
        ["next step", "Backfill the last 43 problems from my history."]
      ],
      tags: ["python", "algorithms", "tracker"]
    },
    {
      title: "Personal Website",
      status: "building",
      meta: "started May 2026 · html / css / d3",
      sections: [
        ["why", "One place for projects, trips, notes, and unfinished ideas. A personal operating system, not a CV."],
        ["decisions", "Single-file site, dark theme, hash-routed tabs, interactive terminal, D3 globe for visited countries."],
        ["next step", "Wire up project screenshots and ship the first interactive lab tool."]
      ],
      tags: ["html", "css", "javascript", "d3"]
    },
    {
      title: "Travel Globe",
      status: "finished",
      meta: "May 2026 · d3 / topojson",
      sections: [
        ["why", "I wanted a visual that updates every time I get on a plane."],
        ["what it does", "Rotatable orthographic globe with visited countries highlighted by UN M49 code. Auto-rotates until you drag it."],
        ["learned", "D3 projections, drag interactions, lazy initialization (only loads when Travel tab opens)."]
      ],
      tags: ["d3", "topojson", "svg"]
    }
  ],

  // ----------------------------------------------------------
  // TRAVEL
  // ----------------------------------------------------------
  // visitedCountries powers BOTH the chips list and the globe highlight.
  // m49 = UN M49 numeric code (look up: github.com/topojson/world-atlas countries-110m feature `id`)
  // To add a country, append one entry.
  travel: {
    visitedCountries: [
      { flag: "🇨🇳", name: "China, PRC",   m49: "156" },
      { flag: "🇹🇼", name: "China, ROC",   m49: "158" },
      { flag: "🇯🇵", name: "Japan",        m49: "392" },
      { flag: "🇹🇭", name: "Thailand",     m49: "764" },
      { flag: "🇸🇬", name: "Singapore",    m49: "702" },
      { flag: "🇭🇰", name: "Hong Kong",    m49: "344" },
      { flag: "🇻🇳", name: "Vietnam",      m49: "704" },
      { flag: "🇦🇪", name: "UAE",          m49: "784" },
      { flag: "🇶🇦", name: "Qatar",        m49: "634" },
      { flag: "🇬🇧", name: "UK",           m49: "826" },
      { flag: "🇫🇷", name: "France",       m49: "250" },
      { flag: "🇨🇭", name: "Switzerland",  m49: "756" },
      { flag: "🇮🇹", name: "Italy",        m49: "380" },
      { flag: "🇬🇷", name: "Greece",       m49: "300" },
      { flag: "🇭🇺", name: "Hungary",      m49: "348" },
      { flag: "🇺🇸", name: "USA",          m49: "840" }
    ],

    // Past trips — each becomes a card.
    trips: [
      {
        title: "🇺🇸 Los Angeles, USA",
        badge: { class: "done", label: "8/10" },
        meta: "May 2026 · first time",
        sections: [
          ["theme", "GTA city views, public transport challenge, beaches, skyline."],
          ["route", "Union Station → Downtown → Hollywood → Griffith Observatory → Beverly Hills → Santa Monica → Venice Beach."],
          ["favourite", "The city from Griffith Observatory at golden hour."],
          ["transport", "Hard without a car, but possible with planning. Metro + buses + the occasional Lyft."],
          ["go again?", "Yes, but next time with a car."]
        ]
      }
    ],

    // Future trips — same shape, smaller cards.
    futureTrips: [
      {
        title: "🇫🇷 Paris",
        status: "planning",
        meta: "Eurostar weekend",
        sections: [
          ["why",      "Long overdue from London. Food and museums, not landmarks."],
          ["season",   "Spring or autumn."],
          ["must-see", "Musée d'Orsay, Marais walks, a proper boulangerie morning."]
        ]
      },
      {
        title: "🇪🇸 Barcelona",
        status: "idea",
        meta: "summer / shoulder season",
        sections: [
          ["why",      "Gaudí architecture and tapas crawls. Catalan coast."],
          ["must-see", "Sagrada Família, Park Güell, Gothic Quarter at night."]
        ]
      },
      {
        title: "🇺🇸 New York",
        status: "idea",
        meta: "finance trip pairing",
        sections: [
          ["why",    "Trading floor energy, walking the bridges, NYC pizza pilgrimage."],
          ["season", "Autumn — for Central Park colours."]
        ]
      },
      {
        title: "🇯🇵 Tokyo (again)",
        status: "planning",
        meta: "return trip",
        sections: [
          ["why",      "One trip wasn't enough. This time: outside the obvious wards."],
          ["must-see", "Yanaka, Shimokitazawa, a baseball game, a proper kissaten morning."]
        ]
      },
      {
        title: "🇨🇭 Switzerland ski trip",
        status: "idea",
        meta: "winter",
        sections: [
          ["why",        "I've passed through Swiss valleys but never properly skied them."],
          ["candidates", "Zermatt or Verbier."]
        ]
      },
      {
        title: "🇺🇸 California road trip",
        status: "idea",
        meta: "PCH",
        sections: [
          ["why",   "The LA trip taught me a car changes everything."],
          ["route", "SF → Big Sur → SLO → Santa Barbara → LA."]
        ]
      },
      {
        title: "🇸🇬 SG & 🇭🇰 HK finance trip",
        status: "idea",
        meta: "career detour",
        sections: [
          ["why", "See the two Asian finance hubs back-to-back. Hawker food, observation decks, late-night skylines."]
        ]
      }
    ]
  },

  // ----------------------------------------------------------
  // LAB — mini experiments / ideas
  // ----------------------------------------------------------
  lab: [
    { title: "Random Walk Simulator",        status: "idea", meta: "1D and 2D · canvas",
      description: "Drop a particle, take steps, plot the path. Slider for step count, drift, and reflection at boundaries." },
    { title: "Probability Problem Visualizer", status: "idea", meta: "interview classics",
      description: "Pick a classic — Monty Hall, gambler's ruin, secretary problem — and let me run 10,000 trials live to see the answer emerge." },
    { title: "Poker EV Calculator",          status: "idea", meta: "heads-up",
      description: "Enter pot, bet size, hand range, opponent range. Out comes equity, EV, and the break-even calling frequency." },
    { title: "Options Payoff Chart",         status: "idea", meta: "live sliders",
      description: "Build any payoff diagram by stacking calls and puts. Drag strikes around and watch the line bend." },
    { title: "City Route Planner",           status: "idea", meta: "walking-first",
      description: "Drop pins on a map; get back an order that minimises walking + transit time. Born from the LA trip." },
    { title: "Study Timer + Habit Tracker",  status: "idea", meta: "personal",
      description: "Pomodoro + a heatmap of which topics actually got time this week." },
    { title: "Simple Trading Game",          status: "idea", meta: "market making lite",
      description: "You quote a bid/ask on a random walk. PnL after N rounds. Tests intuition before code." },
    { title: "Monte Carlo Simulator",        status: "idea", meta: "general purpose",
      description: "Paste a distribution and a function; out comes a histogram and confidence interval. The Swiss-army knife for the other lab tools." }
  ],

  // ----------------------------------------------------------
  // NOTES — categorised
  // ----------------------------------------------------------
  // Each note: { title, body, draft (optional string shown in small text) }
  // Set body to "" if it's pure draft.
  notes: {
    quant: [
      { title: "Expected value",      body: "The probability-weighted average of every outcome. Useful when you remember it ignores variance." },
      { title: "Random walk",         body: "Position is the cumulative sum of i.i.d. steps. Variance grows linearly in time, std-dev with √t. Most \"obvious\" intuitions about it are wrong." },
      { title: "Gambler's ruin",      body: "With a finite bankroll vs. an infinite house, you go broke with probability one. Even at fair odds." },
      { title: "Market making",       body: "Quote a tight two-sided market. Profit from the spread, lose on adverse selection and inventory drift.", draft: "// draft — expand once Orderbook game is further" },
      { title: "Options basics",      body: "A call is a right to buy, a put a right to sell. Asymmetric payoff is the whole point." },
      { title: "Put-call parity",     body: "C − P = S − K·e^(−rT). If this breaks, there's an arbitrage. Most useful identity in the whole subject." },
      { title: "Delta hedging",       body: "Hold −Δ shares against a long option to neutralise first-order spot risk. You're then exposed to gamma and theta." }
    ],
    coding: [
      { title: "Two pointers",        body: "One pointer at each end, or one fast + one slow. Turns many O(n²) problems into O(n)." },
      { title: "Sliding window",      body: "Maintain a window and update O(1) per step instead of recomputing. Variable-size windows are the harder pattern." },
      { title: "Binary search",       body: "If the answer space is monotonic, binary-search it. Half the LeetCode \"hard\" tag is binary search in disguise." },
      { title: "Dynamic programming", body: "Find the recurrence first; the table is bookkeeping. Bottom-up vs. memoised top-down is a taste call." },
      { title: "Python tricks",       body: "collections.Counter, bisect, heapq, sorted(... key=). The few things worth memorising verbatim." },
      { title: "Project mistakes",    body: "Premature class hierarchy. Tests written after the bug, not before. README written last (or not at all)." }
    ],
    travel: [
      { title: "LA without a car",          body: "Possible but costly in time. Cluster things by district per day. Metro for big jumps, Lyft for last mile, walk between stops." },
      { title: "Best public transport routes", body: "Tokyo > London > HK > Singapore for density. Most US cities are not in this conversation." },
      { title: "Favourite cities so far",   body: "Tokyo for food + density. Switzerland-mountain-towns for quiet. LA for scale once you accept the car thing." },
      { title: "Airport tips",              body: "Lounge if >3h layover. Carry-on only for <5 days. Boarding pass screenshot before security." },
      { title: "Trip budgets",              body: "", draft: "// draft — tracking spend by category from next trip" }
    ],
    life: [
      { title: "Things I learned this month", body: "", draft: "// draft" },
      { title: "Currently obsessed with",   body: "Market making, Griffith Observatory views, and the question of whether to learn C++ before next summer." },
      { title: "Mistakes I keep making",    body: "Starting projects without writing the README. Saying yes to too many things in the same week. Buying books instead of finishing them." },
      { title: "Goals for the next 30 days", body: "Ship the Orderbook game v1. Push 20 more LeetCode problems. Write five real notes here." }
    ]
  },

  // ----------------------------------------------------------
  // TIMELINE — year-by-year
  // ----------------------------------------------------------
  timeline: [
    {
      year: "2026",
      items: [
        "Built personal website",
        "Started serious quant preparation",
        "Travelled in the US (LA, first time)",
        "Worked on coding and probability in earnest",
        "Planned more personal projects than I'll finish — that's fine"
      ]
    },
    {
      year: "2025",
      items: [
        "Started Mathematics at Imperial",
        "Explored finance internships",
        "Got interested in quant trading",
        "Built finance writing experience",
        "Joined events and trading simulations"
      ]
    }
  ],

  // ----------------------------------------------------------
  // TERMINAL — quotes shown by the `quote` command
  // ----------------------------------------------------------
  quotes: [
    "The opposite of curiosity is performance.",
    "Volatility is just movement we don't understand yet.",
    "Most things compound. Patience is the cheat code.",
    "Travel is just expensive evidence that the world is bigger than you thought."
  ]
};

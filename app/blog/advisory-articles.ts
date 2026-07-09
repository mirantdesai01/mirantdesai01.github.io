export type AdvisoryArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type AdvisoryArticle = {
  slug: string;
  section: "Perspectives" | "Industry Insights";
  title: string;
  description: string;
  date: string;
  readTime: number;
  tags: string[];
  intro: string[];
  sections: AdvisoryArticleSection[];
  closing: string;
};

export const conversationUrl = "https://calendly.com/desaimirant9/30min";

export const advisoryArticles: AdvisoryArticle[] = [
  {
    slug: "when-bookkeeping-is-not-enough",
    section: "Perspectives",
    title: "When Bookkeeping Is Not Enough: The Case for Fractional CFO Support",
    description:
      "How small and mid-sized businesses can recognize the gap between historical accounting and forward-looking financial leadership.",
    date: "July 9, 2026",
    readTime: 4,
    tags: ["Fractional CFO", "SMB Finance", "Financial Planning"],
    intro: [
      "Reliable bookkeeping is essential. It keeps the financial record organized, supports tax preparation, and helps leadership understand what has already happened. But growing businesses often reach a point where historical reporting is no longer enough.",
      "The next set of questions is more strategic. Can the company afford to hire? Which customers or services are most profitable? How much cash will be available in 90 days? What financial story should be presented to a lender, investor, board, or buyer?",
      "That is where fractional CFO advisory can provide meaningful leverage without requiring the fixed cost of a full-time executive hire.",
    ],
    sections: [
      {
        heading: "The finance gap many SMBs experience",
        paragraphs: [
          "Many business owners have a bookkeeper, CPA, or accounting firm in place, but still lack a clear view of the financial decisions ahead. The accounting record may be accurate, yet the business still needs forecasting, margin analysis, capital planning, and management reporting.",
          "A fractional CFO helps translate financial data into operating decisions. The role is not to replace the accounting function. It is to build on that foundation and create a forward-looking planning process.",
        ],
        bullets: [
          "Cash flow forecasting and runway visibility",
          "Budget-to-actual reporting and variance analysis",
          "Pricing, margin, and profitability review",
          "Capital planning for debt, equity, equipment, or expansion",
          "Board, lender, or investor-ready financial communication",
        ],
      },
      {
        heading: "Why the fractional model works",
        paragraphs: [
          "A full-time CFO may not be practical for a small or mid-sized business. The company may need senior finance judgment, but not 40 hours per week of executive capacity. A fractional arrangement aligns the level of support with the actual decision load.",
          "This gives leadership access to experienced financial guidance during planning cycles, growth decisions, lender conversations, acquisitions, pricing reviews, or periods of operational change.",
        ],
      },
      {
        heading: "What changes for leadership",
        paragraphs: [
          "The most important shift is moving from reactive reporting to proactive financial management. Instead of asking what happened last month, leadership can ask what is likely to happen next and what actions would improve the outcome.",
          "For many SMBs, that shift creates better conversations, cleaner priorities, and stronger confidence around major decisions.",
        ],
      },
    ],
    closing:
      "If your business has accurate records but still lacks clear financial direction, fractional CFO support may be the next practical step.",
  },
  {
    slug: "fractional-cfo-first-90-days",
    section: "Perspectives",
    title: "What a Fractional CFO Should Do in the First 90 Days",
    description:
      "A practical first-90-days framework for turning financial information into priorities, reporting, and decision support.",
    date: "July 9, 2026",
    readTime: 5,
    tags: ["Fractional CFO", "Finance Diagnostic", "Decision Support"],
    intro: [
      "The first 90 days of a fractional CFO engagement should create clarity quickly. The goal is not to produce a long list of disconnected analyses. The goal is to identify the decisions that matter, assess the financial information available, and establish a practical operating rhythm.",
      "For small and mid-sized businesses, this period often determines whether finance becomes a useful leadership function or remains a monthly reporting exercise.",
    ],
    sections: [
      {
        heading: "Days 1 to 30: Diagnose the financial position",
        paragraphs: [
          "The engagement should begin with a focused review of the company's financial statements, reporting cadence, cash position, revenue model, cost structure, and key operating drivers.",
          "This is also where leadership priorities need to be made explicit. A company preparing for expansion needs a different finance agenda than a company managing margin pressure, lender scrutiny, or cash constraints.",
        ],
        bullets: [
          "Review financial statements, reporting quality, and month-end timing",
          "Assess cash balance, working capital, debt obligations, and near-term commitments",
          "Identify the main decisions leadership expects finance to support",
          "Map the existing accounting, tax, payroll, and advisory relationships",
        ],
      },
      {
        heading: "Days 31 to 60: Build the planning foundation",
        paragraphs: [
          "Once the current position is understood, the next step is building the tools leadership needs to manage forward. This typically includes a cash flow forecast, a budget or rolling forecast, a concise KPI view, and a clear set of assumptions.",
          "The work should be practical. A model that no one uses is not a finance system. The best planning tools are simple enough to maintain and detailed enough to support decisions.",
        ],
      },
      {
        heading: "Days 61 to 90: Establish the decision cadence",
        paragraphs: [
          "The final phase should convert analysis into a repeatable management process. This may include a monthly financial review, lender or investor reporting package, scenario planning session, or leadership dashboard.",
          "By the end of 90 days, the business should have a clearer view of performance, risks, priorities, and the financial tradeoffs behind upcoming decisions.",
        ],
        bullets: [
          "Monthly management reporting",
          "Cash flow and scenario review",
          "Priority list for margin, pricing, hiring, or capital decisions",
          "Defined next steps for project-based or ongoing advisory support",
        ],
      },
    ],
    closing:
      "A strong first 90 days should leave leadership with sharper financial visibility and a practical cadence for making better decisions.",
  },
  {
    slug: "signs-you-need-fractional-cfo-support",
    section: "Perspectives",
    title: "Five Signs Your Business Is Ready for Fractional CFO Support",
    description:
      "How owners can recognize when the business needs CFO-level planning, reporting, and decision support.",
    date: "July 9, 2026",
    readTime: 4,
    tags: ["Fractional CFO", "Growth Planning", "Decision Support"],
    intro: [
      "Many businesses do not need a full-time CFO. They do, however, reach moments when financial decisions become too important to manage with basic reports, intuition, or one-off spreadsheet work.",
      "The question is not whether the company has accounting support. The question is whether leadership has the forward-looking financial visibility needed to make confident decisions.",
    ],
    sections: [
      {
        heading: "1. Cash flow surprises are becoming more frequent",
        paragraphs: [
          "If cash availability changes faster than leadership expects, the business likely needs a more disciplined forecasting process. A fractional CFO can help connect revenue timing, payroll, vendor payments, taxes, debt service, and working capital into a clearer cash view.",
          "The goal is to identify pressure points early enough to make thoughtful decisions rather than urgent ones.",
        ],
      },
      {
        heading: "2. Growth decisions lack a financial model",
        paragraphs: [
          "Hiring, opening a new location, investing in equipment, changing prices, or launching a new service should be supported by a clear view of expected return, required cash, risk, and timing.",
          "Fractional CFO support helps leadership test those decisions before committing resources.",
        ],
        bullets: [
          "Hiring plans",
          "Pricing changes",
          "New locations or service lines",
          "Debt or equipment financing",
          "Major vendor or inventory commitments",
        ],
      },
      {
        heading: "3. Reports explain the past but not the next move",
        paragraphs: [
          "Financial statements are necessary, but they are not always sufficient. Leadership also needs dashboards, variance analysis, scenario planning, and clear management narratives that connect performance to decisions.",
          "A fractional CFO can help convert monthly reporting into a useful operating rhythm.",
        ],
      },
      {
        heading: "4. Stakeholder conversations require better preparation",
        paragraphs: [
          "Lenders, investors, boards, buyers, partners, and senior hires often expect a clear financial story. If those conversations are approaching, the company may need better forecasts, assumptions, KPIs, and supporting analysis.",
        ],
      },
      {
        heading: "5. The owner is carrying too much of the finance function",
        paragraphs: [
          "When the owner is the only person connecting financial data to strategic decisions, finance can become a bottleneck. Fractional CFO support creates a more reliable decision process while preserving flexibility.",
        ],
      },
    ],
    closing:
      "If these signs are familiar, fractional CFO advisory can provide senior financial guidance at a level of support that fits the company's current stage.",
  },
  {
    slug: "better-forecasting-for-owner-decisions",
    section: "Perspectives",
    title: "Better Forecasting Helps Owners Make Better Decisions",
    description:
      "Why cash flow forecasting, scenario planning, and simple financial models matter for SMB leadership.",
    date: "July 9, 2026",
    readTime: 4,
    tags: ["Forecasting", "Cash Flow", "SMB Finance"],
    intro: [
      "Forecasting is not about predicting the future perfectly. It is about giving leadership a structured way to evaluate what could happen, what would matter, and what decisions should be made now.",
      "For many small and mid-sized businesses, a simple forward-looking forecast can change the quality of management conversations immediately.",
    ],
    sections: [
      {
        heading: "Cash flow is often the first priority",
        paragraphs: [
          "Revenue growth does not always translate into available cash. Customer payment timing, payroll, inventory, debt service, taxes, and vendor obligations can create pressure even when the income statement looks healthy.",
          "A cash flow forecast helps leadership see where shortfalls may occur, when financing may be needed, and which actions can improve liquidity before pressure becomes urgent.",
        ],
      },
      {
        heading: "Forecasts make tradeoffs visible",
        paragraphs: [
          "Every growth decision has a financial tradeoff. Hiring ahead of revenue may accelerate delivery, but it also increases fixed cost. Expanding inventory may support sales, but it also ties up cash. Lowering price may increase volume, but it may weaken margin.",
          "A forecast gives leadership a structured way to compare these choices before committing resources.",
        ],
        bullets: [
          "Hiring and compensation plans",
          "Pricing and gross margin sensitivity",
          "Inventory and working capital needs",
          "Debt capacity and repayment timing",
          "Expansion, equipment, or location-level investment",
        ],
      },
      {
        heading: "The right model is useful, not complicated",
        paragraphs: [
          "A forecast does not need to be overly complex to be valuable. The most useful models focus on the drivers leadership can influence and the outcomes leadership needs to monitor.",
          "For an SMB, that usually means revenue drivers, gross margin, fixed cost, payroll, working capital, capital expenditures, debt obligations, and ending cash balance.",
        ],
      },
    ],
    closing:
      "If upcoming decisions feel too important to manage by instinct alone, a practical forecast can provide the financial clarity needed to move forward.",
  },
  {
    slug: "fractional-cfo-professional-services",
    section: "Industry Insights",
    title: "Fractional CFO Advisory for Professional Services Firms",
    description:
      "How fractional CFO support helps agencies, consultants, law firms, accounting firms, and other services businesses improve profitability and planning.",
    date: "July 9, 2026",
    readTime: 4,
    tags: ["Professional Services", "Profitability", "Fractional CFO"],
    intro: [
      "Professional services firms often grow through reputation, relationships, and delivery quality. Finance becomes more important as the firm adds people, expands service lines, or shifts from founder-led delivery to a broader operating model.",
      "At that stage, revenue alone is not enough. Leadership needs visibility into utilization, pricing, project profitability, staffing, cash timing, and owner economics.",
    ],
    sections: [
      {
        heading: "The core financial questions",
        paragraphs: [
          "A services firm needs to understand which clients, projects, and teams create the strongest economic contribution. Without that visibility, growth can add complexity without improving profitability.",
          "A fractional CFO can help establish the reporting and analysis needed to separate activity from value creation.",
        ],
        bullets: [
          "Which services produce the strongest margins?",
          "Are fixed-fee projects priced correctly?",
          "Is utilization high enough to support hiring?",
          "How much owner compensation is sustainable?",
          "What cash reserves are needed for payroll and tax timing?",
        ],
      },
      {
        heading: "Where advisory support creates value",
        paragraphs: [
          "The most useful work often combines pricing review, project margin analysis, staffing plans, and a forecast that connects sales pipeline with delivery capacity.",
          "This helps firm owners avoid hiring too early, pricing too low, or accepting revenue that weakens the operating model.",
        ],
      },
      {
        heading: "The outcome leadership should expect",
        paragraphs: [
          "A better finance function helps professional services leaders make decisions with clearer data. The goal is not only cleaner reporting. The goal is a stronger operating model and a more disciplined view of profitable growth.",
        ],
      },
    ],
    closing:
      "For professional services firms, fractional CFO support can turn project work and client relationships into a clearer strategy for sustainable profitability.",
  },
  {
    slug: "fractional-cfo-construction-trades",
    section: "Industry Insights",
    title: "Fractional CFO Advisory for Construction and Trades Businesses",
    description:
      "How construction and trades businesses can use fractional CFO support for job costing, cash flow, backlog, and growth planning.",
    date: "July 9, 2026",
    readTime: 4,
    tags: ["Construction", "Trades", "Job Costing"],
    intro: [
      "Construction and trades businesses can be profitable on paper while still facing intense cash pressure. Payment timing, deposits, retainage, labor, materials, equipment, and project overruns all affect financial performance.",
      "A fractional CFO can help leadership understand job-level economics and manage the cash requirements of growth.",
    ],
    sections: [
      {
        heading: "Job costing is the financial foundation",
        paragraphs: [
          "If job costing is incomplete, leadership may not know which projects are truly profitable. Revenue may look strong, but margin can disappear through labor overruns, material price changes, scope creep, or underpriced change orders.",
          "A fractional CFO can help improve job-level reporting and connect estimating, operations, and finance around a shared view of profitability.",
        ],
        bullets: [
          "Estimated versus actual job margin",
          "Labor productivity and subcontractor cost",
          "Material price variance",
          "Change order discipline",
          "Project closeout and profitability review",
        ],
      },
      {
        heading: "Cash planning matters as much as profit",
        paragraphs: [
          "Construction cash flow depends on timing. A business may need to fund payroll, materials, equipment, and subcontractors before customer collections are received.",
          "A cash flow forecast gives owners a clearer view of upcoming pressure points and helps them plan for lines of credit, payment terms, deposits, or schedule changes.",
        ],
      },
      {
        heading: "Growth requires capacity planning",
        paragraphs: [
          "More backlog is not always better if the company lacks labor, equipment, supervision, or working capital. Fractional CFO advisory helps leadership evaluate growth against operational capacity and financial risk.",
        ],
      },
    ],
    closing:
      "For construction and trades businesses, CFO-level support can bring financial discipline to job costing, cash flow, and growth decisions.",
  },
  {
    slug: "fractional-cfo-retail-ecommerce",
    section: "Industry Insights",
    title: "Fractional CFO Advisory for Retail and E-Commerce Businesses",
    description:
      "How retail and e-commerce companies can improve inventory planning, margins, cash conversion, and channel performance.",
    date: "July 9, 2026",
    readTime: 4,
    tags: ["Retail", "E-Commerce", "Inventory"],
    intro: [
      "Retail and e-commerce businesses often manage a complex mix of revenue growth, inventory, marketing spend, fulfillment cost, returns, and seasonality. Strong sales can still create financial strain if inventory and cash are not planned carefully.",
      "Fractional CFO advisory helps owners understand the economics behind growth and manage the capital required to support it.",
    ],
    sections: [
      {
        heading: "Inventory connects margin and cash",
        paragraphs: [
          "Inventory decisions affect both profitability and liquidity. Overstocking ties up cash and increases markdown risk. Understocking can limit revenue and weaken customer experience.",
          "A CFO-level planning process helps connect sales forecasts, purchasing decisions, gross margin, vendor terms, and cash availability.",
        ],
        bullets: [
          "Inventory turns and aging",
          "Gross margin by product, category, or channel",
          "Vendor terms and purchasing cadence",
          "Markdown and return analysis",
          "Cash conversion cycle",
        ],
      },
      {
        heading: "Channel economics need clear reporting",
        paragraphs: [
          "Online marketplaces, paid advertising, wholesale, retail locations, and direct-to-consumer channels may each carry different cost structures. Without channel-level profitability, leadership may invest behind revenue that does not create enough contribution margin.",
          "Fractional CFO support can help create reporting that separates top-line growth from profitable growth.",
        ],
      },
      {
        heading: "Seasonality should be planned before it arrives",
        paragraphs: [
          "Retail and e-commerce companies often face seasonal purchasing, staffing, and marketing decisions well before the revenue is collected. A practical forecast helps leadership plan cash requirements, financing needs, and inventory exposure ahead of the cycle.",
        ],
      },
    ],
    closing:
      "For retail and e-commerce companies, fractional CFO support can bring discipline to inventory, margin, and cash planning before growth becomes expensive to manage.",
  },
];

export function getAdvisoryArticle(slug: string) {
  return advisoryArticles.find((article) => article.slug === slug);
}

import type { Metadata } from "next";
import Link from "next/link";
import { AdvisoryGraphic } from "./components/advisory-graphic";

export const metadata: Metadata = {
  title: "Fractional CFO & Strategic Finance",
  description:
    "Fractional CFO and strategic finance advisory for startups, small businesses, and organizations managing growth, capital, and financial performance.",
  alternates: {
    canonical: "/",
  },
  other: {
    "public-record-pacermonitor":
      "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.pacermonitor.com/public/case/58059049/Desai_v_Walmart_Inc",
    "public-record-justia":
      "https://dockets.justia.com/docket/circuit-courts/ca8/26-1704/",
  },
};

const conversationUrl = "https://calendly.com/desaimirant9/30min";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mirantdesai01.github.io/#person",
      name: "Mirant Desai",
      url: "https://mirantdesai01.github.io",
      jobTitle: "Fractional CFO and Strategic Finance Advisor",
      email: "mailto:mirantdesai@icloud.com",
      telephone: "+1-347-268-4616",
      sameAs: [
        "https://linkedin.com/in/desaimirant",
        "https://github.com/mirantdesai01",
        "https://www.planaipro.com",
      ],
      knowsAbout: [
        "Financial planning",
        "Financial forecasting",
        "Cash flow management",
        "Capital planning",
        "Business valuation",
        "Investor relations",
        "Artificial intelligence business models",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mirantdesai01.github.io/#advisory",
      name: "Mirant Desai Fractional CFO & Strategic Finance",
      url: "https://mirantdesai01.github.io",
      description:
        "Fractional CFO and strategic finance advisory for startups, small businesses, and organizations.",
      founder: {
        "@id": "https://mirantdesai01.github.io/#person",
      },
      areaServed: "United States",
      serviceType: [
        "Fractional CFO services",
        "Strategic financial planning",
        "Financial forecasting",
        "Capital planning",
        "Fundraising support",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mirantdesai01.github.io/#website",
      name: "Mirant Desai",
      url: "https://mirantdesai01.github.io",
      publisher: {
        "@id": "https://mirantdesai01.github.io/#person",
      },
    },
  ],
};

const audiences = [
  {
    number: "01",
    label: "Startups",
    title: "Prepare for sustainable growth",
    description:
      "Build a credible financial plan, understand cash runway, prepare for capital discussions, and evaluate the economics of growth.",
    items: ["Cash runway and burn rate", "Fundraising models", "Unit economics"],
  },
  {
    number: "02",
    label: "Small businesses",
    title: "Strengthen financial control",
    description:
      "Supplement historical reporting with forward-looking cash planning, margin analysis, and disciplined performance management.",
    items: ["Cash-flow forecasting", "Budget-to-actual analysis", "Pricing and margins"],
  },
  {
    number: "03",
    label: "Organizations",
    title: "Align resources with priorities",
    description:
      "Give executives and boards a clear view of financial capacity, program economics, risk, and the tradeoffs behind resource decisions.",
    items: ["Scenario planning", "Board reporting", "Resource allocation"],
  },
];

const capabilities = [
  "Financial planning, forecasting, and scenario analysis",
  "Business-model, pricing, and unit-economics analysis",
  "Cash flow, runway, and capital planning",
  "Management dashboards and board reporting",
  "Fundraising strategy and investor materials",
  "Valuation analysis and transaction support",
];

const approach = [
  {
    number: "01",
    title: "Diagnose",
    text: "Review the financial position, revenue and cost structure, reporting, and decisions that require better information.",
  },
  {
    number: "02",
    title: "Design",
    text: "Translate business priorities into a focused financial roadmap, practical models, and a consistent review cadence.",
  },
  {
    number: "03",
    title: "Partner",
    text: "Complete a defined project or provide ongoing CFO-level support in coordination with leadership and existing advisors.",
  },
];

export default function Home() {
  return (
    <div className="-mx-6 -mt-12 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative bg-[#081722] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(43,106,115,0.18),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-32">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c4ad78]">
              <span className="h-px w-8 bg-[#c4ad78]" />
              Interim Advisory
            </div>
            <p className="display-font text-lg font-medium text-slate-300">
              Mirant Desai
            </p>
            <h1 className="mt-4 max-w-2xl text-[42px] font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
              Financial leadership for critical business decisions.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Fractional CFO and strategic finance advisory for leaders managing
              growth, capital allocation, and financial performance.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={conversationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#d3bd87] px-6 py-3.5 text-sm font-semibold text-[#10202a] transition hover:bg-[#e0cfaa]"
              >
                Schedule a 30-minute conversation
              </a>
              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                Review services
              </Link>
            </div>
          </div>
          <AdvisoryGraphic />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
            Fractional CFO advisory
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#10202a] md:text-[44px]">
              Senior financial leadership aligned with the needs of the business.
            </h2>
            <div className="mt-7 grid gap-6 text-[17px] leading-8 text-slate-600 md:grid-cols-2">
              <p>
                Reliable accounting provides a clear view of historical
                performance. Fractional CFO advisory builds on that foundation
                with forward-looking planning, scenario analysis, and disciplined
                evaluation of financial tradeoffs.
              </p>
              <p>
                I provide executive-level financial leadership and decision
                support through a flexible engagement model, working alongside
                management teams and existing advisors as priorities evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
                Who I advise
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
                Financial guidance tailored to your priorities.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              The scope varies by stage, sector, and available resources. The
              objective is consistent: reliable financial insight that supports
              timely, well-informed decisions.
            </p>
          </div>

          <div className="mt-12 grid border-y border-slate-300 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <article
                key={audience.label}
                className={`py-9 lg:px-8 lg:py-10 ${
                  index > 0 ? "border-t border-slate-300 lg:border-l lg:border-t-0" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f6670]">
                    {audience.label}
                  </p>
                  <span className="text-xs text-slate-400">{audience.number}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#10202a]">
                  {audience.title}
                </h3>
                <p className="mt-4 min-h-28 leading-7 text-slate-600">
                  {audience.description}
                </p>
                <ul className="mt-7 space-y-2.5 border-t border-slate-300 pt-6 text-sm font-medium text-slate-700">
                  {audience.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#aa8d57]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
              Advisory capabilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
              Practical expertise at the intersection of finance and strategy.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
              Engagements may address a specific priority or establish an ongoing
              planning, reporting, and decision-support process.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1f6670] transition hover:text-[#10202a]"
            >
              Explore all services <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="border-t border-slate-300">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="grid grid-cols-[44px_1fr] items-center gap-4 border-b border-slate-200 py-5"
              >
                <span className="text-xs text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium leading-6 text-[#10202a]">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102b36] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d3bd87]">
              AI & technology companies
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-[44px]">
              Financial planning for the economics of AI.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              AI businesses often face extended R&amp;D periods, changing
              infrastructure costs, uncertain adoption patterns, and emerging
              pricing structures. Conventional assumptions may not capture the
              economics or risks that matter most.
            </p>
            <div className="mt-9 grid gap-x-10 gap-y-5 border-t border-white/15 pt-7 sm:grid-cols-2">
              {[
                "R&D runway and capital requirements",
                "AI-specific unit economics",
                "Revenue strategy and pricing",
                "Investor-ready scenarios and valuation",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm font-medium text-slate-200">
                  <span className="mt-1 text-[#d3bd87]">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
              Engagement approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
              A disciplined path from analysis to action.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {approach.map((step) => (
              <article key={step.number} className="border-t border-[#aa8d57] pt-6">
                <span className="text-xs font-semibold text-[#1f6670]">{step.number}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#10202a]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <div className="grid gap-8 border-y border-slate-300 py-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
                Initial conversation
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
                Begin with the decision that requires greater financial clarity.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                A 30-minute conversation can clarify the decision, assess the
                available information, and identify an appropriate next step.
              </p>
            </div>
            <a
              href={conversationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#102b36] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#1f6670]"
            >
              Schedule a conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

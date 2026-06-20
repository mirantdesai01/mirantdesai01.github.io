import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CFO Services | Mirant Desai",
  description:
    "Fractional CFO services including strategic financial planning, business model design, KPI reporting, fundraising support, investor relations, and valuation.",
};

const conversationUrl = "https://calendly.com/desaimirant9/30min";

const services = [
  {
    number: "01",
    title: "Strategic financial planning",
    description:
      "Custom financial models, fundraising strategy, and scenario planning that connect today’s decisions to longer-term goals.",
    deliverables: [
      "Annual budgets and rolling forecasts",
      "Cash-flow and runway projections",
      "Scenario and sensitivity models",
      "Actual-to-plan analysis",
    ],
  },
  {
    number: "02",
    title: "Business model design",
    description:
      "Financially test how the organization creates, delivers, and captures value before committing resources.",
    deliverables: [
      "Revenue model development",
      "Pricing and margin analysis",
      "Unit economics",
      "Break-even analysis",
    ],
  },
  {
    number: "03",
    title: "Growth metrics & KPIs",
    description:
      "Create a dependable view of the financial and operating measures that matter to leadership.",
    deliverables: [
      "Executive KPI dashboards",
      "Monthly management reporting",
      "Metric definitions and targets",
      "Board-ready reporting",
    ],
  },
  {
    number: "04",
    title: "Fundraising support",
    description:
      "Prepare the financial story, projections, and supporting analysis needed for productive capital conversations.",
    deliverables: [
      "Investor-ready projections",
      "Valuation models",
      "Use-of-funds planning",
      "Financial pitch materials",
    ],
  },
  {
    number: "05",
    title: "Investor relations",
    description:
      "Build a clear reporting cadence that keeps boards, investors, and other stakeholders informed.",
    deliverables: [
      "Board reporting",
      "Stakeholder communications",
      "Capital planning",
      "Performance narratives",
    ],
  },
  {
    number: "06",
    title: "Valuation expertise",
    description:
      "Develop a defensible view of value for fundraising, strategic planning, or potential transactions.",
    deliverables: [
      "Fundraising valuation analysis",
      "Comparable-company research",
      "M&A scenario support",
      "Assumption and risk analysis",
    ],
  },
];

const sectors = [
  {
    title: "Startups & AI companies",
    text: "Runway, fundraising, unit economics, pricing, product-roadmap alignment, and investor expectations.",
  },
  {
    title: "Small businesses",
    text: "Cash-flow visibility, profitability, budgets, performance reporting, and disciplined growth planning.",
  },
  {
    title: "Organizations",
    text: "Program economics, resource allocation, board reporting, scenarios, and mission-aligned planning.",
  },
];

export default function ServicesPage() {
  return (
    <div className="-mx-6 -mt-12 overflow-hidden">
      <section className="border-b border-white/10 bg-[#081722] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d3bd87]">
            Interim Advisory · Fractional CFO Services
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            Financial expertise aligned to the decisions ahead.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Flexible CFO-level support for planning, performance, capital, and
            strategic decisions—without the fixed cost of a full-time executive.
          </p>
          <a
            href={conversationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-[#d3bd87] px-6 py-3.5 text-sm font-semibold text-[#10202a] transition hover:bg-[#e0cfaa]"
          >
            Schedule a 30-minute conversation
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
            Scope of support
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
            Capabilities built around operating and strategic questions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each engagement begins with the decision context, then establishes the
            analysis, reporting, and planning process required to move forward.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-14 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="border-t border-slate-300 pt-7">
              <div className="flex gap-5">
                <span className="text-xs font-semibold text-[#1f6670]">{service.number}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#10202a]">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#aa8d57]" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f6f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
              Client context
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
              Financial guidance shaped around your priorities and stage.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {sectors.map((sector) => (
              <article
                key={sector.title}
                className="border-t border-slate-300 py-7"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {sector.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{sector.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28">
        <div className="rounded-[28px] bg-[#102b36] px-7 py-12 text-white md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d3bd87]">
                Initial conversation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] md:text-[44px]">
                Define the financial question before defining the engagement.
              </h2>
              <p className="mt-4 text-lg leading-8 text-sky-100">
                We will discuss the decision at hand, the information currently
                available, and whether focused project work or ongoing support is
                the appropriate fit.
              </p>
            </div>
            <a
              href={conversationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#d3bd87] px-6 py-3.5 text-center text-sm font-semibold text-[#10202a] transition hover:bg-[#e0cfaa]"
            >
              Book 30 minutes
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-7 text-sm text-slate-300">
            <a href="mailto:mirantdesai@icloud.com" className="hover:text-white">
              mirantdesai@icloud.com
            </a>
            <a href="tel:+13472684616" className="hover:text-white">
              +1 347-268-4616
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

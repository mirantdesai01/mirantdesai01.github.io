import type { Metadata } from "next";
import Link from "next/link";
import { AdvisoryGraphic } from "./components/advisory-graphic";

export const metadata: Metadata = {
  title: "Fractional CFO & Strategic Finance | Mirant Desai",
  description:
    "Fractional CFO and strategic finance support for startups, small businesses, and organizations navigating growth, capital, and complex financial decisions.",
  other: {
    "public-record-pacermonitor":
      "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.pacermonitor.com/public/case/58059049/Desai_v_Walmart_Inc",
    "public-record-justia":
      "https://dockets.justia.com/docket/circuit-courts/ca8/26-1704/",
  },
};

const conversationUrl = "https://calendly.com/desaimirant9/30min";

const audiences = [
  {
    number: "01",
    label: "Startups",
    title: "Build for the next stage",
    description:
      "Establish a credible financial model, understand runway, prepare for capital conversations, and connect operating decisions to growth.",
    items: ["Runway and burn", "Fundraising models", "Unit economics"],
  },
  {
    number: "02",
    label: "Small businesses",
    title: "Improve control and profitability",
    description:
      "Move from historical reporting to forward-looking management with stronger cash planning, margin visibility, and operating discipline.",
    items: ["Cash forecasting", "Budget performance", "Pricing and margins"],
  },
  {
    number: "03",
    label: "Organizations",
    title: "Align resources with priorities",
    description:
      "Give executives and boards a clear view of financial capacity, program economics, risks, and strategic tradeoffs.",
    items: ["Scenario planning", "Board reporting", "Resource allocation"],
  },
];

const capabilities = [
  "Financial planning, forecasting, and scenario models",
  "Business model, pricing, and unit-economics analysis",
  "Cash-flow, runway, and capital planning",
  "Management dashboards and board reporting",
  "Fundraising strategy and investor materials",
  "Valuation analysis and transaction support",
];

const approach = [
  {
    number: "01",
    title: "Diagnose",
    text: "Review the financial position, operating model, reporting, and decisions that require better information.",
  },
  {
    number: "02",
    title: "Design",
    text: "Translate priorities into a focused financial roadmap, practical models, and a decision cadence.",
  },
  {
    number: "03",
    title: "Partner",
    text: "Execute a defined project or provide ongoing CFO-level support alongside leadership and existing advisors.",
  },
];

export default function Home() {
  return (
    <div className="-mx-6 -mt-12 overflow-hidden">
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
              Fractional CFO and strategic finance support for leaders managing
              growth, capital, performance, and financial complexity.
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
            The role of a fractional CFO
          </p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#10202a] md:text-[44px]">
              When the financial questions outgrow the reporting.
            </h2>
            <div className="mt-7 grid gap-6 text-[17px] leading-8 text-slate-600 md:grid-cols-2">
              <p>
                Accounting explains what happened. Strategic finance helps
                leadership decide what should happen next—and what the business
                can responsibly support.
              </p>
              <p>
                I provide experienced financial analysis, planning, and decision
                support on a flexible basis, without the overhead of a full-time
                executive hire.
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
                Finance support shaped to the organization.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              The scope changes by stage and sector. The objective remains the
              same: dependable financial information and a clearer basis for
              action.
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
              Focused expertise where finance and strategy meet.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
              Engagements can address one immediate priority or establish an
              ongoing planning and reporting rhythm for leadership.
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
                className="grid grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-slate-200 py-5"
              >
                <span className="text-xs text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium leading-6 text-[#10202a]">{capability}</p>
                <span className="text-[#aa8d57]" aria-hidden="true">—</span>
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
              A financial strategy for an unfamiliar operating model.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              AI businesses often combine extended R&amp;D, evolving infrastructure
              costs, uncertain adoption curves, and new pricing models. Generic
              assumptions can conceal the decisions that matter most.
            </p>
            <div className="mt-9 grid gap-x-10 gap-y-5 border-t border-white/15 pt-7 sm:grid-cols-2">
              {[
                "R&D runway and capital requirements",
                "AI-specific unit economics",
                "Revenue and pricing architecture",
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
              A defined path from question to action.
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
                Start with the financial decision in front of you.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                A 30-minute conversation can clarify the issue, the information
                available, and the most useful next step.
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

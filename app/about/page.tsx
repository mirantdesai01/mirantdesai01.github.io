import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mirant Desai's work in fractional CFO advisory, strategic finance, entrepreneurship, and AI-enabled business planning.",
  alternates: {
    canonical: "/about/",
  },
};

const conversationUrl = "https://calendly.com/desaimirant9/30min";

export default function About() {
  return (
    <div className="mx-auto max-w-5xl py-8 md:py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
          About
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#10202a] md:text-6xl">
          Financial perspective informed by entrepreneurship and technology.
        </h1>
        <p className="mt-7 text-xl leading-9 text-slate-600">
          I am Mirant Desai, a fractional CFO and strategic finance advisor. I
          work with leaders who need stronger financial planning, clearer
          performance insight, and disciplined analysis for important business
          decisions.
        </p>
      </div>

      <div className="mt-16 grid gap-12 border-t border-slate-300 pt-12 lg:grid-cols-[0.72fr_1.28fr]">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6670]">
          Professional focus
        </h2>
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            My advisory work covers financial planning and forecasting, cash-flow
            management, performance reporting, business-model analysis, capital
            strategy, and investor communications.
          </p>
          <p>
            I bring an operator&apos;s perspective to this work. As the founder and
            CEO of{" "}
            <a
              href="https://www.planaipro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1f6670] underline decoration-slate-300 underline-offset-4 transition hover:text-[#10202a]"
            >
              PlanAI
            </a>
            , I have worked at the intersection of business planning, financial
            modeling, enterprise software, and artificial intelligence.
          </p>
          <p>
            This combination helps me evaluate financial questions in their
            operating context—not as isolated spreadsheet exercises, but as
            decisions involving customers, products, people, capital, and risk.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-12 border-t border-slate-300 pt-12 lg:grid-cols-[0.72fr_1.28fr]">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f6670]">
          Areas of work
        </h2>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {[
            "Financial planning and forecasting",
            "Cash flow and capital planning",
            "Performance reporting and KPIs",
            "Pricing and unit economics",
            "Fundraising and investor preparation",
            "AI and technology business economics",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 border-t border-slate-200 pt-4 font-medium text-[#10202a]"
            >
              <span className="text-[#aa8d57]" aria-hidden="true">
                —
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <section className="mt-16 rounded-[28px] bg-[#102b36] px-7 py-10 text-white md:px-12 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d3bd87]">
          Contact Me
        </p>
        <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
              Let&apos;s talk about your financial priorities.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              For fractional CFO services or strategic finance advisory, schedule
              an introductory call to discuss your current priorities, the
              decisions ahead, and the support your organization may require.
            </p>
          </div>
          <a
            href={conversationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#d3bd87] px-6 py-3.5 text-center text-sm font-semibold text-[#10202a] transition hover:bg-[#e0cfaa]"
          >
            Schedule an introductory call
          </a>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-300">
          <a href="mailto:mirantdesai@icloud.com" className="transition hover:text-white">
            mirantdesai@icloud.com
          </a>
          <a
            href="https://linkedin.com/in/desaimirant"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a href="tel:+13472684616" className="transition hover:text-white">
            +1 347-268-4616
          </a>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}

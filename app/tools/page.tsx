import type { Metadata } from "next";
import { FinanceCalculators } from "./finance-calculators";

export const metadata: Metadata = {
  title: "Finance Diagnostic Tools",
  description:
    "Free operating profit, cash runway, and break-even calculators for a quick business finance diagnostic.",
  alternates: {
    canonical: "/tools/",
  },
};

export default function ToolsPage() {
  return (
    <div className="-mx-6 -mt-12 overflow-hidden">
      <section className="border-b border-white/10 bg-[#081722] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d3bd87]">
            Finance diagnostic tools
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            A quick read on profit, cash, and break-even.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Enter a few current figures to calculate core operating metrics.
            Everything runs in your browser—nothing is saved or submitted.
          </p>
        </div>
      </section>

      <FinanceCalculators />

      <section className="border-t border-slate-200 bg-[#f6f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-12 text-sm leading-7 text-slate-600 sm:px-8">
          <p className="max-w-3xl">
            These calculators provide simplified estimates for planning and
            discussion. They are not accounting, tax, investment, or legal
            advice, and they do not replace a review of your full financial
            statements.
          </p>
        </div>
      </section>
    </div>
  );
}

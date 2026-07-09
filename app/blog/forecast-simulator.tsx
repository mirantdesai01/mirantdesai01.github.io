"use client";

import { useMemo, useState } from "react";

type ProjectionMonth = {
  month: number;
  revenue: number;
  expense: number;
  netCashFlow: number;
  cash: number;
};

type NumberInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  suffix?: string;
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const decimal = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

function toNumber(value: string) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function NumberInput({
  id,
  label,
  value,
  onChange,
  prefix = "$",
  suffix,
}: NumberInputProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>
      <span className="flex items-center rounded-xl border border-slate-300 bg-white px-4 shadow-sm transition focus-within:border-[#1f6670] focus-within:ring-2 focus-within:ring-[#1f6670]/15">
        {prefix && <span className="text-slate-400">{prefix}</span>}
        <input
          id={id}
          type="number"
          step="any"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-base text-[#10202a] outline-none"
        />
        {suffix && <span className="text-sm text-slate-400">{suffix}</span>}
      </span>
    </label>
  );
}

function SummaryMetric({
  label,
  value,
  detail,
  warning = false,
}: {
  label: string;
  value: string;
  detail: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1f6670]">
        {label}
      </p>
      <p
        className={`mt-3 text-3xl font-semibold tracking-[-0.035em] ${
          warning ? "text-amber-700" : "text-[#10202a]"
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}

function makeProjection({
  startingRevenue,
  monthlyGrowth,
  grossMargin,
  monthlyOperatingExpenses,
  startingCash,
}: {
  startingRevenue: number;
  monthlyGrowth: number;
  grossMargin: number;
  monthlyOperatingExpenses: number;
  startingCash: number;
}) {
  let cash = startingCash;

  return Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const revenue = startingRevenue * (1 + monthlyGrowth) ** index;
    const grossProfit = revenue * grossMargin;
    const expense = revenue - grossProfit + monthlyOperatingExpenses;
    const netCashFlow = grossProfit - monthlyOperatingExpenses;

    cash += netCashFlow;

    return {
      month,
      revenue,
      expense,
      netCashFlow,
      cash,
    };
  });
}

function scalePoint({
  value,
  min,
  max,
  height,
}: {
  value: number;
  min: number;
  max: number;
  height: number;
}) {
  if (max === min) {
    return height / 2;
  }

  return height - ((value - min) / (max - min)) * height;
}

function linePath(points: ProjectionMonth[], key: "revenue" | "cash") {
  const width = 720;
  const height = 260;
  const values = points.flatMap((point) => [point.revenue, point.cash, 0]);
  const min = Math.min(...values);
  const max = Math.max(...values);

  return points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = scalePoint({ value: point[key], min, max, height });
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function ForecastSimulator() {
  const [startingRevenue, setStartingRevenue] = useState("85000");
  const [monthlyGrowth, setMonthlyGrowth] = useState("4");
  const [grossMargin, setGrossMargin] = useState("58");
  const [monthlyOperatingExpenses, setMonthlyOperatingExpenses] = useState("62000");
  const [startingCash, setStartingCash] = useState("225000");

  const projection = useMemo(() => {
    return makeProjection({
      startingRevenue: toNumber(startingRevenue),
      monthlyGrowth: toNumber(monthlyGrowth) / 100,
      grossMargin: toNumber(grossMargin) / 100,
      monthlyOperatingExpenses: toNumber(monthlyOperatingExpenses),
      startingCash: toNumber(startingCash),
    });
  }, [
    startingRevenue,
    monthlyGrowth,
    grossMargin,
    monthlyOperatingExpenses,
    startingCash,
  ]);

  const endingCash = projection[projection.length - 1]?.cash ?? 0;
  const finalRevenue = projection[projection.length - 1]?.revenue ?? 0;
  const breakEvenMonth = projection.find((month) => month.netCashFlow >= 0)?.month;
  const lowestCash = Math.min(...projection.map((month) => month.cash));

  return (
    <section className="mt-16 border-y border-slate-300 py-12">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
          Forecast Simulator
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a]">
          Test a simple 12-month cash forecast.
        </h2>
        <p className="mt-4 max-w-2xl text-[18px] leading-8 text-slate-700">
          Adjust the core assumptions to see how revenue growth, margin, operating
          expenses, and starting cash affect the forecast.
        </p>
      </div>

      <div className="mt-8 grid gap-7 rounded-[24px] border border-slate-200 bg-[#faf9f6] p-5 shadow-sm md:p-7 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-5">
          <NumberInput
            id="forecast-starting-revenue"
            label="Starting monthly revenue"
            value={startingRevenue}
            onChange={setStartingRevenue}
          />
          <NumberInput
            id="forecast-monthly-growth"
            label="Monthly revenue growth"
            value={monthlyGrowth}
            onChange={setMonthlyGrowth}
            prefix=""
            suffix="%"
          />
          <NumberInput
            id="forecast-gross-margin"
            label="Gross margin"
            value={grossMargin}
            onChange={setGrossMargin}
            prefix=""
            suffix="%"
          />
          <NumberInput
            id="forecast-operating-expenses"
            label="Monthly operating expenses"
            value={monthlyOperatingExpenses}
            onChange={setMonthlyOperatingExpenses}
          />
          <NumberInput
            id="forecast-starting-cash"
            label="Starting cash balance"
            value={startingCash}
            onChange={setStartingCash}
          />
        </div>

        <div className="min-w-0">
          <div className="grid gap-4 sm:grid-cols-3">
            <SummaryMetric
              label="Ending cash"
              value={currency.format(endingCash)}
              detail={`Lowest cash: ${currency.format(lowestCash)}`}
              warning={endingCash < 0 || lowestCash < 0}
            />
            <SummaryMetric
              label="Month 12 revenue"
              value={currency.format(finalRevenue)}
              detail={`${decimal.format(toNumber(monthlyGrowth))}% monthly growth`}
            />
            <SummaryMetric
              label="Break-even"
              value={breakEvenMonth ? `Month ${breakEvenMonth}` : "Not reached"}
              detail="First month with positive net cash flow"
              warning={!breakEvenMonth}
            />
          </div>

          <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1f6670]" />
                Revenue
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#aa8d57]" />
                Cash
              </span>
            </div>
            <svg
              viewBox="0 0 720 300"
              role="img"
              aria-label="12-month revenue and cash forecast chart"
              className="h-auto w-full overflow-visible"
            >
              {[0, 1, 2, 3].map((line) => (
                <line
                  key={line}
                  x1="0"
                  x2="720"
                  y1={line * 86.67}
                  y2={line * 86.67}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              ))}
              <path
                d={linePath(projection, "revenue")}
                fill="none"
                stroke="#1f6670"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
              <path
                d={linePath(projection, "cash")}
                fill="none"
                stroke="#aa8d57"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
              {projection.map((point, index) => {
                const x = (index / (projection.length - 1)) * 720;
                return (
                  <text
                    key={point.month}
                    x={x}
                    y="294"
                    textAnchor={index === 0 ? "start" : index === projection.length - 1 ? "end" : "middle"}
                    className="fill-slate-500 text-[22px]"
                  >
                    {index === 0 || index === 5 || index === 11 ? `M${point.month}` : ""}
                  </text>
                );
              })}
            </svg>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span>Month</span>
              <span>Revenue</span>
              <span>Net cash</span>
              <span>Cash</span>
            </div>
            {projection.slice(0, 6).map((month) => (
              <div
                key={month.month}
                className="grid grid-cols-4 border-t border-slate-100 px-4 py-3 text-sm text-slate-700"
              >
                <span>{month.month}</span>
                <span>{currency.format(month.revenue)}</span>
                <span>{currency.format(month.netCashFlow)}</span>
                <span>{currency.format(month.cash)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

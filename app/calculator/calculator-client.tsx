"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { typography, layout, textColors } from "@/config/typography";

const INVESTMENT = 2000;
const PRICE_DEFAULT = 150;
const COST_DEFAULT = 37.17;

const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);

type Option = { label: string; perClient: number };

const OPTIONS: Option[] = [
  { label: "OPTION 1", perClient: 3 },
  { label: "OPTION 2", perClient: 6 },
  { label: "OPTION 3", perClient: 1 },
];

export default function CalculatorClient() {
  const [price, setPrice] = useState(PRICE_DEFAULT);
  const [cost, setCost] = useState(COST_DEFAULT);

  const result = useMemo(() => {
    if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(cost) || cost < 0) {
      return null;
    }
    const net = price - cost;
    if (net <= 0) {
      return { net, margin: (100 * net) / price, needed: null as number | null };
    }
    const needed = Math.ceil((INVESTMENT - 0.000000001) / net);
    return { net, margin: (100 * net) / price, needed };
  }, [price, cost]);

  const reset = () => {
    setPrice(PRICE_DEFAULT);
    setCost(COST_DEFAULT);
  };

  return (
    <main className="min-h-screen bg-warm-beige-lighter dark:bg-fir-5 py-6">
      <div className={layout.containerNarrow}>
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-burgundy dark:text-pale-yellow">
          Inspark Institute &middot; FACE CODE&trade;
        </p>
        <h1 className={`${typography.headingPage} ${textColors.heading} mt-2`}>
          Investment Recovery Calculator
        </h1>
        <p className={`${typography.body} ${textColors.body} mt-3`}>
          Estimate how many additional treatments you would need to recover your FACE
          CODE&trade; investment, using your own treatment price and estimated operating
          cost.
        </p>

        <section className="bg-white dark:bg-fir-4 border border-warm-beige-dark/60 rounded-2xl p-5 my-4 shadow-sm">
          <p className={`${typography.small} ${textColors.muted}`}>
            FACE CODE&trade; programme investment
          </p>
          <p className="text-3xl font-extrabold text-burgundy dark:text-pale-yellow mt-1">
            {gbp(INVESTMENT)}
          </p>
          <p className={`${typography.small} ${textColors.muted}`}>Fixed promotional investment</p>
        </section>

        <section
          className="bg-white dark:bg-fir-4 border border-warm-beige-dark/60 rounded-2xl p-5 my-4 shadow-sm"
          aria-label="Adjust your treatment figures"
        >
          <PriceControl
            label="Price per treatment"
            value={price}
            onChange={setPrice}
            min={50}
            max={300}
            step={1}
            numberMax={1000}
          />
          <PriceControl
            label="Estimated operating cost per treatment"
            value={cost}
            onChange={setCost}
            min={0}
            max={200}
            step={0.01}
            numberMax={1000}
            last
          />

          <p className={`${typography.small} ${textColors.muted} mt-2`}>
            Operating cost in the {gbp(COST_DEFAULT)} example includes allocated
            therapist pay and holiday allowance, treatment-room rent, professional
            products and disposables. Your costs may also include utilities, booking
            or card-processing fees and other overheads.
          </p>

          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex items-center gap-2 bg-white dark:bg-fir-3 text-burgundy dark:text-pale-yellow border border-burgundy/40 dark:border-pale-yellow/40 rounded-lg px-3.5 py-2.5 text-sm font-bold active:scale-[0.98] transition"
          >
            <RotateCcw className="w-4 h-4" aria-hidden />
            Reset to {gbp(PRICE_DEFAULT)} / {gbp(COST_DEFAULT)} example
          </button>
        </section>

        <section className="bg-white dark:bg-fir-4 border border-warm-beige-dark/60 rounded-2xl p-5 my-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3" aria-live="polite">
            <div className="bg-warm-beige-light dark:bg-fir-3 rounded-xl p-4">
              <span className={`${typography.small} ${textColors.muted} block`}>
                Amount per treatment available to recover investment, before tax
              </span>
              <strong
                className={`block text-2xl sm:text-3xl mt-2 ${
                  result && result.net <= 0 ? "text-red-600" : textColors.heading
                }`}
              >
                {result ? gbp(result.net) : "—"}
              </strong>
            </div>
            <div className="bg-warm-beige-light dark:bg-fir-3 rounded-xl p-4">
              <span className={`${typography.small} ${textColors.muted} block`}>
                Estimated margin
              </span>
              <strong className={`block text-2xl sm:text-3xl mt-2 ${textColors.heading}`}>
                {result ? `${result.margin.toFixed(2)}%` : "—"}
              </strong>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-fir-4 border border-warm-beige-dark/60 rounded-2xl p-5 my-4 shadow-sm">
          <h2 className={`${typography.headingCard} ${textColors.heading}`}>
            Three ways to recover your investment
          </h2>
          <p className={`${typography.small} ${textColors.muted} mt-1`}>
            The examples below update instantly as you adjust your treatment price and
            cost.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4" aria-live="polite">
            {OPTIONS.map((opt) => {
              const clients =
                result && result.needed !== null
                  ? Math.ceil(result.needed / opt.perClient)
                  : null;
              const total = clients !== null ? clients * opt.perClient : null;
              return (
                <div
                  key={opt.label}
                  className="bg-warm-beige-light dark:bg-fir-3 rounded-xl p-4 text-center"
                >
                  <div className={`${typography.small} ${textColors.muted} font-semibold`}>
                    {opt.label}
                  </div>
                  <div className="text-2xl font-extrabold text-burgundy dark:text-pale-yellow my-1.5">
                    {clients === null
                      ? "Not recoverable"
                      : `${clients} ${clients === 1 ? "client" : "clients"}`}
                  </div>
                  <div className="text-sm">{opt.perClient} treatment{opt.perClient === 1 ? "" : "s"} each</div>
                  <div className={`${typography.small} ${textColors.muted} mt-2`}>
                    {total === null
                      ? "Increase price or reduce cost"
                      : `${total} treatments total`}
                  </div>
                </div>
              );
            })}
          </div>

          <p className={`${typography.small} ${textColors.muted} mt-4`}>
            Each option rounds up to whole clients, so the total treatments may exceed
            the minimum needed. Assumes additional treatments at the entered price,
            with no package discounts.
          </p>
        </section>

        <p className={`${typography.small} ${textColors.muted}`}>
          Illustrative planning only. Results are not guaranteed earnings or
          take-home pay. Allow for VAT, taxes, any excluded overheads and the
          capacity to deliver additional bookings.
        </p>
      </div>
    </main>
  );
}

function PriceControl({
  label,
  value,
  onChange,
  min,
  max,
  step,
  numberMax,
  last,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  numberMax: number;
  last?: boolean;
}) {
  const id = label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className={last ? "" : "mb-6"}>
      <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
        <label htmlFor={id} className="font-bold text-sm">
          {label}
        </label>
        <div className="flex items-center gap-1 bg-warm-beige-light dark:bg-fir-3 border border-warm-beige-dark/60 rounded-lg px-2.5 py-1.5 font-extrabold text-lg focus-within:ring-2 focus-within:ring-burgundy">
          <span>&pound;</span>
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={0}
            max={numberMax}
            step={step}
            value={value}
            onChange={(e) => {
              const n = parseFloat(e.target.value);
              if (Number.isFinite(n)) onChange(Math.max(min, Math.min(max, n)));
              else onChange(NaN);
            }}
            aria-label={`Enter ${label.toLowerCase()}`}
            className="w-[70px] max-w-[22vw] bg-transparent border-0 outline-none text-right font-extrabold"
          />
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Number.isFinite(value) ? value : min}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        aria-label={`Adjust ${label.toLowerCase()}`}
        className="block w-full h-7 accent-burgundy cursor-pointer touch-pan-y"
        style={{ accentColor: "#72262C" }}
      />
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-0.5">
        <span>&pound;{min}</span>
        <span>&pound;{max}</span>
      </div>
    </div>
  );
}

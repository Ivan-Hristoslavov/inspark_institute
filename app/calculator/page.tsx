import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import CalculatorClient from "./calculator-client";

const canonical = `${siteConfig.url}/calculator`;

export const metadata: Metadata = {
  title: "FACE CODE™ Investment Recovery Calculator",
  description:
    "Estimate how many additional treatments you need to recover your FACE CODE™ investment, using your own treatment price and operating cost.",
  alternates: { canonical },
  openGraph: {
    title: "FACE CODE™ Investment Recovery Calculator",
    description:
      "Estimate how many additional treatments you need to recover your FACE CODE™ investment.",
    url: canonical,
    type: "website",
    siteName: siteConfig.name,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}

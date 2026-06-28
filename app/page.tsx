import type { Metadata } from 'next';
import { siteConfig } from "@/config/site";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Coming Soon`,
  description: siteConfig.description,
};

export default function HomePage() {
  return <ComingSoonPage />;
}

import type { Metadata } from 'next';
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Book Consultation | ${siteConfig.name}`,
  description: "Book your consultation at Inspark Institute. Expert treatments with personalised care.",
  alternates: {
    canonical: `${siteConfig.url}/book-consultation`,
  },
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


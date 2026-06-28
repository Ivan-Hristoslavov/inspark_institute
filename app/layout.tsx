import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";

const COMING_SOON = true;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    ...siteConfig.seo.openGraph,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ddd5c3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c08" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (COMING_SOON) {
    return (
      <html suppressHydrationWarning lang="en-GB">
        <head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="application-name" content="Inspark Institute" />
        </head>
        <body
          className={clsx(
            "min-h-screen font-sans antialiased"
          )}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    );
  }

  // Full site layout — re-enable when launching
  const { Providers } = await import("./providers");
  const { default: LayoutMain } = await import("@/components/LayoutMain");
  const { getAdminProfile } = await import("@/lib/admin-profile");
  const adminProfile = await getAdminProfile();

  return (
    <html suppressHydrationWarning lang="en-GB">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="application-name" content="Inspark Institute" />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased"
        )}
        suppressHydrationWarning
      >
        <Providers initialAdminProfile={adminProfile}>
          <LayoutMain adminProfile={adminProfile}>{children}</LayoutMain>
        </Providers>
      </body>
    </html>
  );
}

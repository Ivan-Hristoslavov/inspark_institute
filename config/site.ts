export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Inspark Institute",
  shortName: "Inspark",
  tagline: "Inspiring Transformation",
  description: "Inspark Institute — coming soon.",

  url: process.env.NEXT_PUBLIC_SITE_URL || "https://insparkinstitute.com",

  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@insparkinstitute.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    address: {
      street: process.env.NEXT_PUBLIC_ADDRESS_STREET || "",
      city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "",
      postcode: process.env.NEXT_PUBLIC_ADDRESS_POSTCODE || "",
      country: "United Kingdom",
      full: process.env.NEXT_PUBLIC_ADDRESS_FULL || ""
    }
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "",
    tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || "",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || "",
  },

  businessHours: {
    monday: { open: "09:00", close: "19:00", isOpen: true },
    tuesday: { open: "09:00", close: "19:00", isOpen: true },
    wednesday: { open: "09:00", close: "19:00", isOpen: true },
    thursday: { open: "09:00", close: "19:00", isOpen: true },
    friday: { open: "09:00", close: "19:00", isOpen: true },
    saturday: { open: "10:00", close: "18:00", isOpen: true },
    sunday: { open: "10:00", close: "16:00", isOpen: true },
  },

  booking: {
    freeConsultationEnabled: false,
    consultationDuration: 30,
    minAdvanceBooking: 24,
    maxAdvanceBooking: 90,
    bufferTime: 15,
    allowSameDayBooking: true,
  },

  newsletter: {
    welcomeDiscountPercent: 10,
    discountCodePrefix: "WELCOME10",
    discountValidDays: 30,
  },

  googleCalendar: {
    enabled: !!process.env.GOOGLE_CALENDAR_ID,
    calendarId: process.env.GOOGLE_CALENDAR_ID || "",
  },

  features: {
    blog: true,
    membership: true,
    reviews: true,
    gallery: true,
    awards: true,
    multiLanguage: false,
    onlinePayments: true,
    giftCards: false,
  },

  seo: {
    titleTemplate: "%s | Inspark Institute",
    defaultTitle: "Inspark Institute — Coming Soon",
    defaultDescription: "Inspark Institute — coming soon.",
    keywords: [
      "inspark institute",
    ],
    openGraph: {
      type: "website" as const,
      locale: "en_GB",
      siteName: "Inspark Institute",
    },
  },

  serviceCategories: [] as Array<{id: string; name: string; slug: string; icon: string; description: string}>,

  conditionCategories: [] as Array<{id: string; name: string; slug: string; description: string}>,

  trust: {
    yearEstablished: process.env.NEXT_PUBLIC_YEAR_ESTABLISHED || "2025",
    treatmentsPerformed: process.env.NEXT_PUBLIC_TREATMENTS_COUNT || "",
    satisfactionRate: process.env.NEXT_PUBLIC_SATISFACTION_RATE || "",
    certifications: [] as string[],
  },

  urgentContact: {
    enabled: false,
    message: "",
    phone: "",
  },

  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  },

  links: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@insparkinstitute.com",
  },
  areas: [],
};

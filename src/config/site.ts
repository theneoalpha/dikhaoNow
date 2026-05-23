import { env } from "@/config/env";

export const siteConfig = {
  name: "DikhaoNow",
  description:
    "Digital catalog solutions for local businesses in tier-2 and tier-3 cities. Mobile-friendly catalogs with QR codes and WhatsApp integration for tiles dealers, marble shops, furniture makers, and local retailers.",
  url: env.site.url,
  ogImage: `${env.site.url}/og.jpg`,
  links: {
    instagram: env.site.instagramUrl,
    facebook: env.site.facebookUrl,
    linkedin: env.site.linkedinUrl,
  },
  contact: {
    email: env.site.contactEmail,
    phone: env.site.contactPhone,
    address: env.site.address,
  },
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Catalogs", href: "/catalogs" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    tagline: "Transforming local businesses with digital catalog solutions.",
    copyright: "All rights reserved.",
  },
};

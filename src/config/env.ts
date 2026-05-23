export const env = {
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03",
    useCdn: process.env.NODE_ENV === "production",
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://launchlayer.co",
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@scalvia.co",
    contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210",
    address:
      process.env.NEXT_PUBLIC_CONTACT_ADDRESS ||
      "Remote-first studio serving startups across India and beyond",
    instagramUrl:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://instagram.com/launchlayer",
    facebookUrl:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      "https://facebook.com/launchlayer",
    linkedinUrl:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://linkedin.com/company/launchlayer",
    businessEmail:
      process.env.BUSINESS_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "hello@scalvia.com",
  },
};

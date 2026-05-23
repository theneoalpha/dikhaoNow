import { env } from "@/config/env";

export const fallbackSiteSettings = {
  brandName: "DikhaoNow",
  brandMark: "S",
  description:
    "Growth-focused startup agency for founders who need Instagram management, Facebook ads, SEO, and conversion-ready websites in one place.",
  siteUrl: env.site.url,
  footerTagline:
    "We help early-stage startups look credible, get discovered, and turn attention into leads.",
  contactEmail: env.site.contactEmail,
  contactPhone: env.site.contactPhone,
  address: env.site.address,
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Showcase", href: "#showcase" },
    { label: "Why Us", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "Instagram", href: env.site.instagramUrl },
    { label: "Facebook", href: env.site.facebookUrl },
    { label: "LinkedIn", href: env.site.linkedinUrl },
  ],
  booking: {
    visualTitle: "Let’s launch your next growth move.",
    visualAccent: "Fast strategy, clean execution.",
    visualImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Instagram content systems for startup visibility",
      "Facebook ads tuned for lead generation",
      "SEO and websites built to convert early traffic",
    ],
    formTitle: "Start Your Growth Brief",
    formDescription:
      "Share what stage your startup is in and what you want help with. We’ll come back with a practical plan.",
    submitText: "Request Growth Plan",
    successTitle: "Brief Received",
    successDescription:
      "We’ve received your details and will reply with the next steps shortly.",
    businessOptions: [
      "Startup Founder",
      "SaaS Startup",
      "D2C Brand",
      "Local Startup",
      "Agency Partner",
    ],
  },
};

export const fallbackHomePage = {
  servicesEyebrow: "Startup Growth Stack",
  servicesTitle: "Everything a startup needs to start selling online.",
  servicesDescription:
    "From social presence to performance marketing and launch-ready websites, we help early-stage teams build momentum without hiring a full in-house growth team.",
  showcaseEyebrow: "How We Help",
  showcaseTitle: "Built for attention, clicks, and conversion.",
  showcaseDescription:
    "Each service is designed to support the others, so your startup doesn’t end up with disconnected marketing and a weak website.",
  showcaseFeatures: [
    {
      title: "Instagram Page Management",
      description:
        "We plan content, design post systems, and keep your page active so your startup looks trusted from the first profile visit.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Facebook Ads That Find Buyers",
      description:
        "We create campaigns for reach, leads, and retargeting so your ad spend goes toward measurable startup growth instead of guesswork.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "SEO And Websites That Convert",
      description:
        "We combine landing-page clarity, technical SEO, and fast development so your startup can rank better and convert traffic into enquiries.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    },
  ],
  projectsEyebrow: "Selected Work",
  projectsTitle: "Work we’ll be proud to show next.",
  projectsDescription:
    "We would rather earn real case studies than fill the site with placeholder projects. When we have published work, it will be here.",
  projectsButtonText: "Future Case Studies",
  testimonialsEyebrow: "Trust First",
  testimonialsTitle: "No made-up praise, just clear execution.",
  testimonialsDescription:
    "We are building this the honest way. Instead of fake testimonials, we focus on strong delivery, clear communication, and long-term trust.",
  teamEyebrow: "Why Us",
  teamTitle: "New studio, modern stack, corporate mindset.",
  teamDescription:
    "We may be newer as a studio, but we bring structured execution, clean systems, and modern technology practices shaped by corporate experience. That means your business gets fresh energy without careless delivery.",
  teamQuote:
    "We are here to help growing businesses look more credible, move faster online, and get the kind of digital setup that gives them room to scale.",
  teamQuoteAuthor: "Our Approach",
};

export const fallbackHero = {
  title: " Modern Digital Presence for Local Business",
  subtitle: "We help startups with Instagram, Facebook ads, SEO, and websites.",
  ctaText: "Book a Call",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1400",
  badge: "For early-stage startups",
};

export const fallbackAbout = {
  title: "A modern team for businesses ready to grow.",
  content:
    "We help growing businesses build a stronger online presence with modern websites, better social media execution, smarter ad systems, and practical SEO. Instead of juggling disconnected freelancers, you get one focused team working toward the same business goal.",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  features: [
    "Instagram strategy and execution",
    "Facebook ads for leads and retargeting",
    "SEO foundations for long-term growth",
    "Startup websites built to convert",
  ],
};

export const fallbackCta = {
  title: "Ready to give your business more room to grow?",
  subtitle:
    "Let’s build a cleaner digital presence with the systems, content, and technology that help your business move forward.",
  primaryCtaText: "Get a Custom Plan",
  secondaryCtaText: "Talk To Our Team",
};

export const fallbackServices = [
  {
    _id: "s1",
    title: " Growth",
    description:
      "Content direction, post planning, reel ideas, highlight setup, and profile optimization for startups that need a polished social presence.",
    icon: "📱",
    color: "bg-pink-500/10 text-pink-400",
  },
  {
    _id: "s2",
    title: "Facebook Ads Management",
    description:
      "Campaign structure, creative testing, audience targeting, and retargeting flows designed to generate leads without wasting early budget.",
    icon: "🎯",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    _id: "s3",
    title: "SEO And Startup Websites",
    description:
      "Fast, modern websites paired with search-focused copy and technical SEO so founders can get found and convert interest into enquiries.",
    icon: "🚀",
    color: "bg-amber-500/10 text-amber-400",
  },
];

export const fallbackProjects = [];

export const fallbackTestimonials = [];

export const fallbackTeam = [
  {
    _id: "founder",
    name: "DikhaoNow Team",
    role: "Growth, Ads, SEO & Web Execution",
    bio: "We combine modern tools with disciplined execution to help businesses grow online through stronger social presence, better campaigns, search visibility, and websites that feel current and credible.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
    skills: [
      "Modern Tech",
      "Corporate Experience",
      "Paid Ads",
      "Web Development",
    ],
  },
];

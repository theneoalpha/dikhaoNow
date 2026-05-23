export interface BookingContent {
  visualTitle?: string;
  visualAccent?: string;
  visualImage?: string;
  highlights?: string[];
  formTitle?: string;
  formDescription?: string;
  submitText?: string;
  successTitle?: string;
  successDescription?: string;
  businessOptions?: string[];
}

export interface SiteNavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteSettingsData {
  brandName?: string;
  brandMark?: string;
  description?: string;
  siteUrl?: string;
  footerTagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  navigation?: SiteNavigationItem[];
  socialLinks?: SocialLink[];
  booking?: BookingContent;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  image?: string;
  badge?: string;
}

export interface AboutContent {
  title: string;
  content: string;
  image?: string;
  features?: string[];
}

export interface CtaContent {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
}

export interface ServiceCard {
  _id: string;
  title: string;
  description: string;
  slug?: string;
  icon?: string;
  color?: string;
  image?: string;
}

export interface ShowcaseFeature {
  title: string;
  description: string;
  image: string;
}

export interface HomePageContent {
  servicesEyebrow: string;
  servicesTitle: string;
  servicesDescription: string;
  showcaseEyebrow: string;
  showcaseTitle: string;
  showcaseDescription: string;
  showcaseFeatures: ShowcaseFeature[];
  projectsEyebrow: string;
  projectsTitle: string;
  projectsDescription: string;
  projectsButtonText: string;
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonialsDescription: string;
  teamEyebrow: string;
  teamTitle: string;
  teamDescription: string;
  teamQuote: string;
  teamQuoteAuthor: string;
}

export interface ProjectCard {
  _id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export interface TestimonialCard {
  _id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  skills?: string[];
}

export interface HomePageData {
  hero: HeroContent;
  about: AboutContent;
  cta: CtaContent;
  services: ServiceCard[];
  projects: ProjectCard[];
  testimonials: TestimonialCard[];
  team: TeamMember[];
  homePage: HomePageContent;
  siteSettings: SiteSettingsData;
}

import { groq } from "next-sanity";
import { client } from "./client";

// Queries
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  brandName,
  description,
  siteUrl,
  brandMark,
  footerTagline,
  contactEmail,
  contactPhone,
  address,
  navigation,
  socialLinks,
  booking {
    visualTitle,
    visualAccent,
    "visualImage": visualImage.asset->url,
    highlights,
    formTitle,
    formDescription,
    submitText,
    successTitle,
    successDescription,
    businessOptions
  }
}`;

export const homePageQuery = groq`*[_type == "homePage"][0] {
  servicesEyebrow,
  servicesTitle,
  servicesDescription,
  showcaseEyebrow,
  showcaseTitle,
  showcaseDescription,
  showcaseFeatures[] {
    title,
    description,
    "image": image.asset->url
  },
  projectsEyebrow,
  projectsTitle,
  projectsDescription,
  projectsButtonText,
  testimonialsEyebrow,
  testimonialsTitle,
  testimonialsDescription,
  teamEyebrow,
  teamTitle,
  teamDescription,
  teamQuote,
  teamQuoteAuthor
}`;

export const heroQuery = groq`*[_type == "hero"][0] {
  title,
  subtitle,
  ctaText,
  badge,
  "image": image.asset->url
}`;

export const aboutQuery = groq`*[_type == "about"][0] {
  title,
  content,
  features,
  "image": image.asset->url
}`;

export const ctaQuery = groq`*[_type == "cta"][0] {
  title,
  subtitle,
  primaryCtaText,
  secondaryCtaText
}`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  icon,
  "image": image.asset->url
}`;

export const projectsQuery = groq`*[_type == "project"] | order(completedDate desc) {
  _id,
  title,
  category,
  "image": image.asset->url,
  description,
  link,
  completedDate
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  name,
  role,
  content,
  "image": image.asset->url,
  rating
}`;

export const teamQuery = groq`*[_type == "team"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  "image": image.asset->url,
  skills
}`;

// New Catalog Queries
export const catalogsQuery = groq`*[_type == "catalog" && isActive == true] | order(featured desc, businessName asc) {
  _id,
  title,
  "slug": slug.current,
  businessType,
  businessName,
  ownerName,
  description,
  "coverImage": coverImage.asset->url,
  "logo": logo.asset->url,
  location {
    city,
    state
  },
  contact {
    phone,
    whatsapp
  },
  featured
}`;

export const catalogBySlugQuery = groq`*[_type == "catalog" && slug.current == $slug && isActive == true][0] {
  _id,
  title,
  "slug": slug.current,
  businessType,
  businessName,
  ownerName,
  description,
  "coverImage": coverImage.asset->url,
  "logo": logo.asset->url,
  location,
  contact,
  workingHours,
  socialMedia,
  "categories": categories[]-> {
    _id,
    name,
    "slug": slug.current,
    description,
    "icon": icon.asset->url
  },
  seoSettings
}`;

export const productsByCatalogQuery = groq`*[_type == "product" && catalog._ref == $catalogId && isActive == true] | order(featured desc, sortOrder asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  "images": images[] {
    "url": asset->url,
    alt,
    caption
  },
  "category": category-> {
    name,
    "slug": slug.current
  },
  specifications,
  pricing,
  availability,
  tags,
  featured
}`;

export const productsByCategoryQuery = groq`*[_type == "product" && category._ref == $categoryId && isActive == true] | order(featured desc, sortOrder asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  "images": images[] {
    "url": asset->url,
    alt,
    caption
  },
  "catalog": catalog-> {
    businessName,
    "slug": slug.current
  },
  specifications,
  pricing,
  availability,
  tags,
  featured
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug && isActive == true][0] {
  _id,
  name,
  "slug": slug.current,
  description,
  "images": images[] {
    "url": asset->url,
    alt,
    caption
  },
  "category": category-> {
    name,
    "slug": slug.current
  },
  "catalog": catalog-> {
    _id,
    businessName,
    "slug": slug.current,
    contact
  },
  specifications,
  pricing,
  availability,
  tags,
  seoSettings
}`;

export const categoriesQuery = groq`*[_type == "productCategory" && isActive == true] | order(businessType asc, sortOrder asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  "icon": icon.asset->url,
  businessType
}`;

export const categoriesByBusinessTypeQuery = groq`*[_type == "productCategory" && businessType == $businessType && isActive == true] | order(sortOrder asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  "icon": icon.asset->url
}`;

export const featuredCatalogsQuery = groq`*[_type == "catalog" && featured == true && isActive == true] | order(businessName asc) [0...6] {
  _id,
  title,
  "slug": slug.current,
  businessType,
  businessName,
  ownerName,
  description,
  "coverImage": coverImage.asset->url,
  "logo": logo.asset->url,
  location {
    city,
    state
  },
  contact {
    phone,
    whatsapp
  }
}`;

export const searchCatalogsQuery = groq`*[_type == "catalog" && isActive == true && (
  businessName match $searchTerm + "*" ||
  description match $searchTerm + "*" ||
  businessType match $searchTerm + "*" ||
  location.city match $searchTerm + "*"
)] | order(businessName asc) {
  _id,
  title,
  "slug": slug.current,
  businessType,
  businessName,
  ownerName,
  description,
  "coverImage": coverImage.asset->url,
  "logo": logo.asset->url,
  location {
    city,
    state
  },
  contact {
    phone,
    whatsapp
  }
}`;

// New Business Niche Queries
export const activeNicheQuery = groq`*[_type == "businessNiche" && isActive == true][0] {
  _id,
  name,
  "slug": slug.current,
  description,
  icon,
  heroSection {
    title,
    subtitle,
    ctaText,
    badge,
    "heroImage": heroImage.asset->url
  },
  targetAudience[] {
    title,
    description,
    icon
  },
  keyFeatures[] {
    title,
    description,
    icon
  },
  businessTypes[] {
    name,
    value,
    description,
    icon,
    color
  },
  services[] {
    title,
    description,
    icon,
    features[]
  },
  testimonialSection {
    title,
    subtitle
  },
  ctaSection {
    title,
    subtitle,
    primaryButtonText,
    secondaryButtonText
  }
}`;

export const allNichesQuery = groq`*[_type == "businessNiche"] | order(sortOrder asc, name asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  icon,
  isActive,
  sortOrder
}`;

// Fetch Helpers for Business Niches
export async function getActiveNiche() {
  return client.fetch(activeNicheQuery);
}

export async function getAllNiches() {
  return client.fetch(allNichesQuery);
}

// Fetch Helpers
export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}

export async function getHomePage() {
  return client.fetch(homePageQuery);
}

export async function getHero() {
  return client.fetch(heroQuery);
}

export async function getAbout() {
  return client.fetch(aboutQuery);
}

export async function getCta() {
  return client.fetch(ctaQuery);
}

export async function getServices() {
  return client.fetch(servicesQuery);
}

export async function getProjects() {
  return client.fetch(projectsQuery);
}

export async function getTestimonials() {
  return client.fetch(testimonialsQuery);
}

export async function getTeam() {
  return client.fetch(teamQuery);
}

// New Catalog Fetch Helpers
export async function getCatalogs() {
  return client.fetch(catalogsQuery);
}

export async function getCatalogBySlug(slug: string) {
  return client.fetch(catalogBySlugQuery, { slug });
}

export async function getProductsByCatalog(catalogId: string) {
  return client.fetch(productsByCatalogQuery, { catalogId });
}

export async function getProductsByCategory(categoryId: string) {
  return client.fetch(productsByCategoryQuery, { categoryId });
}

export async function getProductBySlug(slug: string) {
  return client.fetch(productBySlugQuery, { slug });
}

export async function getCategories() {
  return client.fetch(categoriesQuery);
}

export async function getCategoriesByBusinessType(businessType: string) {
  return client.fetch(categoriesByBusinessTypeQuery, { businessType });
}

export async function getFeaturedCatalogs() {
  return client.fetch(featuredCatalogsQuery);
}

export async function searchCatalogs(searchTerm: string) {
  return client.fetch(searchCatalogsQuery, { searchTerm });
}

import { fallbackServices } from "@/constants/data";
import { getServices } from "@/sanity/queries";
import type { ServiceCard } from "@/app/types";
import type { ServiceDetailContent, ServiceDetailData } from "./types";

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildServiceDetails(service: ServiceCard): ServiceDetailContent {
  const title = service.title.toLowerCase();

  if (title.includes("instagram")) {
    return {
      intro:
        "We help you build a cleaner and more active Instagram presence so your business looks current, consistent, and easier to trust.",
      points: [
        "Profile cleanup and page positioning",
        "Post direction and content planning",
        "Simple consistency systems for regular publishing",
      ],
      outcomes: [
        "A better first impression for new visitors",
        "More consistent branding across posts and highlights",
        "A page that supports your business instead of feeling inactive",
      ],
      process: ["Understand your business", "Plan a simple content direction", "Design and organize the page", "Keep improving based on response"],
    };
  }

  if (title.includes("facebook")) {
    return {
      intro:
        "We create practical Facebook ad setups that help businesses test offers, reach the right audience, and spend more carefully.",
      points: [
        "Campaign setup with clear goals",
        "Audience and creative testing",
        "Basic optimization and reporting",
      ],
      outcomes: [
        "More structure in your paid marketing",
        "Better use of your early ad budget",
        "A clearer path from attention to enquiry",
      ],
      process: ["Review your offer", "Build campaign structure", "Launch with focused targeting", "Adjust based on performance"],
    };
  }

  return {
    intro:
      "We help businesses with websites and SEO basics so people can find you more easily and trust what they see when they visit.",
    points: [
      "Modern, clean website setup",
      "Basic search visibility improvements",
      "Better structure for pages, content, and enquiries",
    ],
    outcomes: [
      "A stronger online presence",
      "A website that feels current and easier to use",
      "A better foundation for long-term growth",
    ],
    process: ["Review your current presence", "Plan a clearer structure", "Build and refine the pages", "Improve discoverability over time"],
  };
}

export async function getAllServices(): Promise<ServiceCard[]> {
  const services = await getServices().catch(() => []);
  return services?.length ? services : fallbackServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetailData | null> {
  const services = await getAllServices();
  const service =
    services.find((item) => item.slug === slug) ||
    services.find((item) => slugify(item.title) === slug);

  if (!service) return null;

  return {
    service: {
      ...service,
      slug: service.slug || slugify(service.title),
    },
    details: buildServiceDetails(service),
  };
}

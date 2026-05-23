import {
  getAbout,
  getCta,
  getHero,
  getHomePage,
  getProjects,
  getServices,
  getTeam,
  getTestimonials,
} from "@/sanity/queries";
import {
  fallbackAbout,
  fallbackCta,
  fallbackHero,
  fallbackHomePage,
  fallbackProjects,
  fallbackServices,
  fallbackSiteSettings,
  fallbackTeam,
  fallbackTestimonials,
} from "@/constants/data";
import type { HomePageData } from "./types";

export async function fetchHomePageData(): Promise<HomePageData> {
  const [hero, about, cta, services, projects, testimonials, team, homePage] =
    await Promise.all([
      getHero().catch(() => null),
      getAbout().catch(() => null),
      getCta().catch(() => null),
      getServices().catch(() => []),
      getProjects().catch(() => []),
      getTestimonials().catch(() => []),
      getTeam().catch(() => []),
      getHomePage().catch(() => null),
    ]);

  return {
    hero: hero || fallbackHero,
    about: about || fallbackAbout,
    cta: cta || fallbackCta,
    services: services?.length ? services : fallbackServices,
    projects: projects?.length ? projects : fallbackProjects,
    testimonials: testimonials?.length ? testimonials : fallbackTestimonials,
    team: team?.length ? team : fallbackTeam,
    homePage: homePage || fallbackHomePage,
    siteSettings: fallbackSiteSettings,
  };
}

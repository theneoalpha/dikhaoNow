import { fetchHomePageData } from "./api";
import { CatalogHeroSection } from "./components/catalog-hero-section";
import { CatalogServicesSection } from "./components/catalog-services-section";
import { CatalogTargetAudienceSection } from "./components/catalog-target-audience-section";
import { CatalogBenefitsSection } from "./components/catalog-benefits-section";
import { CatalogHowItWorksSection } from "./components/catalog-how-it-works-section";
import { CatalogShowcaseSection } from "./components/catalog-showcase-section";
import { CatalogPricingSection } from "./components/catalog-pricing-section";
import { CatalogTestimonialsSection } from "./components/catalog-testimonials-section";
import { CatalogFAQSection } from "./components/catalog-faq-section";
import { CatalogCTASection } from "./components/catalog-cta-section";
import { getFeaturedCatalogs } from "@/sanity/queries";
import { catalogBusinessData } from "@/constants/catalog-data";

export default async function Home() {
  const [data, featuredCatalogs] = await Promise.all([
    fetchHomePageData(),
    getFeaturedCatalogs(),
  ]);

  return (
    <main className="overflow-x-hidden">
      <CatalogHeroSection data={catalogBusinessData.hero} />
      <div id="services">
        <CatalogServicesSection services={catalogBusinessData.services} />
      </div>
      <CatalogTargetAudienceSection audience={catalogBusinessData.targetAudience} />
      <div id="how-it-works">
        <CatalogHowItWorksSection steps={catalogBusinessData.howItWorks} />
      </div>
      <CatalogShowcaseSection catalogs={featuredCatalogs} />
      <div id="pricing">
        <CatalogPricingSection pricing={catalogBusinessData.pricing} />
      </div>
      <div id="testimonials">
        <CatalogTestimonialsSection testimonials={catalogBusinessData.testimonials} />
      </div>
      <div id="contact">
        <CatalogCTASection />
      </div>
    </main>
  );
}

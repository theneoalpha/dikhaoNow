import { Metadata } from "next";
import { CatalogsPage } from "./components/catalogs-page";
import { getCatalogs, getCategories } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Digital Catalogs | Browse Local Businesses",
  description:
    "Discover digital catalogs from tiles dealers, marble shops, carpenters, furniture makers, and interior designers in your area.",
  keywords: [
    "digital catalog",
    "tiles dealer",
    "marble shop",
    "carpenter",
    "furniture maker",
    "interior designer",
    "local business",
    "product catalog",
  ],
};

export default async function CatalogsPageRoute() {
  const [catalogs, categories] = await Promise.all([
    getCatalogs(),
    getCategories(),
  ]);

  return <CatalogsPage catalogs={catalogs} categories={categories} />;
}

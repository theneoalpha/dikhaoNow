import { Metadata } from "next";
import { SearchPage } from "./components/search-page";
import { searchCatalogs, getCategories } from "@/sanity/queries";

interface SearchPageProps {
  searchParams: Promise<{ q?: string; type?: string; city?: string }>;
}

export const metadata: Metadata = {
  title: "Search Digital Catalogs | Find Local Businesses",
  description: "Search for tiles dealers, marble shops, carpenters, furniture makers, and more local businesses with digital catalogs.",
  keywords: [
    "search catalogs",
    "find businesses",
    "local dealers",
    "tiles marble furniture",
    "digital catalog search"
  ],
};

export default async function SearchPageRoute({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const { q: searchTerm = "", type: businessType = "", city = "" } = params;

  const [searchResults, categories] = await Promise.all([
    searchTerm ? searchCatalogs(searchTerm) : Promise.resolve([]),
    getCategories(),
  ]);

  return (
    <SearchPage
      initialSearchTerm={searchTerm}
      initialBusinessType={businessType}
      initialCity={city}
      searchResults={searchResults}
      categories={categories}
    />
  );
}
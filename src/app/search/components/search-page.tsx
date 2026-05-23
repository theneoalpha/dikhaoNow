"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, Phone, MessageCircle, Filter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { searchCatalogs } from "@/sanity/queries";

interface Catalog {
  _id: string;
  title: string;
  slug: string;
  businessType: string;
  businessName: string;
  ownerName: string;
  description?: string;
  coverImage?: string;
  logo?: string;
  location: {
    city?: string;
    state?: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
  };
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  businessType: string;
}

interface SearchPageProps {
  initialSearchTerm: string;
  initialBusinessType: string;
  initialCity: string;
  searchResults: Catalog[];
  categories: Category[];
}

const businessTypeLabels = {
  tiles: "Tiles Dealer",
  marble: "Marble & Sanitary",
  carpenter: "Carpenter",
  furniture: "Furniture Maker",
  kitchen: "Modular Kitchen",
  interior: "Interior Designer",
  hardware: "Hardware Store",
  paint: "Paint Shop",
};

export function SearchPage({
  initialSearchTerm,
  initialBusinessType,
  initialCity,
  searchResults: initialResults,
  categories,
}: SearchPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [businessType, setBusinessType] = useState(initialBusinessType);
  const [city, setCity] = useState(initialCity);
  const [results, setResults] = useState<Catalog[]>(initialResults);
  const [isLoading, setIsLoading] = useState(false);

  // Get unique business types and cities from categories and results
  const businessTypes = useMemo(() => {
    const types = [...new Set(categories.map(c => c.businessType))];
    return types.sort();
  }, [categories]);

  const cities = useMemo(() => {
    const cityList = results
      .map(c => c.location.city)
      .filter(Boolean)
      .filter((city, index, arr) => arr.indexOf(city) === index);
    return cityList.sort();
  }, [results]);

  // Perform search
  const performSearch = async (term: string) => {
    if (!term.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const searchResults = await searchCatalogs(term);
      setResults(searchResults);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Update URL params
  const updateURL = (newSearchTerm: string, newBusinessType: string, newCity: string) => {
    const params = new URLSearchParams();
    if (newSearchTerm) params.set('q', newSearchTerm);
    if (newBusinessType) params.set('type', newBusinessType);
    if (newCity) params.set('city', newCity);
    
    const queryString = params.toString();
    router.push(`/search${queryString ? `?${queryString}` : ''}`);
  };

  // Handle search input
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchTerm);
    updateURL(searchTerm, businessType, city);
  };

  // Filter results based on selected filters
  const filteredResults = useMemo(() => {
    return results.filter(catalog => {
      const matchesBusinessType = !businessType || catalog.businessType === businessType;
      const matchesCity = !city || catalog.location.city === city;
      return matchesBusinessType && matchesCity;
    });
  }, [results, businessType, city]);

  const handleWhatsAppClick = (phone: string, businessName: string) => {
    const message = encodeURIComponent(`Hi! I found your business ${businessName} through search. I'm interested in your products.`);
    window.open(`https://wa.me/91${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)]">
      {/* Header */}
      <Section className="pt-32 pb-8">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center text-white/70 hover:text-white transition-colors mr-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Catalogs</span>
          </h1>
        </div>

        {/* Search Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSearch}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search businesses, products, or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Business Type Filter */}
            <select
              value={businessType}
              onChange={(e) => {
                setBusinessType(e.target.value);
                updateURL(searchTerm, e.target.value, city);
              }}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-400"
            >
              <option value="">All Business Types</option>
              {businessTypes.map(type => (
                <option key={type} value={type} className="bg-gray-900">
                  {businessTypeLabels[type as keyof typeof businessTypeLabels] || type}
                </option>
              ))}
            </select>

            {/* Search Button */}
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Searching..." : "Search"}
            </Button>
          </div>
        </motion.form>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {searchTerm && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Search Results for "{searchTerm}"
              </h2>
              <p className="text-white/60">
                Found {filteredResults.length} businesses
              </p>
            </div>
          )}

          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map((catalog, index) => (
                <motion.div
                  key={catalog._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300"
                >
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden">
                    {catalog.coverImage ? (
                      <Image
                        src={catalog.coverImage}
                        alt={catalog.businessName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <div className="text-white/40 text-4xl font-bold">
                          {catalog.businessName.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                          {catalog.businessName}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {businessTypeLabels[catalog.businessType as keyof typeof businessTypeLabels] || catalog.businessType}
                        </p>
                      </div>
                      {catalog.logo && (
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10">
                          <Image
                            src={catalog.logo}
                            alt={`${catalog.businessName} logo`}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {catalog.description && (
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {catalog.description}
                      </p>
                    )}

                    {/* Location */}
                    {(catalog.location.city || catalog.location.state) && (
                      <div className="flex items-center text-white/60 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {catalog.location.city}{catalog.location.city && catalog.location.state && ", "}{catalog.location.state}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link href={`/catalogs/${catalog.slug}`} className="flex-1">
                        <Button className="w-full">
                          View Catalog
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleWhatsAppClick(catalog.contact.whatsapp, catalog.businessName)}
                        className="px-3"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : searchTerm ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-white/40 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-white/60 mb-6">
                Try searching with different keywords or check your spelling.
              </p>
              <Link href="/catalogs">
                <Button>Browse All Catalogs</Button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-white/40 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Start Your Search</h3>
              <p className="text-white/60 mb-6">
                Enter keywords to find local businesses and their digital catalogs.
              </p>
              <Link href="/catalogs">
                <Button>Browse All Catalogs</Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </Section>
    </div>
  );
}
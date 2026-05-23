"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, Phone, MessageCircle, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

interface Catalog {
  _id: string;
  title: string;
  slug: string;
  businessType: string;
  businessName: string;
  ownerName: string;
  description: string;
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
  featured?: boolean;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  businessType: string;
}

interface CatalogsPageProps {
  catalogs: Catalog[];
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

export function CatalogsPage({ catalogs, categories }: CatalogsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get unique business types and cities
  const businessTypes = useMemo(() => {
    const types = [...new Set(catalogs.map(c => c.businessType))];
    return types.sort();
  }, [catalogs]);

  const cities = useMemo(() => {
    const cityList = catalogs
      .map(c => c.location.city)
      .filter(Boolean)
      .filter((city, index, arr) => arr.indexOf(city) === index);
    return cityList.sort();
  }, [catalogs]);

  // Filter catalogs
  const filteredCatalogs = useMemo(() => {
    return catalogs.filter(catalog => {
      const matchesSearch = 
        catalog.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        catalog.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        catalog.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBusinessType = 
        selectedBusinessType === "all" || catalog.businessType === selectedBusinessType;
      
      const matchesCity = 
        selectedCity === "all" || catalog.location.city === selectedCity;

      return matchesSearch && matchesBusinessType && matchesCity;
    });
  }, [catalogs, searchTerm, selectedBusinessType, selectedCity]);

  const handleWhatsAppClick = (phone: string, businessName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in your products from ${businessName}. Can you please share more details?`);
    window.open(`https://wa.me/91${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)]">
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Catalogs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Browse digital catalogs from local businesses. Find tiles, marble, furniture, and more from trusted dealers in your area.
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Business Type Filter */}
            <select
              value={selectedBusinessType}
              onChange={(e) => setSelectedBusinessType(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-400"
            >
              <option value="all">All Business Types</option>
              {businessTypes.map(type => (
                <option key={type} value={type} className="bg-gray-900">
                  {businessTypeLabels[type as keyof typeof businessTypeLabels] || type}
                </option>
              ))}
            </select>

            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-400"
            >
              <option value="all">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city} className="bg-gray-900">
                  {city}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "primary" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex-1"
              >
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "primary" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex-1"
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          <div className="text-white/60 text-sm">
            Showing {filteredCatalogs.length} of {catalogs.length} businesses
          </div>
        </motion.div>

        {/* Catalogs Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
          }
        >
          {filteredCatalogs.map((catalog, index) => (
            <motion.div
              key={catalog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {catalog.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Cover Image */}
              <div className={`relative ${viewMode === "list" ? "w-48 h-32" : "h-48"} overflow-hidden`}>
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
              <div className="p-6 flex-1">
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`tel:${catalog.contact.phone}`, '_self')}
                    className="px-3"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCatalogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-white/40 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No catalogs found</h3>
            <p className="text-white/60">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </Section>
    </div>
  );
}
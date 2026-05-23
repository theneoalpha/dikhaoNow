"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Mail, 
  Globe, 
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  Star,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

interface Product {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  images: Array<{
    url: string;
    alt?: string;
    caption?: string;
  }>;
  category: {
    name: string;
    slug: string;
  };
  specifications?: Array<{
    label: string;
    value: string;
  }>;
  pricing?: {
    priceRange?: string;
    unit?: string;
    customUnit?: string;
    showPrice?: boolean;
  };
  availability?: {
    inStock?: boolean;
    stockQuantity?: number;
    leadTime?: string;
  };
  tags?: string[];
  featured?: boolean;
}

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
  location?: {
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
    website?: string;
  };
  workingHours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  categories?: Array<{
    _id: string;
    name: string;
    slug: string;
    description?: string;
    icon?: string;
  }>;
}

interface CatalogDetailPageProps {
  catalog: Catalog;
  products: Product[];
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

export function CatalogDetailPage({ catalog, products }: CatalogDetailPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showContactModal, setShowContactModal] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === "all" || product.category.slug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const handleWhatsAppClick = (message?: string) => {
    const defaultMessage = `Hi! I'm interested in your products from ${catalog.businessName}. Can you please share more details?`;
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    window.open(`https://wa.me/91${catalog.contact.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${catalog.businessName} - Digital Catalog`,
          text: catalog.description || `Check out products from ${catalog.businessName}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)]">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/catalogs" className="flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Catalogs
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Business Header */}
      <Section className="pt-8 pb-8">
        <div className="relative">
          {/* Cover Image */}
          {catalog.coverImage && (
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <Image
                src={catalog.coverImage}
                alt={catalog.businessName}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          )}

          {/* Business Info */}
          <div className="relative -mt-16 md:-mt-20 z-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                {catalog.logo && (
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-white/20 flex-shrink-0">
                    <Image
                      src={catalog.logo}
                      alt={`${catalog.businessName} logo`}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {catalog.businessName}
                      </h1>
                      <p className="text-purple-400 text-lg mb-2">
                        {businessTypeLabels[catalog.businessType as keyof typeof businessTypeLabels] || catalog.businessType}
                      </p>
                      <p className="text-white/70 mb-4">
                        Owner: {catalog.ownerName}
                      </p>
                      {catalog.description && (
                        <p className="text-white/80 max-w-2xl">
                          {catalog.description}
                        </p>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        onClick={() => handleWhatsAppClick()}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.open(`tel:${catalog.contact.phone}`, '_self')}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Contact Info & Working Hours */}
      <Section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white/70">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <span>{catalog.contact.phone}</span>
              </div>
              <div className="flex items-center text-white/70">
                <MessageCircle className="w-5 h-5 mr-3 text-green-400" />
                <span>{catalog.contact.whatsapp}</span>
              </div>
              {catalog.contact.email && (
                <div className="flex items-center text-white/70">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>{catalog.contact.email}</span>
                </div>
              )}
              {catalog.contact.website && (
                <div className="flex items-center text-white/70">
                  <Globe className="w-5 h-5 mr-3 text-cyan-400" />
                  <a href={catalog.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          {catalog.location && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
              <div className="flex items-start text-white/70">
                <MapPin className="w-5 h-5 mr-3 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  {catalog.location.address && (
                    <p className="mb-1">{catalog.location.address}</p>
                  )}
                  <p>
                    {catalog.location.city}{catalog.location.city && catalog.location.state && ", "}{catalog.location.state}
                  </p>
                  {catalog.location.pincode && (
                    <p className="text-white/50 text-sm mt-1">PIN: {catalog.location.pincode}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Working Hours */}
          {catalog.workingHours && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
              <div className="space-y-2">
                {Object.entries(catalog.workingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-white/70 capitalize">{day}:</span>
                    <span className="text-white/90">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Social Media */}
        {catalog.socialMedia && (
          <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {catalog.socialMedia.facebook && (
                <a
                  href={catalog.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Facebook
                </a>
              )}
              {catalog.socialMedia.instagram && (
                <a
                  href={catalog.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-600/20 border border-pink-600/30 rounded-lg text-pink-400 hover:bg-pink-600/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Instagram
                </a>
              )}
              {catalog.socialMedia.youtube && (
                <a
                  href={catalog.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-lg text-red-400 hover:bg-red-600/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  YouTube
                </a>
              )}
            </div>
          </div>
        )}
      </Section>

      {/* Products Section */}
      <Section className="py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">
            Our Products
            <span className="text-white/60 text-lg font-normal ml-2">
              ({filteredProducts.length} items)
            </span>
          </h2>
        </div>

        {/* Product Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-400"
            >
              <option value="all">All Categories</option>
              {catalog.categories?.map(category => (
                <option key={category._id} value={category.slug} className="bg-gray-900">
                  {category.name}
                </option>
              ))}
            </select>

            {/* View Mode */}
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
        </div>
        {/* Products Grid/List */}
        {filteredProducts.length > 0 ? (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                {product.featured && (
                  <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}

                {/* Product Image */}
                <div className={`relative ${viewMode === "list" ? "w-48 h-32" : "h-48"} overflow-hidden`}>
                  {product.images[0] ? (
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].alt || product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <div className="text-white/40 text-2xl font-bold">
                        {product.name.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  {/* Availability Badge */}
                  {product.availability && (
                    <div className="absolute top-3 right-3">
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        product.availability.inStock 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}>
                        {product.availability.inStock ? "In Stock" : "Out of Stock"}
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {product.category.name}
                    </p>
                  </div>

                  {product.description && (
                    <p className="text-white/70 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  {/* Pricing */}
                  {product.pricing?.showPrice && product.pricing.priceRange && (
                    <div className="mb-3">
                      <span className="text-purple-400 font-semibold">
                        {product.pricing.priceRange}
                      </span>
                      {product.pricing.unit && (
                        <span className="text-white/60 text-sm ml-1">
                          per {product.pricing.customUnit || product.pricing.unit}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {product.tags && product.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {product.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded-full">
                          +{product.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      onClick={() => handleWhatsAppClick(`Hi! I'm interested in ${product.name} from your catalog. Can you please share more details and pricing?`)}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Inquire
                    </Button>
                    {product.images.length > 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="px-3"
                        onClick={() => {
                          // TODO: Open image gallery modal
                        }}
                      >
                        +{product.images.length - 1}
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-white/40 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-white/60">Try adjusting your search criteria or check back later for new products.</p>
          </motion.div>
        )}
      </Section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => handleWhatsAppClick()}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
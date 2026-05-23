"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle, Star } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

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

interface CatalogShowcaseSectionProps {
  catalogs: Catalog[];
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

const businessTypeIcons = {
  tiles: "🏠",
  marble: "🚿",
  carpenter: "🔨",
  furniture: "🪑",
  kitchen: "🍳",
  interior: "🎨",
  hardware: "🔧",
  paint: "🎨",
};

export function CatalogShowcaseSection({
  catalogs,
}: CatalogShowcaseSectionProps) {
  const handleWhatsAppClick = (phone: string, businessName: string) => {
    const message = encodeURIComponent(
      `Hi! I found your business ${businessName} on the digital catalog platform. I'm interested in your products. Can you please share more details?`,
    );
    window.open(
      `https://wa.me/91${phone.replace(/\D/g, "")}?text=${message}`,
      "_blank",
    );
  };

  return (
    <Section id="catalogs" spacing="lg" className="relative">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_62%)] blur-3xl" />

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2  border  rounded-full  text-sm mb-6"
        >
          <Star className="w-4 h-4 text-primary" />
          Featured Digital Catalogs
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold  mb-6"
        >
          Browse Local{" "}
          <span className="text-transparent bg-clip-text bg-primary">
            Businesses
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl  max-w-2xl mx-auto"
        >
          Discover digital catalogs from trusted local businesses. From tiles
          and marble to furniture and interior design - find everything you need
          in one place.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {catalogs.map((catalog, index) => (
          <motion.div
            key={catalog._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  <div className="text-6xl">
                    {businessTypeIcons[
                      catalog.businessType as keyof typeof businessTypeIcons
                    ] || "🏪"}
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Business Type Badge */}
              <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-white text-xs">
                {businessTypeLabels[
                  catalog.businessType as keyof typeof businessTypeLabels
                ] || catalog.businessType}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {catalog.businessName}
                  </h3>
                  <p className="text-white/60 text-sm">
                    Owner: {catalog.ownerName}
                  </p>
                </div>
                {catalog.logo && (
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
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
                  {catalog.location.city}
                  {catalog.location.city && catalog.location.state && ", "}
                  {catalog.location.state}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <Link href={`/catalogs/${catalog.slug}`} className="flex-1">
                  <Button className="w-full group">
                    View Catalog
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleWhatsAppClick(
                      catalog.contact.whatsapp,
                      catalog.businessName,
                    )
                  }
                  className="px-3 bg-green-600/20 border-green-600/30 text-green-400 hover:bg-green-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/catalogs">
          <Button size="lg" className="group">
            View All Catalogs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}

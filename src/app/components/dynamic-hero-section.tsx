"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Store, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";
import { SearchBar } from "@/components/search-bar";
import { useState } from "react";

interface DynamicHeroSectionProps {
  niche: {
    heroSection: {
      title: string;
      subtitle: string;
      ctaText: string;
      badge?: string;
      heroImage?: string;
    };
    targetAudience: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  siteSettings: any;
}

export function DynamicHeroSection({ niche, siteSettings }: DynamicHeroSectionProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)]" />
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.3),transparent_50%)]" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(203,161,53,0.2),transparent_50%)]" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {niche.heroSection.badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm mb-6"
              >
                <Star className="w-4 h-4 text-[var(--primary)]" />
                {niche.heroSection.badge}
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {niche.heroSection.title.split(' ').map((word, index) => (
                <span key={index} className={
                  word.toLowerCase().includes('digital') || 
                  word.toLowerCase().includes('catalog') ||
                  word.toLowerCase().includes('business') ||
                  word.toLowerCase().includes('online')
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                    : ""
                }>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {niche.heroSection.subtitle}
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <SearchBar 
                placeholder="Search for businesses, products, or services..."
                className="max-w-md mx-auto lg:mx-0"
              />
              <p className="text-white/50 text-sm mt-2 text-center lg:text-left">
                Find local businesses and their digital catalogs
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {niche.heroSection.ctaText}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="/catalogs">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-white/20 text-white hover:bg-white/10"
                >
                  <Store className="w-5 h-5 mr-2" />
                  Browse Catalogs
                </Button>
              </Link>
            </motion.div>

            {/* Target Audience Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                <div className="text-white/60 text-sm">Local Businesses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-pink-400 mb-1">{niche.targetAudience.length}+</div>
                <div className="text-white/60 text-sm">Business Types</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-cyan-400 mb-1">10K+</div>
                <div className="text-white/60 text-sm">Products</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {niche.heroSection.heroImage ? (
              <div className="relative">
                <Image
                  src={niche.heroSection.heroImage}
                  alt="Digital Catalog Platform"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            ) : (
              <div className="relative">
                {/* Dynamic Business Showcase */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {niche.targetAudience.slice(0, 4).map((audience, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-white/10">
                        <div className="text-2xl mb-2">{audience.icon}</div>
                        <div className="text-white text-sm font-medium">{audience.title}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">🏪</span>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Sample Business Catalog</div>
                        <div className="text-white/60 text-xs">Digital Catalog • QR Enabled</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-lg border border-white/10" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
                >
                  <Search className="w-6 h-6" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg"
                >
                  <Store className="w-6 h-6" />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brandMark={siteSettings?.brandMark}
        booking={siteSettings?.booking}
      />
    </section>
  );
}
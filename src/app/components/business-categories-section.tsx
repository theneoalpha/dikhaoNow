"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Store } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  businessType: string;
}

interface BusinessCategoriesSectionProps {
  categories: Category[];
}

const businessTypeLabels = {
  tiles: "Tiles Dealers",
  marble: "Marble & Sanitary",
  carpenter: "Carpenters",
  furniture: "Furniture Makers",
  kitchen: "Modular Kitchen",
  interior: "Interior Designers",
  hardware: "Hardware Stores",
  paint: "Paint Shops",
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

const businessTypeColors = {
  tiles: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  marble: "from-gray-500/20 to-slate-500/20 border-gray-500/30",
  carpenter: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  furniture: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  kitchen: "from-red-500/20 to-pink-500/20 border-red-500/30",
  interior: "from-purple-500/20 to-violet-500/20 border-purple-500/30",
  hardware: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
  paint: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30",
};

export function BusinessCategoriesSection({ categories }: BusinessCategoriesSectionProps) {
  // Group categories by business type
  const groupedCategories = categories.reduce((acc, category) => {
    if (!acc[category.businessType]) {
      acc[category.businessType] = [];
    }
    acc[category.businessType].push(category);
    return acc;
  }, {} as Record<string, Category[]>);

  return (
    <Section id="categories" spacing="lg" className="relative">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_62%)] blur-3xl" />
      
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm mb-6"
        >
          <Store className="w-4 h-4 text-purple-400" />
          Business Categories
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Business Type</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/70 max-w-2xl mx-auto"
        >
          Explore digital catalogs organized by business categories. From construction materials to interior design - find exactly what you're looking for.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Object.entries(groupedCategories).map(([businessType, typeCategories], index) => (
          <motion.div
            key={businessType}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <Link href={`/catalogs?type=${businessType}`}>
              <div className={`relative bg-gradient-to-br ${businessTypeColors[businessType as keyof typeof businessTypeColors] || 'from-gray-500/20 to-slate-500/20 border-gray-500/30'} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}>
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {businessTypeIcons[businessType as keyof typeof businessTypeIcons] || "🏪"}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {businessTypeLabels[businessType as keyof typeof businessTypeLabels] || businessType}
                </h3>
                
                {/* Category Count */}
                <p className="text-white/60 text-sm mb-4">
                  {typeCategories.length} categories available
                </p>
                
                {/* Categories Preview */}
                <div className="space-y-1 mb-4">
                  {typeCategories.slice(0, 3).map((category) => (
                    <div key={category._id} className="text-white/70 text-xs">
                      • {category.name}
                    </div>
                  ))}
                  {typeCategories.length > 3 && (
                    <div className="text-white/50 text-xs">
                      +{typeCategories.length - 3} more
                    </div>
                  )}
                </div>
                
                {/* Arrow */}
                <div className="flex items-center text-white/60 group-hover:text-white transition-colors">
                  <span className="text-sm mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">
            {Object.keys(groupedCategories).length}+
          </div>
          <div className="text-white/70">Business Types</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400 mb-2">
            {categories.length}+
          </div>
          <div className="text-white/70">Product Categories</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            500+
          </div>
          <div className="text-white/70">Local Businesses</div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/catalogs">
          <Button size="lg" className="group">
            Browse All Catalogs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
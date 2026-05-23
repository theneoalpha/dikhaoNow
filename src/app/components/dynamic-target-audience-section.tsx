"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DynamicTargetAudienceSectionProps {
  niche: {
    targetAudience: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    businessTypes: Array<{
      name: string;
      value: string;
      description?: string;
      icon: string;
      color: string;
    }>;
  };
}

const colorClasses = {
  blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  purple: "from-purple-500/20 to-violet-500/20 border-purple-500/30",
  pink: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
  orange: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
  red: "from-red-500/20 to-pink-500/20 border-red-500/30",
  cyan: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  yellow: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
};

export function DynamicTargetAudienceSection({ niche }: DynamicTargetAudienceSectionProps) {
  return (
    <Section id="audience" spacing="lg" className="relative">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_62%)] blur-3xl" />
      
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm mb-6"
        >
          <Users className="w-4 h-4 text-purple-400" />
          Who We Serve
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Perfect for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Local Businesses</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/70 max-w-2xl mx-auto"
        >
          We specialize in helping offline businesses transform their traditional catalogs into powerful digital experiences
        </motion.p>
      </div>

      {/* Target Audience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {niche.targetAudience.map((audience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{audience.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
              {audience.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {audience.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Business Types */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white text-center mb-8"
        >
          Supported Business Categories
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {niche.businessTypes.map((businessType, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/catalogs?type=${businessType.value}`}>
                <div className={`relative bg-gradient-to-br ${colorClasses[businessType.color as keyof typeof colorClasses] || colorClasses.blue} backdrop-blur-sm border rounded-2xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer text-center`}>
                  <div className="text-3xl mb-2">{businessType.icon}</div>
                  <h4 className="text-white font-medium text-sm mb-1">{businessType.name}</h4>
                  {businessType.description && (
                    <p className="text-white/60 text-xs">{businessType.description}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
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
            {niche.businessTypes.length}+
          </div>
          <div className="text-white/70">Business Categories</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-400 mb-2">
            500+
          </div>
          <div className="text-white/70">Active Businesses</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            10K+
          </div>
          <div className="text-white/70">Products Listed</div>
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
            Explore Business Catalogs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  ToggleLeft,
  ToggleRight,
  Save,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

interface Niche {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  isActive: boolean;
  sortOrder: number;
}

interface NicheManagerProps {
  niches: Niche[];
}

export function NicheManager({ niches }: NicheManagerProps) {
  const [editingNiche, setEditingNiche] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const activeNiche = niches.find((n) => n.isActive);

  const handleToggleActive = async (nicheId: string) => {
    // In a real app, this would make an API call to update the niche
    console.log("Toggle active status for niche:", nicheId);
  };

  const handleDeleteNiche = async (nicheId: string) => {
    if (
      confirm(
        "Are you sure you want to delete this niche? This action cannot be undone.",
      )
    ) {
      // In a real app, this would make an API call to delete the niche
      console.log("Delete niche:", nicheId);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <Section className="pt-32 pb-16">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Business Niche Manager
              </h1>
              <p className="text-white/70">
                Manage your business niches and website content dynamically
              </p>
            </div>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Niche
            </Button>
          </div>
        </div>

        {/* Active Niche Status */}
        {activeNiche && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{activeNiche.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-green-400 mb-1">
                  Currently Active: {activeNiche.name}
                </h3>
                <p className="text-green-300/80">{activeNiche.description}</p>
              </div>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                LIVE
              </div>
            </div>
          </motion.div>
        )}

        {/* Niches List */}
        <div className="space-y-4">
          {niches.map((niche, index) => (
            <motion.div
              key={niche._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                niche.isActive
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-white/10 hover:border-purple-400/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-3xl">{niche.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {niche.name}
                      </h3>
                      {niche.isActive && (
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-white/70 mb-2">{niche.description}</p>
                    <div className="text-white/50 text-sm">
                      Slug: /{niche.slug} • Sort Order: {niche.sortOrder}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleToggleActive(niche._id)}
                    className={
                      niche.isActive ? "text-green-400" : "text-white/60"
                    }
                  >
                    {niche.isActive ? (
                      <ToggleRight className="w-5 h-5" />
                    ) : (
                      <ToggleLeft className="w-5 h-5" />
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingNiche(niche._id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      window.open(`/?preview=${niche.slug}`, "_blank")
                    }
                  >
                    <Eye className="w-4 h-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteNiche(niche._id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {niches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-white/40 text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No Business Niches Found
            </h3>
            <p className="text-white/60 mb-6">
              Create your first business niche to start customizing your website
              content.
            </p>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Niche
            </Button>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6"
        >
          <h4 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            How Business Niches Work
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-300 text-sm">
            <div>
              <h5 className="font-medium mb-2">🎯 Dynamic Content</h5>
              <p>
                Each niche defines different hero sections, services, target
                audiences, and business types. When a niche is active, your
                website automatically adapts to show relevant content.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">🔄 Easy Switching</h5>
              <p>
                Toggle between niches instantly. Only one niche can be active at
                a time. Perfect for pivoting your business focus or testing
                different market approaches.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">📊 Future-Proof</h5>
              <p>
                Add new niches anytime without changing code. Each niche can
                have its own business types, services, and target audiences.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">🎨 Customizable</h5>
              <p>
                Each niche includes hero content, services list, target
                audience, business categories, and call-to-action sections.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sample Niches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6"
        >
          <h4 className="text-purple-400 font-semibold mb-4">
            💡 Sample Business Niches
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">🏪</div>
              <h5 className="text-white font-medium mb-1">Digital Catalogs</h5>
              <p className="text-white/70">
                For offline businesses wanting digital product catalogs
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">🛒</div>
              <h5 className="text-white font-medium mb-1">
                E-commerce Solutions
              </h5>
              <p className="text-white/70">
                Full online stores with payment integration
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-2xl mb-2">📱</div>
              <h5 className="text-white font-medium mb-1">Mobile Apps</h5>
              <p className="text-white/70">
                Custom mobile applications for businesses
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

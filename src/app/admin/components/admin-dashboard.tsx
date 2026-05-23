"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Store,
  MessageSquare,
  TrendingUp,
  Calendar,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

interface AdminDashboardProps {
  catalogs: any[];
  inquiries: any[];
  analytics: {
    totalCatalogs: number;
    totalInquiries: number;
    totalProducts: number;
    monthlyGrowth: number;
  };
}

export function AdminDashboard({
  catalogs,
  inquiries,
  analytics,
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "catalogs", label: "Catalogs", icon: Store },
    { id: "inquiries", label: "Inquiries", icon: MessageSquare },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
  ];

  const recentInquiries = inquiries.slice(0, 5);
  const recentCatalogs = catalogs.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)]">
      <Section className="pt-32 pb-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-white/70">Manage your digital catalog platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Store className="w-8 h-8 text-purple-400" />
              <span className="text-green-400 text-sm font-medium">+12%</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {analytics.totalCatalogs}
            </div>
            <div className="text-white/60 text-sm">Total Catalogs</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <span className="text-green-400 text-sm font-medium">+8%</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {analytics.totalInquiries}
            </div>
            <div className="text-white/60 text-sm">Total Inquiries</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-pink-400" />
              <span className="text-green-400 text-sm font-medium">+15%</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {analytics.totalProducts}
            </div>
            <div className="text-white/60 text-sm">Total Products</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-green-400 text-sm font-medium">
                +{analytics.monthlyGrowth}%
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {analytics.monthlyGrowth}%
            </div>
            <div className="text-white/60 text-sm">Monthly Growth</div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 mb-8">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Inquiries */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Recent Inquiries
                  </h3>
                  <Button size="sm" variant="outline">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentInquiries.map((inquiry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-primary rounded-lg"
                    >
                      <div>
                        <div className="text-white font-medium">
                          {inquiry.customerName}
                        </div>
                        <div className="text-white/60 text-sm">
                          {inquiry.inquiryType}
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-xs px-2 py-1 rounded-full ${
                            inquiry.status === "new"
                              ? "bg-blue-500/20 text-blue-400"
                              : inquiry.status === "in-progress"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {inquiry.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Catalogs */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Recent Catalogs
                  </h3>
                  <Button size="sm" variant="outline">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentCatalogs.map((catalog, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                    >
                      <div>
                        <div className="text-white font-medium">
                          {catalog.businessName}
                        </div>
                        <div className="text-white/60 text-sm">
                          {catalog.businessType}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "catalogs" && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Manage Catalogs
                </h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button size="sm">Add Catalog</Button>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search catalogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Catalogs Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white/70 font-medium py-3">
                        Business Name
                      </th>
                      <th className="text-left text-white/70 font-medium py-3">
                        Type
                      </th>
                      <th className="text-left text-white/70 font-medium py-3">
                        Location
                      </th>
                      <th className="text-left text-white/70 font-medium py-3">
                        Status
                      </th>
                      <th className="text-left text-white/70 font-medium py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {catalogs.slice(0, 10).map((catalog, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-3 text-white">
                          {catalog.businessName}
                        </td>
                        <td className="py-3 text-white/70">
                          {catalog.businessType}
                        </td>
                        <td className="py-3 text-white/70">
                          {catalog.location?.city}
                        </td>
                        <td className="py-3">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              catalog.isActive
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {catalog.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Manage Inquiries
                </h3>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              {/* Inquiries List */}
              <div className="space-y-4">
                {inquiries.slice(0, 10).map((inquiry, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-medium">
                          {inquiry.customerName}
                        </h4>
                        <p className="text-white/60 text-sm">
                          {inquiry.customerPhone}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            inquiry.status === "new"
                              ? "bg-blue-500/20 text-blue-400"
                              : inquiry.status === "in-progress"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {inquiry.status}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            inquiry.priority === "high"
                              ? "bg-red-500/20 text-red-400"
                              : inquiry.priority === "medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {inquiry.priority}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mb-3">
                      {inquiry.message}
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm">Respond</Button>
                      <Button size="sm" variant="outline">
                        Mark as Read
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Growth Metrics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">
                      New Catalogs This Month
                    </span>
                    <span className="text-green-400 font-semibold">+12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Total Inquiries</span>
                    <span className="text-blue-400 font-semibold">
                      {analytics.totalInquiries}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Conversion Rate</span>
                    <span className="text-purple-400 font-semibold">24%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Popular Categories
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Tiles Dealers</span>
                    <span className="text-white font-semibold">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Furniture Makers</span>
                    <span className="text-white font-semibold">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Interior Designers</span>
                    <span className="text-white font-semibold">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Others</span>
                    <span className="text-white font-semibold">9%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </Section>
    </div>
  );
}

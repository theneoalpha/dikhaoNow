import { Metadata } from "next";
import { AdminDashboard } from "./components/admin-dashboard";
import { getCatalogs, getCategories } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Admin Dashboard | Digital Catalog Platform",
  description: "Manage catalogs, inquiries, and analytics for the digital catalog platform.",
};

// Mock data for demonstration
const mockInquiries = [
  {
    customerName: "Rajesh Kumar",
    customerPhone: "+91 98765 43210",
    inquiryType: "product",
    message: "Interested in bathroom tiles for my new home",
    status: "new",
    priority: "medium",
  },
  {
    customerName: "Priya Sharma",
    customerPhone: "+91 87654 32109",
    inquiryType: "quote",
    message: "Need price quote for modular kitchen",
    status: "in-progress",
    priority: "high",
  },
  {
    customerName: "Amit Patel",
    customerPhone: "+91 76543 21098",
    inquiryType: "bulk",
    message: "Bulk order for marble flooring",
    status: "converted",
    priority: "high",
  },
];

const mockAnalytics = {
  totalCatalogs: 156,
  totalInquiries: 342,
  totalProducts: 2847,
  monthlyGrowth: 18,
};

export default async function AdminPage() {
  const [catalogs, categories] = await Promise.all([
    getCatalogs(),
    getCategories(),
  ]);

  return (
    <AdminDashboard
      catalogs={catalogs}
      inquiries={mockInquiries}
      analytics={mockAnalytics}
    />
  );
}
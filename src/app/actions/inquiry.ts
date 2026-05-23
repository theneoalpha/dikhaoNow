"use server";

import { client } from "@/sanity/client";

interface InquiryData {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  inquiryType: string;
  catalogId: string;
  productIds?: string[];
  message: string;
  budget?: string;
  projectTimeline?: string;
  source?: string;
}

export async function createInquiry(data: InquiryData) {
  try {
    const inquiry = {
      _type: "inquiry",
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      customerEmail: data.customerEmail,
      inquiryType: data.inquiryType,
      catalog: {
        _type: "reference",
        _ref: data.catalogId,
      },
      products: data.productIds?.map(id => ({
        _type: "reference",
        _ref: id,
      })),
      message: data.message,
      budget: data.budget,
      projectTimeline: data.projectTimeline,
      status: "new",
      priority: "medium",
      source: data.source || "website",
      _createdAt: new Date().toISOString(),
    };

    const result = await client.create(inquiry);
    
    return {
      success: true,
      inquiryId: result._id,
      message: "Inquiry submitted successfully",
    };
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return {
      success: false,
      error: "Failed to submit inquiry. Please try again.",
    };
  }
}

export async function getInquiriesByCatalog(catalogId: string) {
  try {
    const inquiries = await client.fetch(`
      *[_type == "inquiry" && catalog._ref == $catalogId] | order(_createdAt desc) {
        _id,
        customerName,
        customerPhone,
        customerEmail,
        inquiryType,
        message,
        budget,
        projectTimeline,
        status,
        priority,
        source,
        _createdAt,
        "products": products[]-> {
          name,
          "slug": slug.current
        }
      }
    `, { catalogId });

    return {
      success: true,
      inquiries,
    };
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return {
      success: false,
      error: "Failed to fetch inquiries",
      inquiries: [],
    };
  }
}

export async function updateInquiryStatus(inquiryId: string, status: string, notes?: string) {
  try {
    const updates: any = {
      status,
      _updatedAt: new Date().toISOString(),
    };

    if (notes) {
      updates.notes = notes;
    }

    if (status === "follow-up") {
      // Set follow up date to 3 days from now
      const followUpDate = new Date();
      followUpDate.setDate(followUpDate.getDate() + 3);
      updates.followUpDate = followUpDate.toISOString();
    }

    await client.patch(inquiryId).set(updates).commit();

    return {
      success: true,
      message: "Inquiry status updated successfully",
    };
  } catch (error) {
    console.error("Error updating inquiry status:", error);
    return {
      success: false,
      error: "Failed to update inquiry status",
    };
  }
}
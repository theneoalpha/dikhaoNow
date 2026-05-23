import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogDetailPage } from "./components/catalog-detail-page";
import { QRSection } from "./components/qr-section";
import { getCatalogBySlug, getProductsByCatalog } from "@/sanity/queries";

interface CatalogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CatalogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const catalog = await getCatalogBySlug(slug);

  if (!catalog) {
    return {
      title: "Catalog Not Found",
    };
  }

  return {
    title: `${catalog.businessName} | Digital Catalog`,
    description: catalog.description || `Browse products from ${catalog.businessName}, a ${catalog.businessType} business.`,
    keywords: [
      catalog.businessName,
      catalog.businessType,
      catalog.location?.city,
      catalog.location?.state,
      "digital catalog",
      "products",
      "QR code",
      "WhatsApp catalog",
    ].filter(Boolean),
    openGraph: {
      title: `${catalog.businessName} | Digital Catalog`,
      description: catalog.description || `Browse products from ${catalog.businessName}`,
      images: catalog.coverImage ? [{ url: catalog.coverImage }] : [],
    },
  };
}

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { slug } = await params;
  const [catalog, products] = await Promise.all([
    getCatalogBySlug(slug),
    getCatalogBySlug(slug).then(catalog => 
      catalog ? getProductsByCatalog(catalog._id) : []
    ),
  ]);

  if (!catalog) {
    notFound();
  }

  return (
    <>
      <CatalogDetailPage catalog={catalog} products={products} />
      <QRSection catalog={catalog} />
    </>
  );
}
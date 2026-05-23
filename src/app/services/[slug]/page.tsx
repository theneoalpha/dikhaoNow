import { notFound } from "next/navigation";
import { getServiceBySlug } from "./api";
import { ServiceDetailPage } from "./components/service-detail-page";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const data = await getServiceBySlug(slug);

  if (!data) {
    notFound();
  }

  return <ServiceDetailPage data={data} />;
}

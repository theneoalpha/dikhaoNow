import { Metadata } from "next";
import { NicheManager } from "./components/niche-manager";
import { getAllNiches } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Niche Manager | Admin Dashboard",
  description: "Manage business niches and dynamic website content.",
};

export default async function NicheManagerPage() {
  const niches = await getAllNiches();

  return <NicheManager niches={niches} />;
}
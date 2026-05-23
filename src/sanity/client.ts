import { createClient } from "next-sanity";
import { env } from "@/config/env";

export const client = createClient({
  projectId: env.sanity.projectId,
  dataset: env.sanity.dataset,
  apiVersion: env.sanity.apiVersion,
  useCdn: env.sanity.useCdn,
});

import type { ServiceCard } from "@/app/types";

export interface ServiceDetailContent {
  intro: string;
  points: string[];
  outcomes: string[];
  process: string[];
}

export interface ServiceDetailData {
  service: ServiceCard;
  details: ServiceDetailContent;
}

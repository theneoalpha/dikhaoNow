"use client";

import { BookingModal } from "@/components/booking-modal";
import { section } from "framer-motion/client";
import { useState } from "react";

export default function GetCatalogPage() {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Get Your Digital Catalog
      </h1>
      <p className="mb-8 text-center">
        Fill out a short form and we'll create a custom digital catalog for your
        business.
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="btn-primary rounded-full px-8 py-3"
        >
          Open Request Form
        </button>
      </div>
      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
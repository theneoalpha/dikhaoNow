import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories – DikhaoNow",
  description:
    "Read success stories from local businesses that boosted sales using our digital catalogs.",
};

export default function SuccessStoriesPage() {
  return (
    <section className="prose prose-lg max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
      <p>
        This page will showcase case studies and testimonials from businesses
        that have benefited from DikhaoNow’s digital catalog solutions. Content
        will be driven by Sanity CMS.
      </p>
    </section>
  );
}

import { Metadata } from "next";
import { getSiteSettings } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Contact – DikhaoNow",
  description:
    "Get in touch with DikhaoNow for digital catalog solutions. We’ll respond quickly to your inquiry.",
};

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-center mb-8 text-muted">
        Have a question or want a personalized demo? Fill the form below or
        reach us directly.
      </p>
      <form className="grid gap-6" action="/api/contact" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="input"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="input"
          />
        </div>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="input"
        />
        <button type="submit" className="btn-primary self-start">
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center space-y-2">
        {siteSettings?.contactPhone && (
          <p>
            📞 Phone:{" "}
            <a
              href={`tel:${siteSettings.contactPhone}`}
              className="link-primary"
            >
              {siteSettings.contactPhone}
            </a>
          </p>
        )}
        {siteSettings?.contactEmail && (
          <p>
            📧 Email:{" "}
            <a
              href={`mailto:${siteSettings.contactEmail}`}
              className="link-primary"
            >
              {siteSettings.contactEmail}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

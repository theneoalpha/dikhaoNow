import { defineArrayMember, defineField, defineType } from "sanity";
import { env } from "@/config/env";

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  initialValue: {
    brandName: "DikhaoNow",
    brandMark: "S",
    siteUrl: env.site.url,
    contactEmail: env.site.contactEmail,
    contactPhone: env.site.contactPhone,
    address: env.site.address,
    navigation: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Showcase", href: "#showcase" },
      { label: "Why Us", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      { label: "Instagram", href: env.site.instagramUrl },
      { label: "Facebook", href: env.site.facebookUrl },
      { label: "LinkedIn", href: env.site.linkedinUrl },
    ],
  },
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      description: "Used for public links and can override the env default.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "brandMark",
      title: "Brand Mark",
      type: "string",
    }),
    defineField({
      name: "footerTagline",
      title: "Footer Tagline",
      type: "text",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "email",
      description:
        "Shown in the UI. Falls back to NEXT_PUBLIC_CONTACT_EMAIL from env.",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
      description:
        "Shown in the UI. Falls back to NEXT_PUBLIC_CONTACT_PHONE from env.",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      description:
        "Shown in the footer and contact areas. Falls back to NEXT_PUBLIC_CONTACT_ADDRESS from env.",
    }),
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Href",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      description:
        "Shown in the footer. Falls back to the social URLs from env.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "href",
              title: "Href",
              type: "url",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "booking",
      title: "Booking Modal",
      type: "object",
      fields: [
        defineField({
          name: "visualTitle",
          title: "Visual Title",
          type: "string",
        }),
        defineField({
          name: "visualAccent",
          title: "Visual Accent Text",
          type: "string",
        }),
        defineField({
          name: "visualImage",
          title: "Visual Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "highlights",
          title: "Highlights",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "formTitle",
          title: "Form Title",
          type: "string",
        }),
        defineField({
          name: "formDescription",
          title: "Form Description",
          type: "text",
        }),
        defineField({
          name: "submitText",
          title: "Submit Button Text",
          type: "string",
        }),
        defineField({
          name: "successTitle",
          title: "Success Title",
          type: "string",
        }),
        defineField({
          name: "successDescription",
          title: "Success Description",
          type: "text",
        }),
        defineField({
          name: "businessOptions",
          title: "Business Options",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
  ],
});

export default siteSettings;

import { defineField, defineType } from "sanity";

const cta = defineType({
  name: "cta",
  title: "CTA Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    }),
    defineField({
      name: "primaryCtaText",
      title: "Primary CTA Text",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "Secondary CTA Text (Optional)",
      type: "string",
    }),
  ],
});

export default cta;

import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "servicesEyebrow",
      title: "Services Eyebrow",
      type: "string",
    }),
    defineField({
      name: "servicesTitle",
      title: "Services Title",
      type: "string",
    }),
    defineField({
      name: "servicesDescription",
      title: "Services Description",
      type: "text",
    }),
    defineField({
      name: "showcaseEyebrow",
      title: "Showcase Eyebrow",
      type: "string",
    }),
    defineField({
      name: "showcaseTitle",
      title: "Showcase Title",
      type: "string",
    }),
    defineField({
      name: "showcaseDescription",
      title: "Showcase Description",
      type: "text",
    }),
    defineField({
      name: "showcaseFeatures",
      title: "Showcase Features",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "projectsEyebrow",
      title: "Projects Eyebrow",
      type: "string",
    }),
    defineField({
      name: "projectsTitle",
      title: "Projects Title",
      type: "string",
    }),
    defineField({
      name: "projectsDescription",
      title: "Projects Description",
      type: "text",
    }),
    defineField({
      name: "projectsButtonText",
      title: "Projects Button Text",
      type: "string",
    }),
    defineField({
      name: "testimonialsEyebrow",
      title: "Testimonials Eyebrow",
      type: "string",
    }),
    defineField({
      name: "testimonialsTitle",
      title: "Testimonials Title",
      type: "string",
    }),
    defineField({
      name: "testimonialsDescription",
      title: "Testimonials Description",
      type: "text",
    }),
    defineField({
      name: "teamEyebrow",
      title: "Team Eyebrow",
      type: "string",
    }),
    defineField({
      name: "teamTitle",
      title: "Team Title",
      type: "string",
    }),
    defineField({
      name: "teamDescription",
      title: "Team Description",
      type: "text",
    }),
    defineField({
      name: "teamQuote",
      title: "Team Quote",
      type: "text",
    }),
    defineField({
      name: "teamQuoteAuthor",
      title: "Team Quote Author",
      type: "string",
    }),
  ],
});

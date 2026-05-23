import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'catalog',
  title: 'Digital Catalog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Catalog Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'businessType',
      title: 'Business Type',
      type: 'string',
      options: {
        list: [
          { title: 'Tiles Dealer', value: 'tiles' },
          { title: 'Marble & Sanitary', value: 'marble' },
          { title: 'Carpenter', value: 'carpenter' },
          { title: 'Furniture Maker', value: 'furniture' },
          { title: 'Modular Kitchen', value: 'kitchen' },
          { title: 'Interior Designer', value: 'interior' },
          { title: 'Hardware Store', value: 'hardware' },
          { title: 'Paint Shop', value: 'paint' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Business Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logo',
      title: 'Business Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
        }),
        defineField({
          name: 'pincode',
          title: 'Pincode',
          type: 'string',
        }),
        defineField({
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint',
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'whatsapp',
          title: 'WhatsApp Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'email',
        }),
        defineField({
          name: 'website',
          title: 'Website',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Product Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'productCategory' } }],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'object',
      fields: [
        defineField({
          name: 'monday',
          title: 'Monday',
          type: 'string',
          initialValue: '9:00 AM - 8:00 PM',
        }),
        defineField({
          name: 'tuesday',
          title: 'Tuesday',
          type: 'string',
          initialValue: '9:00 AM - 8:00 PM',
        }),
        defineField({
          name: 'wednesday',
          title: 'Wednesday',
          type: 'string',
          initialValue: '9:00 AM - 8:00 PM',
        }),
        defineField({
          name: 'thursday',
          title: 'Thursday',
          type: 'string',
          initialValue: '9:00 AM - 8:00 PM',
        }),
        defineField({
          name: 'friday',
          title: 'Friday',
          type: 'string',
          initialValue: '9:00 AM - 8:00 PM',
        }),
        defineField({
          name: 'saturday',
          title: 'Saturday',
          type: 'string',
          initialValue: '9:00 AM - 8:00 PM',
        }),
        defineField({
          name: 'sunday',
          title: 'Sunday',
          type: 'string',
          initialValue: 'Closed',
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Business',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'businessName',
      subtitle: 'businessType',
      media: 'logo',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle ? `${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)} Business` : 'Business',
        media,
      }
    },
  },
})
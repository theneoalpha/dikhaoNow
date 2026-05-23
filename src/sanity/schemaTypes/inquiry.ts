import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'inquiry',
  title: 'Customer Inquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerPhone',
      title: 'Customer Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'email',
    }),
    defineField({
      name: 'inquiryType',
      title: 'Inquiry Type',
      type: 'string',
      options: {
        list: [
          { title: 'Product Inquiry', value: 'product' },
          { title: 'Price Quote', value: 'quote' },
          { title: 'Bulk Order', value: 'bulk' },
          { title: 'Custom Design', value: 'custom' },
          { title: 'Installation Service', value: 'installation' },
          { title: 'General Inquiry', value: 'general' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'catalog',
      title: 'Related Catalog',
      type: 'reference',
      to: [{ type: 'catalog' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Interested Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'budget',
      title: 'Budget Range',
      type: 'string',
      options: {
        list: [
          { title: 'Under ₹10,000', value: 'under-10k' },
          { title: '₹10,000 - ₹50,000', value: '10k-50k' },
          { title: '₹50,000 - ₹1,00,000', value: '50k-1l' },
          { title: '₹1,00,000 - ₹5,00,000', value: '1l-5l' },
          { title: 'Above ₹5,00,000', value: 'above-5l' },
          { title: 'Prefer not to say', value: 'not-specified' },
        ],
      },
    }),
    defineField({
      name: 'projectTimeline',
      title: 'Project Timeline',
      type: 'string',
      options: {
        list: [
          { title: 'Immediate (Within 1 week)', value: 'immediate' },
          { title: 'Within 1 month', value: '1-month' },
          { title: '1-3 months', value: '1-3-months' },
          { title: '3-6 months', value: '3-6-months' },
          { title: 'Just exploring', value: 'exploring' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Inquiry Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Quote Sent', value: 'quote-sent' },
          { title: 'Follow Up', value: 'follow-up' },
          { title: 'Converted', value: 'converted' },
          { title: 'Closed', value: 'closed' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          { title: 'Low', value: 'low' },
          { title: 'Medium', value: 'medium' },
          { title: 'High', value: 'high' },
          { title: 'Urgent', value: 'urgent' },
        ],
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'source',
      title: 'Inquiry Source',
      type: 'string',
      options: {
        list: [
          { title: 'Website Form', value: 'website' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Phone Call', value: 'phone' },
          { title: 'Walk-in', value: 'walkin' },
          { title: 'Referral', value: 'referral' },
          { title: 'Social Media', value: 'social' },
        ],
      },
      initialValue: 'website',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'followUpDate',
      title: 'Follow Up Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'inquiryType',
      description: 'status',
    },
    prepare(selection) {
      const { title, subtitle, description } = selection
      return {
        title,
        subtitle: subtitle ? `${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)} Inquiry` : 'Inquiry',
        description: description ? `Status: ${description.charAt(0).toUpperCase() + description.slice(1)}` : '',
      }
    },
  },
})
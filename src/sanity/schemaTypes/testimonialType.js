import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: StarIcon,
  fields: [

    // Name
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    // Star Rating (1-5)
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(5)
          .error('Rating must be between 1 and 5')
    }),

    // Message
    defineField({
      name: 'message',
      title: 'Testimonial Message',
      type: 'text',
      rows: 4,
      validation: Rule =>
        Rule.required().max(500)
    }),

    // Image
    defineField({
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),

  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'message',
      media: 'image',
      rating: 'rating'
    },
    prepare(selection) {
      const {title, subtitle, media, rating} = selection
      return {
        title: `${title} (${rating}★)`,
        subtitle,
        media
      }
    }
  }
})
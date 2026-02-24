import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'topic',
      title: 'Project Topic',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Project Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().max(300)
    }),

    defineField({
      name: 'livePreview',
      title: 'Live Preview Link',
      type: 'url'
    }),

    defineField({
      name: 'githubLink',
      title: 'GitHub Repository Link',
      type: 'url'
    }),

    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],

  preview: {
    select: {
      title: 'topic',
      media: 'image'
    }
  }
})
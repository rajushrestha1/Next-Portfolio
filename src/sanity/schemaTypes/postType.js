  import {DocumentTextIcon} from '@sanity/icons'
  import {defineArrayMember, defineField, defineType} from 'sanity'

  export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
      defineField({
        name: 'title',
        type: 'string',
      }),
      defineField({
    name: "slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
      slugify: input =>
        input
          .toLowerCase()
          .replace(/\s+/g, "-")
          .slice(0, 96)
    },
      }),
      defineField({
        name: 'author',
        type: 'reference',
        to: {type: 'author'},
      }),
      defineField({
        name: 'mainImage',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          })
        ]
      }),
      defineField({
        name: 'categories',
        type: 'array',
        of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
      }),
      defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    { type: 'block' }, // standard rich text block
    { type: 'code', title: 'Code Block' } // optional code blocks
  ],
}),
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return {...selection, subtitle: author && `by ${author}`}
      },
    },
  })

import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, CodeIcon} from '@sanity/icons'

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
        // ✅ Text alignment styles
        {title: 'Align Left',    value: 'alignLeft'},
        {title: 'Align Center',  value: 'alignCenter'},
        {title: 'Align Right',   value: 'alignRight'},
        {title: 'Align Justify', value: 'alignJustify'},
      ],
      lists: [
        {title: 'Bullet',   value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code',   value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {title: 'URL', name: 'href', type: 'url'},
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {name: 'alt', type: 'string', title: 'Alternative Text'},
      ],
    }),
    defineArrayMember({
      type: 'code',
      icon: CodeIcon,
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'JSX',        value: 'jsx'},
          {title: 'TSX',        value: 'tsx'},
          {title: 'HTML',       value: 'html'},
          {title: 'CSS',        value: 'css'},
          {title: 'Python',     value: 'python'},
          {title: 'Bash',       value: 'bash'},
          {title: 'JSON',       value: 'json'},
          {title: 'SQL',        value: 'sql'},
        ],
      },
    }),
  ],
})
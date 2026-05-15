import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: RocketIcon,

  fields: [

    // Project Name
    defineField({
      name: "topic",
      title: "Project Topic",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Description
    defineField({
      name: "shortDescription",
      title: "Short Project Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required().max(300),
    }),

    // Thumbnail
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // Live Demo
    defineField({
      name: "livePreview",
      title: "Live Preview Link",
      type: "url",
    }),

    // Github Repo
    defineField({
      name: "githubLink",
      title: "GitHub Repository Link",
      type: "url",
    }),

    // Badge Label
    defineField({
      name: "badge",
      title: "Badge Label",
      type: "string",
      description: 'Example: "Client Work", "Free", "New"',
    }),

    // Badge Emoji
    defineField({
      name: "badgeEmoji",
      title: "Badge Emoji",
      type: "string",
      description: 'Example: "👨‍💻", "🔥"',
    }),

    // Metadata like Visitors / Sales / Stars
    defineField({
      name: "metadata",
      title: "Project Metadata",
      type: "array",

      of: [
        {
          type: "object",
          title: "Metadata Item",

          fields: [

            // Icon
            defineField({
              name: "icon",
              title: "Icon / Emoji",
              type: "string",
              description:
                'Examples: "🟢", "⭐", "⏰", "💰"',
            }),

            // Label
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description:
                'Examples: "8K Visitors", "$400 Earned", "1 month old"',
            }),

          ],

          preview: {
            select: {
              title: "label",
              subtitle: "icon",
            },

            prepare({ title, subtitle }) {
              return {
                title,
                subtitle,
              };
            },
          },
        },
      ],
    }),

    // Technologies Used
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",

      of: [{ type: "string" }],

      options: {
        layout: "tags",
      },

      description:
        'Example: "Next.js", "MongoDB", "Tailwind CSS"',
    }),

    // Featured Project
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),

    // Project Status
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",

      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "In Progress", value: "in-progress" },
          { title: "Maintaining", value: "maintaining" },
        ],

        layout: "dropdown",
      },

      initialValue: "completed",
    }),

    // Created Time
    defineField({
      name: "projectAge",
      title: "Project Age",
      type: "string",
      description: 'Example: "1 month old", "4 months old"',
    }),

    // Visitors
    defineField({
      name: "visitors",
      title: "Visitors",
      type: "string",
      description: 'Example: "8K Visitors"',
    }),

    // Revenue
    defineField({
      name: "revenue",
      title: "Revenue Earned",
      type: "string",
      description: 'Example: "$400 Earned"',
    }),

    // Stars
    defineField({
      name: "stars",
      title: "GitHub Stars",
      type: "string",
      description: 'Example: "40 Stars"',
    }),

    // Sales
    defineField({
      name: "sales",
      title: "Sales",
      type: "string",
      description: 'Example: "138 Sales"',
    }),

    // Color Theme
    defineField({
      name: "themeColor",
      title: "Theme Accent Color",
      type: "string",
      initialValue: "#00ffff",
      description: 'Example: "#00ffff"',
    }),

  ],

  preview: {
    select: {
      title: "topic",
      subtitle: "badge",
      media: "image",
    },

    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
});
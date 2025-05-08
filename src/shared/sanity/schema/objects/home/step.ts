import { defineArrayMember, defineField, defineType } from 'sanity'

export const step = defineType({
    name: 'step',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            placeholder: 'e.g. "Step 1"',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            placeholder: 'e.g. "Request presentation"',
            initialValue: '',
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
        },
    },
})

export const steps = defineType({
    name: 'steps',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Section title',
            placeholder: 'e.g. "How SAS works?"',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'docsLinkTitle',
            type: 'string',
            title: 'Documentation Link Title',
            placeholder: 'e.g. "Read more"',
            initialValue: '',
        }),
        defineField({
            name: 'docsLink',
            type: 'link',
            title: 'Documentation Link',
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [defineArrayMember({ type: 'step' })],
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare: ({ title }) => ({ title: 'Steps', subtitle: title }),
    },
})

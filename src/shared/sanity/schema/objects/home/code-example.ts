import { defineArrayMember, defineField, defineType } from 'sanity'

export const codeExample = defineType({
    name: 'code-examples',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Section title',
            placeholder: 'e.g. "How to integrate"',
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
            of: [defineArrayMember({ type: 'code-file' })],
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare: ({ title }) => ({ title: 'Code Examples', subtitle: title }),
    },
})

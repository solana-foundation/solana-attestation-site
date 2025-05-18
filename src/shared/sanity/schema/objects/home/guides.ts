import { defineField, defineType } from 'sanity'

export const guides = defineType({
    name: 'guides',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Section title',
            placeholder: 'e.g. "Learn with guides"',
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
            name: 'mode',
            type: 'string',
            title: 'Mode',
            description: 'Which documents to display',
            initialValue: 'latest',
            options: {
                list: [
                    { title: 'Latest', value: 'latest' },
                    { title: 'Specific', value: 'specific' },
                ],
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'latestAmount',
            type: 'number',
            title: 'Items count',
            description: 'How many items to display',
            placeholder: 'e.g. "5"',
            initialValue: 5,
            hidden: ({ parent }) => parent?.mode !== 'latest',
            validation: rule =>
                rule.custom((value, { parent }) => {
                    const document = parent as { mode?: string } | undefined
                    if (document?.mode !== 'latest') return true

                    return !value || value < 1 ? 'Items count should be greater than 1' : true
                }),
        }),
        defineField({
            name: 'references',
            type: 'array',
            title: 'Documents',
            of: [
                defineField({
                    name: 'references',
                    type: 'reference',
                    description: 'Pick documents to display',
                    to: [{ type: 'guides' }],
                }),
            ],
            hidden: ({ parent }) => parent?.mode !== 'specific',
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare: ({ title }) => ({ title: 'Guides', subtitle: title }),
    },
})

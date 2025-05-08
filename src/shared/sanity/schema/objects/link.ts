import { defineField, defineType } from 'sanity'

export const link = defineType({
    name: 'link',
    type: 'object',
    fields: [
        defineField({
            name: 'mode',
            type: 'string',
            title: 'Mode',
            initialValue: 'external',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'External URL', value: 'external' },
                    { title: 'Home', value: 'home' },
                    { title: 'Guide List', value: 'guide-list' },
                    { title: 'Guide', value: 'guide' },
                    { title: 'Use Case List', value: 'use-case-list' },
                    { title: 'Use Case', value: 'use-case' },
                ],
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'url',
            type: 'url',
            title: 'Link',
            description: 'URL that will be opened when link is clicked',
            placeholder: `e.g. "https://github.com"`,
            hidden: ({ parent }) => parent?.mode !== 'external',
            validation: rule =>
                rule.custom((value, { parent }) => {
                    const document = parent as { mode?: string } | undefined
                    if (document?.mode !== 'external') return true

                    return !value?.trim() ? 'URL is required' : true
                }),
        }),
        defineField({
            name: 'guide',
            type: 'reference',
            title: 'Link',
            description: 'Guide that will be opened when link is clicked',
            to: [{ type: 'guide' }],
            hidden: ({ parent }) => parent?.mode !== 'guide',
            validation: rule =>
                rule.custom((value, { parent }) => {
                    const document = parent as { mode?: string } | undefined
                    if (document?.mode !== 'guide') return true

                    return !value ? 'Reference is required' : true
                }),
        }),
        defineField({
            name: 'useCase',
            type: 'reference',
            title: 'Link',
            description: 'Use Case that will be opened when link is clicked',
            to: [{ type: 'use-case' }],
            hidden: ({ parent }) => parent?.mode !== 'use-case',
            validation: rule =>
                rule.custom((value, { parent }) => {
                    const document = parent as { mode?: string } | undefined
                    if (document?.mode !== 'use-case') return true

                    return !value ? 'Reference is required' : true
                }),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'url',
        },
    },
})

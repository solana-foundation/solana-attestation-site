import { defineField, defineType } from 'sanity'

export const docReference = defineType({
    name: 'doc-reference',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Link Title',
            placeholder: 'e.g. "More in docs"',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'url',
            type: 'link',
            title: 'Link',
            description: 'URL that will be opened when link is clicked',
            validation: rule => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})

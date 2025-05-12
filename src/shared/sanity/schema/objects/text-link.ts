import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const textLink = defineType({
    name: 'text-link',
    type: 'object',
    icon: LinkIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'link',
            type: 'link',
            title: 'Link',
        }),
        defineField({
            name: 'newWindow',
            type: 'boolean',
            title: 'Open in new window',
            description: 'If checked, link will be opened in new window',
            initialValue: false,
        }),
    ],
    preview: {
        select: { title: 'title' },
    },
})

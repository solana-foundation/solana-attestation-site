import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const buttonLink = defineType({
    name: 'button-link',
    type: 'object',
    icon: LinkIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'A title that appears in link',
            placeholder: `e.g. "Read more"`,
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
        defineField({
            name: 'variant',
            type: 'string',
            title: 'Variant',
            initialValue: 'primary',
            options: {
                list: [
                    { title: 'Primary', value: 'primary' },
                    { title: 'Secondary', value: 'secondary' },
                ],
            },
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'icon',
            type: 'string',
            title: 'Icon',
            description: 'An icon that appears in link',
            options: {
                list: [
                    { title: 'Copy', value: 'copy' },
                    { title: 'Documentation', value: 'documentation' },
                    { title: 'Github', value: 'github' },
                ],
            },
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
        select: {
            title: 'title',
        },
    },
})

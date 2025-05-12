import { defineArrayMember, defineField, defineType } from 'sanity'

export const topNavigation = defineType({
    name: 'top-navigation',
    type: 'object',
    title: 'Top Navigation',
    fields: [
        defineField({
            name: 'items',
            type: 'array',
            title: 'Links',
            description: 'Links that are displayed in main navigation block',
            of: [defineArrayMember({ type: 'text-link' })],
        }),
        defineField({
            name: 'aside',
            type: 'array',
            title: 'Aside',
            description: 'Links that are displayed on the right side of main navigation block',
            of: [defineArrayMember({ type: 'button-link' })],
            validation: rule => rule.max(1),
        }),
    ],
})

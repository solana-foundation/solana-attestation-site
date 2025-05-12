import { defineArrayMember, defineField, defineType } from 'sanity'

export const bottomNavigationGroup = defineType({
    name: 'bottom-navigation-group',
    type: 'object',
    title: 'Bottom Navigation Group',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            initialValue: '',
            validation: rule => [rule.required(), rule.max(120)],
        }),
        defineField({
            name: 'items',
            type: 'array',
            title: 'Links',
            description: 'Links that are displayed in bottom navigation group',
            of: [defineArrayMember({ type: 'text-link' })],
        }),
    ],
})

export const bottomNavigation = defineType({
    name: 'bottom-navigation',
    type: 'object',
    title: 'Bottom Navigation',
    fields: [
        defineField({
            name: 'groups',
            type: 'array',
            title: 'Navigation Groups',
            description: 'Links that are displayed in main navigation block',
            of: [defineArrayMember({ type: 'bottom-navigation-group' })],
        }),
    ],
})
